const fs = require('fs');
const fastCSV = require('fast-csv');
const { development } = require('./knexfile');

const knex = require('knex')(development);

const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ],
  exceptionHandlers: [new transports.File({ filename: 'exceptions.log' })]
});

let counter = 0;

fs.createReadStream('./FL_insurance_sample.csv')
  .pipe(fastCSV({ headers: true }))
  .on(
    'data',
    ({
      policyID,
      statecode,
      county,
      point_latitude,
      point_longitude,
      line,
      construction
    }) => {
      if (counter < 10) {
        knex
          .insert({
            policyID,
            statecode,
            county,
            point_latitude,
            point_longitude,
            line,
            construction
          })
          .into('FL_insurance_sample')
          .then(res => logger.info(res))
          .catch(err => logger.error(err));
        ++counter;
      }
    }
  )
  .on('end', res => {
    logger.info('Job is Done', res);
    process.exit();
  })
  .on('error', err => {
    logger.error(err);
    process.exit();
  });
