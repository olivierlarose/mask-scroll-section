'use client';
import { useEffect } from 'react';
import MaskSections from '@/components/MaskSections';
import Lenis from 'lenis'

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <div className="h-screen"/>
      <MaskSections />
      <div className="h-screen"/>
    </main>
  );
}

