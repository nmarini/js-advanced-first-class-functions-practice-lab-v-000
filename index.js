function logDriverNames(array){
  return array.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(array, hometown){
  return array.forEach(function(driver){
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(array){
  return array.sort(function(a, b){
    return a.revenue.localeCompare(b.revenue)
  })
}
