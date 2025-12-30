// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import Chatbot from './Chatbot';
// import './Navigation.css';

// const Navigation = ({ user, seller, onLogout }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isChatbotOpen, setIsChatbotOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     fetchCartCount();
//   }, []);

//   // Close chatbot when navigating to different pages
//   useEffect(() => {
//     setIsChatbotOpen(false);
//   }, [location.pathname]);

//   const fetchCartCount = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (response.ok) {
//         const cart = await response.json();
//         const count = cart.items?.reduce((total, item) => total + item.quantity, 0) || 0;
//         setCartCount(count);
//       }
//     } catch (err) {
//       console.error('Error fetching cart count:', err);
//     }
//   };

//   const handleLogout = () => {
//     const confirmLogout = window.confirm('Are you sure you want to logout?');
//     if (confirmLogout) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       localStorage.removeItem('sellerToken');
//       localStorage.removeItem('seller');
//       localStorage.removeItem('deliveryToken');
//       onLogout();
//       navigate('/');
//     }
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navigation">
//       <div className="nav-container">
//         <div className="nav-brand">
//           <Link to="/" className="brand-link">
//             <div className="logo-icon">🚆</div>
//             <span className="logo-text">FoodZTrain</span>
//           </Link>
//         </div>

//         <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//           <Link 
//             to="/" 
//             className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             <span className="nav-icon">🏠</span>
//             <span>Home</span>
//           </Link>
//           <Link 
//             to="/products" 
//             className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             <span className="nav-icon">🍽️</span>
//             <span>Menu</span>
//           </Link>
//           <Link 
//             to="/station-search" 
//             className={`nav-link ${location.pathname === '/station-search' ? 'active' : ''}`} 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             <span className="nav-icon">🚆</span>
//             <span>Find Stations</span>
//           </Link>
//           <Link 
//             to="/cart" 
//             className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`} 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             <span className="nav-icon">🛒</span>
//             <span>Cart</span>
//             {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//           </Link>
//           {user && (
//             <Link 
//               to="/orders" 
//               className={`nav-link ${location.pathname === '/orders' ? 'active' : ''}`} 
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <span className="nav-icon">📦</span>
//               <span>My Orders</span>
//             </Link>
//           )}
//           <Link 
//             to="/vendors" 
//             className={`nav-link ${location.pathname === '/vendors' ? 'active' : ''}`} 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             <span className="nav-icon">🤝</span>
//             <span>Partners</span>
//           </Link>
//           {user?.role === 'admin' && (
//             <Link 
//               to="/admin" 
//               className={`nav-link admin-link ${location.pathname.startsWith('/admin') ? 'active' : ''}`} 
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <span className="nav-icon">🛡️</span>
//               <span>Admin</span>
//             </Link>
//           )}
//           {seller && (
//             <>
//               <Link 
//                 to="/products" 
//                 className={`nav-link seller-link ${location.pathname === '/products' ? 'active' : ''}`} 
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <span className="nav-icon">🍽️</span>
//                 <span>View Menu</span>
//               </Link>
//               <Link 
//                 to="/seller" 
//                 className={`nav-link seller-link ${location.pathname === '/seller' ? 'active' : ''}`} 
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <span className="nav-icon">🍱</span>
//                 <span>Dashboard</span>
//               </Link>
//             </>
//           )}
//           {user?.role === 'deliveryAgent' && (
//             <Link 
//               to="/delivery/dashboard" 
//               className={`nav-link delivery-link ${location.pathname === '/delivery/dashboard' ? 'active' : ''}`} 
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <span className="nav-icon">🚚</span>
//               <span>Delivery</span>
//             </Link>
//           )}
//         </div>

