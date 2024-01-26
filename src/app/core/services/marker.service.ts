import { Injectable } from '@angular/core';
import * as Leaflet from 'leaflet';

import { CountryInfo } from '../interfaces/country';

interface CustomIconOptions extends Leaflet.IconOptions {
  iconSize: Leaflet.PointTuple;
}

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  private selectedMarker?: Leaflet.Marker;

  constructor() {}

  makeMarkers(map: Leaflet.Map, countries: CountryInfo[]): void {
    for (const country of countries) {

      const markerIconOptions: CustomIconOptions = {
        iconUrl: 'assets/leaflet/marker-icon.png',
        shadowUrl: 'assets/leaflet/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
      }

      const regularMarkerIcon = Leaflet.icon({
        ...markerIconOptions,
      });

      const selectedMarkerIcon = Leaflet.icon({
        ...markerIconOptions,
        iconUrl: 'assets/leaflet/marker-icon-selected.png'
      });

      const marker = Leaflet.marker(
        [country.latlng[0], country.latlng[1]], 
        { icon: regularMarkerIcon }
      ).on('click', () => {
        if (this.selectedMarker) {
          this.selectedMarker.setIcon(regularMarkerIcon);
        }

        marker.setIcon(selectedMarkerIcon);
        
        this.selectedMarker = marker;
        // this.airportService.setAirport(airport);
      });

      marker.addTo(map);
    }
  }
}
