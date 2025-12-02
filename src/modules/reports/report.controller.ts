import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { ReportService } from "./report.service";

@ApiTags('reports')
@ApiBearerAuth()
@Controller('reports')
export class ReportController{
    constructor(private readonly service: ReportService) {}
    
    @Get(':id')
    generateReportEmployeeId(@Param('id') id: string) {
        return this.service.generateReportEmployeeId(id);
    }
}