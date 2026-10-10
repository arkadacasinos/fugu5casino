import { REF_URL } from '@/lib/ref'

export function FuguTopbar() {
  return (
    <header className="r6w2-topbar">
      <a className="r6w2-burger" href="#r6w2-menu" aria-label="Открыть меню">
        <span />
        <span />
        <span />
      </a>
      <a className="r6w2-logo" href={REF_URL}>
        <img src="/icon.png" alt="" width={30} height={30} />
        fugu
      </a>
      <a className="r6w2-search" href={REF_URL} aria-label="Поиск игр в Fugu Casino">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        Поиск
      </a>
      <a className="r6w2-btn r6w2-btn-ghost r6w2-login" href={REF_URL}>
        Вход
      </a>
      <a className="r6w2-btn r6w2-btn-green" href={REF_URL}>
        Регистрация
      </a>
    </header>
  )
}
