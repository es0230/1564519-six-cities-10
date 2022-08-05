import { Offer } from '../../types/offer';
//import { Point } from '../../types/point';
//import useMap from '../../hooks/useMap';
import L from 'leaflet'; //{ Icon, Marker }
//import { URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useRef, } from 'react'; //useEffect
import { City } from '../../types/city';

type MapProps = {
  offers: Offer[];
  city: City;
};

const CITY: City = {
  center: [52.390955, 4.853096],
  zoom: 10
};

//const defaultCustomIcon = new Icon({
//  iconUrl: URL_MARKER_DEFAULT,
//  iconSize: [40, 40],
//  iconAnchor: [20, 40]
//});

function Map({ offers, city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  //const map = useMap(mapRef, city);
  //const points: Point[] = offers.map((offer) => offer.location);

  const map = L.map('map', {
    center: [52.390955, 4.853096],
    zoom: CITY.zoom,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  //useEffect(() => {
  //  if (map) {
  //    points.forEach((point) => {
  //      const marker = new Marker({
  //        lat: point.lat,
  //        lng: point.lng
  //      });

  //      marker.setIcon(defaultCustomIcon).addTo(map);
  //    });
  //  }
  //}, [map, points]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

export default Map;
