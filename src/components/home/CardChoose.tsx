import { ReactNode } from 'react'

interface Props {
    title: string;
    logo: ReactNode;
    description: string;
}

export const CardChoose = ({ title, description, logo }:Props) => {
  return (
    <div className="flex flex-col gap-8 text-center lg:text-start">
        <div className='flex justify-center lg:justify-start'>
            { logo }
        </div>
        <h3 className="text-darkBlue text-2xl font-medium">{title}</h3>
        <p className="text-base text-grayishBlue">{description}</p>
    </div>
  )
}