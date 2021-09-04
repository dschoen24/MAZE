from flask import Flask, render_template, redirect, request, jsonify
from sqlalchemy import create_engine
from config1 import db_user, db_pass #credentials to connect to postgresql database

app = Flask(__name__)

# Creating an engine to connect to postgresql database 'employee_info'
my_engine = create_engine(f'postgresql://{db_user}:{db_pass}@localhost:5432/MAZE')
# creating connection
connection = my_engine.connect()

# fetch salaries of all employees from the salaries table
get_states = "select distinct state_fips, sabbr, sname from  maze_data order by sabbr"

# SELECT array_to_string(array( SELECT row_to_json(us_states.*) FROM us_states),', ') as jsonData;
@app.route("/")
def home():
    return render_template("index.html")
    
@app.route("/dashboard",methods=["GET", "POST"])
def dashboard():
    # Fetching records. we are only creating one record and updating it with each scrape 
    # This will fetch just one record (in the form od a list) into 'results' because the collection has only one
    # Alternatively we can use find_one.
    state_list = connection.execute(get_states)
    us_museum_list = connection.execute("select state_fips, sabbr, count(museum_id) as total_museums from public.maze_data where museum_type_id not in (2,6) group by state_fips, sabbr order by total_museums desc")
    
    records_dict= ""
    
    # get init dashboard ##################################    
    # print(records)
    
    records_dict=[{ 'state': each_record[1], 'total_museums': each_record[2] } for each_record in us_museum_list]
	

    #######################################################

    selected_state =  ""
    selected_county = ""
    selected_city = ""
    county_list = ""
    city_list = ""



    if request.method == "POST":
        selected_state = request.form["SelState"]
        selected_county = request.form["SelCounty"]
        selected_city = request.form["SelCity"]
        if selected_state != "":
            get_counties = "select distinct county_fips, county from maze_data where state_fips="+selected_state+'order by county '

            county_list = connection.execute(get_counties)
        if selected_county != "":
            get_cities = "select distinct city_phyloc from maze_data where county_fips="+selected_county+'order by city_phyloc '
            city_list = connection.execute(get_cities)

    # the results are rendered and displayed in HTML 
    return render_template("dashboard.html", state_list=state_list,
    sel_state=selected_state, county_list=county_list, sel_county=selected_county, 
    city_list=city_list, sel_city=selected_city, records_dict=records_dict)

@app.route("/maps")
def maps():
    return render_template("maps.html")

if __name__ == "__main__":
    app.run(debug=True)