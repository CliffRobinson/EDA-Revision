exports.seed = function (knex, Promise) {
    return knex('posts').del()
      .then(function () {
        return knex('posts').insert([
            {id: 1,user_id:99901, title:"monday", content: "i met this girl"},
            {id: 2,user_id:99901, title:"tuesday", content: "took her for a drink"},
            {id: 3,user_id:99901, title:"sunday", content: "we chilled"},
            {id: 4,user_id:99902, title:"november", content:"it's hard to light a candle in this cold rain"},
            {id: 5,user_id:99902, title:"september", content:"wake me up when this ends"}
        ])
      })
    }
            