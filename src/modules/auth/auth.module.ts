import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { McrudService } from 'src/helpers/mcrud/mcrud.service';
import { KnexService } from 'src/common/knex/knex.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService,McrudService,KnexService,JwtService],
})
export class AuthModule {}
