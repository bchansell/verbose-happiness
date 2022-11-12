import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1668273317282 implements MigrationInterface {
    name = 'initial1668273317282'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
            CREATE TABLE "contact_details" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "mobilePhoneNumber" character varying NOT NULL,
                "telephoneNumber" character varying NOT NULL,
                "addressId" uuid,
                CONSTRAINT "REL_d4ec2ba8e7852c4be07371642e" UNIQUE ("addressId"),
                CONSTRAINT "PK_a412ff7c8090ce1abc33f128587" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "isActive" boolean NOT NULL,
                "pdsContactDetailsId" uuid,
                "testRegistrationDetailsId" uuid,
                CONSTRAINT "REL_74731d994ce4c09389dd56e5cc" UNIQUE ("pdsContactDetailsId"),
                CONSTRAINT "REL_9a031cd6288382aafad0719a52" UNIQUE ("testRegistrationDetailsId"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "contact_details"
            ADD CONSTRAINT "FK_d4ec2ba8e7852c4be07371642e9" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_74731d994ce4c09389dd56e5ccd" FOREIGN KEY ("pdsContactDetailsId") REFERENCES "contact_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_9a031cd6288382aafad0719a52f" FOREIGN KEY ("testRegistrationDetailsId") REFERENCES "contact_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_9a031cd6288382aafad0719a52f"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_74731d994ce4c09389dd56e5ccd"
        `);
        await queryRunner.query(`
            ALTER TABLE "contact_details" DROP CONSTRAINT "FK_d4ec2ba8e7852c4be07371642e9"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "contact_details"
        `);
        await queryRunner.query(`
            DROP TABLE "address"
        `);
    }

}
