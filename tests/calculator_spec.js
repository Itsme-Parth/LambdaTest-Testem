const {driver} = require("Testem-LT-Launcher-config"); 

describe('calculator', function() {
    it('should add', function() {
      if (1 + 1 !== 2) {
        throw new Error('oh no, math is broken');
      }
    });
  });