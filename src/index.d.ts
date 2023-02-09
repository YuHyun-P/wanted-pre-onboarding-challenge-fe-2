export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  tag?: string[];
}

export declare function createTodo({
  text,
  category,
  tag,
}: Omit<ITodo, "id">): void;

export declare function getTodo(): ITodo[];
export declare function getTodoById(id: string): ITodo;

export declare function updateTodo(
  todo: ITodo,
  { text, category, tag }: Omit<ITodo, "id">
): void;
export declare function updateTag(
  todo: ITodo,
  oldTag: string,
  newTag: string
): void;

export declare function deleteTag(todo: ITodo, tag: string): void;
export declare function clearTag(todo: ITodo): void;

export declare function deleteTodo(id: string): void;
export declare function clearTodo(): void;
