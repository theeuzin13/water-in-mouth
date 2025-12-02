import { MigrationInterface, QueryRunner } from "typeorm";

export class SaleMigration1764703927254 implements MigrationInterface {
    name = 'SaleMigration1764703927254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "productId" character varying NOT NULL, "productName" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "quantity" integer NOT NULL, "employeeId" character varying NOT NULL, "employeeName" character varying NOT NULL, "timestamp" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sales"`);
    }

}
