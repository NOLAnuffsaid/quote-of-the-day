/**
 * Created by widner on 6/21/17.
 */
var mocha = require('mocha')
var chai = require('chai')
var {readdirSync: readDir} = require('fs')
var events = require('events')
var {exec} = require('child_process')

var {BUILD_DIR} = require('../../src/constants/serverConstants')
var {cleanup} = require('../../src/utils/serverUtils')

const {expect} = chai
const {describe, it, after} = mocha

describe('Server Utils', () => {
  describe('#cleanup', () => {
    xit('should clean build dir when called', () => {
      expect(readDir(BUILD_DIR)).to.not.be.empty

      cleanup(BUILD_DIR)()
      expect(readDir(BUILD_DIR)).to.be.empty
    })
  })
})
