import {Module, NestModule} from "@nestjs/common";
import {ApiController} from "./api/api.controller";
import {CrawlerController} from "./crawler/crawler.controller";
import {ApiComponent} from "./api/api.component";
import {CrawlerComponent} from "./crawler/crawler.component";
import {BookingCrawlerService} from "../../shared/services/crawler/booking-crawler.service";
import {DatabaseModule} from "../../shared/modules/database.module";

@Module({
    controllers: [
        ApiController,
        CrawlerController
    ],
    imports: [
        DatabaseModule
    ],
    providers: [
        ApiComponent,
        CrawlerComponent,
        BookingCrawlerService
    ]
})
export class BookingModule  implements NestModule {

    constructor() {
    }

    configure() {
    }

}