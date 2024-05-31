import { Brands } from 'src/modules/brand/entities/brand.entity';
import { ChildCategory } from 'src/modules/childCategories/entities/child-category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @ManyToOne(() => ChildCategory, (childCategory) => childCategory.products)
  childCategory: ChildCategory;

  @ManyToOne(() => Brands, (brand) => brand.products)
  brands: Brands;
}
