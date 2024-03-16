import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

declare interface AdviceData {
  slip: {
    id: number;
    advice: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient)
  random_advice_api = 'https://api.adviceslip.com/advice'


  getAdvice() {
    return this.http.get<AdviceData>(this.random_advice_api);
  }
}
