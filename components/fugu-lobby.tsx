import { REF_URL } from '@/lib/ref'

export function FuguLobby() {
  return (
    <>
      <nav className="r6w2-tabs" aria-label="Категории игр Fugu Casino">
        <a className="r6w2-tab r6w2-tab-active" href={REF_URL}>
          Лобби
        </a>
        <a className="r6w2-tab" href={REF_URL}>
          Слоты
        </a>
        <a className="r6w2-tab" href={REF_URL}>
          Instant Games
        </a>
        <a className="r6w2-tab" href={REF_URL}>
          Для хайроллеров
        </a>
        <a className="r6w2-tab" href={REF_URL}>
          Настольные
        </a>
        <a className="r6w2-tab" href={REF_URL}>
          Multiplier
        </a>
        <a className="r6w2-btn r6w2-btn-blue r6w2-providers" href={REF_URL}>
          Все провайдеры <span aria-hidden="true">→</span>
        </a>
      </nav>
      <div className="r6w2-promo">
        <a className="r6w2-promo-card r6w2-card-yellow r6w2-area-wheel" href={REF_URL}>
          Колесо фортуны
          <img src="/images/wheel.jpg" alt="Колесо фортуны Fugu Casino" loading="lazy" />
        </a>
        <a className="r6w2-promo-card r6w2-area-gift" href={REF_URL}>
          Бонусы
          <img src="/images/gift.jpg" alt="" loading="lazy" />
        </a>
        <a className="r6w2-promo-card r6w2-area-vip" href={REF_URL}>
          VIP Club
          <img src="/images/vip.jpg" alt="" loading="lazy" />
        </a>
        <a className="r6w2-promo-card r6w2-area-live" href={REF_URL}>
          Live казино
          <img src="/images/live.jpg" alt="" loading="lazy" />
        </a>
        <a className="r6w2-promo-card r6w2-area-sport" href={REF_URL}>
          Спорт
          <img src="/images/sport.jpg" alt="" loading="lazy" />
        </a>
      </div>
    </>
  )
}
