import { FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import { fireEvent, render } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import * as React from "react";
import { getMuiFormControlByLabel } from "./getMuiFormControlByLabel";

describe("getMuiFormControlByLabel", () => {
  afterEach(cleanup);

  it.each([Radio, Checkbox])(
    "should get <FormControlLabel /> component by text with %p control",
    Control => {
      const onChange = jest.fn();
      render(
        <FormControlLabel
          control={<Control onChange={onChange} />}
          label="A label"
        />
      );

      const label = getMuiFormControlByLabel("A label");
      expect(label).toBeDefined();
      expect(label).toBeInstanceOf(HTMLElement);
      fireEvent.click(label);

      expect(onChange).toHaveBeenCalled();
    }
  );
});
