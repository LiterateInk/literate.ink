/* @refresh reload */
import "./assets/css/satoshi.css";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

import { render } from 'solid-js/web'
import FullScreenLoader from "./components/FullScreenLoader";
import HomePage from "./pages/Home";
import NavigationBar from "./components/NavigationBar";

const root = document.getElementById('root')
render(() => <>
  <FullScreenLoader />
  <NavigationBar />
  <HomePage />
</>, root!)
