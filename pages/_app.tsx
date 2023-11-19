import type {AppProps} from 'next/app'
import {appWithTranslation} from 'next-i18next'
import GlobalContext from '@/utils/global-context'
import  {Providers} from "@/utils/connector";
import {MantineProvider} from "@mantine/core";
import '@rainbow-me/rainbowkit/styles.css';


// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({Component, pageProps}: AppProps) => (
    <MantineProvider>
        <GlobalContext>
            <Providers>
                <Component {...pageProps} />
            </Providers>
        </GlobalContext>
    </MantineProvider>
)

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */)
