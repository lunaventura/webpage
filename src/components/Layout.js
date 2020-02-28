import Head from 'next/head'
import MenuTop from './MenuTop'
import Footer from './Footer'
import { formatMessage } from '../utils'

export default ({ title, children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />        
        <title>{title || formatMessage("home.title")}</title>
      </Head>

      <header>
        <MenuTop />
      </header>

      {children}

      <Footer />
    </div>
  )
}
