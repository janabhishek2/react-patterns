// This is an example of a third-party store
// that you might need to integrate with React.

// If your app is fully built with React,
// we recommend using React state instead.

let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listener = null;

export const todosStore = {
    addTodo() {
        todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }]
        listener();
    },
    subscribe(lst) {
        listener = lst;
    },
    getSnapshot() {
        return todos;
    }
};
