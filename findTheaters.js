db.theatersLocations.find(
   {
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ -73.9933909997058, 40.7522870007759 ] },
            $maxDistance: 500
          }
       }
   }
)