const { Model } = require('objection');
const Knex = require('knex');

const { development } = require('./knexfile');

// Initialize knex.
const knex = Knex(development);
module.exports = knex;

// Give the knex object to objection.
// Model.knex(knex);

// export default Model;
