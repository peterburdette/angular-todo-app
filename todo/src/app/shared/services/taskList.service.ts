import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  toDoList = [
    { id: 1, taskName: 'test 1', dueDate: '11/25/2022' },
    { id: 2, taskName: 'test 2', dueDate: '11/25/2023' },
    { id: 3, taskName: 'test 3', dueDate: '11/25/2024' },
  ];

  constructor() {}

  returnTasks() {
    return this.toDoList;
  }

  addTask(task: any) {
    this.toDoList.push(task);
  }

  completeTask(task: any) {
    let result = this.toDoList.filter((item) => item.id !== task.id);
    console.log(result);
    this.toDoList = result;
  }
}
