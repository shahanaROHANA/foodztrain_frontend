import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../utils/authUtils';
// Removed Login.css import

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotStep, setForgotStep] = useState(1); // 1: email, 2: otp & password
  const [forgotData, setForgotData] = useState({
    email: '',
    otp: '',
    newPassword: ''
  });
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');

  // --- Validation Logic (Kept same as original) ---
  const validateEmail = (email) => {
    if (!email) return 'Email address is required';
    if (typeof email !== 'string' || email.trim().length === 0) return 'Email address cannot be empty';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address';
    const commonDomains = ['.com', '.org', '.net', '.edu', '.gov', '.mil'];
    const hasValidDomain = commonDomains.some(domain => email.toLowerCase().includes(domain));
    if (!hasValidDomain) return 'Please enter a valid email address with a proper domain';
    return null;
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (typeof password !== 'string' || password.length === 0) return 'Password cannot be empty';
    if (password.length < 6) return 'Password must be at least 6 characters long';
    if (password.includes(' ')) return 'Password cannot contain spaces';
    return null;
  };

  const validateForm = () => {
    const errors = {};
    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;
    const passwordError = validatePassword(formData.password);
    if (passwordError) errors.password = passwordError;
    return errors;
  };

  // --- Event Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (fieldErrors[name]) setFieldErrors({ ...fieldErrors, [name]: '' });
    if (error) setError('');

    if (touchedFields[name]) {
      const newFieldErrors = {};
      if (name === 'email') {
        const emailError = validateEmail(value);
        if (emailError) newFieldErrors.email = emailError;
      } else if (name === 'password') {
        const passwordError = validatePassword(value);
        if (passwordError) newFieldErrors.password = passwordError;
      }
      if (Object.keys(newFieldErrors).length > 0) {
        setFieldErrors({ ...fieldErrors, ...newFieldErrors });
      }
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    const newFieldErrors = {};
    if (name === 'email') {
      const emailError = validateEmail(formData.email);
      if (emailError) newFieldErrors.email = emailError;
    } else if (name === 'password') {
      const passwordError = validatePassword(formData.password);
      if (passwordError) newFieldErrors.password = passwordError;
    }
    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors({ ...fieldErrors, ...newFieldErrors });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFieldErrors({});
    setTouchedFields({ email: true, password: true });

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const result = await loginUser(formData.email, formData.password);

      if (result.success) {
        onLogin(result.user);
        if (result.user.role === 'deliveryAgent') navigate('/delivery/dashboard');
        else if (result.user.role === 'admin') navigate('/admin');
        else if (result.user.role === 'seller') navigate('/seller');
        else navigate('/products');
      } else {
        const errorMessage = result.error || 'Login failed';
        setError(errorMessage);
        if (errorMessage.toLowerCase().includes('email')) {
          setFieldErrors({ email: errorMessage });
        } else if (errorMessage.toLowerCase().includes('password')) {
          setFieldErrors({ password: errorMessage });
        } else if (errorMessage.toLowerCase().includes('invalid')) {
          setFieldErrors({ email: 'Check your email and password', password: 'Check your email and password' });
        }
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  // --- Forgot Password Logic ---
  const handleForgotChange = (e) => {
    setForgotData({ ...forgotData, [e.target.name]: e.target.value });
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotError('');
    setForgotSuccess('');

    try {
      if (forgotStep === 1) {
        const emailError = validateEmail(forgotData.email);
        if (emailError) {
          setForgotError(emailError);
          setForgotLoading(false);
          return;
        }
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/forget-password`, { email: forgotData.email });
        setForgotSuccess('OTP sent to your email');
        setForgotStep(2);
      } else {
        if (!forgotData.otp) { setForgotError('Verification code is required'); setForgotLoading(false); return; }
        if (!forgotData.newPassword) { setForgotError('New password is required'); setForgotLoading(false); return; }
        
        await axios.post(`${import.meta.env.VITE_API_URL}/auth/reset-password`, {
          email: forgotData.email,
          otp: forgotData.otp,
          newPassword: forgotData.newPassword
        });
        setForgotSuccess('Password reset successful');
        setTimeout(() => closeForgotModal(), 2000);
      }
    } catch (err) {
      setForgotError(err.response?.data?.message || 'An error occurred');
    } finally {
      setForgotLoading(false);
    }
  };

  const closeForgotModal = () => {
    setShowForgotModal(false);
    setForgotStep(1);
    setForgotData({ email: '', otp: '', newPassword: '' });
    setForgotError('');
    setForgotSuccess('');
  };

  const isFormValid = () => {
    const errors = validateForm();
    return Object.keys(errors).length === 0 && formData.email && formData.password;
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-stone-100 p-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-emerald-50 text-3xl mb-4 shadow-sm border border-emerald-100">
            🚂
          </div>
          <h2 className="text-3xl font-bold text-stone-900 mb-2">Welcome Back</h2>
          <p className="text-stone-500 text-sm">Sign in to order delicious food on your journey</p>
        </div>

        {/* Global Error Banner */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-start gap-3 animate-pulse">
            <span className="text-red-500 text-lg">⚠️</span>
            <p className="text-red-700 text-sm font-medium pt-0.5">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border bg-stone-50 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-emerald-500/20 ${
                  fieldErrors.email 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-stone-200 focus:border-emerald-500'
                }`}
                placeholder="name@example.com"
                aria-invalid={fieldErrors.email ? "true" : "false"}
              />
              {/* Icon */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-stone-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
            </div>
            {fieldErrors.email && (
              <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                <span>⚠️</span> {fieldErrors.email}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-xl border bg-stone-50 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-emerald-500/20 pr-10 ${
                  fieldErrors.password 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-stone-200 focus:border-emerald-500'
                }`}
                placeholder="••••••••"
                aria-invalid={fieldErrors.password ? "true" : "false"}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-stone-400 hover:text-stone-600 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex="-1"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                )}
              </button>
            </div>
            {fieldErrors.password && (
              <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                <span>⚠️</span> {fieldErrors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading || !isFormValid()} 
            className={`w-full py-3.5 px-4 rounded-xl font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-200 transform flex items-center justify-center gap-2 ${
              loading || !isFormValid() 
                ? 'bg-stone-300 cursor-not-allowed shadow-none' 
                : 'bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-0.5'
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setShowForgotModal(true)}
            className="text-sm text-stone-500 hover:text-emerald-600 font-medium transition-colors"
          >
            Forgot your password?
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-stone-50 px-6 py-4 border-b border-stone-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-stone-800">Reset Password</h3>
              <button onClick={closeForgotModal} className="text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full p-1 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="p-6">
              <p className="text-stone-500 text-sm mb-6">
                {forgotStep === 1 
                  ? "Enter your email address and we'll send you a verification code to reset your password."
                  : "Check your email for the code and enter it below with your new password."}
              </p>

              {forgotError && (
                <div className="mb-4 bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center gap-2">
                  <span>⚠️</span> {forgotError}
                </div>
              )}
              
              {forgotSuccess && (
                <div className="mb-4 bg-green-50 text-green-700 text-sm p-3 rounded-lg flex items-center gap-2">
                  <span>✓</span> {forgotSuccess}
                </div>
              )}

              <form onSubmit={handleForgotSubmit} className="space-y-4">
                {forgotStep === 1 ? (
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={forgotData.email}
                      onChange={handleForgotChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Verification Code</label>
                      <input
                        type="text"
                        name="otp"
                        value={forgotData.otp}
                        onChange={handleForgotChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all tracking-widest text-center font-mono"
                        placeholder="XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">New Password</label>
                      <input
                        type="password"
                        name="newPassword"
                        value={forgotData.newPassword}
                        onChange={handleForgotChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        placeholder="New strong password"
                      />
                    </div>
                  </>
                )}

                <button 
                  type="submit" 
                  disabled={forgotLoading} 
                  className="w-full mt-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {forgotLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    forgotStep === 1 ? 'Send Code' : 'Reset Password'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;