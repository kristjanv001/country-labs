import { Component, OnInit, AfterViewInit } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map.component.html'
})
export class MapComponent implements AfterViewInit {
  
  private map!: Leaflet.Map;

  ngAfterViewInit(): void {
    this.initMap();
    // this.getAirports('NO');
  }

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [62.0, 10.0],
      zoom: 4,
      zoomControl: false // Disable the default zoom controls
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
    // add controls at the bottom
    Leaflet.control.zoom({ position: 'bottomleft' }).addTo(this.map);
  }
}
