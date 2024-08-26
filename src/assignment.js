import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Jillion Technologies</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
          <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
          <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
          <li className="nav-item"><a className="nav-link" href="#contactUs">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export const HeroSection = () => (
  <div className="container hero-section" id="home">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1 className="display-4">WE MAKE YOUR IDEA'S <br /><span style={{ color: '#F77F00' }}>INTO REALITY</span></h1>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#features" className="btn btn-primary">Get Started</a>
        <a href="#contactUs" className="btn btn-outline-primary">Contact Us</a>
      </div>
      <div className="col-md-6 text-center">
        <img src="https://media.istockphoto.com/id/1224998699/vector/young-guy-an-freelancer-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=MBTn_KPEApCvpbna3Mk5jFkz56PbibxD13ixQu-3kZc=" alt="Hero Image" className="img-fluid" />
      </div>
    </div>
  </div>
);

export const FeaturesSection = () => (
  <div className="container features-section text-center" id="features">
    <h2 className="mb-5">Features</h2>
    <div className="row">
      <div className="col-md-6">
        <img src="https://www.skoolbeep.com/students-assessment/assets/img/discover/online-exam-master.svg" alt="Features Image" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h4>Card Title</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h4>Card Title</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="col-md-6">
        <img src="https://static.vecteezy.com/system/resources/previews/001/889/662/non_2x/businesswoman-cartoon-with-board-design-free-vector.jpg" alt="Features Image" className="img-fluid" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img src="https://img.freepik.com/premium-vector/video-lecture-flat-illustration-vector-download_203633-3121.jpg" alt="Features Image" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h4>Card Title</h4>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
);

export const ProductsSection = () => (
  <div className="container products-section text-center" id="products">
    <h2 className="mb-5">Products</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialCarousel = () => (
  <div className="container mt-5" id="testimonials">
    <h2 className="text-center">TESTIMONIALS</h2>
    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner text-center">
        <div className="carousel-item active">
          <img 
            src="https://th.bing.com/th/id/OIP.G6m5nBOrOpnwjoloUK3zhAHaIB?pid=ImgDet&w=179&h=193&c=7&dpr=1.3"
            className="rounded-circle mb-4" 
            alt="Testimonial 1"
          />
          <p>Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia...</p>
          <p><strong>PAULA WILSON</strong>, Media Analyst</p>
        </div>
        <div className="carousel-item">
          <img 
            src="path_to_testimonial_image2.png"
            className="rounded-circle mb-4"
            alt="Testimonial 2"
          />
          <p>Fusce ornare urna sit amet ligula malesuada, eget tincidunt justo viverra...</p>
          <p><strong>JOHN DOE</strong>, Software Engineer</p>
        </div>
        {/* Add more carousel items as needed */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <ol className="carousel-indicators">
        <li data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></li>
        {/* Add more indicators as needed */}
      </ol>
    </div>
  </div>
);

export const ContactUsSection = () => (
  <div className="container mt-5" id="contactUs">
    <h2 className="text-center mb-4">Contact Us</h2>
    <div className="row">
      <div className="col-md-6 text-center">
        <img src="https://cdn.dribbble.com/users/2298849/screenshots/6547750/illustration-design4_4x.jpg" alt="Contact Us Image" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

export const Footer = () => (
  <div className="bg-primary text-white mt-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <h5>CONTACT US</h5>
                    <p>Email</p>
                    <p>contact@JILLIONTECHNOLOGIES.com</p>
                    <p>Phone</p>
                    <p>123456789</p>
                    <p>Address</p>
                    <p>C-260, Sector-63, Noida, UP-201301,</p>
                </div>
                <div className="col-md-3">
                    <h5>COMPANY</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">About Us</a></li>
                        <li><a href="#" className="text-white">Services</a></li>
                        <li><a href="#" className="text-white">Portfolio</a></li>
                        <li><a href="#" className="text-white">Development Process</a></li>
                        <li><a href="#" className="text-white">Career</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>SERVICE</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Website Development</a></li>
                        <li><a href="#" className="text-white">Mobile App Development</a></li>
                        <li><a href="#" className="text-white">E-commerce Development</a></li>
                        <li><a href="#" className="text-white">Customer Software Development</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>SUPPORT</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Contact</a></li>
                        <li><a href="#" className="text-white">Term & Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
