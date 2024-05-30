import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Brands')
export class Brands {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brandName: string;

  @Column()
  brandDescription: string;

  @Column()
  brandImage: string;

  @OneToMany(() => Product, (product) => product.brands)
  products: Product[];
}
