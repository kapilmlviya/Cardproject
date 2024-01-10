//import React from 'react';
import './App.css';
import card from './imgcard/bar.jpg';
import car from './imgcard/salon2.jpg';
import cars from './imgcard/salon2.jpg';
import care from './imgcard/salon3.jpg';
import cares from './imgcard/qr.jpg';
import { useState } from 'react';




const App = () => {
  const [rating, setRating] = useState('');
  const [selectedRating, setSelectedRating] = useState("");

  const ratings = (event) => {
    const selectedValue = event.target.value;
    setRating(selectedValue);
    setSelectedRating(selectedValue);

    // Check if the selected value is 1, 2, or 5 (or any specific values you want)
    if (selectedValue === "1" || selectedValue === "2" || selectedValue === "3" || selectedValue === "4" || selectedValue === "5") {
      // If it's 1, 2,3,4 or 5, automatically select stars
      const allStarInputs = document.querySelectorAll('input[name="rating"]');
      allStarInputs.forEach((input, index) => {
        // Check the input if its index is less than or equal to the selected value
        input.checked = index + 1 <= parseInt(selectedValue);
      });
    }
  };

  return (
    <div className='container mt-3'>

      <div className='row justify-content-center' >
        <div className='col-md-5'>
          {/* front page */}
          <div className="card  mb-1 " style={{ background: "#043636" }}>
            <div className="cola">
              <img
                src={card}
                className="card  border-0"
                alt=""
                style={{
                  height: "230px", width: "100%", backgroundSize: "cover"
                }}
              />
            </div>

            <div className="card-body ">
              <div class="container">
                <div class="row">
                  <div class="col-auto">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D"
                      className="rounded-circle img-fluid"
                      style={{
                        height: "120px",
                        width: "120px",
                        marginTop: "-70px",
                        position: "relative",
                        border: "3px solid #d7a777"
                      }}
                      alt="..."
                    />
                  </div>
                  <div class="col">
                    <h6 className='' style={{ color: "#d59651" }}>Mr. Pranay Gupta<br /><small className='fs-6 fw-normal' style={{ color: "white" }}>( Owner )</small></h6>
                  </div>
                  <p className=' mt-4' style={{ color: "white", fontSize: "13px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis fugit  molestias temporibus  rerum fugiat.</p>
                </div>
              </div>







              <div className='d-flex justify-content-center'>
                <div className='p-1 fs-4 m-1' style={{ color: "#c18b48", background: "#234748", borderRadius: "50%", width: "35px", height: "35px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa fa-phone"></i>
                </div>
                <div className='p-1 fs-4 m-1' style={{ color: "#c18b48", background: "#234748", borderRadius: "50%", width: "35px", height: "35px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa fa-whatsapp"></i>
                </div>
                <div className='p-1 fs-4 m-1' style={{ color: "#c18b48", background: "#234748", borderRadius: "50%", width: "35px", height: "35px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className='p-1 fs-4 m-1' style={{ color: "#c18b48", background: "#234748", borderRadius: "50%", width: "35px", height: "35px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa fa-envelope"></i>
                </div>
                <div className='p-1 fs-4 m-1' style={{ color: "#c18b48", background: "#234748", borderRadius: "50%", width: "35px", height: "35px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa fa-paper-plane iconbtn"></i>
                </div>

              </div> <br />
              <div>
                <h4 className="contact p-1" style={{ color: "white" }}> Contact :</h4>
                <div class="container-fluid mt-3">
                  <div class="row">
                    <div class="col">
                      <li className='fs-6' style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa fa-envelope" style={{ fontSize: "20px", color: "#031b43", background: 'white', borderRadius: '20%', padding: '6px', marginRight: '10px' }}></i>
                        <p style={{ color: 'white', marginTop: "10px", fontSize: "13px" }}> info@isoftzone.com </p>
                      </li>
                    </div>

                    <div class="col">
                      <li className='fs-6' style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa fa-phone" style={{ fontSize: "20px", color: "#031b43", background: 'white', borderRadius: '20%', padding: '6px', marginRight: '10px' }}></i>
                        <p className='' style={{ color: 'white', marginTop: "13px", fontSize: "12px" }}> +91 74156-64456</p>
                      </li>
                    </div>
                  </div>
                </div>

                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                      <li className='fs-6' style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa a fa-globe contact-icon" style={{ fontSize: "20px", color: "#031b43", background: 'white', borderRadius: '20%', padding: '6px', marginRight: '10px' }}></i>
                        <p style={{ color: 'white', marginTop: "10px", fontSize: "13px" }}> http://isoftzone.com  </p>
                      </li>
                    </div>

                    <div class="col">
                      <li className='fs-6' style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa fa-map-marker" style={{ fontSize: "20px", color: "#031b43", background: 'white', borderRadius: '20%', padding: '6px', marginRight: '10px' }}></i>
                        <p className='' style={{ color: 'white', marginTop: "13px", fontSize: "12px" }}> Indore,Madhya Pradesh</p>
                      </li>
                    </div>
                  </div>
                </div>






              </div>


            </div>

          </div>


          {/* End front page */}

          {/* about us*/}
          <div className="card mb-1 bg-light " style={{ border: "4px solid #043636" }}>
            <div className="card-body" style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }} >
              <div className='aboutus container-fluid'>
                <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                  About Us : </h4>
                <p style={{ color: "#1a0dab" }}> <hr /></p>
              </div>

              <div class="container-fluid text-center">
                <div className='container'>
                  <div class="row align-items-start">
                    <div class="col">
                      <h5 className='fst-italic fw-bolder' style={{ color: "#212541" }}> Company Name :</h5>
                    </div>
                    <div class="col" style={{ color: "#212541" }} >
                      <p> i-SOFTZONE  </p>
                    </div>
                  </div>
                </div>
                <div class="container-fluid text-center">
                  <div className='container'>
                    <div class="row align-items-start">

                      <div class="col " style={{ color: "#212541" }}>

                        <h5 className='fst-italic fw-bolder'> 	Nature Of Business :</h5>
                      </div>
                      <div class="col" style={{ color: "#212541" }} >
                        <p> Software & Development Company </p>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row align-items-start">

                  <div class="col">
                    <h5 className="fst-italic fw-bolder" style={{ color: "#212541" }}>Our Specialities :</h5>
                    <p>
                      <li> E-commerce solution development </li>
                      <li> Develop ui ux base design </li>
                      <li>Web application development</li>
                      <li> Software application development </li>
                      <li> Mobile application development</li>
                      <li> Creative design with advanced technology </li>
                      <li> Highly knowledgeable & professionals team </li>

                    </p> <br />
                    <h5 className="fst-italic fw-bolder" style={{ color: "#212541" }}> Welcome To I-SoftZone :</h5>
                    <p>
                      i-Softzone has proved its excellence in the field of web design <br /> & web development and today it has successfully established <br />  itself as one of the best and most reliable offshore ecommerce <br />  web site design & development, software designing company <br />  where you can outsource your services for affordable prices.
                    </p>

                 
                    <div>
                      <p><h5 className="fst-italic fw-bolder" style={{ color: "#212541" }}>Whatsapp Link :</h5> https://www.facebook.com/isoftzone/</p><p><h5 className="fst-italic fw-bolder" style={{ color: "#212541" }}>Facebook Page Link :</h5> https://www.facebook.com/isoftzone/</p><p><h5 className="fst-italic fw-bolder" style={{ color: "#212541" }}>Twitter Page Link :</h5> https://twitter.com/isoftzone?lang=en</p><p><h5 className="fst-italic fw-bolder" style={{ color: "#212541" }}>Linkedin Page Link :</h5> https://in.linkedin.com/company/i-softzone</p>
                     
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* End about us*/}

          
          {/* services us*/}

          <div className="card mb-1 service bg-light" style={{ border: "4px solid #043636" }}>
            <div className="card-body" style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)"}} >
              <h4 className="card-title text-center fst-italic fw-bolder p-1 " style={{ color: "white" }} >
                Our Services : </h4>
              <p style={{ color: "white" }}> <hr /></p>
              <div class="container-fluid">
                <div class="row">
                  <div class="col servia text-center ">
                    <i className="fa a fa-globe contact-icon " style={{ fontSize: "30px", color: "white", background: '#043636', borderRadius: '20%', padding: '6px', marginRight: '10px', marginTop: "20px" }}></i>
                    <h6 style={{ color: "white", marginTop: "10px" }}> Web Devlopment </h6>
                    <p style={{fontSize:"15px",color:"gray"}}>   Web Devlopment </p>
                  </div>

                  <div class="col servia text-center">
                    <i className="fa fa-newspaper-o" style={{ fontSize: "30px", color: "white", background: '#043636', borderRadius: '20%', padding: '6px', marginRight: '10px', marginTop: "20px" }}></i>
                    
                    <h6 style={{ color: "white", marginTop: "10px" }}> Android Devlopment </h6>
                    <p style={{fontSize:"15px",color:"gray"}}>  Android Devlopment </p>
                    </div>

           

                  
                </div>
              </div>

              <div class="container-fluid">
              <div class="row">
                <div class="col servia text-center ">
                  <i className="fa a fa-globe contact-icon " style={{ fontSize: "30px", color: "white", background: '#043636', borderRadius: '20%', padding: '6px', marginRight: '10px', marginTop: "20px" }}></i>
                  <h6 style={{ color: "white", marginTop: "10px" }}> Web Designing </h6>
                  <p style={{fontSize:"15px",color:"gray"}}>  Web Designing</p>

                </div>

                <div class="col servia text-center">
                  <i className="fa fa-newspaper-o" style={{ fontSize: "30px", color: "white", background: '#043636', borderRadius: '20%', padding: '6px', marginRight: '10px', marginTop: "20px" }}></i>
                  <h6 style={{ color: "white", marginTop: "10px" }}> Bussiness Devlopment </h6>
                  <p style={{fontSize:"15px",color:"gray"}}>  Bussiness Devlopment</p>
                  </div>

         

                
              </div>
            </div>



            </div>

          </div>


          {/* End services*/}
         
          {/* Gallary*/}
          <div className="card mb-1 bg-light " style={{ border: "4px solid #043636" }}>
          <div className="card-body"  style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)"}}>
            <div className='aboutus container-fluid'>
              <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                Gallary : </h4>
              <p style={{ color: "#1a0dab" }}> <hr /></p>
            </div>
            <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
               
                <div className="cola">
                <img
                  src={cars}
                  className="card  d-block w-100 h-100"
                  alt="" 
                 
                />
              </div>
               
              </div>
              <div class="carousel-item">
               
                <div className="cola ">
                <img
                  src={car}
                  className="card  d-block w-100 h-100"
                  alt="" 
                 
                />
              </div>
                
              
              </div>
              <div class="carousel-item">
              <div className="cola ">
              <img
                src={care}
                className="card  d-block w-100 h-100"
                alt="" 
               
              />
            </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>



          </div>

        </div>
          {/* End Gallary */}
         
          {/* Videos*/}
          <div className="card mb-1 bg-light "style={{ border: "4px solid #043636" }} >
            <div className="card-body"  style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)"}}>
              <div className='aboutus container-fluid'>
                <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                  Videos : </h4>
                <p style={{ color: "#1a0dab" }}> <hr /></p>
              </div>
              <div class="ratio ratio-16x9 " style={{border:"4px solid #043636"}}>
              <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>



            </div>

          </div>
          {/*  End Videos*/}


         
          {/* Product Links */}
          <div className="card mb-1  bg-light "  style={{ border: "4px solid #043636" }}>
            <div className='card-body' style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)"}}>
              <div class="container" style={{}}>
                <div class="row align-items-start">

                  <div class="col" style={{ color: "#212541" }}>
                    <div className='product container-fluid'>
                      <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                        Product Links : </h4>
                      <p style={{ color: "#1a0dab" }}> <hr /></p>
                    </div>
                    <div className='m-4' style={{ background: "#043636", color: "white", borderRadius: "10px" }}>
                      <ul>
                        <li>
                          <h6 className=''> ECO - E-COMMERCE OSIYA</h6>
                          <p>ECO - E-COMMERCE OSIYA MOBILE APP</p>
                          <a href="https://play.google.com/store/apps/details?id=com.isoftzone.osiya" style={{ color: "#d59651" }}>https://play.google.com/store/apps/details?id=com.isoftzone.osiya</a>
                        </li>
                        <li>
                          <h6>  BOMBAY SUPARI </h6>
                          <p> BOMBAY SUPARI MOBILE APP</p>

                          <a href="https://play.google.com/store/apps/details?id=com.isoftzone.bombaysupari" style={{ color: "#d59651" }}>https://play.google.com/store/apps/details?id=com.isoftzone.bombaysupari</a>


                        </li>
                        <li>
                          <h6>  BHAVESH HARDWARE </h6>
                          <p> BHAVESH HARDWARE MOBILE APP</p>

                          <a href="https://play.google.com/store/apps/details?id=com.isoftzone.bhaveshhardware" style={{ color: "#d59651" }}>https://play.google.com/store/apps/details?id=com.isoftzone.bhaveshhardware</a>

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Product Links  */}

          {/* PAYMENTS ONLINE */}

          <div className="card mb-1  bg-light " style={{ border: "3px solid #043636 " }}>
            <div className='card-body' style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}>
              <div class="container-fluid">
                <div class="row align-items-start">

                  <div className='ponline container-fluid'>
                    <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                      Payments Online : </h4>
                    <p style={{ color: "#1a0dab" }}> <hr /></p>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center">
                <div class="row align-items-start">

                  <div class="col">
                    <h6> Paytm Number :</h6>
                  </div>
                  <div class="col">
                    <p>+91 74156-64456</p>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center ">
                <div class="row align-items-start">

                  <div class="col">
                    <h6> Phone Pe Number:</h6>
                  </div>
                  <div class="col">
                    <p> +91 74156-64456</p>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center ">
                <div class="row align-items-start">

                  <div class="col">
                    <h6> Google Pay Number:
                    </h6>
                  </div>
                  <div class="col">
                    <p> 	+91 74156-64456	</p>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center ">
                <div class="row align-items-start">

                  <div class="col text-center">
                    <h5 className="fst-italic fw-bolder" style={{ color: "#212541" }}> Bank Details : </h5>
                    <hr />
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center ">
                <div class="row align-items-start">

                  <div class="col">
                    <h6> Bank Name:	</h6>
                  </div>
                  <div class="col">
                    <p> ICICI BANK</p>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center ">
                <div class="row align-items-start">

                  <div class="col">
                    <h6>IFSC code:	</h6>
                  </div>
                  <div class="col">
                    <p> 	ICIC000094</p>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center ">
                <div class="row align-items-start">

                  <div class="col">
                    <h6> Account Holder Name:			</h6>
                  </div>
                  <div class="col">
                    <p> Mr. Pranay Gupta</p>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center ">
                <div class="row align-items-start">

                  <div class="col">
                    <h6> Account Number:		</h6>
                  </div>
                  <div class="col">
                    <p> 	09450500070</p>
                  </div>
                </div>
              </div>

              <div class="container-fluid text-center ">
                <div class="row align-items-start">

                  <div class="col">
                    <h6>Account Type:
                    </h6>
                  </div>
                  <div class="col">
                    <p> Current accounts</p>
                  </div>
                </div>
              </div>
              <div class="container-fluid text-center ">
              <div class="row align-items-start">
    
                <div class="col text-center">
                  <h5 className="fst-italic fw-bolder" style={{ color: "#212541" }}> Qr Code : </h5>
                  <hr />
                </div>
                <div className="cola d-flex justify-content-center">
              <img
                src={cares}
                className="card  border-0"
                alt=""
                style={{
                  height: "230px", width: "80%", backgroundSize: "cover"
                }}
              />
            </div>

              </div>
            </div>
            </div>
          </div>
        


          {/* End PAYMENTS ONLINE */}

          {/*  ENQUIRY FORM */}
          <div className="card mb-1 bg-light" style={{ background: "White" }}>
            <div className='card-body' style={{ border: "3px solid #043636", boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}>
              <div class="container">
                <div class="row align-items-start">
                  <div className='ponline container-fluid'>
                    <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                      Enquiry Form : </h4>
                    <p style={{ color: "#1a0dab" }}> <hr /></p>
                  </div>

                  <form style={{ color: "#212541" }}>
                    <div className="form-group">

                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="Enter Your Name"

                      />

                    </div><br />


                    <div className="form-group">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder=" Enter Your Mobile No."
                      />
                    </div><br />
                    <div className="form-group">

                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="Enter Your Email"
                      />

                    </div><br />

                    <div className="form-group">

                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        placeholder="Query"
                      />

                    </div><br />
                    <div class="d-flex justify-content-center align-items-center">
                      <button type="submit" style={{ background: "#043636", width: "100px", borderRadius: "20px", border: "none", color: "white" }}>
                        Send
                      </button>
                    </div>


                  </form>


                </div>
              </div>



            </div>

          </div>
          {/* End ENQUIRY FORM */}

          {/*   feedback form  */}
          <div className="card mb-1 bg-light" style={{ background: "White" }}>
            <div className='card-body' style={{ border: "3px solid #043636", boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}>
              <div class="container">
                <div class="row align-items-start">
                  <div className='feed container-fluid'>
                    <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                      Feedback Form : </h4>
                    <p style={{ color: "#1a0dab" }}> <hr /></p>
                  </div>

                  <form class="feedback-form " style={{ background: "#043636", borderRadius: "15px" }}>
                      <h4 style={{color:"white",marginTop:"10px"}}> Give Feedback :</h4>

                    <input type="text" name="feedbackName" id="feedbackName" placeholder="Enter Full Name" style={{ width: "80%", marginTop: "25px" }} /> 
                    <input name="feedback" id="feedback" placeholder="Enter your feedback" style={{ width: "80%", marginTop: "10px" }} /> <br />








                    <div className='d-flex  mt-2'>


                      <div className="star" >
                        <label className="star-label">
                          <input type="checkbox" name="rating" value="1" onChange={ratings} />
                          <span className="star fs-1" style={{ color: "gold" }}>&#9733;</span>
                        </label>

                      </div>



                      <div className="star">
                        <label className="star-label">
                          <input type="checkbox" name="rating" value="2" onChange={ratings} />
                          <span className="star fs-1" style={{ color: "gold" }}>&#9733;</span>
                        </label>

                      </div>

                      <div className="star">
                        <label className="star-label">
                          <input type="checkbox" name="rating" value="3" onChange={ratings} />
                          <span className="star fs-1" style={{ color: "gold" }}>&#9733;</span>
                        </label>

                      </div>

                      <div className="star">
                        <label className="star-label">
                          <input type="checkbox" name="rating" value="4" onChange={ratings} />
                          <span className="star fs-1 " style={{ color: "gold" }}>&#9733;</span>
                        </label>

                      </div>

                      <div className="star">
                        <label className="star-label">
                          <input type="checkbox" name="rating" value="5" onChange={ratings} />
                          <span className="star fs-1" style={{ color: "gold" }}>&#9733;</span>
                        </label>

                      </div>
                    </div>
                    <p className="" style={{ color: "white" }}>  selectedRating : <br />

                      {selectedRating}</p>



                    <div className='text-center p-2 '>
                      <button className='p-1  fs-5 bg-success' style={{ border: "none", borderRadius: "20px", width: "40%", color: "white" }}> Submit</button>
                    </div>
                  </form>
                </div>

              </div>



            </div>

          </div>
          {/* End   feedback form*/}

          {/*  Project Details  */}
          <div className="card mb-1 bg-light" style={{ background: "White" }}>
            <div className='card-body' style={{ border: "3px solid #043636", boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}>
              <div class="container">
                <div class="row align-items-start">
                  <div className='ponline container-fluid'>
                    <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                      Project Details  : </h4>
                    <p style={{ color: "#1a0dab" }}> <hr /></p>
                  </div>




                </div>
              </div>



            </div>

          </div>
          {/* End  Project Details */}

          {/*   Other Project  */}
          <div className="card mb-1 bg-light" style={{ background: "White" }}>
            <div className='card-body' style={{ border: "3px solid #043636", boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}>
              <div class="container">
                <div class="row align-items-start">
                  <div className='ponline container-fluid'>
                    <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                      Other Project : </h4>
                    <p style={{ color: "#1a0dab" }}> <hr /></p>
                  </div>




                </div>
              </div>



            </div>

          </div>
          {/* End  other comleted */}

          {/*  Project comleted */}
          <div className="card mb-1 bg-light" style={{ background: "White" }}>
            <div className='card-body' style={{ border: "3px solid #043636", boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}>
              <div class="container">
                <div class="row align-items-start">
                  <div className='ponline container-fluid'>
                    <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                      Project Comleted : </h4>
                    <p style={{ color: "#1a0dab" }}> <hr /></p>
                  </div>




                </div>
              </div>



            </div>

          </div>
          {/* End  Project comleted */}

          {/*  Location*/}
          <div className="card mb-1 bg-light" >
            <div className='card-body' style={{ border: "3px solid #043636", boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.5)" }}>
              <div class="container" >
                <div class="row align-items-start">
                  <div className='ponline container-fluid'>
                    <h4 className="card-title text-center fst-italic fw-bolder p-1" style={{ color: "white" }} >
                      Location : </h4>
                    <p style={{ color: "#1a0dab" }}> <hr /></p>
                  </div>

                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58881.49464856725!2d75.882272!3d22.724769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3f4d8125f1%3A0x85c2043657752203!2s16%2C%2011%20Bungalow%20Colony%2C%20New%20Palasia%2C%20Indore%2C%20Madhya%20Pradesh%20452001%2C%20India!5e0!3m2!1sen!2sus!4v1704793391034!5m2!1sen!2sus" width="500" height="350"></iframe>




                </div>
              </div>



            </div>

          </div>
          {/* End  Location*/}

          {/* End Footer*/}
          <div className="card mb-1 rounded-5" style={{ background: "#043636" }} >

            <div class="container-fluid  text-center mt-3">
              <h6 style={{ color: "white" }}>© COPYRIGHT 2018 I-SOFTZONE</h6>
            </div>





          </div>

          {/* End Footer*/}


        </div>
      </div>
    </div>
  );
};

export default App;
