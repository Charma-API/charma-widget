import { widget } from "@charma/js";
import { defineCustomElements } from "@charma/js/dist/loader";
import React, { useEffect, useMemo } from "react";

const Widget: React.FC = () => {
  const initializeWidget = () => {
    widget
      .init(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjI0ZDdkYTgyLWNjOWItNGJlZi04MTdjLTI2N2FjZGU3MjJlOSIsImlhdCI6MTY4MDAwNDU1NywiZXhwIjoxNjgwMDA0NjE3fQ.f-BBpE2l5IVwsOxnN9Xn7ot_xiYfCT4uvEjOqNLimq8"
      )
      .then(() => {
        defineCustomElements(window);
      });
  };

  // Use useMemo to memoize the initialization function
  const memoizedInitializeWidget = useMemo(() => initializeWidget, []);
  useEffect(() => {
    // Call the memoized initialization function when the component mounts
    memoizedInitializeWidget();
  }, [memoizedInitializeWidget]);

  return (
    <div>
      <charma-widget></charma-widget>
    </div>
  );
};
export default Widget;
