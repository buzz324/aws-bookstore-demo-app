import {jest} from '@jest/globals'

import PastPurchases from "../modules/pastPurchases/PastPurchases";
import { Auth, API } from "aws-amplify";

describe('Check componentDidMount function', () => {

    const mockPastPurchase = jest.fn().mockReturnThis();
    const pastPurchases = new PastPurchases(mockPastPurchase)

    console.log(pastPurchases);

    const mockUserInfo = jest.fn(Auth.currentUserInfo()).mockImplementation(x=>{return 1;})
    PastPurchases.componentDidMount()

    it('test AWS Authentication', ()=> {
        Auth.currentUserInfo();
        expect(mockUserInfo).toHaveBeenCalledTimes(1);
    });

    it('check in BestSellerProductRow.tsx', ()=> {
        expect(checkId&&checkName.test(jsFiles)).toBeTruthy();
    });
   
  });
  
 

