import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import {User} from '../../helpers/model/user.model'
@Injectable()
export class SequelizeService implements OnModuleInit {

    constructor(
        private sequelize: Sequelize,
    ) { }

    async onModuleInit() {
        try {
            await this.sequelize.authenticate();
            await this.createMany() 
            console.log('Sequelize connected!');
        } catch (err) {
            console.error('Sequelize connection error:', err);
        }
    }
    
async createMany() {
  try {
    await this.sequelize.transaction(async t => {
      const transactionHost = { transaction: t };
        
      const Users=await User.findAll()
      ! (Users.length>0 )&&
      await User.create(
          { firstName: 'Super', lastName: 'Admin',usrName:'Admin' },
          transactionHost,
      );
    });
  } catch (err) {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
  }
}

}
