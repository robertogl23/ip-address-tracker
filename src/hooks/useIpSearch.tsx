import { LatLngExpression } from "leaflet";
import { FormEvent, useEffect, useState } from "react";
import { IGeoData } from "../interfaces";
import { GetGeoData } from "../services/api";
import publicIp from 'public-ip';


const useIpSearch = () => {
    const [position, setPosition] = useState<LatLngExpression>([0,0]) 
    const [geoData, setGeoData] = useState<IGeoData>()
    const [ipAddress, setIpAddress] = useState('')

    const ipSearch = async (ip : string) => {
        const data = await GetGeoData(ip)
        const {lat,lng} = data
        setGeoData(data)
        setPosition([lat,lng] as LatLngExpression );
    }

    const handleFormSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        ipSearch(ipAddress)
    };

    const handleChangeText = (text : string) => setIpAddress(text)

    const getIpClient = async () => {
        const clientIP = await publicIp.v4();
        ipSearch(clientIP)
    }

    useEffect(() => {
        getIpClient()
    },[])

    return {
        position,
        geoData,
        handleFormSubmit,
        handleChangeText
    }
}

export default useIpSearch
