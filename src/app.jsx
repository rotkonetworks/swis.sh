import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
//import Nav from "~/components/Nav";
// import Footer from "~/components/Footer";
//<Nav />
// <Footer /> // rm now

export default function App() {
  onMount(() => {
    console.log("App mounted");
  });
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
