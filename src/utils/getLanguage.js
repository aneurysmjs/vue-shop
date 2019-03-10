const language = (window.navigator.language || window.navigator.userLanguage);

const getLanguage = () => (
  language.split('-')[0] || 'en'
);

export default getLanguage;
