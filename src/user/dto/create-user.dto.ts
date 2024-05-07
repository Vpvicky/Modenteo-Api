import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty({ example: 'User Name' })
  name: string;

  @ApiProperty({ example: 'User@mail.com' })
  email: string;

  @ApiProperty({ example: 'User@123' })
  password: string;

  constructor(userEntity: UserEntity) {
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.password = userEntity.password;
  }
}
