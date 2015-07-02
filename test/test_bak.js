var fakeArray = [];
//    require('../fakearray.js');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

var fakeArray = [1,2,3,4,5,6];

describe('My fake array object', function() {
  describe('The pop method', function() {
    it('should return the final element', function() {
      assert.equal(fakeArray.pop(), 6);
    });
  });
});

describe('The post-pop array length', function() {
    it('should return the new array length', function() {
        expect(fakeArray.length).to.equal(5);
    });
});

describe('Populated array', function() {
        it('array should have contents', function() {
        expect(fakeArray).to.not.be.empty;
  });
});

describe('Contents of the array items', function() {
        it('should all be integers', function() {
        expect(fakeArray).to.not.contain.a('string');
  })
});

//describe('This', function() {
//    it('should return [1,2,3,4,5,6]',function(){
//        expect(fakeArray.map).to.contain(1,2,3,4,5,6);
//  })
//});


//describe('Map deep equals', function() {
//            it('should return [1,2,3]',function(){
//            assert.equalfakeArray.map),[1,2,3]
//            )}
//    });

//
//
//var loadFactors = fakeArray.map(function(){
//    return elevator.loadFactor()
//})

//
//expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
//expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
//expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
//expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
//expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
//expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
//expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo', 7});
//expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
//expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys([{'bar': 6}}]);
//
//
//describe('Array', function(){
//  describe('#indexOf()', function(){
//    it('should return -1 when the value is not present', function(){
//      assert.equal(-1, [1,2,3].indexOf(5));
//      assert.equal(-1, [1,2,3].indexOf(0));
//    })
//  })
//})
//

//describe('Array', function(){
//  describe('#indexOf()', function(){
//    it('should return -1 when the value is not present', function(){
//      assert.equal(-1, [1,2,3].indexOf(5));
//      assert.equal(-1, [1,2,3].indexOf(0));
//    })
//  })
//})

