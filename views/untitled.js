fetch('data/surfschools.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(schools) {
    return schools.map( school => {
      delete school.business_phone_number;
      delete school.business_fax;
      delete school.featured_level;
      return school;
    })
  })
  .then( JSON.stringify )
  // .then( schools => {
  //   console.log(`total schools => ${schools.length}`)
  //   return schools;
  // })
  // .then( schools => {
  //   allWoPhoneNumber = schools.every( school => school.business_phone_number == "" );
  //   allWoFax = schools.every( school => school.business_fax == "" );
  //   allNormalLevel = schools.filter( school => school.featured_level !== "normal" );

  //   console.log(allWoPhoneNumber)
  //   console.log(allWoFax)
  //   console.log(allNormalLevel)
  //   console.log(allNormalLevel.length)

  // })
  .then( console.log )