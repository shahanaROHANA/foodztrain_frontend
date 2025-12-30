// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-bg">
//           <div className="hero-gradient"></div>
//           <div className="hero-pattern"></div>
//         </div>
        
//         <div className="hero-container">
//           <div className="hero-content">
//             <div className="hero-badge">
//               <span>🍱 Fresh Food On The Go</span>
//             </div>
            
//             <h1 className="hero-title">
//               Delicious Meals
//               <span className="highlight"> Delivered to Your Train</span>
//             </h1>
            
//             <p className="hero-description">
//               Experience premium dining while traveling. Order from top-rated restaurants at major stations and enjoy hot, fresh meals right at your seat.
//             </p>
            
//             <div className="hero-actions">
//               <Link to="/products" className="btn btn-primary btn-large">
//                 <span>Order Now</span>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M5 12h14M12 5l7 7-7 7"/>
//                 </svg>
//               </Link>
//               <Link to="/vendors" className="btn btn-outline btn-large">
//                 <span>View Partners</span>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
//                 </svg>
//               </Link>
//             </div>
            
//             <div className="hero-stats">
//               <div className="stat">
                
//                 <span className="stat-label">Partner Restaurants</span>
//               </div>
//               <div className="stat">
                
//                 <span className="stat-label">Happy Customers</span>
//               </div>
//               <div className="stat">
                
//                 <span className="stat-label">Major Stations</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="hero-visual">
//             <div className="floating-cards">
//               <div className="card card-1">
//                 <div className="card-image">🍕</div>
//                 <span>Pizza</span>
//               </div>
//               <div className="card card-2">
//                 <div className="card-image">🍔</div>
//                 <span>Burger</span>
//               </div>
//               <div className="card card-3">
//                 <div className="card-image">🥘</div>
//                 <span>Biryani</span>
//               </div>
//               <div className="card card-4">
//                 <div className="card-image">🍱</div>
//                 <span>Thali</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
   

//       {/* Food Categories Section */}
//       <section className="food-categories">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Popular Food Categories</h2>
//             <p className="section-subtitle">Delicious options to satisfy every craving</p>
//           </div>
          
//           <div className="food-grid">
//             <div className="food-category food-pizza">
//               <div className="food-icon">🍕</div>
//               <h3>Pizza</h3>
//               <p>Fresh baked with premium toppings</p>
//               <div className="food-animation">
//                 <div className="floating-ingredients">
//                   <span className="ingredient ingredient-1">🧀</span>
//                   <span className="ingredient ingredient-2">🍅</span>
//                   <span className="ingredient ingredient-3">🌿</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="food-category food-burger">
//               <div className="food-icon">🍔</div>
//               <h3>Burger</h3>
//               <p>Juicy burgers with crispy fries</p>
//               <div className="food-animation">
//                 <div className="floating-ingredients">
//                   <span className="ingredient ingredient-1">🥬</span>
//                   <span className="ingredient ingredient-2">🍅</span>
//                   <span className="ingredient ingredient-3">🧀</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="food-category food-biryani">
//               <div className="food-icon">🥘</div>
//               <h3>Biryani</h3>
//               <p>Fragrant rice with tender meat</p>
//               <div className="food-animation">
//                 <div className="floating-ingredients">
//                   <span className="ingredient ingredient-1">🍗</span>
//                   <span className="ingredient ingredient-2">🌶️</span>
//                   <span className="ingredient ingredient-3">🧅</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="food-category food-thali">
//               <div className="food-icon">🍱</div>
//               <h3>Thali</h3>
//               <p>Complete meal with variety of dishes</p>
//               <div className="food-animation">
//                 <div className="floating-ingredients">
//                   <span className="ingredient ingredient-1">🍛</span>
//                   <span className="ingredient ingredient-2">🥗</span>
//                   <span className="ingredient ingredient-3">🫓</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="how-it-works">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">How FoodZTrain Works</h2>
//             <p className="section-subtitle">Ordering food on train is now simpler than ever</p>
//           </div>
          
