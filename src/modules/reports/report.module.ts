import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReportController } from "./report.controller";
import { ReportService } from "./report.service";
import { SaleEntity } from "../sales/entities/sale.entity";

@Module({
    imports: [TypeOrmModule.forFeature([SaleEntity])],
    providers: [ReportService],
    controllers: [ReportController],
})
export class ReportModule {}