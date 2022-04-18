import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {MapType, Location, Point} from '../../types/types';
import {Pins, IMG_URL} from '../../const';

function getClassName(type: MapType ): string {
  const mapping = {
    main: 'cities__map map',
    room: 'property__map map',
  };
  return mapping[type];
}

const defaultCustomIcon = new Icon({
  iconUrl: `${IMG_URL}${Pins.Normal}`,
  iconSize: [28, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: `${IMG_URL}${Pins.Active}`,
  iconSize: [28, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  city: Location;
  points: Point[];
  selectedOffer: number | null;
  type: MapType,
};

const useMapAdapter = (props: Omit<MapProps, 'type'>)=>{
  const { city, points, selectedOffer } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        marker
          .setIcon(
            selectedOffer !== undefined && point.id === selectedOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
        markers.push(marker);
      });
    }
    return () => {
      markers.forEach((marker) => {
        if (map) {
          marker.removeFrom(map);
        }
      });
    };
  }, [map, points, selectedOffer]);
  return mapRef;
};

function CitiesMap({city, points, selectedOffer, type}: MapProps): JSX.Element {
  const mapRef = useMapAdapter({city, points, selectedOffer});

  return (
    <section className={getClassName(type)}>
      <div className="map__block" ref={mapRef}></div>
    </section>
  );
}

export default CitiesMap;
