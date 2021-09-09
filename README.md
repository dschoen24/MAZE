# Project-MAZE

____________________________________________________

## Museums - Aquariums - Zoos - Exploration

___________________________________________________

**Contributors:** Vasantha Mutyala (V-MalM) / Valense Acquah-Louis (Tema-2021) / Saiyid Kazmi (saiyidmkazmi)  / Debra Potts (dschoen24)

### Objective: Create an interactive Dashboard udner the requirements below!

Your visualization must include a Python Flask–powered API, HTML/CSS, JavaScript, 
and at least one database (SQL, MongoDB, SQLite, etc.). 
1. Your project should fall into one of the below three tracks:
2. A combination of web scraping and Leaflet or Plotly
3. A dashboard page with multiple charts that update from the same data
4. A server that performs multiple manipulations on data in a database prior to 
visualization (must be approved)
5. Your project should include at least one JS library that we did not cover.
6. Your project must be powered by a dataset with at least 100 records.
7. Your project must include some level of user-driven interaction (e.g., menus, 
dropdowns, textboxes).
8. Your final visualization should ideally include at least three views. 
**
Data**

**Table 1 : US_States**
* Read from source to Pandas Dataframe
* Trimmed Leading and Trailing Spaces
* Made sure There were no duplicates
* Identified 'State_Fips' as primary key
* Wrote to US_States.csv that can be imported in PostgreSQL

**Table 2 : US_Counties**
* Read from source to Pandas Dataframe
* Trimmed Leading and Trailing Spaces
* Made sure There were no duplicates
* Assigned State_Fips to each record by merging with States Dataframe using state abbeviation to compare
* To handle the issue of incoming data from sources with unknown counties but known States, created a unique code based on the state_fips and assigned StateName as county Name. This observation came from US Census Data Table from where we used the same process for our county table.
* created a new dataframe with 'County_Fips','County','State_Fips' columns
* Identified 'County_Fips' as primary key
* Identified 'State_Fips' as foreign key
* Wrote to Us_Counties.csv that can be imported in PostgreSQL

**Table 3 : Us_Census_Data**
* Read from source to Pandas Dataframe
* The original table had 150+ columns
* Removed records with for State Totals as they are reduntant
* state totals can be calculated from county information
* Created Fips_County Field using State and County Fields that were both stored seperately as integers 
    * converted state and county fields from int to str
    * added leading zeros to State and County get the format required for fips_county
    * concatenated state and county to make County_Fips Code that follows the Fips_County format
* created final dataframe with selected fields   
    * 'fips','POPESTIMATE2016','POPESTIMATE2017','POPESTIMATE2018','POPESTIMATE2019',
    'POPESTIMATE2020', 'BIRTHS2016','BIRTHS2017','BIRTHS2018','BIRTHS2019','BIRTHS2020',
    'DEATHS2016','DEATHS2017','DEATHS2018','DEATHS2019','DEATHS2020'
* Wrote to US_Census_Data.csv that can be imported in PostgreSQL

**Table 4 : Museums**
* Read from source to Pandas Dataframe
* Remove mass N/A records from the table
* Fill in the missing cells in lat/lng columns using geocode
* Wrote as Museums.csv to be imported in PostgreSQL


