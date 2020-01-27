const fs = require('fs');

fs.readFile('airports.csv', 'utf8', (err, data) => {
    //console.log(data);
    const lines = data.split('\n');
    let airports = [];
    
    for (let i = 1; i < lines.length; i++) {
        const items = lines[i].split(',');
        let long = 0;
        let lat = 0;
        if (!isNaN(items[5])) {
            long = parseFloat(items[5]);
        }
        if (!isNaN(items[4])) {
            lat = parseFloat(items[4]);
        }
        const usairport = {
            "airport_id": parseInt(items[0]),
            "ident": items[1],
            "type": items[2],
            "name": items[3],
            "location": {
                "type": "Point",
                "coordinates": [long, lat]
            },
            "elevation": parseInt(items[6]),
            "continent": items[7],
            "iso_country": items[8],
            "iso_region": items[9],
            "municipality": items[10],
            "scheduled_service": parseInt(items[11]),
            "gps_code": items[12],
            "iata_code": items[13],
            "local_code": items[14],
            "home_link": items[15],
            "wikipedia_link": items[16],
            "keywords": items[17],
            "score": items[18],
            "last_updated": items[19]
        };
        airports.push(usairport);
    }
    fs.writeFile('airports.json', JSON.stringify(airports), (err) => { });
});



