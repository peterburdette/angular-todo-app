import { TestBed } from '@angular/core/testing';

import { TaskListService } from './taskList.service';

describe('ListService', () => {
  let service: TaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
