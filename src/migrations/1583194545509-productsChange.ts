import {MigrationInterface, QueryRunner} from "typeorm";

export class productsChange1583194545509 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE product ADD COLUMN rating INTEGER NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE product DROP COLUMN rating`);
    }
}
