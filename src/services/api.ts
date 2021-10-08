import { IGeoData } from "../interfaces";

const URL_API = 'https://geo.ipify.org/api/v1?apiKey=at_a01dzyOkqqBsZjdH2KoMqzScfFssH&ipAddress=';

export const GetGeoData = async (ipAddress : string) : Promise<IGeoData> => {
    const res = await fetch(URL_API + ipAddress);
    const data = await res.json()
    
    const geoData : IGeoData  = {
        city: data?.location?.city,
        ip : data?.ip,
        isp : data?.isp,
        region: data?.location?.region,
        timezone : data?.location.timezone,
        lat: data?.location.lat,
        lng : data?.location?.lng
    }

    return geoData;
}