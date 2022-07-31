import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITamagotchi } from '../../interfaces/tamagotchi.interface';

@Injectable({
  providedIn: 'root'
})
export class TamagotchiApiService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ITamagotchi[]>('http://localhost:8080/tamagotchis');
  }

  getTamagotchi(id: number) {
    return this.http.get<ITamagotchi[]>('http://localhost:8080/tamagotchis/' + id);
  }

  createTamagotchi(tamagotchi: ITamagotchi) {
    return this.http.post('http://localhost:8080/tamagotchis', tamagotchi);
  }

  deleteTamagotchi(id: number) {
    return this.http.delete('http://localhost:8080/tamagotchis/' + id);
  }

}
