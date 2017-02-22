db.subwayLocations.aggregate(
    [{$geoNear: {
        near: { type: "Point", coordinates: [ -74.014447, 40.720371 ] },
        distanceField: "dist.calculated",
        includeLocs: "dist.location",
        spherical: true
     }
    },
    {$project: {
        NAME:1,
        location: 1,
        dist_to_VB: "$distanceField"
        }
    },
    { $out : "subwayLocation" }]
)
