import { Offer } from '../../types/offer';
//import { Point } from '../../types/point';
import { Icon } from 'leaflet';
import { URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { City } from '../../types/city';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

type MapProps = {
  offers: Offer[];
  city: City;
};

const CITY: City = {
  center: [52.370955, 4.893096],
  zoom: 12
};

const MAP_WIDTH = '450px';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  //const points: Point[] = offers.map((offer) => offer.location);

  return (
    <MapContainer style={{ width: MAP_WIDTH }} center={CITY.center} zoom={CITY.zoom} scrollWheelZoom={false} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers.map((offer) => <Marker key={offer.id} position={[offer.location.lat, offer.location.lng]} icon={defaultCustomIcon} />)}
    </MapContainer>
  );
}

export default Map;
