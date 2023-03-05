import { React, useState } from 'react';
import val from '../../text.json'
import './Form.scss';

const Form = (props) => {
  const [input, setInput] = useState('')
  const [requestMethod, setRequestMethod] = useState('')
  const [params, setParams] = useState('')
  const formData = {
    method:requestMethod,
    url: input,
    params: params
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall(formData);
  }
  
    return (
      <>
        <form id="userform" onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' value={input}
            onChange={(e) => setInput(e.target.value)}/>
            <button type="submit">GO!</button>
          </label>
          <textarea form="userform" 
                    name='textArea' 
                    rows="4" 
                    cols="50" 
                    onChange={(e) => setParams(e.target.value)}
                    >
                      {JSON.stringify(val)}
          </textarea>
          <label className="methods">
            <span id="get" onClick={() => setRequestMethod('GET')}>GET</span>
            <span id="post" onClick={() => setRequestMethod('POST')}>POST</span>
            <span id="put" onClick={() => setRequestMethod('PUT')}>PUT</span>
            <span id="delete" onClick={() => setRequestMethod('DELETE')}>DELETE</span>
          </label>
        </form>
        
      </>
    );
  
}

export default Form;
