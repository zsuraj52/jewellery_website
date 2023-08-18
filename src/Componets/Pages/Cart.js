import React from 'react';
import '../styles/Cart.css'; // Import your CSS file for styling
import Product from './Product';
import Footer from './Footer';

function Cart() {
    const products = [
        { name: 'BRACELETS', price: 100, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' },
        { name: 'RINGS', price: 150, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { name: 'EARRINGS', price: 200, image: 'https://images.unsplash.com/photo-1564867371282-8c041f74fd0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { name: 'EARRINGS', price: 400, image: 'https://plus.unsplash.com/premium_photo-1681276170021-2d1bc52e51e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { name: 'EARRINGS', price: 500, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { name: 'NEACKLACE', price: 600, image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' },
        { name: 'NEACKLACE', price: 700, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { name: 'RINGS', price: 300, image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' },
        { name: 'BRACELETS', price: 600, image: 'https://images.unsplash.com/photo-1615147921426-4ee54fa8765c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { name: 'RINGS', price: 200, image: 'https://images.unsplash.com/photo-1615655096345-61a54750068d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' },
        { name: 'NEACKLACE', price: 600, image: 'https://cdn0.rubylane.com/shops/2heartsjewelry/TRI369.1L.jpg' },
        { name: 'RINGS', price: 800, image: 'https://plus.unsplash.com/premium_photo-1671815628946-e71915ff3171?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80' },

        // Add more products here
      ];
      return (
        <div className="cart">
          <div className="product-list">
            {products.map((product, index) => (
              <Product key={index} name={product.name} price={product.price} image={product.image} />
            ))}
          </div>
          <Footer/>
        </div>
      );
    }

export default Cart;
