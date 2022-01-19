import $ from 'jquery'

const locateIP = (ip) => {
    //console.log("locateIp ("+ip+")")
    let settings = {
        url : "https://api.ip2country.info/ip?" + ip
      }
  
      return $.ajax(settings)
}

const getCountryInfo = (name) =>{
  var URLBase = "https://restcountries.com/v3.1/name/"
  let settings = {
    url : URLBase +name
  }
  return $.ajax(settings)
}

export {locateIP, getCountryInfo}