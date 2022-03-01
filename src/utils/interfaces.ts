interface Todo {
  id: string,
  description: string,
  isComplete: boolean
}

enum FilterOptions {
  all = 'ALL',
  incomplete = 'INCOMPLETE',
  complete = 'COMPLETE'
}

interface State {
  todos: Todo[],
  filterOption: FilterOptions
}

export { Todo, State, FilterOptions };