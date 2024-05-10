import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1715312974918 implements MigrationInterface {
    name = 'Default1715312974918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" ADD "content" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "content"`);
    }

}
