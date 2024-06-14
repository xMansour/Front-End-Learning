import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CoursesService } from '../courses.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  private title: string = "List of Courses";
  private courses;
  private objCourses;
  text: string = "Placeholder";
  constructor(service: CoursesService) {
    this.courses = service.getCoursesArr();
    this.objCourses = service.getObjCourses();
  }
  getTitle() {
    return this.title;
  }

  getCourses() {
    return this.courses;
  }

  getObjCourses() {
    return this.objCourses;
  }


  log(){
    console.log(this.text);
  }

  

}