//         <div className="nav-actions">
//           {(user || seller) ? (
//             <div className="user-menu">
//               <div className="user-avatar">
//                 <span className="avatar-icon">👤</span>
//                 <span className="user-name">
//                   {user?.name || seller?.restaurantName || 'User'}
//                 </span>
//               </div>
//               <button onClick={handleLogout} className="logout-btn">
//                 <span className="logout-icon">🚪</span>
//                 <span>Logout</span>
//               </button>
//             </div>
//           ) : (
//             <div className="auth-links">
//               <Link 
//                 to="/login" 
//                 className={`auth-link login-link ${location.pathname === '/login' ? 'active' : ''}`} 
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <span className="auth-icon">🔑</span>
//                 <span>Sign In</span>
//               </Link>
//               <Link 
//                 to="/register" 
//                 className={`auth-link register-link ${location.pathname === '/register' ? 'active' : ''}`} 
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <span className="auth-icon">✨</span>
//                 <span>Get Started</span>
//               </Link>
//             </div>
//           )}
          
//           <button 
//             className="mobile-menu-toggle" 
//             onClick={toggleMobileMenu}
//             aria-label="Toggle mobile menu"
//           >
//             <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
//               <span className="hamburger-line"></span>
//               <span className="hamburger-line"></span>
//               <span className="hamburger-line"></span>
//             </span>
//           </button>
//         </div>

//         {/* Floating Chatbot Button */}
//         {user && (
//           <button
//             className="chatbot-toggle"
//             onClick={() => setIsChatbotOpen(true)}
//             title="Chat with our assistant"
//           >
//             <span className="chatbot-icon">🤖</span>
//           </button>
//         )}
//       </div>

//       {/* Chatbot Modal */}
//       <Chatbot
//         isOpen={isChatbotOpen}
//         onClose={() => setIsChatbotOpen(false)}
//         user={user}
//         seller={seller}
//       />
//     </nav>
//   );
// };

// export default Navigation;

// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import Chatbot from './Chatbot';
// import './Navigation.css';

// const Navigation = ({ user, seller, onLogout }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isChatbotOpen, setIsChatbotOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     fetchCartCount();
//   }, []);

//   useEffect(() => {
//     setIsChatbotOpen(false);
//   }, [location.pathname]);

//   const fetchCartCount = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (response.ok) {
//         const cart = await response.json();
//         const count = cart.items?.reduce((total, item) => total + item.quantity, 0) || 0;
//         setCartCount(count);
//       }
//     } catch (err) {
//       console.error('Error fetching cart count:', err);
//     }
//   };

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       localStorage.clear();
//       onLogout();
//       navigate('/');
//     }
//   };

//   return (
//     <nav className="navigation">
//       <div className="nav-container">

//         {/* Logo */}
//         <div className="nav-left">
//           <Link to="/" className="brand-link">
//             <span className="logo-icon">🚆</span>
//             <span className="logo-text">FoodZTrain</span>
//           </Link>
//         </div>

//         {/* Center Menu */}
//         <div className={`nav-center ${isMobileMenuOpen ? 'active' : ''}`}>
//           <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//           <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
//           <Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
//             Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//           </Link>
//           {user && <Link to="/orders" className={`nav-link ${location.pathname === '/orders' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>My Orders</Link>}
//           <Link to="/vendors" className={`nav-link ${location.pathname === '/vendors' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Partners</Link>
//         </div>

//         {/* Right: Auth/User */}
//         <div className="nav-right">
//           {(user || seller) ? (
//             <div className="user-menu">
//               <span className="avatar-icon">👤</span>
//               <span className="user-name">{user?.name || seller?.restaurantName}</span>
//               <button onClick={handleLogout} className="logout-btn">Logout</button>
//             </div>
//           ) : (
//             <div className="auth-links">
//               <Link to="/login" className={`auth-link ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
//               <Link to="/register" className={`auth-link ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link>
//             </div>
//           )}
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
//             <span className="line"></span>
//             <span className="line"></span>
//             <span className="line"></span>
//           </span>
//         </button>

//         {/* Chatbot */}
//         {user && (
//           <button className="chatbot-toggle" onClick={() => setIsChatbotOpen(true)} title="Chat with us">
//             🤖
//           </button>
//         )}

//       </div>

//       {/* Chatbot Modal */}
//       <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} user={user} seller={seller} />
//     </nav>
//   );
// };

