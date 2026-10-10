import { REF_URL } from '@/lib/ref'

export function FuguRail() {
  return (
    <>
      <nav id="r6w2-menu" className="r6w2-rail" aria-label="Меню Fugu Casino">
        <a className="r6w2-close" href="#!" aria-label="Закрыть меню">
          ×
        </a>
        <a className="r6w2-rail-banner" href={REF_URL}>
          Колесо Фортуны
          <img src="/images/wheel.jpg" alt="" width={44} height={44} />
        </a>
        <a className="r6w2-rail-shop" href={REF_URL}>
          Магазин бонусов
          <img src="/images/shop.jpg" alt="" width={40} height={40} loading="lazy" />
        </a>
        <div className="r6w2-rail-tiles">
          <a className="r6w2-rail-tile" href={REF_URL}>
            <img src="/images/crown.jpg" alt="" width={26} height={26} loading="lazy" />
            VIP Club
          </a>
          <a className="r6w2-rail-tile" href={REF_URL}>
            <img src="/images/trophy.jpg" alt="" width={26} height={26} loading="lazy" />
            Зал славы
          </a>
          <a className="r6w2-rail-tile" href={REF_URL}>
            <img src="/images/coin.jpg" alt="" width={26} height={26} loading="lazy" />
            Prize Drops
          </a>
        </div>
        <a className="r6w2-rail-link" href={REF_URL}>
          Бонусы
        </a>
        <a className="r6w2-rail-link" href={REF_URL}>
          Промо
        </a>
        <div className="r6w2-rail-sep" role="presentation" />
        <p className="r6w2-rail-group">
          Казино
          <span aria-hidden="true">▾</span>
        </p>
        <a className="r6w2-rail-link r6w2-rail-sub" href={REF_URL}>
          Слоты
        </a>
        <a className="r6w2-rail-link r6w2-rail-sub" href={REF_URL}>
          Instant Games
        </a>
        <a className="r6w2-rail-link r6w2-rail-sub" href={REF_URL}>
          Настольные
        </a>
        <a className="r6w2-rail-link r6w2-rail-sub" href={REF_URL}>
          Bonus Buy
        </a>
        <a className="r6w2-rail-link r6w2-rail-sub" href={REF_URL}>
          Провайдеры
        </a>
      </nav>
      <a className="r6w2-scrim" href="#!" aria-label="Закрыть меню" />
    </>
  )
}
