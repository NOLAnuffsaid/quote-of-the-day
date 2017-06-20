/**
 * Created by widner on 6/18/17.
 */

var assert = require('chai').assert
var test = require('selenium-webdriver/testing')
var firefox = require('selenium-webdriver/firefox')

const {Builder, By, until} = require('selenium-webdriver')

var {describe, it} = test

describe('Quote app', () => {
  it('should have `quote of the day` as title', () => {
    var driver = new Builder()
      .forBrowser('firefox')
      .build()

    driver.get('http://localhost:8080').then( driver => {
      driver.findElement(By.name('title'))
            .getText()
            .then((title) => {
              assert.equal(title, 'quotes of the day')
            })
    })

    driver.quit()
  })


  it('should have `Hello, World`', () => {
    var driver = new Builder()
      .forBrowser('firefox')
      .build()

    driver.get('http://localhost:8080').then( driver => {
      driver.findElement(By.className('app'))
            .getText()
            .then((msg) => {
              assert.equal(msg, 'Hello, World')
            })
    })

    driver.quit()
  })
})
