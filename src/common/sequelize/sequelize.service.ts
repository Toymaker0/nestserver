import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class SequelizeService implements OnModuleInit {

    constructor(
        private sequelize: Sequelize,
    ) { }

    async onModuleInit() {
        try {
            await this.sequelize.authenticate();
            console.log('Sequelize connected!');
        } catch (err) {
            console.error('Sequelize connection error:', err);
        }
    }
}
