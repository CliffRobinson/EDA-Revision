const testEnv = require('./test-environment')
const todos = require('../todo')

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
