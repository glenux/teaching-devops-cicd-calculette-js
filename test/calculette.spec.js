var assert = require('assert');

var Calculette = require('../calculette');

    // it('should return -1 when the value is not present', function() {
    //  assert.equal( [1, 2, 3].indexOf(4), -1 );
    // });

describe('Calculette', function() {
  describe('#constructor()', function() {//{{{

    it('should return 0 by default', function() {
      let calc = new Calculette();
      assert.equal( calc.value(), 0 )
    })
  })//}}}

  describe('#set()', function() {//{{{
    it('it should work only with numbers', function() {
      let calc = new Calculette();
      const expectedError = new Error("Unable to handle non-numbers values")

      assert.throws(
        () => { calc.set("toto") }, 
        expectedError
      )
    })

    it('it should change the inner value of the calculette', function() {
      let calc = new Calculette();
      calc.set(100);
      let final = calc.value();

      assert.equal( final, 100 )
    });

   
    it('it should keep only the latest value set', function() {
      let calc = new Calculette();
      calc.set(50);
      calc.set(100);
      calc.set(200);
      let final = calc.value();

      assert.equal( final, 200 )
    });
  })//}}}

  describe('#reset()', function() {//{{{
    it('it should work only with numbers', function() {
      let calc = new Calculette();
      const expectedError = new Error("Unable to handle non-numbers values")

      assert.throws(
        () => { calc.set("toto") }, 
        expectedError
      )
    })

    it('should return 0 after reset', function() {
      let calc = new Calculette();
      assert.equal( calc.value(), 0  )
    });

    // FIXME: test that reset is composable too
  });//}}}

  describe('#add()', function() {//{{{
    it('it should work only with numbers', function() {
      let calc = new Calculette();
      const expectedError = new Error("Unable to handle non-numbers values")

      assert.throws(
        () => { calc.set("toto") }, 
        expectedError
      )
    })
    //
    it('it should not change the value when we add 0', function() {
      let calc = new Calculette();
      calc.set(100)
      calc.add(0) // added value
    
      assert.equal( calc.value(), 100 )
    });
 
    it('should changes the inner value by a difference of X', function() {
      let calc = new Calculette();
      calc.set(100)
      let initial = calc.value();
      let added = 98;
      calc.add(added) // added value
      let final = calc.value();

      assert.equal( final - initial, added )
    })

    it('should allow composing functions', function() {
      let calc = new Calculette()
      calc.set(100).add(10)
      assert.equal( calc.value(), 110)
    })
  })//}}}

  describe('#multiply()', function() {//{{{
    it('it should work only with numbers', function() {
      let calc = new Calculette();
      const expectedError = new Error("Unable to handle non-numbers values")

      assert.throws(
        () => { calc.set("toto") }, 
        expectedError
      )
    })
  
    it('should not change the value when we multiply with 1', function() {
      let calc = new Calculette();
      calc.set(100)
      calc.multiply(1)
      assert.equal( calc.value(), 100 ) 
    })
   
    it('should change to 0 when we multiply with 0', function() {
      let calc = new Calculette();
      calc.set(100)
      calc.multiply(0)
      assert.equal( calc.value(), 0 ) 
    })

    it('should work even with negative values', function() {
      let calc = new Calculette();
      calc.set(100)
      calc.multiply(-1)
      assert.equal( calc.value(), -100 ) 
    })
   
    // it changes the inner value by +X 
    //
    it('should allow composing functions', function() {
      let calc = new Calculette();
      calc.reset().add(10).multiply(2)
      assert.equal( calc.value(), 20)

      calc.reset().multiply(2).add(10)
      assert.equal( calc.value(), 10)
    })
  })//}}}

  describe('#substract()', function() {//{{{
    it('it should work only with numbers', function() {
      let calc = new Calculette();
      const expectedError = new Error("Unable to handle non-numbers values")

      assert.throws(
        () => { calc.set("toto") }, 
        expectedError
      )
    })
    //
    it('should remove X from the internal value', function() { 
      let calc = new Calculette()
      calc.set(100)
      calc.substract(10)
      assert.equal( calc.value(), 90)
    })

    it('should be invariant when X is zero (0)', function() {
      let calc = new Calculette()
      calc.set(100)
      calc.substract(0)
      assert.equal( calc.value(), 100)
    })

    it('should be composable with other methods', function() { 
      let calc = new Calculette()
      calc.set(100).add(10).substract(10)
      assert.equal( calc.value(), 100)

      calc.set(100).substract(10).add(10)
      assert.equal( calc.value(), 100)
    })
  })//}}}

  describe('#divide()', function() {
    it('it should work only with numbers', function() {
      let calc = new Calculette();
      const expectedError = new Error("Unable to handle non-numbers values")

      assert.throws(
        () => { calc.set("toto") }, 
        expectedError
      )
    })

    it('should divide the interval value by X', function() { 
      let calc = new Calculette()
      calc.set(100)
      calc.divide(2)
      assert.equal( calc.value(), 50)
    })

    it('should be invariant when X is one (1)', function() { 
      let calc = new Calculette()
      calc.set(100)
      calc.divide(1)
      assert.equal( calc.value(), 100)
    })

    it('should throw an exception when X is zero (0)', function() { 
      let calc = new Calculette()
      calc.set(100)

      const expectedError = new Error("Unable to divide by zero")

      assert.throws(
        () => {
          calc.divide(0)
        },
        expectedError
      )
    })

    it('should be composable with other methods', function() { 
      let calc = new Calculette()
      calc.set(100).multiply(10).divide(10)
      assert.equal( calc.value(), 100)

      calc.set(100).divide(10).multiply(10)
      assert.equal( calc.value(), 100)
    })
  })

  describe('#value()', function() {
    // je vérifie que la méthode existe
    // calc['value']
  })

})
