import { Offer } from '../../types/offer';
import { Icon } from 'leaflet';
import { URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { Location } from '../../types/location';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

type MapProps = {
  offers: Offer[];
  location: Location;
};

const MAP_WIDTH = '100%';
const MAP_HEIGHT = '100%';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, location }: MapProps): JSX.Element {
  const mapRef = useRef(null);

  return (
    <MapContainer style={{ width: MAP_WIDTH, height: MAP_HEIGHT }} center={location.center} zoom={location.zoom} scrollWheelZoom={false} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers.map((offer) => <Marker key={offer.id} position={offer.coordinates} icon={defaultCustomIcon} />)}
    </MapContainer>
  );
}

export default Map;
