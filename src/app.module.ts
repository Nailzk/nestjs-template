import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import controllers from './controllers';
import entities from './entities';
import * as ormConfig from './ormconfig';
import providers from './providers';

console.log('config', ormConfig)

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    TypeOrmModule.forFeature(entities),
  ],
  controllers,
  providers: providers,
})
export class AppModule { }
