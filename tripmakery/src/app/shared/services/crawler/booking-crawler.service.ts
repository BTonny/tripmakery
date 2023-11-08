import { Injectable, NotFoundException } from "@nestjs/common";
import axios from "axios";
import * as cheerio from "cheerio";

@Injectable()
export class BookingCrawlerService {
  constructor() {}

  public async crawlBookingPage(url: string): Promise<any> {
    // we extract hotel name, hotel stars, hotel address, popular facilities and house rules from the page
    let housing_data = {};
    try {
      // axios.defaults.baseURL = 'http://http://127.0.0.1:3000';
      const response = await axios.get(url);
      const html = response.data;

      const $ = cheerio.load(html);

      const name = $("#hp_hotel_name > div > h2").text().trim();

      const address = $(
        "#showMap2 > span.hp_address_subtitle.js-hp_address_subtitle.jq_tooltip"
      )
        .text()
        .trim();
      const facilities = [];
      $(".a815ec762e.ab06168e66").each((_, element) => {
        const facility = $(element).find(".db312485ba").text().trim();
        facilities.push(facility);
      });

      const rating = $(".hp__hotel_ratings__stars").find(
        ".b6dc9a9e69.adc357e4f1.fe621d6382"
      ).length;

      const rules: object[] = [];

      $("#hotelPoliciesInc .description").each((index, element) => {
        const policy = $(element).text().trim();
        const modifiedPolicy = policy
          .replace(/\/\n+/g, "/")
          .replace(/\n+/, ": ")
          .replace(/ +/g, " ");

        let policyObject = {};

        if (modifiedPolicy.split(": ")[0] === "Accepted payment methods") {
          policyObject = {
            policyName: modifiedPolicy.split(": ")[0],
            policyDescription: "Cash",
          };
        } else {
          policyObject = {
            policyName: modifiedPolicy.split(": ")[0],
            policyDescription: modifiedPolicy.split(": ")[1],
          };
        }
        rules.push(policyObject);
      });

      housing_data = {
        name,
        rating,
        address,
        facilities,
        rules,
      };
    } catch (error) {
      console.error("Error:", error);
      throw new NotFoundException("failed to crawl booking page");
    }

    return housing_data;
  }
}
