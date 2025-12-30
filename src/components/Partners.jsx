import React from 'react';
import { Link } from 'react-router-dom';
// Removed 'Partners.css' - using Tailwind CSS

const Partners = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-emerald-900 text-white overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-800 to-transparent opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-24 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block py-2 px-4 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-100 text-sm font-bold tracking-wide mb-6">
                🤝 Join Our Network
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Partner with <br />
                <span className="text-emerald-300">FoodZTrain</span>
              </h1>
              
              <p className="text-lg md:text-xl text-emerald-100 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join Sri Lanka's leading train food delivery platform. Reach thousands of travelers daily and grow your restaurant business with our innovative technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-full hover:bg-emerald-50 transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
                  Apply Now
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-100 font-bold rounded-full hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2">
                  Learn More
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
              </div>
            </div>

            {/* Hero Stats Card */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-emerald-500/30 p-6 rounded-2xl text-center transform translate-y-8">
                  <div className="text-4xl font-bold text-emerald-300 mb-1">500+</div>
                  <div className="text-sm text-emerald-100 opacity-80">Partner Restaurants</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-emerald-500/30 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-emerald-300 mb-1">50k+</div>
                  <div className="text-sm text-emerald-100 opacity-80">Happy Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-emerald-500/30 p-6 rounded-2xl text-center transform translate-y-8">
                  <div className="text-4xl font-bold text-emerald-300 mb-1">25+</div>
                  <div className="text-sm text-emerald-100 opacity-80">Major Stations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-emerald-500/30 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-emerald-300 mb-1">₹5Cr</div>
                  <div className="text-sm text-emerald-100 opacity-80">Partner Revenue</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white rounded-t-[3rem] -mt-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Why Partner with FoodZTrain?</h2>
            <p className="text-lg text-stone-500">Unlock new opportunities and grow your restaurant business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📈', title: 'Increase Revenue', desc: 'Reach thousands of train travelers and boost your sales with our extensive customer base.' },
              { icon: '🚀', title: 'Easy Integration', desc: 'Seamlessly integrate with our platform using our user-friendly dashboard and management tools.' },
              { icon: '💳', title: 'Fast Payments', desc: 'Get paid quickly with our efficient payment system and transparent commission structure.' },
              { icon: '📊', title: 'Analytics & Insights', desc: 'Make data-driven decisions with comprehensive analytics on your restaurant performance.' },
              { icon: '🛡️', title: '24/7 Support', desc: 'Get round-the-clock assistance from our dedicated partner support team to help you succeed.' },
              { icon: '🎯', title: 'Targeted Marketing', desc: 'Benefit from our marketing campaigns and promotional activities to increase your visibility.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Our Featured Partners</h2>
            <p className="text-stone-500">Successful restaurants already partnered with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Pizza Palace', loc: 'Kilinochchi', icon: '🍕', orders: '15k+', rating: '4.8' },
              { name: 'Spice Garden', loc: 'Chavakachcheri', icon: '🥘', orders: '12k+', rating: '4.9' },
              { name: 'Burger Junction', loc: 'Meesalai', icon: '🍔', orders: '18k+', rating: '4.7' },
              { name: 'Ceylon Kitchen', loc: 'Kodikamam', icon: '🍱', orders: '14k+', rating: '4.8' }
            ].map((partner, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-stone-100">
                <div className="h-32 bg-stone-100 flex items-center justify-center text-6xl">
                  {partner.icon}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-stone-900">{partner.name}</h4>
                    <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                      ⭐ {partner.rating}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 mb-4">📍 {partner.loc} Station</p>
                  <div className="pt-4 border-t border-stone-100 flex justify-between text-sm">
                    <span className="text-stone-400">Total Orders</span>
                    <span className="font-bold text-stone-800">{partner.orders}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Become a Partner</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-emerald-700/50 -z-10"></div>
            
            {[
              { num: '01', title: 'Apply Online', text: 'Fill out our simple application form with your details.' },
              { num: '02', title: 'Verification', text: 'We review your application and hygiene standards.' },
              { num: '03', title: 'Setup', text: 'Complete onboarding and setup your menu & pricing.' },
              { num: '04', title: 'Go Live', text: 'Start receiving orders and growing your business.' }
            ].map((step, idx) => (
              <div key={idx} className="relative pt-4">
                <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center text-2xl font-bold border-4 border-emerald-900 mx-auto mb-6 relative z-10">
                  {step.num}
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-emerald-200 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Transparent Pricing</h2>
            <p className="text-stone-500">Fair and competitive commission rates.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            
            {/* Standard */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-lg text-center order-2 md:order-1">
              <h3 className="text-lg font-bold text-stone-600 mb-2">Standard</h3>
              <div className="text-4xl font-bold text-stone-900 mb-4">15%</div>
              <p className="text-sm text-stone-500 mb-6">Per order commission</p>
              <ul className="text-left space-y-3 text-sm text-stone-600 mb-8">
                <li className="flex gap-2"><span>✓</span> Weekly payments</li>
                <li className="flex gap-2"><span>✓</span> Standard Support</li>
                <li className="flex gap-2"><span>✓</span> Basic Analytics</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-stone-300 font-bold text-stone-600 hover:bg-stone-50">Choose Standard</button>
            </div>

            {/* Premium (Highlighted) */}
            <div className="bg-gradient-to-b from-emerald-600 to-emerald-800 p-8 rounded-3xl shadow-2xl text-center text-white transform scale-105 order-1 md:order-2 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
              <h3 className="text-lg font-bold text-emerald-100 mb-2">Premium</h3>
              <div className="text-5xl font-bold mb-4">12%</div>
              <p className="text-sm text-emerald-200 mb-6">Reduced commission</p>
              <ul className="text-left space-y-3 text-sm text-emerald-50 mb-8">
                <li className="flex gap-2"><span>✓</span> <span className="font-bold">Lower rates</span></li>
                <li className="flex gap-2"><span>✓</span> Priority Support</li>
                <li className="flex gap-2"><span>✓</span> Marketing Boosts</li>
                <li className="flex gap-2"><span>✓</span> Advanced Analytics</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-white text-emerald-800 font-bold hover:bg-emerald-50">Apply Premium</button>
            </div>

            {/* Exclusive */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-lg text-center order-3">
              <h3 className="text-lg font-bold text-stone-600 mb-2">Exclusive</h3>
              <div className="text-4xl font-bold text-stone-900 mb-4">10%</div>
              <p className="text-sm text-stone-500 mb-6">For large chains</p>
              <ul className="text-left space-y-3 text-sm text-stone-600 mb-8">
                <li className="flex gap-2"><span>✓</span> Custom Contracts</li>
                <li className="flex gap-2"><span>✓</span> Dedicated Manager</li>
                <li className="flex gap-2"><span>✓</span> Co-marketing</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-stone-300 font-bold text-stone-600 hover:bg-stone-50">Contact Sales</button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Partner Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "FoodZTrain has transformed our business. We've increased our revenue by 40% since joining.", author: "Rajesh Kumar", role: "Owner, Pizza Palace" },
              { text: "The best decision we made. The analytics help us understand customer preferences.", author: "Priya Devi", role: "Manager, Spice Garden" },
              { text: "Amazing platform with great support. Our burger sales have doubled.", author: "Saman Silva", role: "Chef, Burger Junction" }
            ].map((item, idx) => (
              <div key={idx} className="bg-stone-50 p-8 rounded-3xl relative">
                <div className="text-6xl text-emerald-200 absolute top-4 left-6 font-serif leading-none">"</div>
                <p className="text-stone-600 italic mb-6 relative z-10 pl-4">{item.text}</p>
                <div className="flex items-center gap-4 pl-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    {item.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-stone-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-stone-900 rounded-[2.5rem] p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to grow with us?</h2>
              <p className="text-lg text-stone-400 mb-10">Join hundreds of successful restaurants already earning more with FoodZTrain.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all shadow-lg shadow-emerald-900/50">
                  Apply Now - It's Free
                </button>
                <Link to="/contact" className="px-10 py-4 bg-transparent border border-stone-600 hover:border-emerald-500 hover:text-emerald-400 text-stone-300 font-bold rounded-full transition-all">
                  Contact Team
                </Link>
              </div>
              
              <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 text-sm text-stone-500">
                <span>📞 +94 21 123 4567</span>
                <span>📧 partners@foodztrain.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;