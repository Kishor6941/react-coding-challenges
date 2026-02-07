import { useState } from 'react';
import "./add-product.css"
interface Product {
  id: number;
  name: string;
  count?: number | undefined;
}

export default function AddProductToCart() {
  const products = [
    { id: 1, name: 'Mac Laptop' },
    { id: 2, name: 'iphone' },
    { id: 3, name: 'mobile' },
  ];
  const [cart, setCart] = useState([]);

  const addProduct = (product:Product) => {
    let existing = cart.find((ele:Product) => ele?.id === product?.id);
    if (existing) {
      let added = cart?.map((ele:Product) => {
        if (ele?.id === product?.id) {
          return {
            ...ele,
            count: (ele?.count || 0) + 1,
          };
        } else {
          return ele;
        }
      });

      setCart(added as any);
    } else {
      let prod = { ...product, count: 1 };
      setCart([...cart, prod] as any);
      console.log(cart);
    }
  };

  const removeProduct = (product:Product) => {
    let existing = cart.find((ele:Product) => ele?.id === product?.id);

    if (existing && product?.count !== 1) {
      let updated = cart?.map((ele:Product) => {
        if (ele?.id === product?.id) {
          return {
            ...ele,
            count: (ele?.count || 0) - 1,
          };
        } else {
          return ele;
        }
      });

      setCart(updated as any);
    } else {
      setCart(cart.filter((ele:Product) => ele?.id != product?.id));
    }
  };

  return (
    <div className='mx-auto mt-10 col-md-6 border p-5'>
      <div className='mb-5 border-bottom pb-3'>
        <h2>Available Products</h2>
        {products?.map((ele) => (
          <>
            <li key={ele?.id} style={{ padding: '5px' }}>
              {ele?.name}
              <span style={{ padding: '5px' }}>
                <button className='btn btn-success' onClick={() => addProduct(ele)}>+</button>{' '}
              </span>
            </li>
          </>
        ))}
      </div>

      <div>
        <h3> Carts </h3>

        {cart?.length ? (
          cart?.map((ele:Product) => (
            <>
              <li key={ele?.id} style={{ padding: '5px' }}>
                {ele?.name} {ele?.count}
                <span style={{ padding: '5px' }}>
                  <button className='btn btn-primary' onClick={() => addProduct(ele)}>+</button>{' '}
                  <button className='btn btn-danger' onClick={() => removeProduct(ele)}>-</button>
                </span>
              </li>
            </>
          ))
        ) : (
          <h5>No product added to cart</h5>
        )}
      </div>
    </div>
  );
}
