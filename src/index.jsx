
import { createElement } from "react";
import { createRoot } from "react-dom/client";

const Root = createRoot(document.getElementById('root'))
Root.render(createElement("h1", null, "hello from createElement"))