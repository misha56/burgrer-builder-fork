import {MigrationInterface, QueryRunner} from "typeorm";

export class productVersion1583194725709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE product RENAME COLUMN version TO seria`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE product RENAME COLUMN seria TO version`);
    }

}
