
import Balancer from 'react-wrap-balancer'
import { CardChoose, Container } from '@/components'
import { CHOOSE_ITEMS } from '@/config'

export const Choose = () => {
    return (
        <section className="relative -z-20 py-24 bg-lightGrayishBlue">
            <Container>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-4 text-center lg:text-start">
                        <h2 className="text-4xl text-darkBlue">
                            <Balancer>
                                Why choose Easybank?
                            </Balancer>
                        </h2>
                        <p className="text-grayishBlue md:text-lg">We leverage Open Banking to turn your bank account into your financial hub. <br className="hidden lg:block" /> Control your finances like never before.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            CHOOSE_ITEMS.map(({ title, description, CustomLogo }, i) => (
                                <CardChoose
                                    key={title.trim() + i}
                                    title={title}
                                    description={description}
                                    logo={<CustomLogo />}
                                />
                            ))
                        }
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Choose