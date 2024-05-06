import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;

  constructor(userEntity: UserEntity) {
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.password = userEntity.password;
  }
}
