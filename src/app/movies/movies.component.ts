import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public popular: Movies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService
      .getPopular()
      .subscribe(data => { this.popular = data; })
  }

}
