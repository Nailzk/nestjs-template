import { getRepository, MigrationInterface } from 'typeorm';
import { User } from './entities/user.entity';

export class Seeds1544303473346 implements MigrationInterface {
  public async up(): Promise<User> {
    const repo = getRepository(User);
    return repo.save({
      email: 'admon@admon.com',
      firstName: 'Admon',
      lastName: 'Vi4',
    });
  }

  public async down(): Promise<User> { 
    return
  }
}
