import Image from 'next/image'
import Link from 'next/link';

interface Props {
    title: string;
    autor: string;
    description: string;
    src: string;
}

export const CardArticle = ({ title, description, src, autor }: Props) => {
    return (
        <article>
            <div className="relative w-full h-48">
                <Image
                    src={src}
                    fill
                    className="object-cover"
                    alt={title}
                />
            </div>

            <div className="flex flex-col gap-2 p-6 bg-white">
                <small className="text-xs text-grayishBlue">By {autor}</small>
                <Link className="transition-colors text-darkBlue text-lg hover:text-limeGreen" href="#">
                    {title}
                </Link>
                <p title={description} className="text-base text-grayishBlue line-clamp-4">
                    {description}
                </p>
            </div>
        </article>
    )
}