// export default Navigation;


// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import Chatbot from './Chatbot';
// import './Navigation.css';
// // import logo from '../src/assets/FoodzTRain.png';


// const Navigation = ({ user, seller, onLogout }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isChatbotOpen, setIsChatbotOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Add scroll effect listener
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     fetchCartCount();
//   }, [user]); // Re-fetch when user changes

//   useEffect(() => {
//     setIsChatbotOpen(false);
//     setIsMobileMenuOpen(false); // Close mobile menu on route change
//   }, [location.pathname]);

//   const fetchCartCount = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (response.ok) {
//         const cart = await response.json();
//         const count = cart.items?.reduce((total, item) => total + item.quantity, 0) || 0;
//         setCartCount(count);
//       }
//     } catch (err) {
//       console.error('Error fetching cart count:', err);
//     }
//   };

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       // Set flag to prevent auth interceptor redirects during logout
//       localStorage.setItem('loggingOut', 'true');
      
//       // Clear all auth data
//       onLogout();
      
//       // Remove logout flag after a short delay
//       setTimeout(() => {
//         localStorage.removeItem('loggingOut');
//       }, 1000);
      
//       // Navigate directly to home page
//       navigate('/');
//     }
//   };

//   // Helper for active link class
//   const isActive = (path) => location.pathname === path ? 'active' : '';

//   return (
//     <>
//       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="nav-container">
          
//           {/* Logo */}
//           <Link to="/" className="nav-logo">
            
//             <img src="../src/assets/Foodz TRain.png" alt="FoodZTrain Logo" className="nav-logo-img" />
//             <span className="logo-text"> FoodZTrain</span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="nav-menu">
//             <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
//             <Link to="/products" className={`nav-link ${isActive('/products')}`}>Menu</Link>
//             <Link to="/vendors" className={`nav-link ${isActive('/vendors')}`}>Partners</Link>
            
//             {user && <Link to="/orders" className={`nav-link ${isActive('/orders')}`}>My Orders</Link>}
            
//             <Link to="/cart" className={`nav-link cart-link ${isActive('/cart')}`}>
//               <span>Cart</span>
//               {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//             </Link>
//           </div>

//           {/* Right Side: Auth & Chat */}
//           <div className="nav-actions">
//             {user && (
//               <button 
//                 className={`chatbot-btn ${isChatbotOpen ? 'active' : ''}`} 
//                 onClick={() => setIsChatbotOpen(!isChatbotOpen)} 
//                 title="Chat with AI"
//               >
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
//               </button>
//             )}

//             {(user || seller) ? (
//               <div className="user-profile">
//                 <div className="avatar">
//                   {user?.name?.charAt(0) || seller?.restaurantName?.charAt(0) || 'U'}
//                 </div>
//                 <button onClick={handleLogout} className="logout-btn">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
//                 </button>
//               </div>
//             ) : (
//               <div className="auth-buttons">
//                 <Link to="/login" className="btn-login">Login</Link>
//                 <Link to="/register" className="btn-register">Register</Link>
//               </div>
//             )}

//             {/* Mobile Toggle */}
//             <button 
//               className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown */}
//         <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
//           <Link to="/" className="mobile-link">Home</Link>
//           <Link to="/products" className="mobile-link">Menu</Link>
//           <Link to="/vendors" className="mobile-link">Partners</Link>
//           <Link to="/cart" className="mobile-link">
//             Cart {cartCount > 0 && <span className="mobile-badge">({cartCount})</span>}
//           </Link>
//           {user && <Link to="/orders" className="mobile-link">My Orders</Link>}
//         </div>
//       </nav>

//       <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} user={user} seller={seller} />
//     </>
//   );
// };

// export default Navigation;









import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Chatbot from './Chatbot';
import logo from '/src/assets/logo.png';// Ensure path is correct or import correctly

