import React from "react";
import { render } from "react-dom";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import EmotionButton from "./EmotionButton";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "insertion-point-jss";

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <EmotionButton />
  </JssProvider>
);

render(<App />, document.querySelector("#root"));
