import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';
import { Observable } from 'rxjs';

const apiKey: string = '6bdd1cfe28af911694df7f2bbef53d9f';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/';
  private popular: string = 'discover/movie?sort_by=popularity.desc';
  private authentication: string = '&api_key=';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(this.path + this.popular + this.authentication + apiKey);
  }
}
