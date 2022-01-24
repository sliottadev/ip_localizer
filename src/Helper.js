import { StatisticItem } from "./components/statistics/StatisticItem";

const LAT_BSAS = -34.58;
const LON_BSAS = -58.67;

const copyArray = (source)=>{
    if (source==null) return [];
    var copy = [];
    for(let i=0; i<source.length; i++){
      copy.push(source[i]);
    }
    return copy;
}

const getLenguagesStr = (lenguages) => {
    let str = ""
    Object.values(lenguages).map((values)=>(
        str = str + values+', '
    ))
    return str.substring(0,str.length-2);
}

const getCurrencies = (curr) =>{
    let str = ""
    Object.values(curr).map((value)=>(
        str = str + value.name + "("+value.symbol+"), "
    ))
    return str.substring(0, str.length-2);
}

const getTimeZones = (times) =>{
    let str = "";
    for(let i=0; i<times.length; i++){
        str = times[i]+", "
    }
    return str.substring(0, str.length-2);
}

const getDistanceKm = (lat_1, lon_1, lat_2, lon_2) => {
    const HEARTH_RADIUS = 6378.137;
    const degToRadMultiplier = Math.PI / 180;

    const latitud1 = lat_1 * degToRadMultiplier;
    const longitud1 = lon_1 * degToRadMultiplier;
    const latitud2 = lat_2 * degToRadMultiplier;
    const longitud2 = lon_2 * degToRadMultiplier;

    var dLongitud = longitud2 - longitud1;
    
    var result = Math.acos( Math.sin(latitud1) * Math.sin(latitud2) + Math.cos(latitud1) * Math.cos(latitud2) * Math.cos(dLongitud)) * HEARTH_RADIUS;
    return result;
}

const addStatisticData= (statModel, newData)=>{
    var item = new StatisticItem(newData.name, newData.distance);
    for (let i=0; i<statModel.items.length; i++){
        if(statModel.items[i].country === newData.name){
            statModel.items[i].invoke++;
            return;
        }
    }
    item.invoke=1;
    statModel.items.push(item);
}

export {copyArray, getLenguagesStr, getCurrencies, getTimeZones, getDistanceKm, addStatisticData, LAT_BSAS, LON_BSAS}