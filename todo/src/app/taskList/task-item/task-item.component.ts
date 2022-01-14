import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // receives the task from the taskList component
  @Input() task: any;

  constructor() {}

  ngOnInit(): void {}
}
