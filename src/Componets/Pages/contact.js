import React, { useState } from "react";
import "../styles/contact.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";


export default function Contact() {
    const [formData , setFormData] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
      })
    const openToaster = () => {
        setFormData ({
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
        <div className='mt-md-5 my-3'>

            <section class="mb-4 container border">

                <h2 class="h1-responsive font-weight-bold text-center my-4 contact-sub mt-3 text-center">Contact us</h2>
                <p class="text-center w-responsive mx-auto mb-5 text-white">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="row mt-5">
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" placeholder="name" class="form-control" value={formData.name} onChange={(e)=>{setFormData({ ...formData ,name:e.target.value})}}></input>
                                        <label for="name" class="text-white">Your name</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" placeholder="email" class="form-control" value={formData.email} onChange={(e)=>{setFormData({ ...formData ,email:e.target.value})}}></input>
                                        <label for="email" class="text-white">Your email</label>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" placeholder="subject" class="form-control" value={formData.subject} onChange={(e)=>{setFormData({ ...formData ,subject:e.target.value})}}></input>
                                        <label for="subject" class="text-white">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" placeholder="message. . . . ." rows="2" class="form-control md-textarea" value={formData.message} onChange={(e)=>{setFormData({ ...formData ,message:e.target.value})}}></textarea>
                                        <label for="message" className="text-white">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div class="text-center text-md-left">
                            <button class="btn btn-light w-25 p-2" onClick={openToaster}>Send</button>
                            <ToastContainer/>
                        </div>
                        <div class="status"></div>
                    </div>

                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p className="text-white">1343 Shivajinagar, opp Jain Mandir, Pune</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p className="text-white">020-1234 5678</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p className="text-white">contact@chanel.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
            <Footer/>
        </div>
    );
}
