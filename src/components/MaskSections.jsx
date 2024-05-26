import React, { useRef } from 'react'
import Image from 'next/image';
import Picture1 from '../../public/images/1.jpg'
import Picture2 from '../../public/images/2.jpg'
import Picture3 from '../../public/images/3.jpg'
import useDimension from './useDimension';
import { useScroll, useMotionTemplate, useTransform, motion } from 'framer-motion';
export default function MaskSections() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"]
  });
  
  return (
    <div ref={container} className='relative h-[600vh]'>
        <div className='sticky top-0 h-screen'>
          <Section src={Picture1} progress={scrollYProgress} range={[0, 0.33]}/>
          <Section src={Picture2} progress={scrollYProgress} range={[0.33, 0.66]}/>
          <Section src={Picture3} progress={scrollYProgress} range={[0.66, 1]}/>
        </div>
      </div>
  )
}

const Section = ({src, progress, range}) => {

  const { width, height } = useDimension();
  const maskSize = useTransform(progress, range, [0, width * 1.25 + height * 1.25])
  const maskSizeTemplate = useMotionTemplate`${maskSize}px`

  return (
    <div className="absolute top-0 h-full w-full">
      <motion.div 
        className='mask relative w-full h-full'
        style={{WebkitMaskSize: maskSizeTemplate}} 
      >
        <Image 
          src={src}
          fill
          alt="image"
          style={{objectFit: "cover"}}
        />
      </motion.div>
    </div>
  )
}