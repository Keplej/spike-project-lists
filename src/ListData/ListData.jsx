const ListData = {
    task: {
        'task-1': {id: 'task-1', content: 'Work on list items'},
        'task-2': {id: 'task-2', content: 'Study some Javascript'},
        'task-3': {id: 'task-3', content: 'Make functions for solo project'},
        'task-4': {id: 'task-4', content: 'Re-do documentation for solo project'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1'],
};


export default ListData;