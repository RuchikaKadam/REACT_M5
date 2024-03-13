import './App.css';
import Navbar from './component/Navbar';
import Cart from './component/Cart';
import React,{useState} from 'react';

function App() {
  const [products,setProducts] = useState([
    {
      id: 1,
      name:'Samsung G3',
      quantity: 0,
      price: 28000,
    },
    {
      id: 2,
      name:'Samsung B2',
      quantity: 0,
      price: 38000,
    },
    {
      id: 3,
      name:'Samsung V7',
      quantity: 0,
      price: 42000,
    },
    {
      id: 4,
      name:'Samsung S5',
      quantity: 0,
      price: 25000,
    }
  ]);

  const [quantity, setQuantity] = useState(0);
  return (
    <div className="App">
      <Navbar quantity={quantity}/>
      <Cart products={products} setProducts={setProducts} quantity={quantity} setQuantity={setQuantity}/>
    </div>
  );
}

export default App;
