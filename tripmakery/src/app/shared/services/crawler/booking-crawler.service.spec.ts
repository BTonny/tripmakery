import {expect} from "chai";
import {TestingModule} from "@nestjs/testing/testing-module";
import {Test} from "@nestjs/testing";
import {BookingCrawlerService} from "./booking-crawler.service";

describe("Testing of BookingCrawlerService", () => {
    let bookingCrawlerService: BookingCrawlerService;
    let test: TestingModule;

    before(async function () {
        test = await Test.createTestingModule({
            imports: [
            ],
            controllers: [],
            providers: [
                BookingCrawlerService
            ]
        }).compile();

        bookingCrawlerService = test.get<BookingCrawlerService>(BookingCrawlerService);

    });

    it("BookingCrawlerService should be initialized", () => {
        expect(bookingCrawlerService).not.equal(null);
    });

    describe("Feel free to add further tests right here", () => {
        it("It should return something #1", () => {

        });
        it("It should return something #2", () => {

        });
    });

});
