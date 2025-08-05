import { Particle } from '../classes/Particle'

export const initializeParticleAnimation = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas?.getContext('2d')

  if (!ctx) {
    return
  }

  const particles: Particle[] = []
  const particleCount = 100

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas, ctx))
  }

  const animate = (): void => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const particle of particles) {
      particle.update()
      particle.draw()
    }

    requestAnimationFrame(animate)
  }

  animate()
}
