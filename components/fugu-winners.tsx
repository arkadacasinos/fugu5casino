import type { CSSProperties } from 'react'
import { REF_URL } from '@/lib/ref'

const WINS = [
  { name: 'T**my', game: 'Santa Mummy', sum: '11 097 €', initials: 'SM', c1: '#8b2fd6', c2: '#d64fd6' },
  { name: 'En**36', game: 'Sweet Bonanza', sum: '10 000 €', initials: 'SB', c1: '#d64f6e', c2: '#ffb84f' },
  { name: 'S**ry', game: 'Immersive Roulette', sum: '6 750 €', initials: 'IR', c1: '#b8862f', c2: '#e6c15a' },
  { name: 'E**3', game: 'Dr Zippo', sum: '6 289 €', initials: 'DZ', c1: '#2f6ed6', c2: '#4fd6c8' },
  { name: 'Bon***rio', game: 'Non Bank 2', sum: '4 754 €', initials: 'NB', c1: '#d6862f', c2: '#f2d15a' },
]

export function FuguWinners() {
  return (
    <section className="r6w2-winners" aria-label="Последние крупные выигрыши в Fugu Casino">
      {WINS.map((win) => (
        <a key={win.name} className="r6w2-winner" href={REF_URL}>
          <span
            className="r6w2-winner-thumb"
            style={{ '--c1': win.c1, '--c2': win.c2 } as CSSProperties}
            aria-hidden="true"
          >
            {win.initials}
          </span>
          <span className="r6w2-winner-meta">
            <span className="r6w2-winner-name">
              {win.name} · {win.game}
            </span>
            <span className="r6w2-winner-sum">{win.sum}</span>
          </span>
        </a>
      ))}
    </section>
  )
}
