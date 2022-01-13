import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  taskList: any;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.taskList = this.listService.returnTasks();
    // console.log(this.taskList);
  }

  onAddTask(task: any) {
    this.listService.addTask(task);
  }

  onCompleteTask(task: any) {
    this.listService.completeTask(task);
  }
}
