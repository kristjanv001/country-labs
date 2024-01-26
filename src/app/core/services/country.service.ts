import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { CountryInfo } from '../interfaces/country';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  country: WritableSignal<CountryInfo | null> = signal(null);

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<CountryInfo[]> {
    return this.httpClient.get<CountryInfo[]>(`${environment.apiUrl}all`)
      .pipe(
        tap(_ => {
          return;
        }),
        catchError(this.handleError<CountryInfo[]>('getHeroes', []))
      )
  }

  setSelectedCountry(country: CountryInfo) {
    this.country.set(country);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, "Failed to fetch countries");

      return of(result as T);
    }
  }
}
