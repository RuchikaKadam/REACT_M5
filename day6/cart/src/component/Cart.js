import React,{useState} from 'react';
import '../App.css'

const Cart = ({ products, setProducts,setQuantity, quantity }) => {
    const [total, setTotal] = useState(0);

    function Increase(id){
        let tempProducts = products;
        tempProducts.map((product)=>{
            if(product.id === id ){
                product.quantity += 1;
                setTotal(total + product.price);
                setQuantity((prev) => prev+1)
            }
            return product;
        });
        setProducts([...tempProducts]);
    }

    function Decrease(id){
        let  tempProducts = [...products];
        tempProducts.map((product) => {
            if(product.id === id && product.quantity >= 1){
                product.quantity -= 1;
                setTotal(total - product.price);
                setQuantity((prev) => prev- 1)
            }
            return product;
        })
        setProducts(tempProducts);
    }
    function removeProduct(id){
        let tempProducts = [...products];
        let arr =  tempProducts.filter((product) => {
            if(product.id === id) {
                setTotal(total - product.quantity*product.price)
                setQuantity(quantity - product.quantity)
            }
            return product.id !== id;
        })
        setProducts(arr)
    }

  return (
    <div className="main-container-cart">
        {products.length <= 0 && <h3>is currently empty</h3>}
      {products.map((product) => {
        return (
          <div key={product.id} className='product-container'>
            <h4>{product.name}</h4>
            <p>Price: {product.price}</p>
            <button onClick={() => {removeProduct(product.id)}}>remove</button>
            <div>
              <button onClick={()=>{Increase(product.id)}}>+</button>
              <h4>{product.quantity}</h4>
              <button onClick={()=>{Decrease(product.id)}}>-</button>
            </div>
          </div>
        );
      })}
      <div>
        <div>
          <p>Total : {total}</p>
        </div>
        <button onClick={()=>{setProducts([]); setTotal(0); setQuantity(0)}}>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
