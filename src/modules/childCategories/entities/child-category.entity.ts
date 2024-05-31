import { Product } from 'src/modules/product/entities/product.entity';
import { SubCategory } from 'src/modules/subCategories/entities/sub-category.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ChildCategories')
export class ChildCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => SubCategory, (subCategory) => subCategory.childCategories)
  subCategory: SubCategory;

  @OneToMany(() => Product, (product) => product.childCategory)
  products: Product[];
}
