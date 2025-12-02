import { Controller, Get, Post, Patch, Param, Body, Put } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly service: SalesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateSaleDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSaleDto) {
    return this.service.update(id, dto);
  }
}
