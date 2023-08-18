import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Maincontent() {
const [formData , setFormData] = useState({
  firstname:"",
  lastname:"",
  phone:"",
  email:"",
  message:""
})
  const openToaster = () => {
    setFormData({
      firstname:"",
      lastname:"",
      phone:"",
      email:"",
      message:""
    })
    toast.success('Thank You For Your Response', {
      position: toast.POSITION.TOP_CENTER
    });
  };
  return (
    <>
     <div className="main-background">
        <div className="container">
          <div className="main-content">
            <h1>Chanel Golden Jewellery</h1>
            <h2>24 Caratage Yellow Gold Bracelet</h2>
            <p>Shope the latest designs from new brands</p>
            <Link to="/">- View Products</Link>
          </div>
        </div>
      </div>
    <section className="section" id="custom-sec">
  <div className="container">
    <div className="section-head">
      <h2>Custom Jewellery</h2>
      <p>Latest Design</p>
    </div>
    
    <div className="collection-list">
      <ul>
        <li><img src="http://www.thomassabo.com/dw/image/v2/AAQY_PRD/on/demandware.static/-/Sites-ts-master-catalog/default/dwbb260100/productimages/LBA0102-415-12.png?sw=310&sfrm=png" style={{width:"180px"}} alt='img' href="/home"/>
          <div className="list-head">
            <h3>Bracelets</h3>
            <span>The description of the item.</span>
          </div>
          <Link className='button' to="/product">View Products</Link>
        </li>
    

        <li><img src="https://s-media-cache-ak0.pinimg.com/originals/27/41/69/274169b4444ccf7448d4133c13dd05c1.png" style={{width:"180px"}} alt='img'/>
          <div className="list-head">
            <h3>Rings</h3>
            <span>The description of the item.</span>
          </div>
          <Link className='button' to="/product">View Products</Link>
        </li>

        
        <li><img src="https://s-media-cache-ak0.pinimg.com/originals/c9/89/55/c98955bbb6331b4aa98cf33bdc84a84a.png" style={{width:"180px"}} alt='img'/>
          <div className="list-head">
            <h3>Earrings</h3>
            <span>The description of the item.</span>
          </div>
          <Link className='button'to="/product">View Products</Link>
       </li>

        
        <li><img src="https://cdn0.rubylane.com/shops/2heartsjewelry/TRI369.1L.jpg" style={{width:"180px"}} alt='img'/>
          <div className="list-head">
            <h3>Pendants</h3>
            <span>The description of the item.</span>
          </div>
          <Link  className='button' to="/product">View Products</Link>
       </li>
        
      </ul>
    </div>
    {/* <!-- / collection-list --> */}
    
  </div>
  {/* <!-- / container --> */}
</section>


{/* // <!-- ========== NEW COLLECTION ========== --> */}

<section className="section" id="new-sec">
    <div className="new-collection">
    
        <div className="left"></div>

        <div className="right"></div>

        <div className="middle">
          <div className="mid-title">
            <h2 className='text-center'>New Collection</h2>
            <a href="/product">View products</a>
          </div>
        </div>
                 
    </div>
</section>

{/* // <!-- ========== DESIGNER COLLECTION ========== --> */}

<section className="section designer-collection clearfix" id="designer-sec">
  <div className="container">
    <div className="section-head">
        <h2>Designer JEWELRY</h2>
        <p>Explore Design</p>
    </div>
    
    <div className="collection-list clearfix">
      <ul>
        <li><img src="https://cdn0.rubylane.com/shops/2heartsjewelry/TRI369.1L.jpg" style={{width:"180px"}} alt='img'/>
          <div className="list-head">
            <h3>Bracelets</h3>
            <span>The description of the item.</span>
          </div>
        </li>
    

        <li><img src="http://www.pngmart.com/files/1/Jewellery-Ring-PNG-Clipart.png" style={{width:"180px"}} alt='img'/>
          <div className="list-head">
            <h3>Rings</h3>
            <span>The description of the item.</span>
          </div>
        </li>

        
        <li><img src="https://s-media-cache-ak0.pinimg.com/originals/c9/89/55/c98955bbb6331b4aa98cf33bdc84a84a.png" style={{width:"180px"}} alt='img'/>
          <div className="list-head">
            <h3>Earrings</h3>
            <span>The description of the item.</span>
          </div>
       </li>

      </ul>
      
    </div>
    {/* <!-- / collection-list --> */}
        
  </div>
  {/* <!-- / container --> */}
</section>

{/* // <!-- ========== SECTION CARDS ========== --> */}

<section className="section card-wrapper">
  
  <section className="card-one">
  </section>
  
  <section className="card-two">
    <div className="card-title">
      <h3>Varuna D Jani.</h3>
      <p>Details about the product goes here.</p>
      <a href="#home">View more</a>
    </div>
  </section>

  <section className="card-three">
     <div className="card-title">
      <h3>Suhani Pittie</h3>
      <p>Details about the product goes here.</p>
      <a href="#home">View more</a>
    </div>
  </section>
  
  <section className="card-four">
  
  </section>
  
</section>
{/* // <!-- card wrapper --> */}

{/* // <!-- ========== SECTION INSTAGRAM ========== --> */}
  
<section className="section gallery cleafix">
  
  <div className="container">
      <div className="section-head">
          <h2>Designer Gallery</h2>
          <p>Explore Design</p>
      </div>
      <ul className="gallery-showcase">

        <li>
          <figure>
            <img src="https://static.pexels.com/photos/265856/pexels-photo-265856.jpeg" alt=""/>
          </figure>
        </li>

        <li>
          <figure>
            <img src="https://static.pexels.com/photos/230290/pexels-photo-230290.jpeg" alt=""/>
          </figure>
        </li>

        <li>
          <figure>
            <img src="https://static.pexels.com/photos/248077/pexels-photo-248077.jpeg" alt=""/>
          </figure>
        </li>

      </ul>
  </div>
  
</section>

{/* // <!-- ========== ABOUT ========== --> */}

<section className="section about" id="about">
    <div className="section-head">
        <h2>About Us</h2>
        <p>Learn more about us and quality of our products</p>
    </div>
  
  
      <div className="wrapper clearfix">

        <div className="left">
        <div className="text">
            
          </div>
        </div>

        <div className="right">
          <div className="text">
            <h3>Who we are</h3>
            <br/>
            <p>
            Welcome to our exquisite world of jewelry, where elegance meets craftsmanship, and every piece tells a story of beauty and refinement. At [Your Jewelry Website Name],
            we are more than just a jewelry store, we are curators of timeless artistry and symbols of cherished moments.
            </p>
          </div>
        </div>
        
        

      </div>
      {/* <!-- / wrapper --> */}
  
</section>

{/* // <!-- ========== CONTACT ========== --> */}

<section className="section contact" id="contact">
  <div className="container">
    <div className="section-head">
        <h2>Contact Us</h2>
        <p>Contact Us for More Details</p>
    </div>  
    
    <form>
      <input type='text' name="firstname" placeholder="Your First Name" value={formData.firstname} onChange={(e)=>{setFormData({ ...formData ,firstname:e.target.value})}}/>
      
      <input type="text" name="lastname" placeholder="Your Last Name" value={formData.lastname} onChange={(e)=>{setFormData({ ...formData ,lastname:e.target.value})}}/>
      
      <input type="text" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={(e)=>{setFormData({ ...formData ,phone:e.target.value})}}/>
      
      <input type="text" name="email" placeholder="Your Email Address" value={formData.email} onChange={(e)=>{setFormData({ ...formData ,email:e.target.value})}}/>
      
      <textarea name="message" rows="8" placeholder="Your Message" value={formData.message} onChange={(e)=>{setFormData({ ...formData ,message:e.target.value})}}></textarea>
      <br/>
      <input type="button" value="Send" onClick={openToaster} />
      <ToastContainer/>
    </form>
  
  </div>
</section>
<Footer/>
    </>
  )
}