//           <div className="steps-grid">
//             <div className="step">
//               <div className="step-icon">
//                 <div className="icon-bg">📍</div>
//                 <div className="step-number">1</div>
//               </div>
//               <h3>Enter Your Journey</h3>
//               <p>Share your train number, boarding station, and destination</p>
//             </div>
            
//             <div className="step">
//               <div className="step-icon">
//                 <div className="icon-bg">🍽️</div>
//                 <div className="step-number">2</div>
//               </div>
//               <h3>Browse Menu</h3>
//               <p>Explore restaurants at your boarding station with real-time availability</p>
//             </div>
            
//             <div className="step">
//               <div className="step-icon">
//                 <div className="icon-bg">💳</div>
//                 <div className="step-number">3</div>
//               </div>
//               <h3>Order & Pay</h3>
//               <p>Place your order securely with multiple payment options</p>
//             </div>
            
//             <div className="step">
//               <div className="step-icon">
//                 <div className="icon-bg">🚂</div>
//                 <div className="step-number">4</div>
//               </div>
//               <h3>Enjoy Your Meal</h3>
//               <p>Receive fresh, hot food delivered right to your train seat</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="features">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Why Choose FoodZTrain?</h2>
            
//           </div>
          
//           <div className="features-grid">
//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🔄</div>
//               </div>
//               <h3>Live Train Tracking</h3>
              
//             </div>
            
//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">⭐</div>
//               </div>
//               <h3>Quality Assured</h3>
              
//             </div>
            
//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🔒</div>
//               </div>
//               <h3>Secure Payments</h3>
              
//             </div>
            
//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">📱</div>
//               </div>
//               <h3>Easy Ordering</h3>
              
//             </div>
            
//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🕐</div>
//               </div>
//               <h3>On-Time Delivery</h3>
              
//             </div>
            
            
//           </div>
//         </div>
//       </section>

//       {/* Popular Stations */}
//       <section className="popular-stations">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Available Stations</h2>
//             <p className="section-subtitle">We deliver at major railway stations across the country</p>
//           </div>
          
//           <div className="stations-grid">
//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Kilinochchi</h4>
//               <p>5+ Restaurants</p>
//             </div>
//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Kodikamam</h4>
//               <p>3+ Restaurants</p>
//             </div>
            
            
//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Sangaththanai</h4>
//               <p> 1 Restaurant</p>
//             </div>
//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Meesalai</h4>
//               <p>3 Restaurants</p>
//             </div>
//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Chavakachcheri</h4>
//               <p>3 Restaurants</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta">
//         <div className="container">
//           <div className="cta-content">
//             <h2>Ready to Transform Your Train Journey?</h2>
//             <p>Join thousands of satisfied customers who enjoy delicious meals while traveling</p>
//             <div className="cta-actions">
//               <Link to="/register" className="btn btn-primary btn-large">
//                 Download App
//               </Link>
//               <Link to="/products" className="btn btn-outline btn-large">
//                 Browse Menu
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-brand">
//               <div className="footer-logo">
//                 <div className="logo-icon">🚆</div>
//                 <span className="logo-text">FoodZTrain</span>
//               </div>
//               <p>Premium train food delivery service bringing restaurant-quality meals to your journey.</p>
//               <div className="social-links">
//                 <a href="#" className="social-link">f</a>
//                 <a href="#" className="social-link">t</a>
//                 <a href="#" className="social-link">i</a>
//                 <a href="#" className="social-link">in</a>
//               </div>
//             </div>
            
//             <div className="footer-section">
//               <h4>Quick Links</h4>
//               <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/products">Order Food</Link></li>
//                 <li><Link to="/vendors">Partner With Us</Link></li>
//                 <li><Link to="/about">About</Link></li>
//               </ul>
//             </div>
            
