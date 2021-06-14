import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CourserService } from 'src/app/services/course.service';
import { Course } from './../../course.model';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css']
})
export class CourseitemComponent implements OnInit {

  constructor(
    private courseservice: CourserService
  ) { }
  //@Input() course: Course | undefined;  
  @Input() course: any;
  @Output() courseSelected = new EventEmitter<Course>();
  ngOnInit(): void {
  }

  onSelected() {
    this.courseSelected.emit(this.course);
  }

}
