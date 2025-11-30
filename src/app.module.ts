import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexService } from './common/knex/knex.service';
import { SequelizeService } from './common/sequelize/sequelize.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './helpers/model/user.model';
import { McrudService } from './helpers/mcrud/mcrud.service';
import { AuthModule } from './modules/auth/auth.module';
import { SelectionAreaModule } from './modules/selection-area/selection-area.module';
import { BillingModule } from './modules/billing/billing.module';

const models=[User]

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'localhost', 
      port: 3309,
      username: 'root',
      database: 'crud',
      models: [...models],
      autoLoadModels: true,
      // synchronize: true,
    }), AuthModule, SelectionAreaModule, BillingModule,],
  controllers: [AppController],
  providers: [AppService, KnexService, SequelizeService, McrudService],
})
export class AppModule {}
