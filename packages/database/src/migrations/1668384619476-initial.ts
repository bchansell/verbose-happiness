import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1668384619476 implements MigrationInterface {
    name = 'initial1668384619476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "candidate" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "age" integer NOT NULL,
                "isActive" boolean NOT NULL,
                "addressId" uuid,
                CONSTRAINT "REL_3bfaf1e659c0c5048df8a24007" UNIQUE ("addressId"),
                CONSTRAINT "PK_b0ddec158a9a60fbc785281581b" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "address" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "firstLine" character varying NOT NULL,
                "secondLine" character varying NOT NULL,
                "postCode" boolean NOT NULL,
                "county" boolean NOT NULL,
                "country" boolean NOT NULL,
                CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "candidate"
            ADD CONSTRAINT "FK_3bfaf1e659c0c5048df8a24007c" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "candidate" DROP CONSTRAINT "FK_3bfaf1e659c0c5048df8a24007c"
        `);
        await queryRunner.query(`
            DROP TABLE "address"
        `);
        await queryRunner.query(`
            DROP TABLE "candidate"
        `);
    }

}
