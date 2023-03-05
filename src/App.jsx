import React, {useState} from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [data, setData] = useState({ count: 0, results: [] })
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
    
    if (res.ok) {
      const responseJson = await res.json();
      const data = {
        status: res.status,
        requestMethod: req.method,
        url: req.url,
        body: req.params,
        count: 1,
        results: [
          responseJson.choices[0].message.content
        ],
      };
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
        
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  
}

export default App;
