import Image from 'next/image'
import { Container, RequestButton } from "./"
import { APP_LINKS, socialMedia } from '@/config'
import { getBasePath, splitArray } from '@/utils'
import Link from 'next/link'

const links = splitArray(3, APP_LINKS.filter(e => e.label.toLocaleLowerCase() !== 'home'))

export const Footer = () => {
    return (
        <footer className="bg-darkBlue py-8">
            <Container>
                <div className="flex justify-between flex-wrap gap-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:gap-20 lg:w-auto">
                        <div className="flex flex-col gap-5 lg:gap-10 mb-4">
                            <div className="flex justify-center">
                                <Image src={getBasePath('logo-light.svg')} width={140} height={20} alt="Logo" />
                            </div>

                            <div className="flex justify-center">
                                <div className="flex gap-4">
                                    {
                                        socialMedia.map(({ name, src, CustomLogo }) => (
                                            <Link className="transition-colors fill-white hover:fill-limeGreen/80" title={name} href={src} key={crypto.randomUUID()}>
                                                <CustomLogo className="h-5 w-5" />
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        {
                            links.map((item) => (
                                <div key={crypto.randomUUID().toString()} className="flex flex-col gap-4 ml-5">
                                    {
                                        item.map(({ label, href }, i) => (
                                            <div className="flex justify-center lg:justify-start" key={label + i}>
                                                <Link className="text-white text-sm hover:text-limeGreen" href={href}>
                                                    {label}
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:w-auto">
                        <div className="flex justify-center lg:justify-end">
                            <RequestButton />
                        </div>
                        <p className="text-grayishBlue text-sm text-center lg:text-end">© Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
