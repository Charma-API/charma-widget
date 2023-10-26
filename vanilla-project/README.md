### How to use

1. Import library to CDN using ES6 module syntax

   ```html
   <script type="module">
     import { widget } from "https://cdn.jsdelivr.net/npm/@charma/js@1.0.22/dist/index.js";
     import { defineCustomElements } from "https://cdn.jsdelivr.net/npm/@charma/js@1.0.22/dist/loader/index.js";
   </script>
   ```

2. Initialize it and store in global variable.

   ```html
   <script type="module">
     import { widget } from "https://cdn.jsdelivr.net/npm/@charma/js@1.0.22/dist/index.js";
     import { defineCustomElements } from "https://cdn.jsdelivr.net/npm/@charma/js@1.0.22/dist/loader/index.js";
     defineCustomElements(window, {});
     window.widget = widget;
   </script>
   ```

3. Use it on load

   ```html
   <script type="module">
     widget.init("YOUR_TOKEN_HERE").then(() => {
       widget.show();
     });
   </script>
   ```

   or use it in button click (or any event you want)

   ```html
   <script type="module">
     // Get a reference to the button element by its id
     const button = document.getElementById("myButton");
     // Add a click event listener to the button
     button.addEventListener("click", function () {
       widget.init("YOUR_TOKEN_HERE").then(() => {
         widget.show({ productId: "CH21181903" });
       });
     });
   </script>
   ```
