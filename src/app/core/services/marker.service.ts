import { Injectable } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Airport } from '../interfaces/airport';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  constructor() {}

  makeMarkers(
    map: Leaflet.Map,
    airports: Airport[],
    markerClickHandler: (IATACode: string, airportName: string) => void
  ): void {
    for (const airport of airports) {
      const markerIcon = Leaflet.icon({
        iconUrl: 'assets/leaflet/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowUrl: 'assets/leaflet/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
      });

      const marker = Leaflet.marker([airport.lat, airport.lng], {
        icon: markerIcon,
      })
        .bindPopup(`<p>${airport.name}</p>`)
        .openPopup()
        .on('click', () => markerClickHandler(airport.iata_code, airport.name));

      marker.addTo(map);
    }
  }
}
