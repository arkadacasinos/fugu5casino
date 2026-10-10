import { FuguRail } from '@/components/fugu-rail'
import { FuguTopbar } from '@/components/fugu-topbar'
import { FuguHero } from '@/components/fugu-hero'
import { FuguWinners } from '@/components/fugu-winners'
import { FuguLobby } from '@/components/fugu-lobby'
import { FuguArticle } from '@/components/fugu-article'
import { FuguFooter } from '@/components/fugu-footer'

export default function Page() {
  return (
    <div className="r6w2-shell">
      <FuguRail />
      <div className="r6w2-main">
        <FuguTopbar />
        <FuguHero />
        <FuguWinners />
        <FuguLobby />
        <FuguArticle />
        <FuguFooter />
      </div>
    </div>
  )
}
