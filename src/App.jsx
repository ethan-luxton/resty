import React, {useReducer, useState} from 'react';
import History from './Components/History';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const initialState = {
  loading: false,
  results: null,
  history: []
};

function reducer(state, action) {
  switch (action?.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
}

const App = () => {
  const [data, setData] = useState(reducer, { count: 0, results: [] })
  const [state, dispatch] = useReducer(reducer, initialState);
  let [requestParams, setRequestParams] = useState({ method: '', url: '', params: '' })
  const key = process.env.REACT_APP_OPEN_AI_SECRET_KEY
  const org = process.env.REACT_APP_OPEN_AI_ORG
  const callApi = async (req) => {
    requestParams = req
    const url = req.url;
    const method = req.method;
    const body = req.params
    const res = await fetch(url, {
      method: method,
      headers:{
        Authorization: `Bearer ${key}`,
        "OpenAI-Organization": `${org}`,
        "Content-Type": "application/json",
      },
      body: body
    });
    dispatch({ type: 'SET_LOADING', payload: true });
    if (res.ok) {
      const responseJson = await res.json();
      const data = {
        status: res.status,
        requestMethod: req.method,
        url: req.url,
    
        count: 1,
        results: [
          responseJson.choices[0].message.content
        ],
      };
      dispatch({ type: 'ADD_TO_HISTORY', payload: { method, url, responseJson } });
      setData({...data});
      setRequestParams({...requestParams});
      return 
    } else {
      const error = await res.text();
      return `${res.status} ${res.statusText} ${error}`;
    }
  }
    return (
      <React.Fragment>
        <Header />
        
        <Form handleApiCall={callApi}/>
        <h3>Results: </h3>
        <Results data={data} />
        <h3>History: </h3>
        <History history={state.history}/>
        <Footer />
      </React.Fragment>
    );
  
}

export default App;
