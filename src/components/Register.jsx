import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
    restaurantName: '',
    station: '',
    phoneNumber: '',
    location: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field-specific error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate field on blur
    const fieldError = validateField(name, formData[name]);
    if (fieldError) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: fieldError
      }));
    }
  };

  // Enhanced field validation
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name can only contain letters and spaces';
        return '';
        
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return '';
        
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 6) return 'Password must be at least 6 characters';
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
        }
        return '';
        
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords do not match';
        return '';
        
      case 'restaurantName':
        if (formData.role === 'seller') {
          if (!value.trim()) return 'Restaurant name is required for sellers';
          if (value.trim().length < 2) return 'Restaurant name must be at least 2 characters';
        }
        return '';
        
      case 'station':
        if (formData.role === 'seller') {
          if (!value) return 'Please select a station for your restaurant';
        }
        return '';
        
      case 'phoneNumber':
        if (formData.role === 'deliveryAgent') {
          if (!value.trim()) return 'Phone number is required for delivery agents';
          const phoneRegex = /^[+]?[0-9\s\-\(\)]{10,}$/;
          if (!phoneRegex.test(value.trim())) return 'Please enter a valid phone number';
        }
        return '';
        
      case 'location':
        if (formData.role === 'deliveryAgent') {
          if (!value.trim()) return 'Location/address is required for delivery agents';
          if (value.trim().length < 3) return 'Location must be at least 3 characters';
        }
        return '';
        
      default:
        return '';
    }
  };

  // Enhanced form validation
  const validateForm = () => {
    const errors = {};
    let hasErrors = false;

    // Check all fields
    Object.keys(formData).forEach(field => {
      if (field === 'confirmPassword' || 
          field === 'role' || 
          (field === 'restaurantName' && formData.role !== 'seller') ||
          (field === 'station' && formData.role !== 'seller') ||
          (field === 'phoneNumber' && formData.role !== 'deliveryAgent') ||
          (field === 'location' && formData.role !== 'deliveryAgent')) {
        const error = validateField(field, formData[field]);
        if (error) {
          errors[field] = error;
          hasErrors = true;
        }
      }
    });

    setFieldErrors(errors);
    return !hasErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate entire form
    if (!validateForm()) {
      setError('Please fix the errors above before submitting');
      setLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...registerData } = formData;
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, registerData);

      const { token, user: userData } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));

      if (onRegister) onRegister(userData);

      const redirectMap = {
        customer: '/products',
        seller: '/seller',
        admin: '/admin',
        deliveryAgent: '/delivery/dashboard'
      };

      navigate(redirectMap[userData.role] || '/products');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  // Helper function to get field error message
  const getFieldError = (fieldName) => {
    if (touched[fieldName] && fieldErrors[fieldName]) {
      return fieldErrors[fieldName];
    }
    return '';
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="welcome-banner">
          <h3>Join TrainFood Community! 🚀</h3>
          <p>Create your account and discover delicious food options at train stations nationwide!</p>
        </div>

        <div className="form-header">
          <h2>Create Account</h2>
          <p className="form-subtitle">Sign up to get started with TrainFood</p>
        </div>

        {error && (
          <div className="error-message">
            <span>⚠️ {error}</span>
          </div>
        )}

        <div className="google-login-section">
          <button type="button" onClick={handleGoogleLogin} className="google-login-btn">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="google-icon" />
            Continue with Google
          </button>
          <div className="divider">
            <span>or</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <div className={`input-wrapper ${formData.name ? 'has-content' : ''} ${getFieldError('name') ? 'has-error' : ''}`}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                minLength="2"
                aria-label="Full name"
                aria-describedby={getFieldError('name') ? 'name-error' : undefined}
              />
              <label htmlFor="name">Full name</label>
            </div>
            {getFieldError('name') && (
              <div className="field-error" id="name-error">
                {getFieldError('name')}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <div className={`input-wrapper ${formData.email ? 'has-content' : ''} ${getFieldError('email') ? 'has-error' : ''}`}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-label="Email address"
                aria-describedby={getFieldError('email') ? 'email-error' : undefined}
              />
              <label htmlFor="email">Email address</label>
            </div>
            {getFieldError('email') && (
              <div className="field-error" id="email-error">
                {getFieldError('email')}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <div className={`input-wrapper ${formData.password ? 'has-content' : ''} ${getFieldError('password') ? 'has-error' : ''}`}>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                minLength="6"
                aria-label="Password"
                aria-describedby={getFieldError('password') ? 'password-error' : undefined}
              />
              <label htmlFor="password">Password</label>
            </div>
            {getFieldError('password') && (
              <div className="field-error" id="password-error">
                {getFieldError('password')}
              </div>
            )}
            {formData.password && !getFieldError('password') && (
              <div className="password-strength">
                <div className="strength-meter">
                  <div className={`strength-bar ${formData.password.length >= 6 ? 'weak' : ''}`}></div>
                </div>
                <small>Password strength: {formData.password.length >= 6 ? 'Weak' : 'Too short'}</small>
              </div>
            )}
          </div>

          {/* Confirm password */}
          <div className="form-group">
            <div className={`input-wrapper ${formData.confirmPassword ? 'has-content' : ''} ${getFieldError('confirmPassword') ? 'has-error' : ''}`}>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                minLength="6"
                aria-label="Confirm password"
                aria-describedby={getFieldError('confirmPassword') ? 'confirm-password-error' : undefined}
              />
              <label htmlFor="confirmPassword">Confirm password</label>
            </div>
            {getFieldError('confirmPassword') && (
              <div className="field-error" id="confirm-password-error">
                {getFieldError('confirmPassword')}
              </div>
            )}
            {formData.confirmPassword && !getFieldError('confirmPassword') && formData.password === formData.confirmPassword && (
              <div className="field-success">
                ✓ Passwords match
              </div>
            )}
          </div>

          {/* Role */}
          <div className="form-group">
            <div className={`input-wrapper ${formData.role ? 'has-content' : ''}`}>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                aria-label="Account type"
              >
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
                <option value="deliveryAgent">Delivery Agent</option>
                <option value="admin">Admin</option>
              </select>
              <label htmlFor="role">Account type</label>
            </div>
          </div>

          {/* Seller-specific fields */}
          {formData.role === 'seller' && (
            <>
              <div className="form-group">
                <div className={`input-wrapper ${formData.restaurantName ? 'has-content' : ''} ${getFieldError('restaurantName') ? 'has-error' : ''}`}>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-label="Restaurant name"
                    aria-describedby={getFieldError('restaurantName') ? 'restaurant-name-error' : undefined}
                  />
                  <label htmlFor="restaurantName">Restaurant name</label>
                </div>
                {getFieldError('restaurantName') && (
                  <div className="field-error" id="restaurant-name-error">
                    {getFieldError('restaurantName')}
                  </div>
                )}
              </div>

              <div className="form-group">
                <div className={`input-wrapper ${formData.station ? 'has-content' : ''} ${getFieldError('station') ? 'has-error' : ''}`}>
                  <select
                    id="station"
                    name="station"
                    value={formData.station}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-label="Station location"
                    aria-describedby={getFieldError('station') ? 'station-error' : undefined}
                  >
                    <option value="">Select station</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Kodikamam">Kodikamam</option>
                    <option value="Sangaththanai">Sangaththanai</option>
                    <option value="Meesalai">Meesalai</option>
                    <option value="Chavakachcheri">Chavakachcheri</option>
                  </select>
                  <label htmlFor="station">Station (location)</label>
                </div>
                {getFieldError('station') && (
                  <div className="field-error" id="station-error">
                    {getFieldError('station')}
                  </div>
                )}
              </div>
            </>
          )}

          {/* Delivery Agent-specific fields */}
          {formData.role === 'deliveryAgent' && (
            <>
              <div className="form-group">
                <div className={`input-wrapper ${formData.phoneNumber ? 'has-content' : ''} ${getFieldError('phoneNumber') ? 'has-error' : ''}`}>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    minLength="10"
                    placeholder="+94 7X XXX XXXX"
                    aria-label="Phone number"
                    aria-describedby={getFieldError('phoneNumber') ? 'phone-number-error' : undefined}
                  />
                  <label htmlFor="phoneNumber">Phone number</label>
                </div>
                {getFieldError('phoneNumber') && (
                  <div className="field-error" id="phone-number-error">
                    {getFieldError('phoneNumber')}
                  </div>
                )}
              </div>

              <div className="form-group">
                <div className={`input-wrapper ${formData.location ? 'has-content' : ''} ${getFieldError('location') ? 'has-error' : ''}`}>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="City, District"
                    aria-label="Location"
                    aria-describedby={getFieldError('location') ? 'location-error' : undefined}
                  />
                  <label htmlFor="location">Location (City, District)</label>
                </div>
                {getFieldError('location') && (
                  <div className="field-error" id="location-error">
                    {getFieldError('location')}
                  </div>
                )}
              </div>
            </>
          )}

          <button type="submit" disabled={loading} className="register-btn">
            {loading ? (
              <>
                <div className="spinner"></div>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="login-link">
          <span>Already have an account? </span>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="login-link-btn"
            aria-label="Go to login page"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
