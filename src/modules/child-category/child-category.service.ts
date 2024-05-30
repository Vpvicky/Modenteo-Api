import { Injectable } from '@nestjs/common';
import { CreateChildCategoryDto } from './dto/create-child-category.dto';
import { UpdateChildCategoryDto } from './dto/update-child-category.dto';

@Injectable()
export class ChildCategoryService {
  create(createChildCategoryDto: CreateChildCategoryDto) {
    return 'This action adds a new childCategory';
  }

  findAll() {
    return `This action returns all childCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} childCategory`;
  }

  update(id: number, updateChildCategoryDto: UpdateChildCategoryDto) {
    return `This action updates a #${id} childCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} childCategory`;
  }
}
