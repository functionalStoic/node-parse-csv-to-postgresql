exports.up = ({ schema }) =>
  schema.createTable('FL_insurance_sample', table => {
    table.integer('policyID').primary();
    table.string('statecode');
    table.string('county');
    table.float('point_latitude');
    table.float('point_longitude');
    table.string('line');
    table.string('construction');
    table.timestamps(true, true);
  });

exports.down = ({ schema }) => schema.dropTable('FL_insurance_sample');
