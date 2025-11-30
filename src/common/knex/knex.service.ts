import { Injectable, OnModuleInit } from '@nestjs/common';
import knex from 'knex';

@Injectable()
export class KnexService implements OnModuleInit {
  db: any
  constructor() {
    this.db = knex({
      client: 'mysql2',
      connection: {
        host: 'localhost',
        port: 3309,
        user: 'root',
        database: 'crud',
      },
    });
  }
  async onModuleInit() {
    try {
      console.log('Knex connected successfully');
    } catch (err) {
      console.error('Knex connection failed:', err);
    }
  }
  getClient() {
    return this.db
  }
}
