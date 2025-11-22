import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateBasic from './hookSample/StateBasic';
import StyledPanel from './hookSample/StyledPanel';
import ListTemplate from './hookSample/ListTemplate';
import MyThemeProvider from './hookSample/MyThemeProvider';
import HookThemeButton from './hookSample/HookThemeButton';
import HookReducerUp from './hookSample/HookReducerUp';
import books from './hookSample/books';
import { Book } from './hookSample/Book';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HookReducerUp init={0}/>
)

// root.render(
//   <MyThemeProvider>
//     <HookThemeButton />
//   </MyThemeProvider>

// )

// root.render(
//   <ListTemplate
//     src={books} 
//     children={(elem: Book) => 
//       <>
//         <dt>
//           <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//             {elem.title}（{elem.price}円）
//           </a>
//         </dt>
//       </>
//     }
//   />
// )

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
