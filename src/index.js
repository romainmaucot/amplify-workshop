import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddPost from './ui-components/AddPost';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import NavBar from './ui-components/NavBar';
import {
    PostCollection
} from './ui-components';


Amplify.configure(amplifyconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar width={"100%"}/>
      <PostCollection overrideItems={({ item }) => ({
          media: <StorageImage alt={item.text} imgKey={item.image} accessLevel="public" />
      })}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
