/**
 * Created by widner on 6/18/17.
 */
var mocha = require('mocha')
var chai = require('chai')

var {expect} = chai
var {describe, it} = mocha


describe('a thing', () => {
  it('should equal 2', () => {
    expect(1+1).to.equal(2)
  })
})