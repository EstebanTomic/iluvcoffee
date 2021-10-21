import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1632767407152 implements MigrationInterface {
    name = 'SchemaSync1632767407152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."coffee" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."coffee" RENAME COLUMN "name" TO "title"`);
    }

}
