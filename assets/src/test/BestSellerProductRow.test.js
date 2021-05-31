const fs = require('fs');

const jsFiles = fs.readFileSync('./modules/bestSellers/BestSellerProductRow.tsx', 'utf-8');

const checkName = /\/\/Name:/ig
const checkId = /\/\/ID:/gi


describe('Check name and Id in comments', () => {

  
    it('check in BestSellerProductRow.tsx', ()=> {
        expect(checkId&&checkName.test(jsFiles)).toBeTruthy();
    });
 
  });
  
 

