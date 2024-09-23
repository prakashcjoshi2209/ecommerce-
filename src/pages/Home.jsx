import React from 'react'
import { Hero } from '../Component/Hero'
import { Latestcollection } from '../Component/Latestcollection'
import { BestSeller } from '../Component/BestSeller'
import { Ourpolicy } from '../Component/Ourpolicy'
import { NewletterBox } from '../Component/NewletterBox'
import { Newbest } from '../Component/Newbest'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <BestSeller/>
      <Newbest/>
      <Ourpolicy/>
      <NewletterBox/>
    </div>
  )
}
