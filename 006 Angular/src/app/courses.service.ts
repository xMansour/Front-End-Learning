import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private coursesArr: string[] = ["Course 1", "Course 2", "Course 3", "Course 4"]

  getCoursesArr() {
    return this.coursesArr;
  }

}