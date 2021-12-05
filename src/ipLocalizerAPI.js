function getLocation(ip){
    let settings = {
        url : "https://api.ip2country.info/ip?" + ip
    }

    return $.ajax(settings)
}