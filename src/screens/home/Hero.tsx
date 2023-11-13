import { Container, RequestButton } from '@/components'
import { Fragment } from 'react'
import Balancer from 'react-wrap-balancer'

export const Hero = () => {
    return (
        <Fragment>
            <section>
                <Container>
                    <div className="lg:bg-transparent grid px-4 py-8 gap-5 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:h-[587px] before:content-[''] before:-z-20 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#fafafa]">
                        <div className="mr-auto w-full flex justify-center lg:place-self-center lg:w-auto lg:col-span-7 order-1">
                            <div className="text-center lg:text-start max-w-[490px] lg:mt-[64px]">
                                <h1 className="max-w-2xl mb-4 text-4xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl text-darkBlue">
                                    <Balancer>
                                        Next generation digital banking
                                    </Balancer>
                                </h1>
                                <p className="max-w-md mb-6 lg:pr-1 text-grayishBlue lg:mb-8 md:text-lg dark:text-gray-400">Take your financial life onine. Your Easybank account wil be one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                                <RequestButton />
                            </div>
                        </div>
                        <div className="lg:hidden lg:mt-0 lg:col-span-5">

                            {/* devices */}
                            <div className="bg-[url('/image-mockups.png')] absolute -top-[64px] left-0 bg-contain bg-center bg-no-repeat w-[100%] h-[calc(939px/2)] sm:h-[595px]" />

                            {/* bg svg */}
                            <div className="absolute top-0 right-0 -z-20 bg-[url('/bg-intro-mobile.svg')] bg-cover bg-no-repeat bg-center w-[100%] h-[475px] sm:h-[600px]" />

                            {/* Empty container */}
                            <div className="h-[calc((939px/2)-96px)] sm:h-[calc(595px-96px)]" />
                        </div>
                    </div>
                </Container>
            </section>
            {/* devices */}
            <div className="hidden absolute top-0 right-0 -z-10 bg-[url('/image-mockups.png')] lg:block lg:-translate-y-[40px] lg:translate-x-[110px] 2xl:translate-x-0 bg-contain bg-no-repeat bg-right-top w-[100%] h-[790px]" />

            {/* bg svg */}
            <div className="hidden absolute top-0 right-0 -z-20 bg-[url('/bg-intro-desktop.svg')] lg:block lg:-translate-y-[135px] lg:translate-x-[200px] 2xl:translate-x-[100px] bg-contain bg-no-repeat bg-right-top w-[100%] h-[790px]" />
        </Fragment>
    )
}