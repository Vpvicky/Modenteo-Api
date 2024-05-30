import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
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

  async signUp(SignUpDto: SignUpDto): Promise<UserEntity> {
    const userExisist = await this.findUserByEmail(SignUpDto.email);
    if (userExisist) throw new BadRequestException('Email is already exist');
    const hasedPassword = await hash(SignUpDto.password, 10);
    const newUser = this.userRepository.create({
      ...SignUpDto,
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
  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    const allUsers = users.map((user) => {
      delete user.password;
      return user;
    });
    return allUsers;
  }

  async findUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }
}
