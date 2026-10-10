import { REF_URL } from '@/lib/ref'

export function FuguHero() {
  return (
    <section className="r6w2-hero" aria-label="Приветственный бонус Fugu Casino">
      <div className="r6w2-hero-copy">
        <h1 className="r6w2-hero-h1">
          <span className="r6w2-hero-kicker">Fugu Casino — зарегистрируйся</span>
          <span className="r6w2-hero-line">и получи бонусы</span>
          <span className="r6w2-hero-bonus">
            <b>250%</b>
            <i>+</i>500<sup className="r6w2-fs">FS</sup>
          </span>
        </h1>
        <a className="r6w2-btn r6w2-btn-green r6w2-hero-cta" href={REF_URL}>
          Получить <span aria-hidden="true">→</span>
        </a>
      </div>
      <ul className="r6w2-pays" aria-label="Платёжные методы Fugu Casino">
        <li className="r6w2-pay">VISA</li>
        <li className="r6w2-pay">Mastercard</li>
        <li className="r6w2-pay">Apple Pay</li>
        <li className="r6w2-pay">Google Pay</li>
        <li className="r6w2-pay">MIFINITY</li>
        <li className="r6w2-pay">Flexepin</li>
        <li className="r6w2-pay">Instant Bank</li>
        <li className="r6w2-pay">USDT</li>
      </ul>
    </section>
  )
}
