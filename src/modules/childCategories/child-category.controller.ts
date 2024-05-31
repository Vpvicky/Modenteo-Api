import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChildCategoryService } from './child-category.service';
import { CreateChildCategoryDto } from './dto/create-child-category.dto';
import { UpdateChildCategoryDto } from './dto/update-child-category.dto';

@Controller('child-category')
export class ChildCategoryController {
  constructor(private readonly childCategoryService: ChildCategoryService) {}

  @Post()
  create(@Body() createChildCategoryDto: CreateChildCategoryDto) {
    return this.childCategoryService.create(createChildCategoryDto);
  }

  @Get()
  findAll() {
    return this.childCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChildCategoryDto: UpdateChildCategoryDto) {
    return this.childCategoryService.update(+id, updateChildCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.childCategoryService.remove(+id);
  }
}
