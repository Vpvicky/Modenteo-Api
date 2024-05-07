import { MigrationInterface, QueryRunner } from 'typeorm';

export class Intial1715062401227 implements MigrationInterface {
  name = 'Intial1715062401227';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "User" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "timestamp" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "timestamp"`);
    await queryRunner.query(
      `ALTER TABLE "User" ADD "timestamp" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "timestamp"`);
    await queryRunner.query(
      `ALTER TABLE "User" ADD "timestamp" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`DROP TABLE "User"`);
  }
}
