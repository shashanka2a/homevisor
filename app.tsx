import React, { useState } from 'react';
import { 
  Home, 
  Scan, 
  CalendarClock, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  FileText,
  Menu,
  X,
  ChevronDown,
  Database,
  Hammer
} from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30",
    secondary: "bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Homevisor</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 font-medium">How it Works</a>
              <a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 font-medium">Pricing</a>
              <Button variant="primary" className="py-2 px-4 text-sm">Get Early Access</Button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
            <a href="#how-it-works" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>How it Works</a>
            <a href="#features" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <Button className="w-full">Get Early Access</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                The "Chief of Staff" AI for your home
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Stop managing your home. <br />
                <span className="text-indigo-600">Start living in it.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Homevisor bridges the gap between knowing what to do and getting it done. From leak detection to vendor dispatch, we automate the mental load of homeownership.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit">
                  {submitted ? "You're on the list!" : "Join Waitlist"}
                </Button>
              </form>
              <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> No credit card required for beta
              </p>
            </div>

            {/* Hero Visual/Dashboard Mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-500">My Home Dashboard</div>
                </div>
                <div className="p-6 space-y-4">
                  {/* Notification Card */}
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-indigo-600">
                      <CalendarClock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Maintenance Alert</h4>
                      <p className="text-sm text-gray-600 mt-1">Water heater flush due. Last performed: Oct 2024.</p>
                      <div className="mt-3 flex gap-2">
                        <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700">Book Pro</button>
                        <button className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md">View DIY Video</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Appliance List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded-md"><Database className="h-4 w-4 text-gray-600" /></div>
                        <div>
                          <p className="text-sm font-medium">HVAC Unit</p>
                          <p className="text-xs text-gray-500">Carrier 59TP6 • Filter: 20x25x1</p>
                        </div>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Good Health</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded-md"><Hammer className="h-4 w-4 text-gray-600" /></div>
                        <div>
                          <p className="text-sm font-medium">Roof</p>
                          <p className="text-xs text-gray-500">Installed 2006 • 18 years old</p>
                        </div>
                      </div>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Budget for Replacement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">From Chaos to Autopilot</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Homevisor isn't just a list. It's an active system that ingests data, plans your schedule, and executes repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-blue-100 group-hover:bg-blue-600 transition-colors">
                <Scan className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">1. The Digital Twin</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Upload your inspection report or photos. Our AI creates a searchable inventory of every appliance, model number, and paint code.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-purple-100 group-hover:bg-purple-600 transition-colors">
                <CalendarClock className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">2. Auto-Maintenance</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                No more guessing. We notify you when it's time to flush the heater or clean gutters, complete with budget forecasts for big replacements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-indigo-100 group-hover:bg-indigo-600 transition-colors">
                <Wrench className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">3. One-Click Dispatch</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Found a leak? One click generates a work order with precise model numbers and sends it to a pro. They arrive with the right parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive / "The Problem" */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
                {/* Abstract UI representation of the 'Ticket' */}
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <span className="text-gray-400 uppercase text-xs tracking-wider">Ticket #4921</span>
                    <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded">Open</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Leaking Garbage Disposal</h3>
                    <p className="text-gray-400 text-sm mt-1">Kitchen Sink • Unit 1</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <p className="text-xs text-gray-500 uppercase mb-2">AI-Generated Tech Note</p>
                    <p className="text-sm">
                      Model: <span className="text-white font-mono">InSinkErator Badger 5</span>.<br/>
                      Problem: Bottom seal failure detected.<br/>
                      <span className="text-green-400">Action: Replacement unit 1/2 HP required.</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                     <button className="flex-1 bg-white text-slate-900 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                       <Smartphone className="h-4 w-4" /> Urban Company
                     </button>
                     <button className="flex-1 bg-transparent border border-gray-600 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800">
                       My Plumber
                     </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Ticket System" for Homeowners</h2>
              <p className="text-lg text-gray-600 mb-8">
                In a commercial building, when something breaks, the manager doesn't google "plumbers near me" and hope for the best. They open a ticket.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Vendor Agnostic</h4>
                    <p className="text-gray-600 text-sm">Use our marketplace partners or bring your own trusted pros. We just provide the interface.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Precise Work Orders</h4>
                    <p className="text-gray-600 text-sm">We send the pro exact model numbers and serials before they drive over. No more "I need to go get a part" trips.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Historical Data</h4>
                    <p className="text-gray-600 text-sm">Every repair is logged. Warranties are tracked. You'll never lose a receipt again.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Carfax Value Prop */}
      <section className="bg-indigo-900 py-24 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <ShieldCheck className="h-5 w-5 text-green-400" />
            <span className="font-medium">The Exit Strategy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Build a "Carfax" for your Home</h2>
          <p className="text-xl text-indigo-200 mb-10 leading-relaxed">
            When you sell your car, service records add value. Why not your biggest asset? 
            Transfer your Homevisor account to the new owner to prove your home was perfectly maintained.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 flex-1">
                <div className="text-3xl font-bold text-white mb-1">Higher</div>
                <div className="text-indigo-200 text-sm">Resale Value</div>
             </div>
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 flex-1">
                <div className="text-3xl font-bold text-white mb-1">Faster</div>
                <div className="text-indigo-200 text-sm">Due Diligence</div>
             </div>
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 flex-1">
                <div className="text-3xl font-bold text-white mb-1">Zero</div>
                <div className="text-indigo-200 text-sm">Disputes</div>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-gray-600">Start building your data moat for free.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-slate-900">Homevisor Lite</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">$0</span>
                <span className="ml-1 text-gray-500">/forever</span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">Perfect for manually logging your inventory and building your home's history.</p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Manual Inventory Logging
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Digital Document Storage
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Basic Maintenance Reminders
                </li>
              </ul>
              
              <Button variant="secondary" className="w-full mt-8">Start for Free</Button>
            </div>

            {/* Premium Tier */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-indigo-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              <h3 className="text-xl font-bold text-slate-900">Chief of Staff</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">$15</span>
                <span className="ml-1 text-gray-500">/month</span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">Full automation. The concierge layer that handles the scheduling and dispatching.</p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-900 font-medium">
                  <div className="bg-indigo-100 p-0.5 rounded-full"><CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0" /></div>
                  Everything in Lite
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  AI "Digital Twin" Parsing
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  One-Click Dispatch (Ticket System)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  Transferable "Homefax" Account
                </li>
              </ul>
              
              <Button variant="primary" className="w-full mt-8">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-indigo-600 p-1 rounded-md">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg text-slate-900">Homevisor</span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">
                The operating system for the modern home. 
                We make homeownership as easy as renting, without the landlord.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">Features</a></li>
                <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-600">For Pros</a></li>
                <li><a href="#" className="hover:text-indigo-600">Login</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">About</a></li>
                <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Homevisor Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
