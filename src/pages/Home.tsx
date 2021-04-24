import React from 'react';
import { IPizzas } from '../App';
import {Categories, PizzaBlock, SortPopUp} from '../components';

interface PizzaProps {
  items: IPizzas[]; 
}

const Home: React.FC<PizzaProps> = ({items}) => {
  console.log(items);
  
    return (
        <div className="container">
          <div className="content__top">
            <Categories
              items={[
                'Мясные',
                'Вегетарианская',
                'Гриль',
                'Острые',
                'Закрытые'
              ]}
            />
            <SortPopUp 
              items={[
                'популярности',
                'цене',
                'алфавиту'
                ]}
              />
          </div>
          <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock />
            </div>
      </div>
    );
}

export default Home;
