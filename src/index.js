import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { IntlProvider } from 'react-intl';
import locale_en from "./translations/en.json";
import locale_nl from "./translations/nl.json";
import locale_zh_tw from "./translations/zh_tw.json";

const Root = () => {
  const [language, setLanguage] = useState('en');

  const data = {
    'nl': locale_nl,
    'en': locale_en,
    'zh-TW': locale_zh_tw
  };

  // const language = navigator.language;

  return (
    <IntlProvider locale={language} messages={data[language]}>
      <App setLanguage={setLanguage} />
    </IntlProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
