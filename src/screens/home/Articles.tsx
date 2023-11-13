
import { CardArticle, Container } from '@/components'
import { ARTICLES_ITEMS } from '@/config'
import Balancer from 'react-wrap-balancer'

export const Articles = () => {
    return (
        <section className="py-24 bg-[#fafafa]">
            <Container>
                <div className="flex flex-col gap-12">
                    <h2 className="text-4xl text-darkBlue text-center lg:text-start">
                        <Balancer>
                            Latest Articles
                        </Balancer>
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            ARTICLES_ITEMS.map((article, i) => (
                                <CardArticle
                                    key={article.title.trim() + i}
                                    {...article}
                                />
                            ))
                        }
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Articles