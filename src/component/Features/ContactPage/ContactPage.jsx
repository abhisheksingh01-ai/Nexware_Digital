import React from 'react'
import ContactUsMain from '../ContactPage/ContactUsMain' 
import ContactFormSection from '../ContactPage/ContactFormSection' 
import BottomCardsSection from '../ContactPage/BottomCardsSection'

export default function ContactPage() {
  return (
    // Added top padding to account for fixed Navbar
    <main className="bg-white min-h-screen text-gray-900 pt-16 sm:pt-20 pb-20"> 
        {/* The components are now imported/named as above, matching the flow below */}
        <ContactUsMain/> 
        <ContactFormSection />
        <BottomCardsSection />
    </main>
  )
}