import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1715283730482 implements MigrationInterface {
    name = 'Default1715283730482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "messages" ("id" character varying NOT NULL, "time" TIMESTAMP NOT NULL, "chatId" character varying, "sender" text, CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_36bc604c820bb9adc4c75cd4115" FOREIGN KEY ("chatId") REFERENCES "chats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_fc6f083269edb7a7798cdf13b08" FOREIGN KEY ("sender") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_fc6f083269edb7a7798cdf13b08"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_36bc604c820bb9adc4c75cd4115"`);
        await queryRunner.query(`DROP TABLE "messages"`);
    }

}
