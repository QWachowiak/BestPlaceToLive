db.watercomplaintsLocations.find(
   {
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ -73.998041001172, 40.7459059994 ] },
            $maxDistance: 1000
          }
       }
   }
)