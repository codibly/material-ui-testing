import { prettyDOM, queryByText } from "@testing-library/react";

export function getMuiSelectButtonByLabel(
  label: string,
  container = document.body
): HTMLElement {
  const labelEl = queryByText(container, label) as HTMLElement;
  if (!labelEl) {
    throw new Error(
      `Cannot find Material UI select button by label "${label}".`
    );
  }

  const selectEl = labelEl.parentElement as HTMLElement;
  const buttonEl = selectEl.querySelector('[role="button"]') as HTMLDivElement;

  if (!buttonEl) {
    throw new Error(
      `Cannot find Material UI select button by label "${label}".
      We found element with "${label}" text but it doesn't contain a div with role="button" attribute.
      ${prettyDOM(selectEl)}`
    );
  }

  return buttonEl;
}
