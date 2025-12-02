import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsString()
  employeeId: string;

  @IsString()
  employeeName: string;
}
