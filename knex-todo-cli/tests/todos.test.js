const testEnv = require('./test-environment')
const todos = require('../todo')
const sample = require("./seeds/todos").sample
let testDb = null

// Create a separate in-memory database before each test.
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))

// This will fail until you:
//  - export the `getAll` function
//  - modify it to allow a test database to be passed in as a function parameter
test('getAll returns three todos', () => {
  // Arrange
  const expected = 3

  // Act
  // Be sure to always use `return` when testing with promises
  return todos.getAll(testDb)
    .then(results => {
      const actual = results.length

      // When testing async functions, we always assert inside `.then`. Why?

      // Assert
      expect(actual).toBe(expected)
      expect(results).toEqual(sample);
    })
})

test('refreshTodos returns all tasks', ()=> {
  return todos.refreshTodos(testDb)
    .then( results => {
      expect(results).toEqual(sample);
    })
})

test('deleteById removes a DB entry', ()=> {
  const {getAll} = todos; 
  return todos.deleteById(2, testDb)
    .then( (results) => {
      expect(results).toEqual(1);
      return getAll(testDb)
        .then( (content) => {
          expect(content.length).toEqual(2);
          expect(content[0].task).toEqual("Acquire wombats.");
          expect(content[1].task).toEqual("Profit.");
        })
      
    })
})

//probs better to look for thing and find it isn't there than verify that the remaining items are as they should be. 

test("updateById changes task", ()=> {
  const newTask = "sell wombat pelts"
  const {getAll} = todos; 
  return todos.updateById(2, newTask, testDb)
    .then( (results) => {
      expect(results).toEqual(1);
      return getAll(testDb)
        .then( (content) => {
          expect(content[1].task).toEqual(newTask);
        })
    })
})

test("searchByString returns middle entry", ()=> {
  return todos.searchByString("?", testDb)
    .then((results) => {
      expect(results).toEqual([sample[1]])
    })
})

test("completeById creates true values", ()=> {
  const {getAll} = todos; 
  return todos.completeById(1, testDb)
  .then( (results) => {
    expect(results).toEqual(1)
    return getAll(testDb)
    .then( (content) => {
      expect(content[0].completed).toBeTruthy()
    })
  })
})