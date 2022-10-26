const { Tourist_Activities, conn } = require('../../src/db.js');
const { expect } = require('chai');
const assert = require('chai').assert

describe('Tourist_Activities model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Tourist_Activities.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Tourist_Activities.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Tourist_Activities.create({ name: '' });
      });
    });
  });
});
