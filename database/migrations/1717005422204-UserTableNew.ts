import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTableNew1717005422204 implements MigrationInterface {
    name = 'UserTableNew1717005422204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "timestamp" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
