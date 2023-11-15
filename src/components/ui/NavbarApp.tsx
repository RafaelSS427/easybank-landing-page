'use client'

import { HTMLProps, ReactNode, useState } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from '@nextui-org/navbar'
import Image from 'next/image'
import { RequestButton } from '@/components/ui/RequestButton'
import { APP_LINKS } from '@/config'
import { getBasePath } from '@/utils'

type PropsTest = {
  children?: ReactNode,
  className?: HTMLProps<HTMLElement>['className']
} & LinkProps

const CustomLink = ({ children, ...rest }: PropsTest) => {
  return (
    <NextLink {...rest}>
      {children}
    </NextLink>
  )
}

export const NavbarApp = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar
      isMenuOpen={isOpen}
      onMenuOpenChange={setIsOpen}
      maxWidth="full"
      isBlurred={false}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "after:content-['']",
          "after:absolute",
          "after:bottom-0",
          "after:left-0",
          "after:right-0",
          "after:h-[3px]",
          "after:bg-trasparent",
          "data-[active=true]:after:bg-gradient-to-r data-[active=true]:after:from-limeGreen data-[active=true]:after:to-brightCyan data-[active=true]:text-black",
          "hover:after:bg-gradient-to-r hover:after:from-limeGreen hover:after:to-brightCyan",
        ],
      }}
    >
      <NavbarBrand>
        <Image src={getBasePath('logo.svg')} width={140} height={20} alt="Logo" />
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {
          APP_LINKS.filter(e => !e.isFooter).map(({ href, label }, i) => (
            <NavbarItem key={label + i} isActive={label.toLocaleLowerCase() === 'home'} className="transition-colors text-grayishBlue hover:text-black">
              <CustomLink href={href} className="h-full flex items-center">
                {label}
              </CustomLink>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="hidden md:block">
          <RequestButton />
        </div>

        <NavbarMenuToggle
          aria-label={isOpen ? 'Close Menu' : 'Open menu'}
          className="md:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {
          APP_LINKS.filter(e => !e.isFooter).map(({ href, label }, i) => (
            <NavbarMenuItem key={label + i}>
              <CustomLink href={href} className="hover:text-limeGreen">
                {label}
              </CustomLink>
            </NavbarMenuItem>
          ))
        }

        <NavbarMenuItem className="flex justify-end">
          <RequestButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
