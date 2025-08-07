import { PARTICLE_CANVAS_ID } from '../consts/particleCanvasId'
import { initializeParticleAnimation } from './initializeParticleAnimation'

const setupParticles = (): void => {
  const canvas = document.getElementById(PARTICLE_CANVAS_ID) as HTMLCanvasElement | null

  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  initializeParticleAnimation(canvas)

  const handleResize = (): void => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  window.addEventListener('resize', handleResize)
}

window.addEventListener('load', setupParticles)
