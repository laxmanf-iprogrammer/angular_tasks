import { Injectable, EventEmitter } from "@angular/core";
import { Course } from './../course.model';
//import { CourserService } from './services/course.service';

@Injectable()
export class CourserService {
    courseSelected = new EventEmitter<Course>();

    constructor() {

    }
    private courses: Course[] = [
        new Course('Angular Course 1', 'This is simply a practice Angular course 1', 'http://via.digital.com/350x150.jpeg'),
        new Course('Angular Course 2', 'This is simply a practice Angular course 2', 'http://via.digital.com/350x150'),
        new Course('Angular Course 3', 'This is simply a practice Angular course 3', 'http://via.digital.com/350x150')
    ]
    // getCourse() {
    //   // return this.courses.splice();
    // }

}