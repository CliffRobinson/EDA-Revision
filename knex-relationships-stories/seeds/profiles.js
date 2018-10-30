const aardImg = "http://2.bp.blogspot.com/-6IpRFiCKaYI/UDKzhttqE9I/AAAAAAAADGE/sTh5k8x00pA/s1600/7CC169DF-7FA9-4AA0-976F-60879F5DFAE9.JPG";
const babbImg = "https://us.123rf.com/450wm/comodo777/comodo7771410/comodo777141000001/32145032-baboon-cartoon.jpg?ver=6"
const capyImg = "https://cdn1.vectorstock.com/i/1000x1000/27/70/cute-capybara-cartoon-vector-9822770.jpg"
const duckImg = "https://upload.wikimedia.org/wikipedia/en/f/f4/Daffy_Duck.svg"

exports.seed = function (knex, Promise) {
    return knex('profiles').del()
      .then(function () {
        return knex('profiles').insert([
          {user_id: 99901, url: 'www.aardpark.com', img_url: aardImg},
          {user_id: 99902, url: 'www.lookatmybutt.com', img_url: babbImg},
          {user_id: 99903, url: 'www.whatisacapybaratho.biz', img_url: capyImg},
          {user_id: 99904, url: 'www.duck-tales--woo-oo.com', img_url: duckImg},
          ])
      })
  }
  