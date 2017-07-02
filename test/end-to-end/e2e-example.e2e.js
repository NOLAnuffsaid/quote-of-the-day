/**
 * Created by widner on 6/18/17.
 */
var assert                                = require('chai').assert
var {Builder, promise}                    = require('selenium-webdriver')
var test                                  = require('selenium-webdriver/testing')
var firefox                               = require('selenium-webdriver/firefox')
var {describe, it, beforeEach, afterEach} = test
var driver                                = {}

promise.USE_PROMISE_MANAGER = false

describe('Quote app', () => {
  beforeEach(() => {
    driver = new Builder()
      .forBrowser('firefox')
      .build()
  })
  xit('should have `quote of the day` as title', () => {
    driver.get('https://localhost:8080').then(driver => {
      driver.findElement(By.name('title'))
            .getText()
            .then((title) => {
              assert.equal(title, 'quotes of the day')
            })
    })
    driver.quit()
  })
  xit('should have `Hello, World`', () => {
    driver.get('https://localhost:8080').then(driver => {
      driver.findElement(By.className('app'))
            .getText()
            .then((msg) => {
              assert.equal(msg, 'Hello, World')
            })
    })
    driver.quit()
  })
})
