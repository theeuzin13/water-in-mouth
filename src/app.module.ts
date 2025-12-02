import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './modules/login/login.module';
import { OrderModule } from './modules/orders/order.module';
import { ProductModule } from './modules/products/product.module';
import { UserModule } from './modules/users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    LoginModule,
    UserModule,
    ProductModule,
    OrderModule,
  ],
})
export class AppModule {}
