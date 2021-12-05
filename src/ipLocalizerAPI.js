import $ from 'jquery'

const locateIP = (ip) => {
    console.log("locateIp ("+ip+")")
    let settings = {
        url : "https://api.ip2country.info/ip?" + ip
      }
  
      return $.ajax(settings)
}

export {locateIP}