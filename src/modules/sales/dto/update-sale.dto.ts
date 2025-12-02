import { IsOptional, IsNumber } from 'class-validator';

export class UpdateSaleDto {
  @IsNumber()
  @IsOptional()
  quantity?: number;
}
