import { ReactNode } from 'react'

export const Container = ({
  children
}:{
  children:ReactNode
}) => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2">
      { children }
    </div>
  )
}