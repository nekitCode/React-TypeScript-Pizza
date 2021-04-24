import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import {Header} from './components';
import {Home, Cart} from './pages'; 

export interface IPizzas {
  pizzas: IPizzasItems[];
}

interface IPizzasItems {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}


const App: React.FC = () => {

  const [pizzas, setPizzas] = useState<IPizzas[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((res) => res.json())
    .then((json) => setPizzas(json.pizzas));
  },[])

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' render={() => <Home items={pizzas}/>} />
          <Route exact path='/cart' component={Cart} />
        </div>
      </div>
    </>
  ) 
}

export default App;

// import data from './DATA.json';
// const [search, setSearch]= useState("");

// return (
//   <div classNameNameName="App">
//     <input 
//     type='text' 
//     placeholder='Search...'
//     onChange={(event: React.FormEvent<HTMLInputElement>): void => {
//       setSearch(event.currentTarget.value)
//     }}/>
//     {data.filter((e) => {
//       if (search === "") {
//         return e
//       } else if (e.first_name.toLowerCase().includes(search.toLowerCase())) {
//         return e
//       }
//     }).map((elem:any, index:number) => {
//       return (
//         <ul key={index}>
//           <li>{elem.first_name}</li>
//         </ul>
//       )
//     })}
//   </div>
// );
