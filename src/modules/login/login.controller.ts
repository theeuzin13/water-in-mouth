import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('login')
export class LoginController {
  constructor(private readonly service: LoginService) {}

  @Post()
  @ApiBody({ type: LoginDto })
  login(@Body() dto: LoginDto) {
    return this.service.login(dto);
  }
}
