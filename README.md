# Airport Data Converter

This will take the airport data from a the flat file airports.csv, and convert it into a JSON array. 

This can then be uploaded to MongoDB collection. Here is the command that can be used to upload the json file;

```cmd
mongoimport -h <serveraddress>:<PORT> -d skypartners-sandbox -c airports -u <username> -p <password> --file airports.json --jsonArray
```

id 0 ,
ident 1,
type 2,
name 3,
latitude_deg 4,
longitude_deg 5,
elevation_ft 6,
continent 7,
iso_country 8,
iso_region 9,
municipality 10,
scheduled_service 11,
gps_code 12,
iata_code 13,
local_code 14,
home_link 15,
wikipedia_link 16,
keywords 17,
score 18,
last_updated 19
