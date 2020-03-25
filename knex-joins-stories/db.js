const knex = require('knex');
const config = require('./knexfile').development
const db = knex(config);

function getWombles() {
    return db('wombles')
        .join('characteristics', 'wombles.characteristic_id', 'characteristics.id')
        .select('*','wombles.id as id', 'characteristics.id as characteristic_id')
}

function getOneWomble(id) {
    return db('wombles')
    .join('characteristics', 'characteristics.id', 'wombles.characteristic_id')
    .where('wombles.id', id)
}

function getAssignments() {
    return db('wombles')
    .join()
}

module.exports = {
    getWombles,
    getOneWomble
}