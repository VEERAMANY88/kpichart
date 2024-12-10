import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DaydashboardComponent } from './daydashboard/daydashboard.component';


@Component({
  selector: 'app-daydashboard',
  standalone: true,
  imports: [RouterOutlet,DaydashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kpichart';
}
