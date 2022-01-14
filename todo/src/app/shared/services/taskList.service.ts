import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  toDoList: TaskModel[] = [
    // { id: 1, taskName: 'test 1', dueDate: '11/25/2022', complete: false },
    // { id: 2, taskName: 'test 2', dueDate: '11/25/2023', complete: false },
    // { id: 3, taskName: 'test 3', dueDate: '11/25/2024', complete: false },
  ];

  constructor() {}

  // returns the list of existing tasks
  returnTasks() {
    return this.toDoList;
  }

  // returns the count of all tasks within the toDoList array
  getCount() {
    return this.toDoList.length;
  }

  // generates a unique id for each newly created task
  generateId() {
    let id = Math.floor(Math.random() * 10000);

    for (const taskId of this.toDoList) {
      return id !== taskId.id ? id : console.log('id already exists');
    }
  }

  // adds new tasks to the toDoList array
  addTask(task: any) {
    this.toDoList.push(task);
  }

  // removes completed tasks from the toDoList array
  completeTask(task: any) {
    this.toDoList = this.toDoList.filter((item) => item.id !== task.id);
  }
}
