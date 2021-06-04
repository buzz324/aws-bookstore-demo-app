
const fs = require('fs');

const jsFiles = fs.readFileSync('../modules/bestSellers/BestSellers.tsx', 'utf-8');

const checkName = /Top 20 best sellers/g


describe('Check name and Id in comments', () => {

  
    //check the heading
    it('check in BestSellers.tsx', ()=> {
        expect(checkName.test(jsFiles)).toBeTruthy();
    });
 
  });
  
 