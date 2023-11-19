import Link from 'next/link'
import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
} from 'next'

import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Header} from '@/components/Header'
import {Footer} from '@/components/Footer'

import {ConnectButton} from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";
import {useEffect} from "react";
import {useRouter} from "next/router";

type Props = {
    // Add custom props here
}

const Web3 = (
    _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const router = useRouter();
    const {t} = useTranslation(['common', 'second-page'])
    const {address} = useAccount({
        onConnect: (data) => console.log('connected', data),
        onDisconnect: () => console.log('disconnected'),
    })
    useEffect(() => {
        console.log('address', address)
    }, [address]);

    return (
        <>
            <main>
                <Header
                    heading={t('second-page:h1')}
                    title={t('second-page:title')}
                />
                <div>
                    <button type="button" onClick={()=>{
                        router.replace(`/`);
                    }}>
                        {t('second-page:back-to-home')}
                    </button>
                    <ConnectButton/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
                                                                        locale,
                                                                    }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'second-page',
            'footer',
        ])),
    },
})

export default Web3
