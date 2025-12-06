import React, { useState } from 'react';
import { Package } from '../types';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  packages: Package[];
}

export const ContactForm: React.FC<ContactFormProps> = ({ packages }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageId: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', packageId: '', date: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Decorative bg pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 dark:bg-slate-700/50 skew-x-12 translate-x-1/2 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to start your journey?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Fill out the form below and our travel experts will get back to you with a personalized itinerary within 24 hours.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-travel-50 dark:bg-travel-900/30 rounded-2xl border border-travel-100 dark:border-travel-800">
                <h4 className="font-bold text-travel-900 dark:text-travel-300 text-2xl mb-1">24/7</h4>
                <p className="text-sm text-travel-700 dark:text-travel-400">Support for travelers</p>
              </div>
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-300 text-2xl mb-1">10k+</h4>
                <p className="text-sm text-blue-700 dark:text-blue-400">Happy customers</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Best Price Guarantee</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Secure Booking</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400">We've received your details. Check your email for confirmation.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 dark:text-white border-transparent focus:border-travel-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-0 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 dark:text-white border-transparent focus:border-travel-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-0 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 dark:text-white border-transparent focus:border-travel-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-0 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Interested Package</label>
                      <select 
                        name="packageId"
                        value={formData.packageId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 dark:text-white border-transparent focus:border-travel-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-0 transition-colors appearance-none"
                      >
                        <option value="">Select a package</option>
                        {packages.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Date</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 dark:text-white border-transparent focus:border-travel-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message (Optional)</label>
                    <textarea 
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 dark:text-white border-transparent focus:border-travel-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-0 transition-colors"
                      placeholder="Any specific requirements?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-travel-600 hover:bg-travel-700 text-white font-bold rounded-xl shadow-lg shadow-travel-600/20 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Request Quote'}
                    {!status || status === 'idle' ? <Send size={18} /> : null}
                  </button>
                  <p className="text-xs text-gray-400 text-center">Protected by Yatrasoul Privacy Policy.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};