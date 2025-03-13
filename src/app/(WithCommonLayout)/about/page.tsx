import { AboutHero } from '@/components/modules/about/AboutHero'
import { CallToActionSection } from '@/components/modules/about/CallToActionSection'
import { MissionSection } from '@/components/modules/about/MissionSection'
import { TeamSection } from '@/components/modules/about/TeamSection'
import { TestimonialsSection } from '@/components/modules/about/TestimonialsSection'
import React from 'react'

const AboutPage = () => {
  return (
    <>
    <AboutHero/>
    <MissionSection/>
    <TeamSection/>
    <TestimonialsSection/>
    <CallToActionSection/>
    </>
  )
}

export default AboutPage