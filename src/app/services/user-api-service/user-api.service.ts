import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IUser[]>('http://localhost:8080/users');
  }

  getUser(id: number) {
    return this.http.get<IUser[]>('http://localhost:8080/users/' + id);
  }

  createUser(user: IUser) {
    return this.http.post('http://localhost:8080/users', user);
  }

  deleteUser(id: number) {
      return this.http.delete('http://localhost:8080/users/' + id);
  }

}
