const BASE_PATH = process.env.NODE_ENV === 'development' ? '/' : '/easybank-landing-page/';

export const getBasePath = (path: string) => {
    return `${BASE_PATH}${path}`
}