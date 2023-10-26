// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JSX } from "@stencil/core";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "charma-widget": JSX.IntrinsicElements["div"];
    }
  }
}
