const fs = require('fs');

const jsFiles = fs.readFileSync('./APIs/addToCart.js', 'utf-8');

const checkName = /\/\/Name:/ig
const checkId = /\/\/ID:/gi


describe('Check name and Id in comments', () => {

    it('check in addToCart.js', ()=> {
        expect(checkId&&checkName.test(jsFiles)).toBeTruthy();
    })
    it('check in addToCart.js', ()=> {
      expect(checkId&&checkName.test(jsFiles)).toBeTruthy();
  })

  });
  

    
    
  
