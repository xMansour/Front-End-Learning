import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NgFor],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  private title: string = "List of Courses";
  private courses;
  constructor(service: CoursesService) {
    this.courses = service.getCoursesArr();
  }
  getTitle() {
    return this.title;
  }

  getCourses() {
    return this.courses;
  }


}
