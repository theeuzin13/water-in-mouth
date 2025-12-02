import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { ProductEntity } from 'src/modules/products/entities/product.entity';
import { OrderEntity } from 'src/modules/orders/entities/order.entity';
import { SaleEntity } from 'src/modules/sales/entities/sale.entity';

export const typeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: configService.get<string>('POSTGRES_HOST') ?? 'localhost',
  port: configService.get<number>('POSTGRES_PORT') ?? 5432,
  username: configService.get<string>('POSTGRES_USER'),
  password: configService.get<string>('POSTGRES_PASSWORD'),
  database: configService.get<string>('POSTGRES_DB'),
  entities: [UserEntity, ProductEntity, OrderEntity, SaleEntity],
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  synchronize: false,
});
