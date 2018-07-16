import React from "react";
import { css } from "emotion";
import TextField from "@material-ui/core/TextField";

function EmotionButton() {
  return (
    <div>
      <TextField
        id="pid"
        label="test"
        InputLabelProps={{
          FormLabelClasses: {
            root: css`
              &.focused {
                color: red;
              }
            `,
            focused: "focused"
          }
        }}
      />
    </div>
  );
}

export default EmotionButton;
