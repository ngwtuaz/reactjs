let nextId = 0;

export function createTodo(text, completed = false) {
    return {
        id: nextId++,
        text,
        completed
    };
}

export const initialTodos = [
    createTodo(' 100k', true),
    createTodo(' 200k', true),
    createTodo(' money'),
    createTodo(' hehe'),
    createTodo(' 500k')
];