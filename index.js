function logDriverNames(array){
  return array.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(array, location){
  return array.forEach(function(driver){
    if (driver.location === location) {
      console.log(driver.name)
    }
  })
}