//             <div className="footer-section">
//               <h4>Support</h4>
//               <ul>
//                 <li><Link to="/contact">Contact Us</Link></li>
//                 <li><Link to="/help">Help Center</Link></li>
//                 <li><Link to="/faq">FAQs</Link></li>
//                 <li><Link to="/terms">Terms & Conditions</Link></li>
//               </ul>
//             </div>
            
//             <div className="footer-section">
//               <h4>Contact Info</h4>
//               <div className="contact-info">
//                 <p>📞 +91 98765 43210</p>
//                 <p>✉️ support@foodztrain.com</p>
                
//               </div>
//             </div>
//           </div>
          
//           <div className="footer-bottom">
//             <p>&copy; 2024 FoodZTrain. All rights reserved. Made with ❤️ for train travelers.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

// import { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const useReveal = (selector = '.reveal', options = { threshold: 0.15 }) => {
//   useEffect(() => {
//     const els = Array.from(document.querySelectorAll(selector));
//     if (!els.length) return;
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('in-view');
//         }
//       });
//     }, options);

//     els.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, [selector, options.threshold]);
// };

// const animateCount = (el, to, duration = 1200) => {
//   if (!el) return;
//   const start = 0;
//   const startTime = performance.now();
//   const step = (now) => {
//     const progress = Math.min((now - startTime) / duration, 1);
//     const current = Math.floor(progress * (to - start) + start);
//     el.textContent = current.toLocaleString();
//     if (progress < 1) requestAnimationFrame(step);
//   };
//   requestAnimationFrame(step);
// };

// const Home = () => {
//   // Stats target values
//   const stats = {
//     partners: 128,
//     customers: 25480,
//     stations: 42,
//   };

//   const partnersRef = useRef(null);
//   const customersRef = useRef(null);
//   const stationsRef = useRef(null);
//   const statsContainerRef = useRef(null);
//   const [statsAnimated, setStatsAnimated] = useState(false);

//   // Reveal hook for sections
//   useReveal('.reveal');

//   // Animate stats when visible
//   useEffect(() => {
//     const node = statsContainerRef.current;
//     if (!node) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !statsAnimated) {
//             setStatsAnimated(true);
//             animateCount(partnersRef.current, stats.partners, 1000);
//             animateCount(customersRef.current, stats.customers, 1200);
//             animateCount(stationsRef.current, stats.stations, 1000);
//           }
//         });
//       },
//       { threshold: 0.4 }
//     );
//     observer.observe(node);
//     return () => observer.disconnect();
//   }, [statsAnimated]);

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-bg" aria-hidden>
//           <div className="hero-gradient"></div>
//           <div className="hero-pattern"></div>
//         </div>

//         <div className="hero-container">
//           <div className="hero-content">
//             <div className="hero-badge reveal">
//               <span>🍱 Fresh Food On The Go</span>
//             </div>

//             <h1 className="hero-title reveal">
//               Delicious Meals
//               <span className="highlight"> Delivered to Your Train</span>
//             </h1>

//             <p className="hero-description reveal">
//               Experience premium dining while traveling. Order from top-rated restaurants at major stations and enjoy hot, fresh meals right at your seat.
//             </p>

//             <div className="hero-actions reveal">
//               <Link to="/products" className="btn btn-primary btn-large">
//                 <span>Order Now</span>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </Link>
//               <Link to="/vendors" className="btn btn-outline btn-large">
//                 <span>View Partners</span>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
//                 </svg>
//               </Link>
//             </div>

//             <div className="hero-stats reveal" ref={statsContainerRef}>
//               <div className="stat">
//                 <span className="stat-number" ref={partnersRef}>0</span>
//                 <span className="stat-label">Partner Restaurants</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number" ref={customersRef}>0</span>
//                 <span className="stat-label">Happy Customers</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number" ref={stationsRef}>0</span>
//                 <span className="stat-label">Major Stations</span>
//               </div>
//             </div>
//           </div>

