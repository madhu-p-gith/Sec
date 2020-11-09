import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import App from "./App";

import "./main.scss";

//Init SVG icon Library
library.add(fas, fab, far);
ReactDOM.render(<App />, document.getElementById("app"));
