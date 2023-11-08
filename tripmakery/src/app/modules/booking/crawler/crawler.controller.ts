import { Controller, Get, HttpStatus, Req, Res } from "@nestjs/common";
import { Query } from "@nestjs/common/utils/decorators/route-params.decorator";
import { ApiImplicitQuery, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import HousingCrawledModel, { IHousingCrawled } from "../../../shared/models/housing-crawled/housing-crawled.model";
import { ApiComponent } from "../api/api.component";
import { CrawlerComponent } from "./crawler.component";

@ApiUseTags("Crawler:Booking")
@Controller("api/v1/booking/crawler")
export class CrawlerController {
  constructor(
    private crawlerComponent: CrawlerComponent,
    private apiComponent: ApiComponent
  ) {}

  @Get("/crawl-booking-page")
  @ApiOperation({
    title:
      "Returns the extracted data of a crawled booking page and saves it to the database",
  })
  @ApiImplicitQuery({
    name: "bookingUrl",
    description: "The URL of the hotel we want to crawl",
  })
  async crawlBookingPage(
    @Res() res,
    @Req() req,
    @Query("bookingUrl") bookingUrl: string
  ) {
    // res.status(HttpStatus.OK).send({ status: "ok" });
    console.log("bookingUrl", bookingUrl);
    console.log("req", req);
    // console.log("res", res);
    
    const result = await this.crawlerComponent.crawlBookingPage(bookingUrl);

    let housingObject: IHousingCrawled | PromiseLike<IHousingCrawled> =
      new HousingCrawledModel({
        name: result.name,
        rating: result.rating,
        address: result.address,
        facilities: result.facilities,
        rules: result.rules,
      });
    let housing: IHousingCrawled | PromiseLike<IHousingCrawled> =
      await this.apiComponent.saveHousingCrawledDetails(housingObject);
    if (!housing) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ status: "error", message: "Error saving housing" });
    }

    res.status(HttpStatus.OK).send({ status: "ok", data: housing });
  }
}
