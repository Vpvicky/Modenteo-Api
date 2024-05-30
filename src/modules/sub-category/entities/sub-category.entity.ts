import { Category } from 'src/modules/categories/entities/category.entity';
import { ChildCategory } from 'src/modules/child-category/entities/child-category.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('SubCategory')
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.subCategories)
  category: Category;

  @OneToMany(() => ChildCategory, (childCategory) => childCategory.subCategory)
  childCategories: ChildCategory[];
}
