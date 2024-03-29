import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import type { AppProps } from 'next/app'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 3,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
