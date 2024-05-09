import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1715284154854 implements MigrationInterface {
    name = 'Default1715284154854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "messages" ADD "time" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "messages" ADD "time" TIMESTAMP NOT NULL`);
    }

}
