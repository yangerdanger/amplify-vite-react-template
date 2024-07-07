import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import outputs from "../amplify_outputs.json";
import {ThemeProvider} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import "@aws-amplify/ui-react/styles.css";
import studioTheme from './ui-components/studioTheme';

Amplify.configure(amplifyconfig);

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={studioTheme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);
