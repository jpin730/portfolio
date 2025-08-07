import { initializeParticleAnimation } from './initializeParticleAnimation'

const setupParticles = (): void => {
  const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement | null

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
