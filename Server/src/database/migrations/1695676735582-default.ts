import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695676735582 implements MigrationInterface {
    name = 'Default1695676735582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chats" ("id" character varying NOT NULL, "userSender" text, "userReceiver" text, CONSTRAINT "PK_0117647b3c4a4e5ff198aeb6206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chats" ADD CONSTRAINT "FK_64eaf11b3bed324d559483c37d4" FOREIGN KEY ("userSender") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chats" ADD CONSTRAINT "FK_3d0b7d3d8f32afcc38d237ce5e1" FOREIGN KEY ("userReceiver") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chats" DROP CONSTRAINT "FK_3d0b7d3d8f32afcc38d237ce5e1"`);
        await queryRunner.query(`ALTER TABLE "chats" DROP CONSTRAINT "FK_64eaf11b3bed324d559483c37d4"`);
        await queryRunner.query(`DROP TABLE "chats"`);
    }

}
