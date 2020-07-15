import React from 'react';
import { FormattedMessage } from 'react-intl';
import './App.css';

const App = ({ setLanguage }) => {
  const style = {
    marginTop: '0.5rem'
  };

  return (
    <div className="App">
      <p>
        <FormattedMessage
          id="text"
          defaultMessage="Hello, welcome {user}"
          description="Welcome message"
          values={{ user: "John Doe" }}/>
      </p>
      <a href="#" target="_blank" rel="link">
        <FormattedMessage
          id="link"
          defaultMessage="Go to link"
          description="Check website"/>
      </a>
      <div style={style}>
        <button onClick={() => setLanguage('en')}>英文</button>
        <button onClick={() => setLanguage('zh-TW')}>中文</button>
        <button onClick={() => setLanguage('nl')}>荷蘭語</button>
      </div>
    </div>
  );
}

export default App;
