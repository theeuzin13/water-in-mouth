import { UserRole } from 'src/common/enums/role.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({
  type: 'enum',
  enum: UserRole,
  default: UserRole.EMPLOYEE,
  })
  role: UserRole;

  @Column({ nullable: true })
  color: string;
}