//           <div className="hero-visual">
//             <div className="floating-cards">
//               <div className="card card-1 reveal" style={{ animationDelay: '0.1s' }}>
//                 <div className="card-image">🍕</div>
//                 <span>Pizza</span>
//               </div>
//               <div className="card card-2 reveal" style={{ animationDelay: '0.3s' }}>
//                 <div className="card-image">🍔</div>
//                 <span>Burger</span>
//               </div>
//               <div className="card card-3 reveal" style={{ animationDelay: '0.5s' }}>
//                 <div className="card-image">🥘</div>
//                 <span>Biryani</span>
//               </div>
//               <div className="card card-4 reveal" style={{ animationDelay: '0.7s' }}>
//                 <div className="card-image">🍱</div>
//                 <span>Thali</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="how-it-works reveal">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">How FoodZTrain Works</h2>
//             <p className="section-subtitle">Ordering food on train is now simpler than ever</p>
//           </div>

//           <div className="steps-grid">
//             <div className="step reveal">
//               <div className="step-icon">
//                 <div className="icon-bg">📍</div>
//                 <div className="step-number">1</div>
//               </div>
//               <h3>Enter Your Journey</h3>
//               <p>Share your train number, boarding station, and destination</p>
//             </div>

//             <div className="step reveal">
//               <div className="step-icon">
//                 <div className="icon-bg">🍽️</div>
//                 <div className="step-number">2</div>
//               </div>
//               <h3>Browse Menu</h3>
//               <p>Explore restaurants at your boarding station with real-time availability</p>
//             </div>

//             <div className="step reveal">
//               <div className="step-icon">
//                 <div className="icon-bg">💳</div>
//                 <div className="step-number">3</div>
//               </div>
//               <h3>Order & Pay</h3>
//               <p>Place your order securely with multiple payment options</p>
//             </div>

//             <div className="step reveal">
//               <div className="step-icon">
//                 <div className="icon-bg">🚂</div>
//                 <div className="step-number">4</div>
//               </div>
//               <h3>Enjoy Your Meal</h3>
//               <p>Receive fresh, hot food delivered right to your train seat</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="features reveal">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Why Choose FoodZTrain?</h2>
//           </div>

//           <div className="features-grid">
//             <div className="feature reveal">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🔄</div>
//               </div>
//               <div>
//                 <h3>Live Train Tracking</h3>
//                 <p>Know exactly when your meal will be delivered onboard.</p>
//               </div>
//             </div>

//             <div className="feature reveal">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">⭐</div>
//               </div>
//               <div>
//                 <h3>Quality Assured</h3>
//                 <p>Only top-rated restaurants partner with FoodZTrain.</p>
//               </div>
//             </div>

//             <div className="feature reveal">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🔒</div>
//               </div>
//               <div>
//                 <h3>Secure Payments</h3>
//                 <p>Multiple safe payment options with encryption.</p>
//               </div>
//             </div>

//             <div className="feature reveal">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">📱</div>
//               </div>
//               <div>
//                 <h3>Easy Ordering</h3>
//                 <p>Fast checkout and saved preferences for repeat orders.</p>
//               </div>
//             </div>

//             <div className="feature reveal">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🕐</div>
//               </div>
//               <div>
//                 <h3>On-Time Delivery</h3>
//                 <p>We sync with station schedules to deliver on time.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Popular Stations */}
//       <section className="popular-stations reveal">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Available Stations</h2>
//             <p className="section-subtitle">We deliver at major railway stations across the country</p>
//           </div>

