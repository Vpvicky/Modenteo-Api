import { Test, TestingModule } from '@nestjs/testing';
import { ChildCategoryController } from './child-category.controller';
import { ChildCategoryService } from './child-category.service';

describe('ChildCategoryController', () => {
  let controller: ChildCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChildCategoryController],
      providers: [ChildCategoryService],
    }).compile();

    controller = module.get<ChildCategoryController>(ChildCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
