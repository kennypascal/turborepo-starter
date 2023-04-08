import Head from 'next/head'
import { Button, Card } from 'ui'
import { default as cx } from 'classnames'

const CARD_CONTENT = [
    {
        title: 'Caching Tasks',
        href: 'https://turbo.build/repo/docs/core-concepts/caching',
        cta: 'Read More',
    },
    {
        title: 'Running Tasks',
        href: 'https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks',
        cta: 'Read More',
    },
    {
        title: 'Configuration Options',
        href: 'https://turbo.build/repo/docs/reference/configuration',
        cta: 'Read More',
    },
]

export default function Home() {
    return (
        <div
            className={cx(
                'tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-center tw-py-2'
            )}
        >
            <Head>
                <title>Web - Turborepo Example</title>
            </Head>

            <main
                className={cx(
                    'tw-mx-auto tw-w-auto tw-px-4 tw-pb-8 tw-pt-16 sm:tw-pt-24 lg:tw-px-8'
                )}
            >
                <h1
                    className={cx(
                        'tw-mx-auto tw-text-center tw-text-6xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-7xl lg:tw-text-8xl xl:tw-text-8xl'
                    )}
                >
                    Web
                    <span
                        className={cx(
                            'tw-from-brandred tw-to-brandblue tw-block tw-bg-gradient-to-r tw-bg-clip-text tw-px-2 tw-text-transparent'
                        )}
                    >
                        Turborepo Example
                    </span>
                </h1>
                <div
                    className={cx(
                        'tw-mx-auto tw-mt-5 tw-max-w-xl sm:tw-flex sm:tw-justify-center md:tw-mt-8'
                    )}
                >
                    <Button />
                </div>

                <div
                    className={cx(
                        'tw-mt-12 tw-grid tw-grid-cols-1 tw-place-content-evenly tw-gap-4 sm:tw-grid-cols-3'
                    )}
                >
                    {CARD_CONTENT.map((card) => (
                        <Card key={card.title} {...card} />
                    ))}
                </div>
            </main>
        </div>
    )
}
