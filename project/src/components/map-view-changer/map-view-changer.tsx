import { useMap } from 'react-leaflet';
import type { Coordinates } from '../../types/coordinates';

type MapViewChangerProps = {
  currentCity: Coordinates;
}

function MapViewChanger({ currentCity }: MapViewChangerProps) {
  const map = useMap();
  map.setView(currentCity);
  return null;
}

export default MapViewChanger;
