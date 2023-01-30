import { ProductsModel } from './products.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  mensProducts:ProductsModel[]=[
    {
      id:1,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg'
    },
    {
      id:2,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/home_ban.jpg'
    }
  ]
  WomensProducts:ProductsModel[]=[
    {
      id:1,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg'
    },
    {
      id:2,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg'
    },
    {
      id:3,
      name:'Jacket',
      desc:'Jackets to buy',
      price:10 ,
      imgUrl:'assets/images/girls_jack.jpg'
    }
  ]

  getAllMensProducts(){
    return[...this.mensProducts]
  }
  getAllWomensProducts(){
    return[...this.WomensProducts]
  }

}
