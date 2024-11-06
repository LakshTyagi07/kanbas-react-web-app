import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./Toc";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./Store";
import { Provider } from "react-redux";
export default function Labs() {
  return (
    <Provider store={store}>
    <div>
      <h1>Labs - Laksh Tyagi - Section 2</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
        <Route path="github-repo" element={ <div id="wd-github">
              <Navigate to="https://github.com/LakshTyagi07/kanbas-react-web-app.git" />
            </div>
          }
        />{" "}
      </Routes>
    </div>
    </Provider>
  );
}
