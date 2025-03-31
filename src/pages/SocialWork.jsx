import React from 'react'
import SocialWorkProtestBanner from '../components/SocialWorkProtestBanner/SocialWorkProtestBanner'
import ResourceCards from '../components/SocialWorkProtestBanner/ResourceCards'
import HighlightsSection from '../components/SocialWorkProtestBanner/HighlightsSection'
import ResourceSection from '../components/SocialWorkProtestBanner/ResourceSection'

function SocialWork() {
  return (
    <div>
      <SocialWorkProtestBanner/>
      <ResourceCards/>
      <HighlightsSection/>
      <ResourceSection/>
    </div>
  )
}

export default SocialWork
