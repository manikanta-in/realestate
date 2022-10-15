import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Telugu from '../languages/tel.json';
import English from '../languages/en.json';
import Hindi from '../languages/hin.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'te') {
  lang = Telugu;
} else if (local === 'hi') {
  lang = Hindi;
} else {
  lang = English;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);

    if (newLocale === 'te') {
      setMessages(Telugu);
    } else if (newLocale === 'hi') {
      setMessages(Hindi);
    } else {
      setMessages(English);
    }

  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>

  );
}

export default Wrapper;