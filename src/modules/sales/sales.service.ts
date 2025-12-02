import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleEntity } from './entities/sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SaleEntity)
    private readonly repo: Repository<SaleEntity>,
  ) {}

  findAll() {
    return this.repo.find({
      order: { timestamp: 'DESC' },
    });
  }

  async create(dto: CreateSaleDto) {
    const sale = this.repo.create(dto);
    return this.repo.save(sale);
  }

  async update(id: string, dto: UpdateSaleDto) {
    const sale = await this.repo.findOne({ where: { id } });

    if (!sale) throw new NotFoundException('Sale not found');

    Object.assign(sale, dto);

    return this.repo.save(sale);
  }
}
