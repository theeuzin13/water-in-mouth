import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    type: [String],
    example: [
      '2d57f8d3-71d7-4938-85c5-2b7c0901cfc4',
      'ae62fd35-e1e7-4213-84e8-00f82b92f305',
    ],
    description: 'IDs dos produtos que farão parte do pedido.',
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsUUID('4', { each: true })
  productsIds: string[];
}
