var assert = require('assert');
var fs = require('fs');
var parser = require('../../lib/lifts/parser');
var parse = require('../../lib/resorts/homewood');

/*global describe, it */
describe('parse homewood', function() {

  it('should return lift status', function(done) {
    var stream = fs.createReadStream(__dirname + '/example/homewood.html');
    stream.on('error', done);
    stream.pipe(parser(parse, function(err, status) {
      var expected = {
        'Madden Chair': 'open',
        'Quail Chair': 'open',
        'Ellis Chair': 'open',
        'Old Homewood Express': 'open',
        'Critter Canyon Surface Lift': 'open',
        'Happy Platter &amp; Alpine Platter S': 'open'
      };
      assert.deepEqual(status, expected);
      done(err);
    }));
  });
});