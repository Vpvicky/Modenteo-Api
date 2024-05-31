import { Module } from '@nestjs/common';
import { ChildCategoryService } from './child-category.service';
import { ChildCategoryController } from './child-category.controller';

@Module({
  controllers: [ChildCategoryController],
  providers: [ChildCategoryService],
})
export class ChildCategoryModule {}
