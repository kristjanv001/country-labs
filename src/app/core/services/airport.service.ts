import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCountryAirports(countryCode: string): Observable<any> {
    const url = `${this.apiUrl}airports?country_code=${countryCode}&api_key=${this.apiKey}`;

    return this.http.get<any>(url).pipe(
      tap((_) => {
        return;
      }),
      catchError(this.handleError<any>('getCountryAirports', []))
    );
  }

  getAirportDepartures(IATACode: string): Observable<any> {
    const url = `${this.apiUrl}schedules?dep_iata=${IATACode}&api_key=${this.apiKey}`;

    return this.http.get<any>(url).pipe(
      tap((_) => {
        return;
      }),
      catchError(this.handleError<any>('getAirportDepartures', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, 'Failed to fetch airports');

      return of(result as T);
    };
  }
}
