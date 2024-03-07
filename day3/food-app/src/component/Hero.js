import React from 'react'
import {Button} from './Button'
import './Button'
import './Hero.css'

export const Hero = () => {
  return (
<>
<section className='heroSection'>
                <div className='right-text'>
                    <h2>Let us find your <span>Forever Food.</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div>
                        <Button></Button>
                        <Button></Button>
                    </div>
                </div>
</section>
</>
  )
}

export default Hero;