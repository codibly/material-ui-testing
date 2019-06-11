import { prettyDOM, queryByText } from "@testing-library/react";

export function getMuiFormControlByLabel(
  label: string,
  container = document.body
): HTMLElement {
  const spanEl = queryByText(container, label);
  if (!spanEl) {
    throw new Error(
      `Cannot find Material UI form control by label "${label}".`
    );
  }

  const labelEl = spanEl.parentNode as HTMLElement;

  if (!(labelEl instanceof HTMLLabelElement)) {
    throw new Error(
      `Cannot find Material UI form control by "${label}" label.
      We found "${label}" text but its parent is not a label element
      ${prettyDOM(labelEl)}`
    );
  }

  return labelEl;
}
