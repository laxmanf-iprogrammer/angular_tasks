import { Component, OnInit } from '@angular/core';
import { CourserService } from 'src/app/services/course.service';
import { Course } from '../../course.model'

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  courses: Course[] = [
    new Course('Angular Course 1', 'This is simply a practice Angular course 1', 'http://via.digital.com/350x150.jpeg'),
    new Course('Angular Course 2', 'This is simply a practice Angular course 2', 'http://via.digital.com/350x150')
  ];

  constructor() { }

  ngOnInit() {
  }

onCourseSelected(course: Course) {
   // console.log("Selected course : " + course);
  }

}
