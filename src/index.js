/**
 * Todo
 * @typedef {Object} Todo
 * @property {string} id - 할 일의 아이디
 * @property {string} text - 할 일의 내용
 * @property {boolean} completed - 할 일의 완료여부
 * @property {string} category - 할 일의 카테고리
 * @property {string[]} [tag] - 할 일의 태그들
 */

/**
 * 할 일을 추가한다.
 * 내용없이 추가할 수 없다.
 * @param {Object} newTodo
 * @param {string} newTodo.text - 할 일의 내용
 * @param {string} newTodo.category - 할 일의 카테고리
 * @param {string[]} [newTodo.tag] - 할 일의 태그들
 */
function createTodo({ text, category, tag }) {}

/**
 * 모든 할 일을 조회한다.
 * @return {Todo[]} 모든 할 일
 */
function getTodo() {}

/**
 * ID를 기반으로 특정 할 일을 조회한다.
 * @param {string} id - 조회할 할 일의 ID
 * @return {Todo} 주어진 ID를 가진 할 일
 */
function getTodoById(id) {}

/**
 * ID를 제외한 할 일의 모든 속성을 수정한다.
 * @param {Todo} todo
 * @param {Object} data - 수정할 속성들
 * @param {string} data.text
 * @param {string} data.category
 * @param {string} data.tag
 */
function updateTodo(todo, { text, category, tag }) {}

/**
 * 특정 할 일의 특정 태그를 수정한다.
 * @param {Todo} todo
 * @param {string} oldTag
 * @param {string} newTag
 */
function updateTag(todo, oldTag, newTag) {}

/**
 * ID를 기반으로 특정 할 일을 삭제한다.
 * @param {string} id - 삭제할 할 일의 ID
 */
function deleteTodo(id) {}

/**
 * 모든 할 일을 제거한다.
 */
function clearTodo() {}

/**
 * 특정 할 일에서 특정 태그를 삭제한다.
 * @param {Todo} todo - 태그를 삭제할 할 일
 * @param {string} tag - 삭제할 태그
 */
function deleteTag(todo, tag) {}

/**
 * 특정 할 일의 모든 태그를 제거한다.
 * @param {Todo} todo - 모든 태그를 제거할 할 일
 */
function clearTag(todo) {}
