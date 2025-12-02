import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SaleEntity } from "../sales/entities/sale.entity";
import { Repository } from "typeorm";

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(SaleEntity)
        private readonly saleRepository: Repository<SaleEntity>,
    ) {}

    async generateReportEmployeeId(id: string) {
        return await this.saleRepository.findOne({ where: { employeeId: id } });
    }
}