const sampleData = [
  {id: 1, task: 'Acquire wombats.', completed:0},
  {id: 2, task: '???', completed:0},
  {id: 3, task: 'Profit.', completed:0}
]

exports.sample = sampleData

exports.seed = function (knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert(sampleData)
    })
}
