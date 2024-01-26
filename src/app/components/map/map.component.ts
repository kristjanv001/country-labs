import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as Leaflet from 'leaflet';

import { CountryInfo } from '../../core/interfaces/country';
import { CountryService } from '../../core/services/country.service';
import { MarkerService } from '../../core/services/marker.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map.component.html',
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private map!: Leaflet.Map;
  private countries: CountryInfo[] = [];
  // private currentUnixTime: number;
  // airportName = '';

  countrySubscription?: Subscription;

  constructor(
    private countryService: CountryService,
    private markerService: MarkerService
  ) {
    // this.currentUnixTime = Math.floor(Date.now() / 1000);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.getAllCountries();
    
  }

  ngOnDestroy() {
    this.countrySubscription?.unsubscribe();
  }

  private getAllCountries() {
    this.countrySubscription = this.countryService.getAllCountries()
      .subscribe((reqResponse) => {
        this.countries = reqResponse;
        console.log(this.countries);
        this.showCountryMarkers();
      })
  }

  private showCountryMarkers() {
    this.markerService.makeMarkers(this.map, this.countries);
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
