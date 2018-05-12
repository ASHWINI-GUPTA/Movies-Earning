import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
  movies: Array<any>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAll().subscribe(
      data => {
        this.movies = data;
      },
      error => console.log(error)
    );
  }
}
