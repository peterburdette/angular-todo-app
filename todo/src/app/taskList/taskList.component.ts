import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../shared/services/taskList.service';

@Component({
  selector: 'app-list',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.css'],
})
export class ListComponent implements OnInit {
  taskList: any;

  constructor(private taskListService: TaskListService) {}

  ngOnInit(): void {
    this.taskList = this.taskListService.returnTasks();
    // console.log(this.taskList);
  }

  onAddTask(task: any) {
    this.taskListService.addTask(task);
  }

  onCompleteTask(task: any) {
    this.taskListService.completeTask(task);
  }
}
