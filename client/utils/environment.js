export function isDevelopment() {

    const development = (process.env.NODE_ENV === 'development');

    return development;

}


export function isProduction() {

    const development = (process.env.NODE_ENV === 'production');

    return development;

}
