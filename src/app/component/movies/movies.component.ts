import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/shared/auth.guard';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
