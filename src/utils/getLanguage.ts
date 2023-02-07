const { language } = window.navigator;

const getLanguage = (): string => language.split('-')[0] || 'en';

export default getLanguage;
