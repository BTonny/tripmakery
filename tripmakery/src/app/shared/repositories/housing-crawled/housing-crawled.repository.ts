import {Injectable} from "@nestjs/common";
import HousingCrawled, {IHousingCrawled} from "../../models/housing-crawled/housing-crawled.model";

@Injectable()
export class HousingCrawledRepository {

    public async findAll(): Promise<IHousingCrawled[]> {
        return await HousingCrawled.find();
    }

    public async findOneById(housingId: string): Promise<IHousingCrawled> {
        return await HousingCrawled.findOne({
            _id: housingId
        });
    }

    async update(housing: IHousingCrawled): Promise<IHousingCrawled> {
        return await housing.save()
    }

    public async create(housing: IHousingCrawled): Promise<IHousingCrawled> {
        return await HousingCrawled.create(housing);
    }
}