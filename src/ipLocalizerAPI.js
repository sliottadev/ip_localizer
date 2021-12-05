import $ from 'jquery'

function locateIP(ip){
    let settings = {
        url : "https://api.ip2country.info/ip?" + ip
      }
  
      return $.ajax(settings)
}

export {locateIP}