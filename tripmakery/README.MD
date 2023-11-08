# Data Crawling at Booking.com
_Candidate project - tripbakery GmbH_

### Situation Report
We want to give hotels an easy way to move their public data available at Booking.com to our services. This results in following three tasks:

#### 1. Crawling
Create a simple crawler which is able to extract the following data of a Booking.com page:
- Hotel name
- Most popular facilities
- House rules

Please refer to https://www.booking.com/hotel/at/motel-one-wien-westbahnhof.en-gb.html as an example page.

#### 2. Save the crawled data
Save the crawled data in MongoDB within the housings.crawled collection.

#### 3. Make the crawled data accessible
Create an API call which makes it possible to get access to the previously saved data.

### Preparation
We are using TypeScript and nest as our backend foundation. Please make yourself familiar with the used technologies. In order to get right into development, we prepared most of the parts for you already.

Please proceed with the following steps:
- Clone our project from git@bitbucket.org:tripmakers/candidateproject-booking-crawler.git
- Install MongoDB on your local machine
- Edit the environment configuration of the cloned project depending on your MongoDB settings
- Install all required dependencies via npm install
- Start programming
- Push your code to your branch (/\<yournamehere\>)

Feel free to add new dependencies and files if you think you need them.

### Quality Requirements
- Clean and readable code
- Reusable modules and functions
- Unit tests (only where you think it’s important)
- Documentation (only where you think it’s important)



Don’t hesitate to get in touch with us in case of questions or issues. Take all the time you need and contact us as soon as you think you’ve finished your task.


Happy coding! :)
