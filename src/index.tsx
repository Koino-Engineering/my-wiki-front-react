import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { polyfill } from "es6-promise";
polyfill()
new ApiTokenAuthApi(undefined, "/api")
  .apiTokenAuthCreate({
    password: "adminadmin",
    username: "admin"
  })
  .then(res => {
    new ApiApi({}, "/api")
      .apiArticlesList(undefined, {
        headers: {
          "Authorization": "Token " + res.token
        }
      })
      .then((res) => {
        console.log(res)
        console.log(res.results.map(r => r.createdAt));
      })
      .catch(async e => {
        console.log(e)
        const text = await e.text()
        console.log(text)
      });


  })
  .catch(async e => {
    console.log(e)
    const text = await e.text()
    console.log(text)
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
