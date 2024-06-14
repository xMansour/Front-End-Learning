import { Injectable } from '@angular/core';
import { Course } from './course/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private coursesArr: string[] = ["Course 1", "Course 2", "Course 3", "Course 4"]
  private listOfObjCourses: Course[] = [new Course("Java", 100), new Course(".NET", 70), new Course("Angular", 50), new Course("React", 50)]

  getCoursesArr() {
    return this.coursesArr;
  }

  getObjCourses() {
    return this.listOfObjCourses;
  }

}