//           <div className="stations-grid">
//             <div className="station reveal">
//               <div className="station-icon">🏢</div>
//               <h4>Kilinochchi</h4>
//               <p>5+ Restaurants</p>
//             </div>
//             <div className="station reveal">
//               <div className="station-icon">🏢</div>
//               <h4>Kodikamam</h4>
//               <p>3+ Restaurants</p>
//             </div>
//             <div className="station reveal">
//               <div className="station-icon">🏢</div>
//               <h4>Sangaththanai</h4>
//               <p>1 Restaurant</p>
//             </div>
//             <div className="station reveal">
//               <div className="station-icon">🏢</div>
//               <h4>Meesalai</h4>
//               <p>3 Restaurants</p>
//             </div>
//             <div className="station reveal">
//               <div className="station-icon">🏢</div>
//               <h4>Chavakachcheri</h4>
//               <p>3 Restaurants</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="cta reveal">
//         <div className="container">
//           <div className="cta-content">
//             <h2>Ready to Transform Your Train Journey?</h2>
//             <p>Join thousands of satisfied customers who enjoy delicious meals while traveling</p>
//             <div className="cta-actions">
//               <Link to="/register" className="btn btn-primary btn-large">Download App</Link>
//               <Link to="/products" className="btn btn-outline btn-large">Browse Menu</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer (static) */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-brand">
//               <div className="footer-logo">
//                 <div className="logo-icon">🚆</div>
//                 <span className="logo-text">FoodZTrain</span>
//               </div>
//               <p>Premium train food delivery service bringing restaurant-quality meals to your journey.</p>
//               <div className="social-links">
//                 <a href="#" className="social-link">f</a>
//                 <a href="#" className="social-link">t</a>
//                 <a href="#" className="social-link">i</a>
//                 <a href="#" className="social-link">in</a>
//               </div>
//             </div>

//             <div className="footer-section">
//               <h4>Quick Links</h4>
//               <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/products">Order Food</Link></li>
//                 <li><Link to="/vendors">Partner With Us</Link></li>
//                 <li><Link to="/about">About</Link></li>
//               </ul>
//             </div>

//             <div className="footer-section">
//               <h4>Support</h4>
//               <ul>
//                 <li><Link to="/contact">Contact Us</Link></li>
//                 <li><Link to="/help">Help Center</Link></li>
//                 <li><Link to="/faq">FAQs</Link></li>
//                 <li><Link to="/terms">Terms & Conditions</Link></li>
//               </ul>
//             </div>

//             <div className="footer-section">
//               <h4>Contact Info</h4>
//               <div className="contact-info">
//                 <p>📞 +91 98765 43210</p>
//                 <p>✉️ support@foodztrain.com</p>
//               </div>
//             </div>
//           </div>

//           <div className="footer-bottom">
//             <p>&copy; 2024 FoodZTrain. All rights reserved. Made with ❤️ for train travelers.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-bg">
//           <div className="hero-gradient"></div>
//           <div className="hero-pattern"></div>
//         </div>

//         <div className="hero-container">
//           <div className="hero-content">
//             <div className="hero-badge">
//               <span>🍱 Fresh Food On The Go</span>
//             </div>

//             <h1 className="hero-title">
//               Delicious Meals
//               <span className="highlight"> Delivered to Your Train</span>
//             </h1>

//             <p className="hero-description">
//               Experience premium dining while traveling. Order from top-rated restaurants at major stations and enjoy hot, fresh meals right at your seat.
//             </p>

//             <div className="hero-actions">
//               <Link to="/products" className="btn btn-primary btn-large">
//                 <span>Order Now</span>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </Link>

//               <Link to="/vendors" className="btn btn-outline btn-large">
//                 <span>View Partners</span>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
//                 </svg>
//               </Link>
//             </div>

            
//           </div>

//           <div className="hero-visual">
//             <div className="floating-cards">
//               <div className="card card-1">
//                 <div className="card-image">🍕</div>
//                 <span>Pizza</span>
//               </div>
//               <div className="card card-2">
//                 <div className="card-image">🍔</div>
//                 <span>Burger</span>
//               </div>
//               <div className="card card-3">
//                 <div className="card-image">🥘</div>
//                 <span>Biryani</span>
//               </div>
//               <div className="card card-4">
//                 <div className="card-image">🍱</div>
//                 <span>Thali</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="how-it-works">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">How FoodZTrain Works</h2>
//             <p className="section-subtitle">Ordering food on train is now simpler than ever</p>
//           </div>

//           <div className="steps-grid">
//             <div className="step">
//               <div className="step-icon">
//                 <div className="icon-bg">📍</div>
//                 <div className="step-number">1</div>
//               </div>
//               <h3>Enter Your Journey</h3>
//               <p>Share your train number, boarding station, and destination</p>
//             </div>

