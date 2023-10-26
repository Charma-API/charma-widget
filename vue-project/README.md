## Integration with Vue JS

### How to use

1. Install Library

   ```shell
   npm install @charma/js@latest

   ```

2. Import the following files to your component

   ```js
   import { widget } from "@charma/js";
   import { defineCustomElements } from "@charma/js/dist/loader";
   ```

3. Initialize it.

   if you wish to initialize it upon mounting of component, use the code below

   ```js
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

   ```html
   <button @click="customGiftButtonClick" class="">Gift something</button>
   ```

   ```js
   const customGiftButtonClick = () => {
     widget.init("YOUR_TOKEN_HERE").then(() => {
       defineCustomElements(window);

       widget.show({ productId: "CH21181903" });
     });
   };
   ```

### If you're using vite with vue

    if in case that you're using vite, please kindly add this to the configuration.
    This is to define that all element that starts with "charma" is a custom element and can be
    safely injected

    ```jsx
    // vite.config.js

    template: {
    compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("charma-");
    }
    }
    ```
