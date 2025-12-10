'use client'

import { useState, useEffect } from 'react'
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
  Database,
  Hammer,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react'

// Custom Hook for Scroll Direction/Position
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.scrollY)
    window.addEventListener("scroll", updatePosition)
    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])
  return scrollPosition
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glow'
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}

const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }: ButtonProps) => {
  const baseStyle = "group relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-0.5",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
    glow: "bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:-translate-y-0.5"
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  )
}

interface BentoCardProps {
  children?: React.ReactNode
  className?: string
  title: string
  subtitle: string
  icon?: React.ComponentType<{ className?: string }>
  dark?: boolean
}

const BentoCard = ({ children, className = "", title, subtitle, icon: Icon, dark = false }: BentoCardProps) => (
  <div className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
    dark ? 'bg-slate-900 text-white' : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50'
  } ${className}`}>
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 rounded-2xl ${dark ? 'bg-slate-800 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        {dark && <div className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium border border-indigo-500/30">New</div>}
      </div>
      
      <div className="mt-auto">
        <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`text-sm leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
      </div>
      
      {children}
    </div>
    
    {/* Decorative Gradients */}
    <div className={`absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none ${
      dark ? 'bg-indigo-500' : 'bg-blue-200'
    }`} />
  </div>
)

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollPos = useScrollPosition()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* Abstract Background Mesh */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/30 blur-[100px]" />
        <div className="absolute top-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-200/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-200/30 blur-[100px]" />
      </div>

      {/* Floating Navigation */}
      <nav className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 px-4`}>
        <div className={`max-w-5xl mx-auto rounded-full transition-all duration-300 ${
          scrollPos > 50 
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 py-3 px-6' 
            : 'bg-transparent py-4 px-0'
        }`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 p-1.5 rounded-lg rotate-3">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">Homevisor</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1 bg-white/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-md">
              <a href="#how-it-works" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-white transition-all">How it Works</a>
              <a href="#features" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-white transition-all">Features</a>
              <a href="#pricing" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-white transition-all">Pricing</a>
            </div>

            <div className="hidden md:block">
              <Button variant="primary" className="py-2 px-5 text-sm !rounded-full">Get Early Access</Button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-in fade-in slide-in-from-top-10">
          <div className="flex flex-col gap-6 text-2xl font-medium">
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How it Works</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <hr className="border-gray-100" />
            <Button className="w-full justify-center">Get Early Access</Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-medium mb-8 hover:scale-105 transition-transform cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Your 24/7 Home Manager. Like a property manager, built for homeowners.
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
              Stop Coordinating.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient bg-300% italic pr-2">Start Delegating.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl leading-relaxed font-light">
              Your single point of contact for everything home-related. We track assets, forecast expenses, and coordinate all maintenance.
            </p>
            
            <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex p-2 bg-white rounded-full shadow-xl">
                <input 
                  type="email" 
                  placeholder="Enter email for early access..." 
                  className="w-full px-6 py-3 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" variant="primary" className="shrink-0 py-3 px-6">
                  {submitted ? <CheckCircle2 className="w-5 h-5" /> : "Join Waitlist"}
                </Button>
              </div>
            </form>
          </div>

          {/* 3D Dashboard Preview */}
          <div className="relative mt-20 perspective-1000">
            <div className="relative max-w-5xl mx-auto transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] -z-10 rounded-full mix-blend-multiply"></div>
              
              <div className="bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] border border-slate-200/60 overflow-hidden ring-1 ring-slate-900/5">
                {/* Mockup Header */}
                <div className="bg-white/50 backdrop-blur-sm border-b border-slate-100 p-4 flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="h-6 w-64 bg-slate-100 rounded-lg animate-pulse"></div>
                </div>

                {/* Mockup Body */}
                <div className="p-8 grid md:grid-cols-3 gap-8 bg-slate-50/50">
                  {/* Column 1 */}
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                       <div className="flex justify-between items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><CalendarClock className="w-5 h-5"/></div>
                          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">10 years</span>
                       </div>
                       <h3 className="font-semibold text-slate-800">Roof Replacement</h3>
                       <p className="text-xs text-slate-500 mt-1">Save $50/mo for $15,000 replacement</p>
                       <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                         <div className="bg-indigo-500 w-[50%] h-full rounded-full"></div>
                       </div>
                       <p className="text-xs text-indigo-600 mt-2 font-medium">$3,000 saved</p>
                    </div>
                  </div>

                  {/* Column 2 (Main) */}
                  <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden group cursor-pointer">
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Wrench size={100} />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-indigo-300 text-sm font-medium mb-1">Managed Service</h4>
                        <h3 className="text-xl font-bold mb-4">HVAC Annual Service</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-300 mb-6">
                           <div className="flex items-center gap-2"><Smartphone size={16}/> Scheduled</div>
                           <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                           <div>Nov 15, 2:00 PM</div>
                        </div>
                        <div className="flex gap-2">
                           <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/10">Trane XR16</div>
                           <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/10">Filter Included</div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="text-xs text-slate-400">We&apos;ve coordinated everything. Just confirm.</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                         <div className="bg-green-100 p-2 rounded-lg text-green-600"><CheckCircle2 size={18}/></div>
                         <div>
                            <div className="text-sm font-semibold">HVAC Service</div>
                            <div className="text-xs text-slate-500">Completed Oct 24</div>
                         </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                         <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><FileText size={18}/></div>
                         <div>
                            <div className="text-sm font-semibold">Warranty Doc</div>
                            <div className="text-xs text-slate-500">Dishwasher</div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Proactive Management, <br />
              <span className="text-slate-400">Not Reactive Repairs.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike directories that leave you to vet and coordinate, Homevisor manages everything. We track lifecycles, build sinking funds, and handle service coordination so you can delegate, not DIY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Feature 1: Lifecycle Tracking & Financial Planning (Large) */}
            <BentoCard 
              className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-white to-slate-50"
              title="Lifecycle Tracking & Sinking Funds"
              subtitle="We track the age and condition of every major system. The app calculates monthly savings targets so you&apos;re never caught off-guard by a $15,000 roof replacement. Shift from emergency spending to predictable budgeting."
              icon={Scan}
            >
              <div className="mt-8 relative h-48 rounded-xl bg-slate-900 overflow-hidden border border-slate-800 group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full space-y-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">Roof Replacement</span>
                        <span className="text-indigo-300 text-xs">10 years remaining</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 w-[50%] h-full rounded-full"></div>
                      </div>
                      <div className="text-slate-400 text-xs mt-2">Save $50/mo for $15,000 replacement</div>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Feature 2: Proactive Maintenance */}
            <BentoCard 
              className="md:col-span-2 md:row-span-1"
              title="Predictive Maintenance"
              subtitle="We forecast when systems will need attention, before they break. Annual inspections feed data back into lifecycle tracking, keeping your home health visible and budget predictable."
              icon={CalendarClock}
            />

            {/* Feature 3: Managed Marketplace */}
            <BentoCard 
              className="md:col-span-2 md:row-span-1"
              title="Managed Service Marketplace"
              subtitle="We don&apos;t just pass leads. We manage booking, scheduling, and billing from routine window washing to technical HVAC servicing. One point of contact, zero coordination headaches."
              icon={Lock}
            />

            {/* Feature 4: Service Coordination (Dark) */}
            <BentoCard 
              className="md:col-span-3 md:row-span-2"
              dark={true}
              title="Service Coordination"
              subtitle="No more playing general contractor. We handle the entire service lifecycle from identifying the issue to dispatching the right pro with complete context. Your asset database ensures they arrive with the right parts and knowledge."
              icon={Zap}
            >
               <div className="mt-6 flex flex-col gap-3">
                 <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex justify-between items-center">
                    <span className="text-sm text-slate-300">Scheduling Service</span>
                    <span className="font-mono text-green-400 text-sm">Booked</span>
                 </div>
                 <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex justify-between items-center">
                    <span className="text-sm text-slate-300">Work Order Sent</span>
                    <span className="font-mono text-green-400 text-sm">Complete</span>
                 </div>
                 <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex justify-between items-center">
                    <span className="text-sm text-slate-300">Centralized Billing</span>
                    <span className="font-mono text-green-400 text-sm">Processed</span>
                 </div>
               </div>
            </BentoCard>

            {/* Feature 5: Financial Planning */}
            <BentoCard 
              className="md:col-span-3 md:row-span-2 bg-indigo-50 border-indigo-100"
              title="Predictable Budgeting"
              subtitle="Transform your home from an unpredictable money pit into a managed asset. See exactly what&apos;s coming due, when, and how much to save. No more financial shocks from system failures."
              icon={ShieldCheck}
            >
              <div className="mt-6 flex items-center gap-4">
                 <div className="flex-1 bg-white p-4 rounded-xl shadow-sm text-center border border-indigo-100">
                    <div className="text-2xl font-bold text-slate-900">$0</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Surprise Expenses</div>
                 </div>
                 <div className="flex-1 bg-white p-4 rounded-xl shadow-sm text-center border border-indigo-100">
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Predictable</div>
                 </div>
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

      {/* How it works - Horizontal Scroll / Steps */}
      <section id="how-it-works" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div>
                 <span className="text-indigo-400 font-mono mb-4 block">01 — 03</span>
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How It Works</h2>
              </div>
              <p className="text-slate-400 max-w-md text-lg">
                We become your single point of contact. Track assets, forecast expenses, coordinate services. All in one place. You delegate, we execute.
              </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Build Your Asset Database",
                  desc: "Upload inspection reports or photos. We digitize your home, tracking every system, appliance, and component with age, condition, and warranty information.",
                  icon: Database
                },
                {
                  step: "02",
                  title: "Proactive Planning",
                  desc: "We calculate lifecycle timelines and monthly sinking fund targets. See what&apos;s coming due in 5, 10, or 15 years, and start saving now.",
                  icon: Sparkles
                },
                {
                  step: "03",
                  title: "Managed Service Coordination",
                  desc: "When maintenance is needed, we handle it. From booking to billing, we coordinate with vetted contractors and ensure quality fulfillment.",
                  icon: CheckCircle2
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                   <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="text-indigo-400 w-6 h-6" />
                   </div>
                   <div className="text-6xl font-bold text-white/5 mb-4 font-mono">{item.step}</div>
                   <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                   <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Pricing Section - Minimalist */}
      <section id="pricing" className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Subscription for the platform. Service fees only when you book. No hidden costs, no surprise quotes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Basic Tier */}
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900">Basic</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-slate-900 tracking-tighter">$0</span>
                  <span className="text-slate-500">/forever</span>
                </div>
                <p className="mt-4 text-slate-500">Manual asset tracking & document storage.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Manual Asset Entry', 'Document Cloud Storage', 'Basic Lifecycle Tracking', 'DIY Coordination'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-300" /> {feat}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full">Start Free</Button>
            </div>

            {/* Home Manager Tier */}
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl shadow-indigo-500/20 text-white flex flex-col relative overflow-hidden ring-4 ring-slate-900/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none"></div>
              
              <div className="mb-8 relative z-10">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">Home Manager</h3>
                  <span className="bg-indigo-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full tracking-wider">Popular</span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white tracking-tighter">$29</span>
                  <span className="text-slate-400">/mo</span>
                </div>
                <p className="mt-4 text-slate-400">Full platform access + managed service coordination. Service fees apply when booking.</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                {['AI-Powered Asset Tracking', 'Sinking Fund Calculator', 'Managed Service Marketplace', 'Proactive Maintenance Alerts', 'Centralized Billing & Scheduling'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" /> {feat}
                  </li>
                ))}
              </ul>
              <Button variant="glow" className="w-full justify-center" icon={ArrowRight}>Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Big Typography */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
             <h2 className="text-[12vw] leading-none font-bold tracking-tighter opacity-10 select-none">HOMEVISOR</h2>
             <div className="mt-8 md:mt-0">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-white p-1 rounded-md">
                    <Home className="h-5 w-5 text-slate-900" />
                  </div>
                  <span className="font-bold text-xl">Homevisor</span>
                </div>
                <div className="flex gap-6 text-sm text-slate-400">
                   <a href="#" className="hover:text-white transition-colors">Twitter</a>
                   <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                   <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between border-t border-slate-800 pt-8 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Homevisor Inc.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


