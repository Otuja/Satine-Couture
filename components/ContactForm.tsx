'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'bridal',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'bridal',
        message: ''
      })
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="Enter your full name"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="your.email@example.com"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="+234 XXX XXX XXXX"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="service" className={styles.label}>Service Type *</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="bridal">Bridal Wear</option>
          <option value="bespoke">Bespoke/Custom Design</option>
          <option value="traditional">Traditional Wear</option>
          <option value="rtw">Ready-to-Wear</option>
          <option value="consultation">General Consultation</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message / Requirements</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={styles.textarea}
          placeholder="Tell us about your vision, event date, or any specific requirements..."
        />
      </div>

      <button 
        type="submit" 
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Book Appointment'}
      </button>

      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          ✓ Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          ✗ Something went wrong. Please try again or contact us directly.
        </div>
      )}
    </form>
  )
}