//             <div className="step">
//               <div className="step-icon">
//                 <div className="icon-bg">🍽️</div>
//                 <div className="step-number">2</div>
//               </div>
//               <h3>Browse Menu</h3>
//               <p>Explore restaurants at your boarding station with real-time availability</p>
//             </div>

//             <div className="step">
//               <div className="step-icon">
//                 <div className="icon-bg">💳</div>
//                 <div className="step-number">3</div>
//               </div>
//               <h3>Order & Pay</h3>
//               <p>Place your order securely with multiple payment options</p>
//             </div>

//             <div className="step">
//               <div className="step-icon">
//                 <div className="icon-bg">🚂</div>
//                 <div className="step-number">4</div>
//               </div>
//               <h3>Enjoy Your Meal</h3>
//               <p>Receive fresh, hot food delivered right to your train seat</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="features">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Why Choose FoodZTrain?</h2>
//           </div>

//           <div className="features-grid">
//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🔄</div>
//               </div>
//               <div>
//                 <h3>Live Train Tracking</h3>
//                 <p>Know exactly when your meal will be delivered onboard.</p>
//               </div>
//             </div>

//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">⭐</div>
//               </div>
//               <div>
//                 <h3>Quality Assured</h3>
//                 <p>Only top-rated restaurants partner with FoodZTrain.</p>
//               </div>
//             </div>

//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🔒</div>
//               </div>
//               <div>
//                 <h3>Secure Payments</h3>
//                 <p>Multiple safe payment options with encryption.</p>
//               </div>
//             </div>

//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">📱</div>
//               </div>
//               <div>
//                 <h3>Easy Ordering</h3>
//                 <p>Fast checkout and saved preferences for repeat orders.</p>
//               </div>
//             </div>

//             <div className="feature">
//               <div className="feature-icon">
//                 <div className="icon-wrapper">🕐</div>
//               </div>
//               <div>
//                 <h3>On-Time Delivery</h3>
//                 <p>We sync with station schedules to deliver on time.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Popular Stations */}
//       <section className="popular-stations">
//         <div className="container">
//           <div className="section-header">
//             <h2 className="section-title">Available Stations</h2>
//             <p className="section-subtitle">We deliver at major railway stations across the country</p>
//           </div>

//           <div className="stations-grid">
//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Kilinochchi</h4>
//               <p>5+ Restaurants</p>
//             </div>

//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Kodikamam</h4>
//               <p>3+ Restaurants</p>
//             </div>

//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Sangaththanai</h4>
//               <p>1 Restaurant</p>
//             </div>

//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Meesalai</h4>
//               <p>3 Restaurants</p>
//             </div>

//             <div className="station">
//               <div className="station-icon">🏢</div>
//               <h4>Chavakachcheri</h4>
//               <p>3 Restaurants</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta">
//         <div className="container">
//           <div className="cta-content">
//             <h2>Ready to Transform Your Train Journey?</h2>
//             <p>Join thousands of satisfied customers who enjoy delicious meals while traveling</p>
//             <div className="cta-actions">
//               <Link to="/register" className="btn btn-primary btn-large">
//                 Download App
//               </Link>
//               <Link to="/products" className="btn btn-outline btn-large">
//                 Browse Menu
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-brand">
//               <div className="footer-logo">
//                 <div className="logo-icon">🚆</div>
//                 <span className="logo-text">FoodZTrain</span>
//               </div>

//               <p>Premium train food delivery service bringing restaurant-quality meals to your journey.</p>

//               <div className="social-links">
//                 <a href="#" className="social-link">f</a>
//                 <a href="#" className="social-link">t</a>
//                 <a href="#" className="social-link">i</a>
//                 <a href="#" className="social-link">in</a>
//               </div>
//             </div>

