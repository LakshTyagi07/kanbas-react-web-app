import React, { useState } from 'react';

// Declare the remote server constant
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const QueryParameters = () => {
  // Define state variables for a and b
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input id="wd-query-parameter-a"
             className="form-control mb-2"
             value={a} type="number"
             onChange={(e) => setA(Number(e.target.value))} />
      <input id="wd-query-parameter-b"
             className="form-control mb-2"
             value={b} type="number"
             onChange={(e) => setB(Number(e.target.value))} />
      <a id="wd-query-parameter-add"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-query-parameter-subtract"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-query-parameter-multiply"
         href={`${REMOTE_SERVER}/lab5/calculator/multiply/${a}/${b}`}>
        Multiply {a} * {b} (Path)
      </a>
      <a id="wd-query-parameter-divide"
         href={`${REMOTE_SERVER}/lab5/calculator/divide/${a}/${b}`}>
        Divide {a} / {b} (Path)
      </a>
      <a id="wd-query-parameter-multiply-query"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b} (Query)
      </a>
      <a id="wd-query-parameter-divide-query"
         href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b} (Query)
      </a>
      <hr />
    </div>
  );
};

export default QueryParameters;
