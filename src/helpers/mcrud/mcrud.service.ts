import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/common/knex/knex.service';

@Injectable()
export class McrudService {
    constructor(private knex: KnexService) { }


    create(table, datas) {

        if (table && datas) {
            return this.knex.db.table(table).insert(datas);
        }
    }

    update(table, datas, condition) {

        if (table && datas) {
            return this.knex.db.table(table).where(condition).update(datas);
        }
    }

    async read(select: any = "*", table, condition = {}) {
        return this.knex.db.select(select).from(table).where(condition);
    }

    readAll(select: any, table: string) {
        return this.knex.db.select(select).from(table);
    }

    async get(select: any = "*", table, condition = null) {
        return await this.knex.db.select(select).from(table).where(condition).first();
        // return result ?? false;
    }

    delete(table, condition) {
        return this.knex.db.from(table).del().where(condition);

    }
}
