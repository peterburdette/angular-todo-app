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

  onAddTask(data: any) {
    // restructures the data to add in a unique id
    let task = {
      id: 1,
      taskName: data.form.value.taskName,
      dueDate: data.form.value.dueDate,
      complete: false,
    };

    console.log(task);
    // sends the new task to the taskService so it can be added to the toDoList array
    this.taskListService.addTask(task);
  }

  onCompleteTask(task: any) {
    this.taskListService.completeTask(task);
  }
}
