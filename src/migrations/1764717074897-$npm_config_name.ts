import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1764717074897 implements MigrationInterface {
    name = ' $npmConfigName1764717074897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "category" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "category"`);
    }

}
