import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from './Action';
import './App.css';
import logo from './logo.svg';
import { ApiApi, ApiTokenAuthApi } from "./modules/api";
import State from './state';


const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";

function App() {
  const dispatch = useDispatch<ThunkDispatch<State, {}, Action>>();
  const [state, setState] = useState<string>("");
  useEffect(() => {
    getAccessToken()
      .then(async accessToken => {
        return new ApiApi({}, "/api")
          .apiArticlesList(undefined, {
            headers: {
              "Authorization": "Token " + accessToken
            }
          })
      })
      .then((res) => {
        console.log(res)
        setState(JSON.stringify(res))
      })
      .catch(async e => {
        console.log(e)
        e
          .text()
          .then((text: string) => {
            console.log(text)
          })
      });

  }, [])
  dispatch(actions.asyncTest())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {state}
        </p>
      </header>
    </div>
  );
}

export default App;

const getAccessToken = async () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
  return accessToken || new ApiTokenAuthApi(undefined, "/api")
    .apiTokenAuthCreate({
      password: "adminadmin",
      username: "admin"
    })
    .then(res => {
      if (res.token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, res.token)
        return res.token;
      } else {
        throw new Error("Token is blank")
      }
    })
    .catch(async e => {
      console.log(e)
      return ""
    });
}