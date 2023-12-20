import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-loading-skeleton/dist/skeleton.css'
import '@/styles/skeleton.scss';
import '@/styles/globals.scss';

import type {AppProps} from 'next/app';
import BaseLayout from '@/components/layout/BaseLayout';

export default function App({Component, pageProps}: AppProps) {
  return (<BaseLayout><Component {...pageProps} /></BaseLayout>);
}
