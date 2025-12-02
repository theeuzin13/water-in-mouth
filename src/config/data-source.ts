import 'dotenv/config';
import { UserEntity } from '../modules/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { OrderEntity } from 'src/modules/orders/entities/order.entity';
import { ProductEntity } from 'src/modules/products/entities/product.entity';
import { SaleEntity } from 'src/modules/sales/entities/sale.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT ?? '5432'),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [UserEntity, OrderEntity, ProductEntity, SaleEntity],
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  synchronize: false,
});