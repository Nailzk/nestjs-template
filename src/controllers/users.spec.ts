import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { createConnection, getConnection } from "typeorm";
import { User } from '../entities';
import { UsersService } from '../providers';
import { UsersController } from './users.controller';
import * as baseOrmConfig from '../../ormconfig';

async function getMemoryrepository(target) {
  const connection = await createConnection({
    ...baseOrmConfig,
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [target],
    synchronize: true,
    logging: false
  });

  return connection.getRepository(target)
}

describe('AppController', () => {
  let appController: UsersController;

  beforeEach(async () => {
    const repository = await getMemoryrepository(User);
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: getRepositoryToken(User),
          useValue: repository
        },
        UsersService
      ],
    }).compile();

    appController = app.get<UsersController>(UsersController);
  });

  afterEach(() => {
    let conn = getConnection();
    return conn.close();
  });

  describe('root', () => {
    it('service should be instance of UsersService"', () => {
      expect(appController.service instanceof UsersService).toBeTrue;
    });
  });
});
