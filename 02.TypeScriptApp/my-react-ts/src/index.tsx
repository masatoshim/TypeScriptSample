import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateBasic from './chap03/StateBasic';
import StyledPanel from './chap03/StyledPanel';
import ListTemplate from './chap03/ListTemplate';
import books from './chap03/books';
import { Book } from './chap03/Book';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ListTemplate
    src={books} 
    children={(elem: Book) => 
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title}（{elem.price}円）
          </a>
        </dt>
      </>
    }
  />
)

// root.render(
//   <StyledPanel>
//     <p>メンバー募集中！</p>
//     <p>ようこそ、WINGSプロジェクトへ！！</p>
//   </StyledPanel>
// )

// root.render(
//   <React.StrictMode>
//     <StateBasic init={0} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
