//var regCheck = require('assert')
describe('regCheckfunction()', function(){
  it('should check which regNumber it is from', function(){
   assert.equal(regCheck("DV 23 NB GP", "GP"),true)
   assert.equal(regCheck("DV 23 LP GP", "MP"),false)
  })
})