const Navigation = ({ user, seller, onLogout }) => {
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch cart count on load and when user changes
  useEffect(() => {
    fetchCartCount();
  }, [user]);

  // Close menus on route change
  useEffect(() => {
    setIsChatbotOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const fetchCartCount = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.ok) {
        const cart = await response.json();
        const count = cart.items?.reduce((total, item) => total + item.quantity, 0) || 0;
        setCartCount(count);
      }
    } catch (err) {
      console.error('Error fetching cart count:', err);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.setItem('loggingOut', 'true');
      onLogout();
      setTimeout(() => localStorage.removeItem('loggingOut'), 1000);
      navigate('/');
    }
  };

  // Helper for Link classes
  const getLinkClasses = (path, isMobile = false) => {
    const baseClasses = isMobile 
      ? "block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 font-medium border-b border-gray-100"
      : "text-sm font-bold transition-colors duration-200 hover:text-orange-500";
    
    const activeClasses = isMobile
      ? "bg-blue-50 text-blue-600"
      : "text-orange-500";

    return location.pathname === path ? `${baseClasses} ${activeClasses}` : `${baseClasses} text-gray-700`;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group">
              {/* Use div as placeholder if image fails, or img tag */}
              <div className="relative overflow-hidden">
                <img 
                  src={logo} 
                  alt="FoodZTrain" 
                  className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105" 
                  onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}
                />
                <span className="hidden text-2xl" style={{display:'none'}}>🚆</span>
              </div>
              <span className="text-xl font-extrabold text-blue-900 tracking-tight">
                FoodZ<span className="text-orange-500">Train</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={getLinkClasses('/')}>Home</Link>
              <Link to="/products" className={getLinkClasses('/products')}>Menu</Link>
              <Link to="/vendors" className={getLinkClasses('/vendors')}>Partners</Link>
              
              {user && <Link to="/orders" className={getLinkClasses('/orders')}>My Orders</Link>}
              
              {/* Cart Link with Badge */}
              <Link to="/cart" className={`${getLinkClasses('/cart')} relative flex items-center gap-1`}>
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              
              {/* Chatbot Toggle */}
              {user && (
                <button 
                  className={`p-2 rounded-full transition-colors ${
                    isChatbotOpen 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  onClick={() => setIsChatbotOpen(!isChatbotOpen)} 
                  title="Chat with AI"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </button>
              )}

              {/* User Profile / Auth Buttons */}
              {(user || seller) ? (
                <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
                  <div className="hidden sm:flex flex-col items-end mr-1">
                    <span className="text-xs font-bold text-gray-900 leading-none">
                      {user?.name || seller?.restaurantName}
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                      {seller ? 'Partner' : 'Traveler'}
                    </span>
                  </div>
                  
                  <div className="h-9 w-9 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow-sm">
                    {(user?.name || seller?.restaurantName || 'U').charAt(0).toUpperCase()}
                  </div>

                  <button 
                    onClick={handleLogout} 
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Logout"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link 
                    to="/login" 
                    className="hidden sm:block px-4 py-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-emerald-400 hover:shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Mobile Hamburger Button */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col py-2">
            <Link to="/" className={getLinkClasses('/', true)}>Home</Link>
            <Link to="/products" className={getLinkClasses('/products', true)}>Menu</Link>
            <Link to="/vendors" className={getLinkClasses('/vendors', true)}>Partners</Link>
            <Link to="/cart" className={getLinkClasses('/cart', true)}>
              <div className="flex items-center justify-between">
                <span>Cart</span>
                {cartCount > 0 && <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>}
              </div>
            </Link>
            {user && <Link to="/orders" className={getLinkClasses('/orders', true)}>My Orders</Link>}
            
            {/* Mobile Auth Links (if not logged in) */}
            {!(user || seller) && (
              <div className="p-4 flex flex-col gap-3 bg-gray-50 mt-2">
                <Link to="/login" className="w-full text-center py-2 border border-gray-300 rounded-lg font-bold text-gray-700 bg-white">Login</Link>
                <Link to="/register" className="w-full text-center py-2 bg-blue-900 text-white rounded-lg font-bold">Register</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} user={user} seller={seller} />
    </>
  );
};

export default Navigation;