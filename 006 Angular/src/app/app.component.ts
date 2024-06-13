import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from './course/course.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Demo';
}
