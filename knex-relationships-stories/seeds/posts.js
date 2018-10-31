exports.seed = function (knex, Promise) {
    return knex('posts').del()
      .then(function () {
        return knex('posts').insert([
            {user_id:99901, title:"monday", content: "i met this girl"},
            {user_id:99901, title:"tuesday", content: "took her for a drink"},
            {user_id:99901, title:"sunday", content: "we chilled"},
            {user_id:99902, title:"november", content:"it's hard to light a candle in this cold rain"},
            {user_id:99902, title:"september", content:"wake me up when this ends"}
        ])
      })
    }
            