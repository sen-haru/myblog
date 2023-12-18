import Myfooter from './myfooter'
import Meta from './meta'
import { IBM_Plex_Sans_JP, IBM_Plex_Sans, Dela_Gothic_One } from "next/font/google";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const IBMPlexSansJP = IBM_Plex_Sans_JP({
  variable: '--font-IBMjp',
  weight: '400',
  subsets: ['latin'],
});
const IBMPlexSans = IBM_Plex_Sans({
variable: '--font-IBM',
  weight: '400',
  subsets: ['latin'],
});
const DelaGothicOne = Dela_Gothic_One({
  variable: '--font-DELA',
  weight: '400',
  subsets: ['latin'],
});

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-mypink">
        <main className={`${DelaGothicOne.variable} ${IBMPlexSansJP.variable} ${IBMPlexSans.variable}`}>{children}</main>
      <Myfooter />
	  </div>
    </>
  )
}

export default Layout
