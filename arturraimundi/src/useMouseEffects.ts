import { useEffect } from 'react'

const MAX_TILT = 5 // graus

/**
 * Efeitos que seguem o mouse:
 *  - brilho suave que acompanha o cursor (.cursor-glow)
 *  - inclinação 3D + luz no ponto do cursor nos cards (.card)
 *  - parallax leve no conteúdo do hero (--px / --py)
 * Só roda com mouse (pointer: fine) e sem "reduzir movimento".
 */
export function useMouseEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    const root = document.documentElement
    const glow = document.querySelector<HTMLElement>('.cursor-glow')
    const hero = document.querySelector<HTMLElement>('.hero')

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let glowX = targetX
    let glowY = targetY
    let frame = 0
    let activeCard: HTMLElement | null = null

    const resetCard = (card: HTMLElement) => {
      card.style.setProperty('--rx', '0deg')
      card.style.setProperty('--ry', '0deg')
    }

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      root.classList.add('has-cursor')

      // Parallax do hero: valores de -1 a 1 a partir do centro da tela
      if (hero) {
        hero.style.setProperty('--px', ((targetX / window.innerWidth) * 2 - 1).toFixed(3))
        hero.style.setProperty('--py', ((targetY / window.innerHeight) * 2 - 1).toFixed(3))
      }

      // Cards: inclinação e luz seguindo o cursor
      const card = (event.target as Element | null)?.closest<HTMLElement>('.card') ?? null
      if (activeCard && activeCard !== card) resetCard(activeCard)
      activeCard = card

      if (card) {
        const rect = card.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width
        const y = (event.clientY - rect.top) / rect.height
        card.style.setProperty('--x', `${(x * 100).toFixed(1)}%`)
        card.style.setProperty('--y', `${(y * 100).toFixed(1)}%`)
        card.style.setProperty('--ry', `${((x - 0.5) * MAX_TILT * 2).toFixed(2)}deg`)
        card.style.setProperty('--rx', `${((0.5 - y) * MAX_TILT * 2).toFixed(2)}deg`)
      }
    }

    const onLeave = () => {
      root.classList.remove('has-cursor')
      if (activeCard) resetCard(activeCard)
      activeCard = null
    }

    // O brilho segue o cursor com um pequeno atraso (interpolação suave)
    const tick = () => {
      glowX += (targetX - glowX) * 0.12
      glowY += (targetY - glowY) * 0.12
      if (glow) glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [])
}
