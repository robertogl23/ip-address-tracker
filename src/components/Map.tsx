import { LatLngExpression } from 'leaflet';
import { 
    MapContainer,
    Marker, 
    Popup, 
    TileLayer,
    useMap 
} from "react-leaflet";
import styles from '../css/map.module.css';

interface Props {
    center:LatLngExpression;
}

function ChangeView({ center } : Props) {
    const map = useMap();
    map.setView(center);
    return null;
}
  
const Map = ({center}: Props) => (
    <div className={styles.map_box}>
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
            <ChangeView center={center} />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
)


export default Map
