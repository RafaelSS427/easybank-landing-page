import { OnlineIcon, BudgetingIcon, OnBoardingIcon, ApiIcon, InstagramIcon, FacebokIcon, TwitterIcon, PinteresIcon, YoutubeIcon } from '@/icons'
import { getBasePath } from '@/utils'

export const CHOOSE_ITEMS = [
    {
        title: "Online Banking",
        description: "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.",
        CustomLogo: OnlineIcon
    },
    {
        title: "Simple Budgeting",
        description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
        CustomLogo: BudgetingIcon
    },
    {
        title: "Fast Onboarding",
        description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
        CustomLogo: OnBoardingIcon
    },
    {
        title: "Open API",
        description: "Manage your savings, investments, pension, and munch more from one account. Tracking your money has never been easier.",
        CustomLogo: ApiIcon
    },
]

export const ARTICLES_ITEMS = [
    {
        title: "Receive money in any currency with no fees",
        autor: "Claire Robinson",
        src: getBasePath('images/image-currency.jpg'),
        description: "The world is getting smaller and we're be becoming more mobile. So why should you be forced to only receive money un a single Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        title: "Treat yourselft without worrying about money",
        autor: "Wilson Hutton",
        src: getBasePath('images/image-restaurant.jpg'),
        description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        title: "Take your Easybank card wherever you go",
        autor: "Wilson Hutton",
        src: getBasePath('images/image-plane.jpg'),
        description: "We want you to enjoy your travels. This is way we don't charge any fees on purchases while you're abroad. We'll even show you Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        title: "Our invite-only Beta accouts are now live!",
        autor: "Claire Robinson",
        src: getBasePath('images/image-confetti.jpg'),
        description: "After a lot of hard word by whole team. We're excited to launch our closed beta. It's easy to request an invite through the site Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]

export const APP_LINKS = [
    {
        href: "#",
        label: "Home",
        isFooter: false
    },
    {
        href: "#",
        label: "About Us",
        isFooter: false
    },
    {
        href: "#",
        label: "Contact",
        isFooter: false
    },
    {
        href: "#",
        label: "Blog",
        isFooter: false
    },
    {
        href: "#",
        label: "Careers",
        isFooter: false
    },
    {
        href: "#",
        label: "Support",
        isFooter: true
    },
    {
        href: "#",
        label: "Privacy Policy",
        isFooter: true
    },
]

export const socialMedia = [
    {
        name: "Facebook",
        src: "#",
        CustomLogo: FacebokIcon
    },
    {
        name: "YouTube",
        src: "#",
        CustomLogo: YoutubeIcon
    },
    {
        name: "Twitter",
        src: "#",
        CustomLogo: TwitterIcon
    },
    {
        name: "Pinteres",
        src: "#",
        CustomLogo: PinteresIcon
    },
    {
        name: "Instagram",
        src: "#",
        CustomLogo: InstagramIcon
    },
] 