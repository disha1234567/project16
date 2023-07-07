// import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import property1 from '../images/property-6.jpg';
import property2 from '../images/property-.jpg';
import property3 from '../images/property-6.jpg';
import property4 from '../images/property-6.jpg';
import property5 from '../images/property-6.jpg';
import property6 from '../images/property-6.jpg';
import property7 from '../images/property-6.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Dream Homes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={property1}
              text='Find your dream home with us'
              label='Buy'
              path='/home-info'
            />
            <CardItem
              src='images/property-1.jpg'
              text='Find your dream home with us'
              label='Buy'
              path='/home-info'
            />
            <CardItem
              src='images/property-6.jpg'
              text='Unlock the door to your new home'
              label='Buy'
              path='/home-info'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/property-3.jpg'
              text='Experience luxury living'
              label='Sale'
              path='/home-info'
            />
            <CardItem
              src='images/property-6.jpg'
              text='Discover your perfect property'
              label='Sale'
              path='/home-info'
            />
            <CardItem
              src='images/property-8.jpg'
              text='Building better communities, one home at a time'
              label='Sale'
              path='/home-info'
            />
            <CardItem
              src='images/property-10.jpg'
              text='Building better communities, one home at a time'
              label='Sale'
              path='/home-info'
            />
            
          </ul>
        </div>       
      </div>     
    </div>    
  );
}
export default Cards;
