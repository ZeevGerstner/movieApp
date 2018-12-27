import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  loadMovies(term): Observable<Movie[]> {
    return this.http.get(`http://www.omdbapi.com/?apikey=1398e299&type=movie&s=${term}`)
      .pipe(map((res: any) => res.Search as Movie[]))
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=1398e299&i=${id}`)
  }
}

