'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react'
import Navigation from '../components/layout/Navigation'

interface FormData {
  businessName: string
  industry: string
  size: string
  name: string
  email: string
  phone: string
  revenue: string
  challenges: string[]
}

export default function DemoPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    industry: '',
    size: '',
    name: '',
    email: '',
    phone: '',
    revenue: '',
    challenges: []
  })

  const progressRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const totalSteps = 5

  useEffect(() => {
    // Animate progress bar
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${(step / totalSteps) * 100}%`,
        duration: 0.8,
        ease: 'power3.out'
      })
    }

    // Pulse animation on step change
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { scale: 0.98, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      )
    }
  }, [step])

  const industries = [
    { name: 'Restaurants', emoji: '🍽️', color: 'from-coral to-coral-dark' },
    { name: 'Cafés', emoji: '☕', color: 'from-golden to-golden/80' },
    { name: 'Retail', emoji: '🏪', color: 'from-navy to-navy/80' },
    { name: 'Supermarket', emoji: '🛒', color: 'from-forest to-forest/80' }
  ]

  const sizes = [
    { label: '1-5 locations', value: '1-5' },
    { label: '6-20 locations', value: '6-20' },
    { label: '21-50 locations', value: '21-50' },
    { label: '50+ locations', value: '50+' }
  ]

  const revenues = [
    { label: 'Under AED 500K', value: '<500k' },
    { label: 'AED 500K - 2M', value: '500k-2m' },
    { label: 'AED 2M - 10M', value: '2m-10m' },
    { label: 'AED 10M+', value: '10m+' }
  ]

  const challengeOptions = [
    'Slow checkout times',
    'Inventory management',
    'Staff coordination',
    'Payment processing',
    'Customer loyalty',
    'Analytics & reporting'
  ]

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    setStep(totalSteps + 1) // Success screen
  }

  const toggleChallenge = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-navy via-forest to-navy">
      <Navigation />

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-coral/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-golden/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-32">
        <div className="w-full max-w-4xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="text-white/80 text-sm uppercase tracking-wider">Request Demo</span>
            </div>
            <h1 className="font-palmore text-5xl md:text-7xl text-white uppercase mb-4">
              {step <= totalSteps ? 'Get Started' : 'All Set'}
            </h1>
          </motion.div>

          {/* Progress Bar */}
          {step <= totalSteps && (
            <div className="mb-12">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
                <div
                  ref={progressRef}
                  className="h-full bg-gradient-to-r from-coral via-golden to-coral rounded-full transition-all"
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          )}

          {/* Form Container */}
          <div ref={formRef} className="relative">
            <AnimatePresence mode="wait">

              {/* Step 1: Business Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
                >
                  <h2 className="font-palmore text-3xl md:text-4xl text-white uppercase mb-8">
                    Tell us about your business
                  </h2>

                  <div className="space-y-6">
                    <div className="group">
                      <label className="block text-white/60 text-sm uppercase tracking-wider mb-3">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:border-coral focus:bg-white/15 transition-all outline-none text-lg"
                        placeholder="Enter your business name"
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm uppercase tracking-wider mb-4">
                        Industry
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((industry) => (
                          <button
                            key={industry.name}
                            onClick={() => setFormData({ ...formData, industry: industry.name })}
                            className={`group relative p-6 rounded-2xl border-2 transition-all ${
                              formData.industry === industry.name
                                ? 'border-white bg-white/10 scale-105'
                                : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                            }`}
                          >
                            <div className="text-4xl mb-2">{industry.emoji}</div>
                            <div className="text-white text-sm font-medium">{industry.name}</div>
                            {formData.industry === industry.name && (
                              <div className="absolute top-2 right-2 w-6 h-6 bg-coral rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      onClick={nextStep}
                      disabled={!formData.businessName || !formData.industry}
                      className="group px-8 py-4 bg-coral hover:bg-coral-dark disabled:bg-white/10 disabled:cursor-not-allowed text-white rounded-full font-semibold flex items-center gap-3 transition-all shadow-lg hover:shadow-coral/50"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Business Size */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
                >
                  <h2 className="font-palmore text-3xl md:text-4xl text-white uppercase mb-8">
                    How big is your operation?
                  </h2>

                  <div className="space-y-4">
                    {sizes.map((size) => (
                      <button
                        key={size.value}
                        onClick={() => setFormData({ ...formData, size: size.value })}
                        className={`w-full p-6 rounded-2xl border-2 text-left transition-all group ${
                          formData.size === size.value
                            ? 'border-coral bg-gradient-to-r from-coral/20 to-transparent'
                            : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white text-lg font-semibold">{size.label}</span>
                          <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                            formData.size === size.value
                              ? 'border-coral bg-coral'
                              : 'border-white/40 group-hover:border-white/60'
                          }`}>
                            {formData.size === size.value && (
                              <Check className="w-full h-full text-white p-0.5" />
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="px-8 py-4 text-white/60 hover:text-white font-semibold flex items-center gap-3 transition-all"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!formData.size}
                      className="group px-8 py-4 bg-coral hover:bg-coral-dark disabled:bg-white/10 disabled:cursor-not-allowed text-white rounded-full font-semibold flex items-center gap-3 transition-all shadow-lg hover:shadow-coral/50"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Revenue */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
                >
                  <h2 className="font-palmore text-3xl md:text-4xl text-white uppercase mb-8">
                    Annual Revenue
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {revenues.map((revenue) => (
                      <button
                        key={revenue.value}
                        onClick={() => setFormData({ ...formData, revenue: revenue.value })}
                        className={`relative p-8 rounded-2xl border-2 transition-all group overflow-hidden ${
                          formData.revenue === revenue.value
                            ? 'border-golden bg-gradient-to-br from-golden/20 to-transparent'
                            : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                        }`}
                      >
                        <div className="relative z-10">
                          <div className="text-white text-2xl font-bold mb-2">{revenue.label}</div>
                        </div>
                        {formData.revenue === revenue.value && (
                          <div className="absolute top-4 right-4 w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="px-8 py-4 text-white/60 hover:text-white font-semibold flex items-center gap-3 transition-all"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!formData.revenue}
                      className="group px-8 py-4 bg-coral hover:bg-coral-dark disabled:bg-white/10 disabled:cursor-not-allowed text-white rounded-full font-semibold flex items-center gap-3 transition-all shadow-lg hover:shadow-coral/50"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Challenges */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
                >
                  <h2 className="font-palmore text-3xl md:text-4xl text-white uppercase mb-4">
                    What challenges do you face?
                  </h2>
                  <p className="text-white/60 mb-8">Select all that apply</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {challengeOptions.map((challenge) => (
                      <button
                        key={challenge}
                        onClick={() => toggleChallenge(challenge)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all ${
                          formData.challenges.includes(challenge)
                            ? 'border-coral bg-gradient-to-r from-coral/20 to-transparent'
                            : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                            formData.challenges.includes(challenge)
                              ? 'border-coral bg-coral'
                              : 'border-white/40'
                          }`}>
                            {formData.challenges.includes(challenge) && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <span className="text-white font-medium">{challenge}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="px-8 py-4 text-white/60 hover:text-white font-semibold flex items-center gap-3 transition-all"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={formData.challenges.length === 0}
                      className="group px-8 py-4 bg-coral hover:bg-coral-dark disabled:bg-white/10 disabled:cursor-not-allowed text-white rounded-full font-semibold flex items-center gap-3 transition-all shadow-lg hover:shadow-coral/50"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Contact Info */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
                >
                  <h2 className="font-palmore text-3xl md:text-4xl text-white uppercase mb-8">
                    Almost there
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-white/60 text-sm uppercase tracking-wider mb-3">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:border-coral focus:bg-white/15 transition-all outline-none text-lg"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm uppercase tracking-wider mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:border-coral focus:bg-white/15 transition-all outline-none text-lg"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm uppercase tracking-wider mb-3">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3 pointer-events-none">
                          <span className="text-2xl">🇦🇪</span>
                          <span className="text-white/60">+971</span>
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-32 pr-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:border-coral focus:bg-white/15 transition-all outline-none text-lg"
                          placeholder="50 123 4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      className="px-8 py-4 text-white/60 hover:text-white font-semibold flex items-center gap-3 transition-all"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.name || !formData.email || !formData.phone}
                      className="group px-8 py-4 bg-gradient-to-r from-coral to-golden hover:shadow-2xl hover:shadow-coral/50 disabled:bg-white/10 disabled:cursor-not-allowed text-white rounded-full font-semibold flex items-center gap-3 transition-all shadow-lg"
                    >
                      <span>Request Demo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Success Screen */}
              {step === 6 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-coral to-golden rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="font-palmore text-4xl md:text-5xl text-white uppercase mb-4">
                    Thank You!
                  </h2>
                  <p className="text-white/80 text-xl mb-8">
                    We'll be in touch within 24 hours to schedule your personalized demo.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy rounded-full font-semibold hover:bg-white/90 transition-all"
                  >
                    <span>Back to Home</span>
                  </a>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </main>
  )
}
