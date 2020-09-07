import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from './entities/user.entity';

export class Seeds1544303473346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repo = getRepository(User);
    return repo.save({
      email: 'admon@admon.com',
      firstName: 'Admon',
      lastName: 'Vi4',
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> { }
}
