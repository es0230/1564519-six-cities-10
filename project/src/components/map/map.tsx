import type { Offer } from '../../types/offer';
import type { Coordinates } from '../../types/coordinates';
import { Icon } from 'leaflet';
import { DEFAULT_MAP_ZOOM, URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
import MapViewChanger from '../map-view-changer/map-view-changer';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { getOfferCoordinates } from '../../util';

type MapProps = {
  offers: Offer[];
  currentCity: Coordinates;
  activeCard: Offer | null;
};

const MAP_WIDTH = '100%';
const MAP_HEIGHT = '100%';

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const activeIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, currentCity, activeCard }: MapProps): JSX.Element {
  return (
    <MapContainer style={{ width: MAP_WIDTH, height: MAP_HEIGHT }} center={currentCity} zoom={DEFAULT_MAP_ZOOM} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapViewChanger currentCity={currentCity} />
      {offers.map((offer) => <Marker key={offer.id} position={getOfferCoordinates(offer)} icon={activeCard !== null && activeCard.id === offer.id ? activeIcon : defaultIcon} />)}
    </MapContainer>
  );
}

export default Map;
