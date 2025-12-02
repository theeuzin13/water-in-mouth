import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from 'src/common/enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repo: Repository<UserEntity>,
  ) { }

  async create(dto: CreateUserDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = this.repo.create({ ...dto, password: hash });
    return this.repo.save(user);
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  async findByRole(role: UserRole) {
    return await this.repo.find({
      where: { role },
    });
  }

  async findAll() {
    return this.repo.find();
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) return null;

    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }

    Object.assign(user, dto);
    return this.repo.save(user);
  }

  async validate(username: string, password: string) {
    const user = await this.repo.findOne({ where: { username } });
    if (!user) return null;

    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;

    return user;
  }

  async remove(id: string) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) return null;

    return this.repo.remove(user);
  }

}
