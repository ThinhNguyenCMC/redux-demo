import App, {AppInitialProps} from 'next/app'

import { wrapper } from '@/redux'
import '@/styles/globals.css'

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = wrapper.getInitialAppProps(store => async context => {
    const {ctx} = context;
    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
        pathname: ctx.pathname
      }
    }
  })

  render(){
    const {Component, pageProps} = this.props;

    return <Component {...pageProps} />
  }
  
}



export default wrapper.withRedux(MyApp);
