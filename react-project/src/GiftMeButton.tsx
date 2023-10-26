import { widget } from "@charma/js";
import {
  applyPolyfills,
  defineCustomElements,
} from "@charma/js/dist/loader/index";
import React from "react";

const GiftMeButton: React.FC = () => {
  const handleGiftMe = () => {
    widget
      .init(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjI0ZDdkYTgyLWNjOWItNGJlZi04MTdjLTI2N2FjZGU3MjJlOSIsImlhdCI6MTY4MDAwNDU1NywiZXhwIjoxNjgwMDA0NjE3fQ.f-BBpE2l5IVwsOxnN9Xn7ot_xiYfCT4uvEjOqNLimq8"
      )
      .then(() => {
        applyPolyfills().then(() => {
          defineCustomElements(window);
        });

        widget.show({ productId: "CH21181903" });
      });
  };
  return <button onClick={handleGiftMe}>Gimme something</button>;
};
export default GiftMeButton;
