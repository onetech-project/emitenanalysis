Background:

* This is a mini application for fundamental analysis of indonesia emiten

Feature:

* Providing list of emiten, includes:
	* Name
	* Code
	* Profile
	* Key Statistics
	* News
	* Financial
* Providing price chart for selected emiten
* Providing fundamental analysis of selected emiten
* Providing technical analysis for selected emiten

Proposed Technology Stack:

* Node.js
* Mongo DB
* React.JS
* Google Drive for File Storage
* fastify

Hardware:

* Development:
	* HP 14 AN004AU
	* CPU AMD A8 7410 2.2GHz
	* RAM 8GB PC3 12800 1600MHz
	* SSD 120GB + HDD 500GB
	* VGA AMD R5 APU Series

* Production: TBD

Phase 0:

* Set development environtment
* finding datasource which provide all emiten information includes realtime price

Phase 1:

* Database design
* process flow design

Phase 2:

* Create Job to Get all emiten information from IDX API and store to Mongo DB
* Create Job to Get all emiten Document and Fund Fact Sheet and store to Google Drive

Phase 3:

* Create a job for collecting emiten price (realtime) and store to Mongo DB

Phase 4:

* Create services for doing fundamental analysis and giving score to the result

Phase 5:

* Create service for doing technical analysis and giving price recommendation to entry, cut loss, and take profit
