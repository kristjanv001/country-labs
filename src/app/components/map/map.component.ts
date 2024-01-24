import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as Leaflet from 'leaflet';

import { Airport } from '../../core/interfaces/airport';
import { Departure } from '../../core/interfaces/departure';
import { AirportService } from '../../core/services/airport.service';
import { MarkerService } from '../../core/services/marker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private map!: Leaflet.Map;
  private airports: Airport[] = [];
  private currentUnixTime: number;
  departures: Departure[] = [];
  airportName = '';

  airportsSubscription?: Subscription;
  departuresSubscription?: Subscription;

  constructor(
    private airportService: AirportService,
    private markerService: MarkerService
  ) {
    this.currentUnixTime = Math.floor(Date.now() / 1000);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.getAirports('NO');
  }

  ngOnDestroy() {
    this.airportsSubscription?.unsubscribe();
    this.departuresSubscription?.unsubscribe();
  }

  private getAirports(countryCode: string) {
    this.airportsSubscription = this.airportService
      .getCountryAirports(countryCode)
      .subscribe((reqResponse) => {
        this.airports = this.filterAirports(reqResponse.response);
        this.displayAirportMarkers();
      });
  }

  private getDepartures(IATACode: string, airportName: string) {
    this.airportName = airportName;

    this.departuresSubscription = this.airportService
      .getAirportDepartures(IATACode)
      .subscribe((reqResponse) => {
        this.departures = reqResponse.response;
        this.departures = this.filterDepartures(this.departures);
        this.departures = this.sortDepartures(this.departures);
        // this.departures = this.departures.slice(0, 5);
      });
  }

  private filterAirports(airports: Airport[]) {
    return airports.filter((airport) => airport.iata_code !== null);
  }

  private filterDepartures(departures: Departure[]) {
    const uniqueKeySet: Set<String> = new Set();
    const filtered = departures.filter((departure) => {
      const uniqueKey = `${departure.dep_time_ts}-${departure.arr_iata}`;

      if (
        departure.status !== 'scheduled' ||
        departure.dep_actual_ts <= this.currentUnixTime ||
        uniqueKeySet.has(uniqueKey)
      ) {
        return false;
      }
      uniqueKeySet.add(uniqueKey);

      return true;
    });

    return filtered;
  }

  private sortDepartures(departures: Departure[]) {
    return departures.toSorted((a: any, b: any) => {
      const depTimeA = a.dep_time_ts;
      const depTimeB = b.dep_time_ts;

      return depTimeA - depTimeB;
    });
  }

  private displayAirportMarkers() {
    this.markerService.makeMarkers(
      this.map,
      this.airports,
      this.getDepartures.bind(this)
    );
  }

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [62.0, 10.0],
      zoom: 4,
      zoomControl: false, // Disable the default zoom controls
    });

    const tiles = Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 1,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    Leaflet.control.zoom({ position: 'bottomleft' }).addTo(this.map);
  }
}
