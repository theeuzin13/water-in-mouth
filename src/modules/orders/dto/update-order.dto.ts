import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsUUID, ArrayNotEmpty, IsOptional } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @ApiPropertyOptional({
    type: [String],
    example: [
      '2d57f8d3-71d7-4938-85c5-2b7c0901cfc4',
      'ae62fd35-e1e7-4213-84e8-00f82b92f305',
    ],
    description: 'Lista atualizada de IDs dos produtos que pertencem ao pedido.',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsUUID('4', { each: true })
  productsIds?: string[];
}
