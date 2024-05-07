import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userExisist = await this.findUserByEmail(createUserDto.email);
    if (userExisist) throw new BadRequestException('Email is already exist');
    const hasedPassword = await hash(createUserDto.password, 10);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hasedPassword,
    });
    const savedUser = await this.userRepository.save(newUser);
    delete newUser.password;
    return savedUser;
  }

  async signIn(signInDto: SignInDto): Promise<UserEntity> {
    const userExisist = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email: signInDto.email })
      .getOne();

    if (!userExisist) throw new BadRequestException('Bad Creditentials');
    const matched = await compare(signInDto.password, userExisist.password);
    if (!matched) throw new BadRequestException('Bad Creditentials');
    delete userExisist.password;
    return userExisist;
  }
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    return users;
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
