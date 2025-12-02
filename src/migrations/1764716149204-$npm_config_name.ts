import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1764716149204 implements MigrationInterface {
    name = ' $npmConfigName1764716149204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "color" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "color"`);
    }

}
