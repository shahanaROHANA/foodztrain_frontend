// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './StationMenu.css';

// const StationMenu = ({ onAddToCart }) => {
//   const [stations, setStations] = useState([]);
//   const [restaurants, setRestaurants] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedStation, setSelectedStation] = useState('');
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Fetch available stations on component mount
//   useEffect(() => {
//     fetchStations();
//   }, []);

//   // Fetch restaurants when station is selected
//   useEffect(() => {
//     if (selectedStation) {
//       fetchRestaurants(selectedStation);
//       setSelectedRestaurant(null);
//       setProducts([]);
//     } else {
//       setRestaurants([]);
//       setSelectedRestaurant(null);
//       setProducts([]);
//     }
//   }, [selectedStation]);

//   const fetchStations = async (retries = 3) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_API_URL}/restaurants/stations`);
//       setStations(response.data);
//       console.log(response.data, "stations");
//       setError(''); // Clear any previous error
//     } catch (err) {
//       console.error('Error fetching stations:', err);
//       if (retries > 0) {
//         console.log(`Retrying fetch stations... ${retries} attempts left`);
//         setTimeout(() => fetchStations(retries - 1), 1000);
//       } else {
//         setError('Failed to fetch stations. Please check your connection and try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchRestaurants = async (station, retries = 3) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_API_URL}/restaurants?station=${station}`);
//       setRestaurants(response.data);
//       setError(''); // Clear any previous error
//     } catch (err) {
//       console.error('Error fetching restaurants:', err);
//       if (retries > 0) {
//         console.log(`Retrying fetch restaurants... ${retries} attempts left`);
//         setTimeout(() => fetchRestaurants(station, retries - 1), 1000);
//       } else {
//         setError('Failed to fetch restaurants. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchRestaurantProducts = async (restaurant, retries = 3) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_API_URL}/restaurants/${restaurant._id}`);
//       setSelectedRestaurant(response.data.restaurant);
//       setProducts(response.data.products);
//       setError(''); // Clear any previous error
//     } catch (err) {
//       console.error('Error fetching products:', err);
//       if (retries > 0) {
//         console.log(`Retrying fetch products... ${retries} attempts left`);
//         setTimeout(() => fetchRestaurantProducts(restaurant, retries - 1), 1000);
//       } else {
//         setError('Failed to fetch menu items. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddToCart = async (productId, quantity = 1) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         alert('Please login to add items to cart');
//         return;
//       }

//       await axios.post(
//         `${import.meta.env.VITE_API_URL}/cart/add`,
//         { productId, quantity },
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       );

//       alert('Product added to cart!');
//       if (onAddToCart) onAddToCart();
//     } catch (err) {
//       alert(err.response?.data?.message || 'Failed to add to cart');
//     }
//   };

//   const formatPrice = (priceCents) => {
//     return (priceCents / 100).toFixed(2);
//   };

//   const getCategoryColor = (category) => {
//     switch (category) {
//       case 'Veg': return '#4CAF50';
//       case 'Non-Veg': return '#F44336';
//       case 'Mixed': return '#FF9800';
//       case 'Beverages': return '#2196F3';
//       case 'Pizza': return '#9C27B0';
//       default: return '#757575';
//     }
//   };

//   const resetSelection = () => {
//     setSelectedStation('');
//     setSelectedRestaurant(null);
//     setRestaurants([]);
//     setProducts([]);
//   };

//   return (
//     <div className="station-menu-container">
//       <div className="menu-header">
//         <h2>🍽️ Train Food Menu</h2>
//         <p>Select your station → Choose restaurant → Order food</p>
//       </div>

//       {/* Station Selection */}
//       <div className="selection-section">
//         <label className="selection-label">
//           🚉 Select Station:
//           <select
//             value={selectedStation}
//             onChange={(e) => setSelectedStation(e.target.value)}
//             className="station-dropdown"
//             disabled={loading}
//           >
//             <option value="">-- Choose Station --</option>
//             {stations.map((station) => (
//               <option key={station} value={station}>
//                 {station}
//               </option>
//             ))}
//           </select>
//         </label>

