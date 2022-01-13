import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskListService } from '../shared/services/taskList.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.css'],
})
export class TaskListComponent implements OnInit, DoCheck {
  taskList: any;

  constructor(private taskListService: TaskListService) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.taskList = this.taskListService.returnTasks();
  }

  onAddTask(task: any) {
    this.taskListService.addTask(task);
  }

  onCompleteTask(task: any) {
    this.taskListService.completeTask(task);
  }
}
