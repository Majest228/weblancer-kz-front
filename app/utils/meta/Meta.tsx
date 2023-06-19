import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IMeta } from './meta.interface'
import { siteName, titleMerge } from '../../configs/seo.config'
import { MetaNoIndex } from './MetaNoIndex'

export const Meta: FC<IMeta> = ({
    title,
    description,
    image = null,
    children,
}) => {
    const { asPath } = useRouter()
    const currentUrl = `http://localhost:8080/${asPath}`

    return (
        <>
            {description ? (
                <Head>
                    <title itemProp='headline'>{titleMerge(title)}</title>
                    <meta
                        itemProp='description'
                        name='description'
                        content={description}
                    />
                    <link rel='canonical' href={currentUrl} />
                    <meta property='og:locale' content='en' />
                    <meta property='og:title' content={titleMerge(title)} />
                    <meta property='og:url' content={currentUrl} />
                    {/* <meta property='og:image' content={image} /> */}
                    <meta property='og:site_name' content={siteName} />
                    <meta
                        property='og:description'
                        content={description}
                    />
                </Head>
            ) : (
                <MetaNoIndex title={title} />
            )}
            {children}
        </>
    )
}