import {I18n} from 'i18n-js';

import en from '../../locales/en';

I18n.fallbacks = en;
I18n.translations = {
  en,
};

const useTranslation = () => {
  return {
    t: (val, params) => I18n.t(val, params),
  };
};

export default useTranslation;
