import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Pizza Pepperoni',
    description: 'Nome do produto.',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 49.90,
    description: 'Preço do produto.',
  })
  @IsNumber()
  price: number;
}
