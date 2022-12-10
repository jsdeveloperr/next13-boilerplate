import '@/styles/tailwind.scss';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import App from 'next/app';

import parse from '@/libs/helpers/userAgent';
import { userAgentActions } from '@/libs/store/userAgent/userAgent.slice';
import { reduxWrapper } from '@/store/store';

function GlobalApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

GlobalApp.getInitialProps = reduxWrapper.getInitialAppProps((store: any) => async context => {
  const appProps = await App.getInitialProps(context);
  store.dispatch(userAgentActions.setUserAgent(parse(context.ctx.req?.headers['user-agent'])));

  return {
    ...appProps,
  };
});

export default reduxWrapper.withRedux(GlobalApp);
