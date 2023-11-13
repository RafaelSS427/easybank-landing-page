'use client'

import { FC, Fragment, ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { Provider as BalancerProvider } from 'react-wrap-balancer'

interface Props {
  children?: ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <NextUIProvider>
        <BalancerProvider>
          {children}
        </BalancerProvider>
      </NextUIProvider>
    </Fragment>
  )
}
