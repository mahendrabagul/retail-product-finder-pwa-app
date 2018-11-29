import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TokenService} from '../token/token.service';
import {Device} from '../../models/device';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  apiUrl = environment.API_URL + '/api/v1/devices/free';

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  getFreeDevice(): Observable<Device> {
    const url = `${this.apiUrl}` + '/' + this.tokenService.getTenantId();
    return this.http.get<Device>(url).pipe(
      tap(_ => console.log(`Get Free Device`)),
      catchError(this.handleError<Device>(`Get Free Device`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
