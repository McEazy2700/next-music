import '../styles/globals.css'
import VisualWrapper from '../context/VisualContext';

function MyApp({ Component, pageProps }) {
  return (
    <VisualWrapper>
      <Component {...pageProps} />
    </VisualWrapper>
  )
}

export default MyApp;
