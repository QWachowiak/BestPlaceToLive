db.subwayLocations.dropIndex({ location : "2dsphere" } )
db.theatersLocations.dropIndex({ location : "2dsphere" } )
db.watercomplaintsLocations.dropIndex({ location : "2dsphere" } )

db.subwaystations.aggregate(
    [{$project: {
        NAME:1,
        location: {
            type: "Point",
            coordinates: {$substrBytes: ["$the_geom", 7, { $subtract: [ { $strLenBytes: "$the_geom" }, 8 ] }]}
            } 
        }
    },
    { $out : "subwayLocations" }]
)

db.subwayLocations.aggregate(
    [{$project: {
        NAME:1,
        location: {
            type: 1,
            coordinates: { $split: [ "$location.coordinates", " "] }
            } 
        }
    },
    { $out : "subwayLocations" }]
)   

db.subwayLocations.find().forEach( function (x) {
x.location.coordinates[0] = parseFloat(x.location.coordinates[0]);
x.location.coordinates[1] = parseFloat(x.location.coordinates[1]);
db.subwayLocations.save(x);
});

db.subwayLocations.createIndex({ location : "2dsphere" } )

db.theaters.aggregate(
    [{$project: {
        NAME:1,
        location: {
            type: "Point",
            coordinates: {$substrBytes: ["$the_geom", 7, { $subtract: [ { $strLenBytes: "$the_geom" }, 8 ] }]}
            } 
        }
    },
    { $out : "theatersLocations" }]
)

db.theatersLocations.aggregate(
    [{$project: {
        NAME:1,
        location: {
            type: 1,
            coordinates: { $split: [ "$location.coordinates", " "] }
            } 
        }
    },
    { $out : "theatersLocations" }]
)   

db.theatersLocations.find().forEach( function (x) {
x.location.coordinates[0] = parseFloat(x.location.coordinates[0]);
x.location.coordinates[1] = parseFloat(x.location.coordinates[1]);
db.theatersLocations.save(x);
});

db.theatersLocations.createIndex({ location : "2dsphere" } )

db.watercomplaints.aggregate(
    [{ $match : {$and: [ { Latitude : { $type: 1 } },{ Longitude : { $type: 1 } } ] } },
    {$project: {
        Year:{$substrBytes: ["$Created Date", 6, 4]},
        location: {
            type: "Point",
            coordinates: ["$Longitude", "$Latitude"]
            } 
        }
    },
    { $match : {$or: [ {Year: "2016"},{Year: "2017"} ] } },
    { $out : "watercomplaintsLocations" }]
)

db.watercomplaintsLocations.createIndex({ location : "2dsphere" } )

db.subwayLocations.find(
   {
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ -73.992383, 40.753770 ] },
            $maxDistance: 1000
          }
       }
   }
)
   
db.runCommand({
   geoNear: 'subwayLocations',
   near: { type: "Point" , coordinates: [ -73.992383, 40.753770 ] } ,
   spherical: true,
   limit: 16
} )
    