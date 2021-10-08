import { LatLngExpression } from "leaflet";
import { FormEvent, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { IGeoData } from "./interfaces";
import { GetGeoData } from "./services/api";
import publicIp from 'public-ip';
interface Props {
  center:LatLngExpression
}
function ChangeView({ center } : Props) {
  const map = useMap();
  map.setView(center);
  return null;
}

const App = () => {
  const [position, setPosition] = useState<LatLngExpression>([19.394289959805644, -98.90994068257902]) 
  const [geoData, setGeoData] = useState<IGeoData>()
  const [ipAddress, setIpAddress] = useState('')
  const handleFormSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await GetGeoData(ipAddress)
    const {lat,lng} = data
    setGeoData(data)
    setPosition([lat,lng] as LatLngExpression );
    console.log(await publicIp.v4());
    // return null 
  };

  useEffect(() => {
    
  })
  return (
    <div className="grid-layout">
      <div className="header-box">
        <h1>IP Address Tracker</h1>
        <form className="search-content" onSubmit={handleFormSubmit}>
          <input type="text" onChange={(e) => setIpAddress(e.target.value)} />
          <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" height="14">
              <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/>
            </svg>
          </button>
        </form>
      </div>
      <div className="details-box">
        <div className="container">
          <div className="box">
            <div className="content">
              <span>IP ADDRESS</span>
              <h3>{geoData?.ip}</h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>LOCATION</span>
              <h3>{geoData?.region} </h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>TIMEZONE</span>
              <h3>UTC-{geoData?.timezone} </h3>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>ISP</span>
              <h3>{geoData?.isp}</h3>
            </div>
          </div>

        </div>
      </div>
      <div className="map-box">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <ChangeView center={position} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default App
