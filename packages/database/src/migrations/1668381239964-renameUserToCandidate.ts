import { MigrationInterface, QueryRunner } from "typeorm";

// TODO: this did not rename the table, nor does it clean up the old table :shrug
export class renameUserToCandidate1668381239964 implements MigrationInterface {
    name = 'renameUserToCandidate1668381239964'

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
            ALTER TABLE "candidate"
            ADD CONSTRAINT "FK_3bfaf1e659c0c5048df8a24007c" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "candidate" DROP CONSTRAINT "FK_3bfaf1e659c0c5048df8a24007c"
        `);
        await queryRunner.query(`
            DROP TABLE "candidate"
        `);
    }

}
