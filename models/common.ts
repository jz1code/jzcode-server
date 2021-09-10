import * as TypeORM from "typeorm"

interface Paginater {
    pageCnt: number;
    perPage: number;
    currPage: number;
}

export default class Model extends TypeORM.BaseEntity {
    static cache = false

    @TypeORM.PrimaryGeneratedColumn()
    id: number

    async save(): Promise<this> {
        return super.save()
    }

    static async queryPage(paginater: Paginater, where, order, largeData = false) {
        if (!paginater.pageCnt) return [];

        const queryBuilder = where instanceof TypeORM.SelectQueryBuilder
                           ? where
                           : this.createQueryBuilder().where(where);
    
        if (order) queryBuilder.orderBy(order);
    
        queryBuilder.skip((paginater.currPage - 1) * paginater.perPage)
                    .take(paginater.perPage);
        
        return queryBuilder.getMany();
    }
}