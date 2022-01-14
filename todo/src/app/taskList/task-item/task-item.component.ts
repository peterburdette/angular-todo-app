import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // receives the task from the taskList component
  @Input() task: any;
  @Output() completedTask = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onComplete(task: any) {
    this.task = {
      id: task.id,
      taskName: task.taskName,
      dueDate: task.dueDate,
      complete: true,
    };

    // sends the completed task to the parent component
    this.completedTask.emit(task);
  }
}