//             <div className="footer-section">
//               <h4>Quick Links</h4>
//               <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/products">Order Food</Link></li>
//                 <li><Link to="/vendors">Partner With Us</Link></li>
//                 <li><Link to="/about">About</Link></li>
//               </ul>
//             </div>

//             <div className="footer-section">
//               <h4>Support</h4>
//               <ul>
//                 <li><Link to="/contact">Contact Us</Link></li>
//                 <li><Link to="/help">Help Center</Link></li>
//                 <li><Link to="/faq">FAQs</Link></li>
//                 <li><Link to="/terms">Terms & Conditions</Link></li>
//               </ul>
//             </div>

//             <div className="footer-section">
//               <h4>Contact Info</h4>
//               <div className="contact-info">
//                 <p>📞 +91 98765 43210</p>
//                 <p>✉️ support@foodztrain.com</p>
//               </div>
//             </div>
//           </div>

//           <div className="footer-bottom">
//             <p>&copy; 2025 FoodZTrain. All rights reserved. Made with ❤️ for train travelers.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;










import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Navbar Placeholder (Visual consistency) */}
      <div className="w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold tracking-wide mb-6 uppercase">
                🚀 Now delivering at 50+ Stations
              </span>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-stone-900">
                Good Food, <br />
                <span className="relative whitespace-nowrap text-emerald-600">
                  <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-emerald-200/50" preserveAspectRatio="none">
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C61.847 13.69 45.727 15.357 32.8 17.07 9.878 20.106-4.524 23.36 1.914 27.567c4.666 3.05 26.68 3.548 56.66 1.284 3.016-.228 5.75-.453 8.358-.68 52.28-4.545 84.88-10.02 124.314-14.864 54.085-6.645 102.722-10.428 141.22-10.965 24.346-.34 44.869 1.117 58.736 4.167 15.655 3.443 27.863 2.14 26.974-3.568-1.503-9.66-26.672-13.626-66.726-10.518-24.527 1.903-51.859 6.273-77.94 12.457l-6.332 1.505c-5.717 1.36-11.234 2.686-16.516 3.966-50.55 12.246-103.35 12.834-150.15 1.678 12.636 1.572 25.106 2.68 37.37 3.324 20.59 1.082 39.52 1.543 56.88 1.385 1.487-.013 2.964-.034 4.432-.06 22.842-.4 42.754-1.996 59.72-4.79 16.513-2.718 29.896-7.228 39.92-13.473 7.82-4.872 12.87-10.038 15.228-15.54C417.43 5.448 403.42 2.516 366.19.916 354.26.4 340.23-.046 324.75-.152c-47.564-.326-103.58 1.432-161.79 5.253-15.82 1.038-27.17 2.15-27.17 2.15l-12.02 1.026c-17.7 1.512-25.86 1.956-33.8 1.666z"></path>
                  </svg>
                  Great Journey
                </span>
              </h1>
              
              <p className="text-xl text-stone-500 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Don't settle for pantry food. Get restaurant-quality meals delivered hot to your seat at 50+ railway stations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all shadow-xl shadow-emerald-200 hover:-translate-y-1">
                  Order Meal
                </Link>
                <Link to="/vendors" className="px-8 py-4 bg-white hover:bg-emerald-50 text-emerald-700 border-2 border-emerald-100 font-bold rounded-full transition-all">
                  See Restaurants
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Hygienic
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> On Time
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> FSSAI Approved
                </div>
              </div>
            </div>

            {/* Hero Visual - Abstract Composition */}
            <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4 relative z-10 p-4">
                  <div className="space-y-4 mt-8">
                    <div className="bg-white p-4 rounded-3xl shadow-lg border border-stone-100 transform hover:rotate-2 transition-transform">
                      <div className="text-5xl text-center py-4">🍕</div>
                      <div className="text-center font-bold text-stone-800">Italian</div>
                    </div>
                    <div className="bg-white p-4 rounded-3xl shadow-lg border border-stone-100 transform hover:-rotate-2 transition-transform">
                      <div className="text-5xl text-center py-4">🥗</div>
                      <div className="text-center font-bold text-stone-800">Healthy</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-3xl shadow-lg border border-stone-100 transform hover:-rotate-1 transition-transform">
                      <div className="text-5xl text-center py-4">🍛</div>
                      <div className="text-center font-bold text-stone-800">Desi</div>
                    </div>
                    <div className="bg-white p-4 rounded-3xl shadow-lg border border-stone-100 transform hover:rotate-1 transition-transform">
                      <div className="text-5xl text-center py-4">🍰</div>
                      <div className="text-center font-bold text-stone-800">Dessert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Step Cards */}
      <section className="py-20 bg-white rounded-t-[3rem] shadow-inner-lg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Simple Ordering Process</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Journey Details', icon: '📍' },
              { num: '02', title: 'Choose Food', icon: '🍔' },
              { num: '03', title: 'Secure Pay', icon: '💳' },
              { num: '04', title: 'Delivery', icon: '🚂' }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-stone-50 border-2 border-dashed border-stone-200 flex items-center justify-center text-4xl mb-6 group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-colors duration-300 relative">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-stone-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-800">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Split with Image */}
      <section className="py-20 bg-emerald-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Why travelers love FoodZTrain?</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center flex-shrink-0 text-2xl">⚡</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                    <p className="text-emerald-200">Optimized logistics ensure your food reaches the platform before the train leaves.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center flex-shrink-0 text-2xl">🍲</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hygiene Promise</h3>
                    <p className="text-emerald-200">We only partner with FSSAI certified restaurants with high hygiene ratings.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center flex-shrink-0 text-2xl">📱</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Live Tracking</h3>
                    <p className="text-emerald-200">Track your order status and delivery executive in real-time on the app.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
               {/* Abstract Card representation */}
              <div className="bg-white text-stone-800 p-8 rounded-3xl shadow-2xl max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6 border-b border-stone-100 pb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">👤</div>
                  <div>
                    <h4 className="font-bold">Rahul Verma</h4>
                    <p className="text-xs text-stone-500">Traveling on 12951 Rajdhani</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg">
                    <span>1x Veg Thali Deluxe</span>
                    <span className="font-bold">₹240</span>
                  </div>
                  <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg">
                    <span>2x Butter Naan</span>
                    <span className="font-bold">₹80</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-emerald-600 font-bold">Total Paid</span>
                  <span className="text-2xl font-bold">₹320</span>
                </div>
                <button className="w-full mt-6 py-3 bg-stone-900 text-white rounded-xl font-bold">Track Order</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stations - Pill Grid */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800">Popular Stations</h2>
            <p className="text-stone-500 mt-2">Serving happiness at these locations</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Kilinochchi', 'Kodikamam', 'Sangaththanai', 'Meesalai', 'Chavakachcheri', 'Jaffna', 'Colombo Fort', 'Kandy'].map((station, idx) => (
              <div key={idx} className="bg-white px-6 py-3 rounded-full border border-stone-200 shadow-sm hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md transition-all cursor-pointer flex items-center gap-2">
                <span className="text-lg">🚉</span>
                <span className="font-medium">{station}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-teal-400 to-emerald-600 rounded-[2.5rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Hungry? Don't wait.</h2>
              <p className="text-lg mb-8 opacity-90">Book your meal 1 hour before your train reaches the station.</p>
              <Link to="/products" className="inline-block bg-white text-emerald-700 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
                Explore Menu
              </Link>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-stone-100 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-xl font-bold text-stone-800">
              <span className="text-emerald-600">🚆</span> FoodZTrain
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-stone-500">
              <Link to="/about" className="hover:text-emerald-600">About</Link>
              <Link to="/vendors" className="hover:text-emerald-600">Partners</Link>
              <Link to="/faq" className="hover:text-emerald-600">Support</Link>
              <Link to="/terms" className="hover:text-emerald-600">Privacy</Link>
            </div>

            <div className="text-sm text-stone-400">
              © 2025 FoodZTrain Inc.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;