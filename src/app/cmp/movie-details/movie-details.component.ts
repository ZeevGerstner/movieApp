import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import {Movie} from '../../services/movie' 


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie

  constructor(
    private route: ActivatedRoute,
    private service: MoviesService
  ) { }

  ngOnInit(): void {
    this.loadMovie()
    
  }
  
  loadMovie(): void {
    var id = this.route.snapshot.paramMap.get('imdbID')
    this.service.getMovieById(id)
    .subscribe(movie => this.movie = movie)
  }
}
