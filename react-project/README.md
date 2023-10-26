### How to use

1. Install Library

   ```shell
   npm install @charma/js@latest

   ```

2. Import the following files to your component

   ```jsx
   import { widget } from "@charma/js";
   import { defineCustomElements } from "@charma/js/dist/loader";
   ```

3. Initialize it.

   if you wish to initialize it upon mounting of component, use the code below

   ```jsx
   const initializeWidget = () => {
     widget.init("YOUR_TOKEN_HERE").then(() => {
       defineCustomElements(window, {});
     });
   };

   // Use useMemo to memoize the initialization function
   const memoizedInitializeWidget = useMemo(() => initializeWidget, []);
   useEffect(() => {
     // Call the memoized initialization function when the component mounts
     memoizedInitializeWidget();
   }, [memoizedInitializeWidget]);
   ```

   or alternatively, initialize it in a click function

   ```jsx
   return (
     <>
       <button
         onClick={() => {
           widget.init("YOUR_TOKEN_HERE").then(() => {
             defineCustomElements(window, {});
             //   widget.show({ productId: "CH21181903" });
           });
         }}
       >
         Custom gifting button
       </button>
     </>
   );
   ```

### If you're using typescript with react

if in case that react returns an error with jsx, kindly create this file.
This is so charma-widget can be treated as a div and and exist in JSX IntrinsicElements

Also you might have to install @stencil/core for this matter.

```jsx
// stencil.d.ts

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JSX } from "@stencil/core";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "charma-widget": JSX.IntrinsicElements["div"];
    }
  }
}

```