//         {selectedStation && (
//           <button onClick={resetSelection} className="reset-btn">
//             ✖ Reset
//           </button>
//         )}
//       </div>

//       {/* Restaurants Grid */}
//       {selectedStation && restaurants.length > 0 && (
//         <div className="restaurants-section">
//           <h3>🍴 Restaurants at {selectedStation}</h3>
//           <div className="restaurants-grid">
//             {restaurants.map((restaurant) => (
//               <div
//                 key={restaurant._id}
//                 className={`restaurant-card ${selectedRestaurant?._id === restaurant._id ? 'selected' : ''}`}
//                 onClick={() => fetchRestaurantProducts(restaurant)}
//               >
//                 <div className="restaurant-image">
//                   {restaurant.imageUrl ? (
//                     <img src={restaurant.imageUrl} alt={restaurant.name} />
//                   ) : (
//                     <div className="placeholder-image">🍽️</div>
//                   )}
//                 </div>
//                 <div className="restaurant-info">
//                   <h4>{restaurant.name}</h4>
//                   <p className="restaurant-description">{restaurant.description}</p>
//                   <div className="restaurant-meta">
//                     <span 
//                       className="cuisine-badge"
//                       style={{ backgroundColor: getCategoryColor(restaurant.cuisineType) }}
//                     >
//                       {restaurant.cuisineType}
//                     </span>
//                     <span className="delivery-time">⏱️ {restaurant.deliveryTimeEstimate}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Products Grid */}
//       {selectedRestaurant && (
//         <div className="products-section">
//           <div className="products-header">
//             <h3>🍛 Menu from {selectedRestaurant.name}</h3>
//             <p>{selectedRestaurant.description}</p>
//           </div>
          
//           <div className="products-grid">
//             {products.map((product) => (
//               <div key={product._id} className="product-card">
//                 <div className="product-image">
//                   {product.imageUrl ? (
//                     <img src={product.imageUrl} alt={product.name} />
//                   ) : (
//                     <div className="placeholder-image">🍽️</div>
//                   )}
//                 </div>
//                 <div className="product-info">
//                   <h4 className="product-name">{product.name}</h4>
//                   <p className="product-description">{product.description}</p>
//                   <div className="product-meta">
//                     <span 
//                       className="category-badge"
//                       style={{ backgroundColor: getCategoryColor(product.category) }}
//                     >
//                       {product.category}
//                     </span>
//                     <span className="delivery-time">⏱️ {product.deliveryTimeEstimate}</span>
//                   </div>
//                   <div className="product-footer">
//                     <span className="product-price">₹{formatPrice(product.priceCents)}</span>
//                     <button
//                       onClick={() => handleAddToCart(product._id)}
//                       className="add-to-cart-btn"
//                       disabled={!product.available || loading}
//                     >
//                       {product.available ? 'Add to Cart' : 'Unavailable'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {products.length === 0 && (
//             <div className="no-products">
//               <p>No menu items available for this restaurant.</p>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Loading State */}
//       {loading && (
//         <div className="loading-overlay">
//           <div className="loading-spinner">Loading...</div>
//         </div>
//       )}

//       {/* Error State */}
//       {error && (
//         <div className="error-message">
//           <p>⚠️ {error}</p>
//           <div className="error-actions">
//             <button onClick={() => {
//               setError('');
//               if (!selectedStation) fetchStations();
//               else if (!selectedRestaurant) fetchRestaurants(selectedStation);
//               else fetchRestaurantProducts(selectedRestaurant);
//             }} className="retry-btn">🔄 Retry</button>
//             <button onClick={() => setError('')} className="close-error">✖</button>
//           </div>
//         </div>
//       )}

