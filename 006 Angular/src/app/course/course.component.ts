import { Component, NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { CoursesService } from '../courses.service';
import { FormsModule } from '@angular/forms';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { UpperCasePipe } from './CustomUpperCase.pipe';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NgFor, FormsModule, UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  private title: string = "List of Courses";
  private courses;
  private objCourses;
  text: string = "Placeholder";
  date: string = new Date().toDateString();
  price: number = 1100;
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


  log() {
    console.log(this.text);
  }



}


// @NgModule({
//   declarations: [UpperCasePipe],
//   imports: [CourseComponent]
// })
// export class CourseComponentMModule { }
