import { ProductEntity } from 'src/modules/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => ProductEntity)
  @JoinTable()
  products: ProductEntity[];
}
