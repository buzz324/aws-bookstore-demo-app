const fs = require('fs');

const jsFiles = fs.readFileSync('../modules/cart/CartProductRow.tsx', 'utf-8');

const checkName = /\/\/Name:/ig
const checkId = /\/\/ID:/gi


describe('Check name and Id in comments', () => {

  
    it('check in CartProductRow.tsx', ()=> {
        expect(checkId&&checkName.test(jsFiles)).toBeTruthy();
    });
 
  });
  
 

