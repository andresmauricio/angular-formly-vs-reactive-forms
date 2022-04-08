import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  cities: any = {
    1: [
      { name: 'Buenos Aires', id: 1 },
      { name: 'Rosario', id: 2 },
    ],
    2: [
      { name: 'Bogotá', id: 3 },
      { name: 'Medellin', id: 4 },
    ],
    3: [
      { name: 'Lima', id: 5 },
      { name: 'Cusco', id: 6 },
    ],
  };

  getCountries() {
    return of({
      status: 200,
      results: [
        { name: 'Argentina', id: 1 },
        { name: 'Colombia', id: 2 },
        { name: 'Peru', id: 3 },
      ],
    });
  }

  getCitiesById(id: any) {
    return of({
      status: 200,
      results: this.cities[id] || [],
    });
  }
}
