'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el)
    })

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question')
      if (question) {
        question.addEventListener('click', () => {
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active')
            }
          })
          item.classList.toggle('active')
        })
      }
    })

    // Lazy loading for images
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
