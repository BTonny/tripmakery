import { Controller, Get, HttpStatus, Param, Req, Res } from "@nestjs/common";
import { ApiImplicitParam, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { ApiComponent } from "./api.component";

@Controller("api/v1/booking")
@ApiUseTags("Api:Booking")
export class ApiController {
  constructor(private apiComponent: ApiComponent) {}

  @Get("/housing-crawled/:housingId")
  @ApiOperation({
    title: "Returns the saved data of an housing from our database",
  })
  @ApiImplicitParam({
    name: "housingId",
    description: "The id of the housing saved in our database",
  })
  async getHousingCrawledDetails(
    @Res() res,
    @Req() req,
    @Param("housingId") housingId: string
  ) {
    let housing = await this.apiComponent.getHousingCrawledDetails(housingId);
    // return await this.apiComponent.getHousingCrawledDetails(housingId);
    if (!housing) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .send({ status: "error", message: "Not found" });
    }
    res.status(HttpStatus.OK).send({ status: "ok", data: housing });
  }
}
