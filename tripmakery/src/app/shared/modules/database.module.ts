import {Module} from "@nestjs/common";
import {HousingCrawledRepository} from "../repositories/housing-crawled/housing-crawled.repository";
import {MongooseService} from "../services/mongoose/mongoose.service";

@Module({
    providers: [
        MongooseService,
        HousingCrawledRepository
    ],
    imports: [
    ],
    exports: [
        MongooseService,
        HousingCrawledRepository
    ]
})
export class DatabaseModule {
    constructor() {
    }
}