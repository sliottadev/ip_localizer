import { LAT_BSAS, LON_BSAS, getDistanceKm } from "../../Helper";

export class ResultModel{
    constructor (map){
        this.name=map.name.official;
        this.languages = map.languages;
        this.currencies = map.currencies;
        this.timeZones = map.timezones;
        this.svgFlag = map.flags.svg;
        this.distance = getDistanceKm(LAT_BSAS, LON_BSAS, map.capitalInfo.latlng[0], map.capitalInfo.latlng[1]);
    }
}