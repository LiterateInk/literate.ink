/* @refresh reload */
import "./assets/css/satoshi.css";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

import { render } from 'solid-js/web'
import FullScreenLoader from "./components/FullScreenLoader";
import HomePage from "./pages/Home";

const root = document.getElementById('root')
render(() => <>
  <FullScreenLoader />
  <HomePage />
</>, root!)
