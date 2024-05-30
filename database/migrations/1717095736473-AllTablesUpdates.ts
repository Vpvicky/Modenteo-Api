import { MigrationInterface, QueryRunner } from 'typeorm';

export class AllTablesUpdates1717095736473 implements MigrationInterface {
  name = 'AllTablesUpdates1717095736473';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Brands" ("id" SERIAL NOT NULL, "brandName" character varying NOT NULL, "brandDescription" character varying NOT NULL, "brandImage" character varying NOT NULL, CONSTRAINT "PK_100d549ad83dafeecad2fd74570" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "SubCategory" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "categoryId" integer, CONSTRAINT "PK_6f3bb246ea8a9b6f2222147d129" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Child-Categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "subCategoryId" integer, CONSTRAINT "PK_093a8be2f92e29ab345e7e65cba" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "image" character varying NOT NULL, "childCategoryId" integer, "brandsId" integer, CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "firstName"`);
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "lastName"`);
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "role"`);
    await queryRunner.query(
      `ALTER TABLE "User" ADD "firstName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "User" ADD "lastName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "User" ADD "role" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "User" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "SubCategory" ADD CONSTRAINT "FK_88e9eadc11095bb5fd216284855" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Child-Categories" ADD CONSTRAINT "FK_e166548cd37a6a50e665cf78aca" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Products" ADD CONSTRAINT "FK_794f2477bb4220b85536efd0781" FOREIGN KEY ("childCategoryId") REFERENCES "Child-Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Products" ADD CONSTRAINT "FK_0003413def8bf263afe6a7a1adf" FOREIGN KEY ("brandsId") REFERENCES "Brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Products" DROP CONSTRAINT "FK_0003413def8bf263afe6a7a1adf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Products" DROP CONSTRAINT "FK_794f2477bb4220b85536efd0781"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Child-Categories" DROP CONSTRAINT "FK_e166548cd37a6a50e665cf78aca"`,
    );
    await queryRunner.query(
      `ALTER TABLE "SubCategory" DROP CONSTRAINT "FK_88e9eadc11095bb5fd216284855"`,
    );
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "role"`);
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "lastName"`);
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "firstName"`);
    await queryRunner.query(
      `ALTER TABLE "User" ADD "role" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "User" ADD "lastName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "User" ADD "firstName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "User" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(`DROP TABLE "Products"`);
    await queryRunner.query(`DROP TABLE "Child-Categories"`);
    await queryRunner.query(`DROP TABLE "SubCategory"`);
    await queryRunner.query(`DROP TABLE "Categories"`);
    await queryRunner.query(`DROP TABLE "Brands"`);
  }
}
