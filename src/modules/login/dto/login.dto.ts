import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'theeuzin13',
    description: 'Nome de usuário para login.',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: '1234',
    minLength: 4,
    description: 'Senha do usuário (mínimo 4 caracteres).',
  })
  @IsString()
  @MinLength(4)
  password: string;
}
