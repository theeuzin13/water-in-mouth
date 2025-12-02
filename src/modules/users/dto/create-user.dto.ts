import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from 'src/common/enums/role.enum';

export class CreateUserDto {
  @ApiProperty({
    example: 'theeuzin13',
    description: 'Nome de usuário único.',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: '1234',
    minLength: 4,
    description: 'Senha do usuário. Deve conter no mínimo 4 caracteres.',
  })
  @IsString()
  @MinLength(4)
  password: string;

  @ApiProperty({
    example: UserRole.ADMIN,
    description: 'Role do usuário no sistema.',
    enum: UserRole,
    required: false,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @ApiProperty({
    example: '#3b82f6',
    description: 'Cor associada ao usuário para personalização.',
    required: false,
  })
  @IsOptional()
  @IsString()
  color?: string;
}
