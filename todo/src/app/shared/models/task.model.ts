export class TaskModel {
  constructor(
    public id: number,
    public taskName: string,
    public dueDate: string,
    public complete: boolean
  ) {}
}
