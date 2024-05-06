import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const isExisist = this.findUserByEmail(createUserDto.email);
    try {
      if (!isExisist) {
        createUserDto.password = await hash(createUserDto.password, 10);
        const userCreate = this.userRepository.create(createUserDto);
        const user = await this.userRepository.save(userCreate);
        delete user.password;
        return user;
      }
    } catch (err) {
      throw new BadRequestException('Email already exists');
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async findUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }
}
