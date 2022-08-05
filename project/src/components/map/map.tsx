import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import { Point } from '../../types/point';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';

type MapProps = {
  offers: Offer[];
  city: City;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const points: Point[] = offers.map((offer) => offer.location);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, points]);

  return <div id='map' style={{ height: '500px' }} ref={mapRef}></div>;
}

export default Map;
