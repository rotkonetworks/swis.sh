// src/app.jsx
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
//import Footer from "~/components/Footer";
 //         <Footer />

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="min-h-screen flex flex-col">
          <Nav />
          <Suspense>
            {props.children}
          </Suspense>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
