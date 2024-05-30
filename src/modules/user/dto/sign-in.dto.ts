import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';

export class SignInDto {
  @ApiProperty({ example: 'User@mail.com' })
  email: string;

  @ApiProperty({ example: 'User@123' })
  password: string;

  constructor(userEntity: UserEntity) {
    this.email = userEntity.email;
    this.password = userEntity.password;
  }
}