//       {/* Instructions */}
//       {!selectedStation && !loading && !error && (
//         <div className="instructions">
//           <h3>🚂 How to Order:</h3>
//           <ol>
//             <li>Select your train station from the dropdown above</li>
//             <li>Choose a restaurant at your station</li>
//             <li>Browse the menu and add items to your cart</li>
//             <li>Proceed to checkout when ready</li>
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StationMenu;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
// No external CSS file needed anymore

const StationMenu = ({ onAddToCart }) => {
  const [stations, setStations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedStation, setSelectedStation] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch available stations on component mount
  useEffect(() => {
    fetchStations();
  }, []);

  // Fetch restaurants when station is selected
  useEffect(() => {
    if (selectedStation) {
      fetchRestaurants(selectedStation);
      setSelectedRestaurant(null);
      setProducts([]);
    } else {
      setRestaurants([]);
      setSelectedRestaurant(null);
      setProducts([]);
    }
  }, [selectedStation]);

  const fetchStations = async (retries = 3) => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/restaurants/stations`);
      setStations(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching stations:', err);
      if (retries > 0) {
        setTimeout(() => fetchStations(retries - 1), 1000);
      } else {
        setError('Failed to fetch stations. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchRestaurants = async (station, retries = 3) => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/restaurants?station=${station}`);
      setRestaurants(response.data);
      setError('');
    } catch (err) {
      if (retries > 0) {
        setTimeout(() => fetchRestaurants(station, retries - 1), 1000);
      } else {
        setError('Failed to fetch restaurants. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchRestaurantProducts = async (restaurant, retries = 3) => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/restaurants/${restaurant._id}`);
      setSelectedRestaurant(response.data.restaurant);
      setProducts(response.data.products);
      setError('');
    } catch (err) {
      if (retries > 0) {
        setTimeout(() => fetchRestaurantProducts(restaurant, retries - 1), 1000);
      } else {
        setError('Failed to fetch menu items. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId, quantity = 1) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login to add items to cart');
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/add`,
        { productId, quantity },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      alert('Product added to cart!');
      if (onAddToCart) onAddToCart();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add to cart');
    }
  };

  const formatPrice = (priceCents) => {
    return (priceCents / 100).toFixed(2);
  };

  // Helper for category badges using Tailwind classes
  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Veg': return 'bg-green-100 text-green-800 border-green-200';
      case 'Non-Veg': return 'bg-red-100 text-red-800 border-red-200';
      case 'Mixed': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Beverages': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pizza': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-stone-100 text-stone-600 border-stone-200';
    }
  };

  const resetSelection = () => {
    setSelectedStation('');
    setSelectedRestaurant(null);
    setRestaurants([]);
    setProducts([]);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-stone-800">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
          🍽️ Train Food Menu
        </h2>
        <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-stone-500 max-w-2xl mx-auto">
          Select your station, choose a restaurant, and get hot meals delivered to your seat.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Station Selection Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-stone-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-xl">
          <div className="flex-1 w-full">
            <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
              📍 Select Your Station
            </label>
            <div className="relative">
              <select
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
                disabled={loading}
                className="block w-full rounded-xl border-stone-200 bg-stone-50 py-4 pl-4 pr-10 text-stone-700 text-lg focus:border-emerald-500 focus:ring-emerald-500 focus:bg-white transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option value="">-- Choose Station --</option>
                {stations.map((station) => (
                  <option key={station} value={station}>
                    {station}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {selectedStation && (
            <button 
              onClick={resetSelection} 
              className="px-6 py-3 rounded-xl border border-red-200 text-red-600 font-bold hover:bg-red-50 hover:border-red-300 transition-colors flex items-center gap-2"
            >
              <span>✖</span> Reset Selection
            </button>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-sm flex justify-between items-center animate-pulse">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <p className="text-red-700 font-medium">{error}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  setError('');
                  if (!selectedStation) fetchStations();
                  else if (!selectedRestaurant) fetchRestaurants(selectedStation);
                  else fetchRestaurantProducts(selectedRestaurant);
                }}
                className="text-sm px-3 py-1 bg-white text-red-700 border border-red-200 rounded-md hover:bg-red-50"
              >
                Retry
              </button>
              <button onClick={() => setError('')} className="text-red-400 hover:text-red-600 font-bold px-2">✕</button>
            </div>
          </div>
        )}

        {/* Restaurants Grid */}
        {selectedStation && restaurants.length > 0 && (
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 p-2 rounded-lg text-xl">🍴</span> 
              Restaurants at {selectedStation}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant._id}
                  onClick={() => fetchRestaurantProducts(restaurant)}
                  className={`group relative overflow-hidden bg-white rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                    selectedRestaurant?._id === restaurant._id 
                      ? 'border-emerald-500 ring-2 ring-emerald-500 ring-offset-2 shadow-xl' 
                      : 'border-stone-100 shadow-md hover:shadow-xl hover:border-emerald-200'
                  }`}
                >
                  <div className="aspect-video w-full bg-stone-100 relative overflow-hidden">
                    {restaurant.imageUrl ? (
                      <img 
                        src={restaurant.imageUrl} 
                        alt={restaurant.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-stone-100 to-stone-200 text-stone-300">
                        🍽️
                      </div>
                    )}
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border ${getCategoryStyles(restaurant.cuisineType)}`}>
                        {restaurant.cuisineType}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {restaurant.name}
                    </h4>
                    <p className="text-stone-500 text-sm line-clamp-2 mb-4 h-10">
                      {restaurant.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-stone-400">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {restaurant.deliveryTimeEstimate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Menu/Products Section */}
        {selectedRestaurant && (
          <div className="mt-12 pt-12 border-t border-stone-200 animate-fade-in-up">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-stone-900">Menu from <span className="text-emerald-600">{selectedRestaurant.name}</span></h3>
              <p className="text-stone-500 mt-2">{selectedRestaurant.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product._id} className="bg-white rounded-2xl shadow-md border border-stone-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-stone-100 relative overflow-hidden">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl bg-stone-100 text-stone-300">
                        🍛
                      </div>
                    )}
                     <span className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-bold border shadow-sm ${getCategoryStyles(product.category)}`}>
                      {product.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-stone-800">{product.name}</h4>
                      <span className="flex items-center text-xs font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded-full">
                        ⏱ {product.deliveryTimeEstimate}
                      </span>
                    </div>
                    
                    <p className="text-stone-500 text-sm mb-4 flex-1">
                      {product.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4">
                      <div className="text-xl font-bold text-stone-900">
                        ₹{formatPrice(product.priceCents)}
                      </div>
                      <button
                        onClick={() => handleAddToCart(product._id)}
                        disabled={!product.available || loading}
                        className={`flex-1 py-2 px-4 rounded-xl font-bold shadow-md transition-all transform active:scale-95 ${
                          product.available 
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg' 
                            : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                        }`}
                      >
                        {product.available ? 'Add to Cart' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-stone-200">
                <p className="text-2xl text-stone-400 mb-2">🤷‍♂️</p>
                <p className="text-stone-500 font-medium">No menu items available for this restaurant.</p>
              </div>
            )}
          </div>
        )}

        {/* Empty State / Instructions */}
        {!selectedStation && !loading && !error && (
          <div className="mt-12 bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-12 text-center">
             <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
               {[
                 { icon: '📍', title: '1. Select Station', text: 'Choose upcoming station' },
                 { icon: '🍔', title: '2. Choose Food', text: 'Browse top restaurants' },
                 { icon: '🚀', title: '3. Get Delivery', text: 'Food at your seat' },
               ].map((step, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-3xl mb-4 border border-emerald-100">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-stone-800">{step.title}</h4>
                    <p className="text-stone-500 text-sm">{step.text}</p>
                 </div>
               ))}
             </div>
          </div>
        )}

      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
            <p className="text-emerald-800 font-bold animate-pulse">Loading delicious options...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StationMenu;