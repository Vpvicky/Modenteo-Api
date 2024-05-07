import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'database/data-source';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule],
})
export class AppModule {}
