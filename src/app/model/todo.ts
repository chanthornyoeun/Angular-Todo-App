export class Todo {
    id: number;
    title: string;
    dueDate: {
        startDate: Date;
        endDate: Date;
    };
    status: string;
    priority: string;
    description: string;
}
