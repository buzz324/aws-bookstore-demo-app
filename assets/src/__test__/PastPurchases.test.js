import PastPurchases from "../modules/pastPurchases/PastPurchases";
import { Auth, API } from "aws-amplify";
import { userInfo } from "os";
import supertest from "supertest";

describe('Check componentDidMount function', () => {

    const mockPastPurchase = jest.fn().mockReturnThis();
    const pastPurchases = new PastPurchases(mockPastPurchase)

    const userInfo = jest.fn(Auth.currentUserInfo()).mockImplementation(x=>{return 1;})
    const orders= [
        {
            orderDate: '2021-10-29',
            orderId: '1234',
            books: [ {bookId: '12345',
                quantity: 12,
                price: 12}]
        }
    ];
    PastPurchases.componentDidMount()

    //Testing componentDidMount 

    it('test AWS Authentication', ()=> {
        //Recevie default value of Auth.currentUserInfor using moking function 

        Auth.currentUserInfo();
        //output of number of callings are expected from the test
        expect(userInfo).toHaveBeenCalledTimes(1);


    });

    //Check if the order API is received to local host
  it('Test GET /order', ()=> {
                
         supertest("http://localhost:3000")
        .get('/order')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;

          //Set default conditions for order variables to test if they receive their default values
          expect(res.body.orderDate).toBe("2021-10-29-")
          expect(res.body.orderId).toBe("1234")
          expect(res.body.orderId.bookId).toBe("12345")
          expect(res.body.orderId.quantity).toBe("12")
          expect(res.body.orderId.price).toBe("12")
        
        });

    });
    

   
  });
  
 

