Drop table if exists US_States cascade;
CREATE TABLE US_States (
    State_Fips int   NOT NULL,
    Sabbr char(2)   NOT NULL,
    Sname varchar(356)   NOT NULL,
    PRIMARY KEY (State_Fips)
);

Drop table if exists US_Counties cascade;
CREATE TABLE US_Counties (
    County_Fips int   NOT NULL,
    County varchar(356)   NOT NULL,
    State_Fips int   NOT NULL,
    PRIMARY KEY (County_Fips),
    FOREIGN KEY(State_Fips) REFERENCES US_States (State_Fips)
);

Drop table if exists US_Census_Data cascade;
CREATE TABLE US_Census_Data (
    ID Serial   NOT NULL,
    County_Fips int   NOT NULL,
    Population_2016 int   NOT NULL,
    Population_2017 int   NOT NULL,
    Population_2018 int   NOT NULL,
    Population_2019 int   NOT NULL,
    Population_2020 int   NOT NULL,
    Births_2016 int   NOT NULL,
    Births_2017 int   NOT NULL,
    Births_2018 int   NOT NULL,
    Births_2019 int   NOT NULL,
    Births_2020 int   NOT NULL,
    Deaths_2016 int   NOT NULL,
    Deaths_2017 int   NOT NULL,
    Deaths_2018 int   NOT NULL,
    Deaths_2019 int   NOT NULL,
    Deaths_2020 int   NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY(County_Fips) REFERENCES US_Counties (County_Fips)
);


Drop table if exists US_Museum_Types cascade;
CREATE TABLE US_Museum_Types (
    Museum_Type_ID int   NOT NULL,
    Museum_Type varchar(128)   NOT NULL,
    PRIMARY KEY (Museum_Type_ID)
);

Drop table if exists US_MAZE_Data cascade;
CREATE TABLE US_MAZE_Data (
   Museum_ID bigint   NOT NULL,
   Museum_Name varchar(356)   NOT NULL,
   Legal_Name varchar(356)   NOT NULL,
   Museum_Type_ID int   NOT NULL,
   Street_Add_AdmLoc varchar(356) ,
   City_AdmLoc varchar(356)   NOT NULL,
   State_AdmLoc varchar(2)   NOT NULL,
   Zip_AdmLoc varchar(10)   NOT NULL,
   Street_Add_PhyLoc varchar(356)  ,
   City_PhyLoc varchar(356)   NOT NULL,
   State_PhyLoc varchar(2)   NOT NULL,
   Zip_PhyLoc varchar(10)  ,
   Phone_Number varchar(20) ,
   Latitude decimal   NOT NULL,
   Longitude decimal   NOT NULL,
   Locale_Code_NCES decimal ,
   FIPS_County int   NOT NULL,
   Region_Code_AAM int   NOT NULL,
   Employer_ID varchar(356)   ,
   Tax_Period decimal   ,
   Income decimal   ,
   Revenue decimal  ,
   PRIMARY KEY (Museum_ID),
   FOREIGN KEY(Museum_Type_ID) REFERENCES US_Museum_Types (Museum_Type_ID),
   FOREIGN KEY(FIPS_County) REFERENCES US_Counties (County_Fips)
);

