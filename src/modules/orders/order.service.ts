import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { ProductEntity } from '../products/entities/product.entity';
import { OrderEntity } from './entities/order.entity';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private repo: Repository<OrderEntity>,
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) { }

  findAll() {
    return this.repo.find({ relations: ['products'] });
  }

  async findOne(id: string) {
    const order = await this.repo.findOne({ where: { id }, relations: ['products'] });
    if (!order) throw new NotFoundException();
    return order;
  }

  async create(dto: CreateOrderDto) {
    const products = await this.productRepo.find({
      where: { id: In(dto.productsIds) },
    });

    if (!products.length) throw new NotFoundException('Products not found');

    const order = this.repo.create({ products });
    return this.repo.save(order);
  }
  async update(id: string, dto: UpdateOrderDto) {
    const order = await this.repo.findOne({ where: { id } });
    if (!order) return null;

    Object.assign(order, dto);
    return this.repo.save(order);
  }

  async remove(id: string) {
    const order = await this.repo.findOne({ where: { id } });
    if (!order) return null;

    return this.repo.remove(order);
  }
}
