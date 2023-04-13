import MainLayout from '@/components/Layouts/MainLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
