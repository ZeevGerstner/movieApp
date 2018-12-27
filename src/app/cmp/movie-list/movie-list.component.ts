import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


import { MoviesService } from './../../services/movies.service';
import { Movie } from '../../services/movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {

  movies: Movie[]
  term = 'superman'

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.loadMovies()
    // debounceTime(300)
  }

  loadMovies(): void {
    this.service.loadMovies(this.term)
      .subscribe(movies => this.movies = movies)
  }


  searchMovie(event: any) {
    this.term = event.target.value
    this.loadMovies()
  }

}
