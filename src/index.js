import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/Store';
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //! Tüm sayfa genelinde kullanmak istediğim için Provider ile sarmalıyorum Redux kullanmamın amacı bu .Redux store’unu React bileşenlerine ulaştırabilmek için <Provider> bileşenini kullanmanız gerekir. <Provider> bileşeni, Redux store’unu React’in Context mekanizması aracılığıyla tüm alt bileşenlere sağlar. Böylece, Hooks veya connect API’leri ile store’a erişebilirsiniz. uygulamanızın en üst seviyesindeki bileşeni <Provider> ile sarmalayabilir ve store propuna oluşturduğunuz store’u verebilirsiniz.
  <Provider store={store}>
    <App />
  </Provider>
);

