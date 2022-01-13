import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../shared/services/taskList.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  count: number = this.taskListService.getCount();

  constructor(private taskListService: TaskListService) {}

  ngOnInit(): void {}
}
