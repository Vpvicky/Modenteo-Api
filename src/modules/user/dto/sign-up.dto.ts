import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';
import { RoleEnum } from '../enum/role.enum';

export class SignUpDto {
  @ApiProperty({ example: 'Jhone' })
  firstName: string;
  @ApiProperty({ example: 'Deo' })
  lastName: string;

  @ApiProperty({ example: 'User@mail.com' })
  email: string;

  @ApiProperty({ example: 'User@123' })
  password: string;

  @ApiProperty({ enum: RoleEnum, example: 'User' })
  role: string;

  constructor(userEntity: UserEntity) {
    this.firstName = userEntity.firstName;
    this.lastName = userEntity.lastName;
    this.email = userEntity.email;
    this.password = userEntity.password;
    this.role = userEntity.role;
  }
}
