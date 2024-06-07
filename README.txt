# Code Challenge README

## Description

This repository contains code for multiple code challenges.

1. Image Gallery: Displaying images with descriptions.
2. String Transformation:** Transforming strings based on specific rules.
3. Subarray with Sum of Target Found:** Finding a subarray with a sum equal to the target.

## Image Gallery (`index.html`)

### Description:
- The 'index.html' file displays an image gallery with descriptions and is located in coding folder.

### How to Run :
1. Open 'index.html' in a web browser.

### Files:
- 'index.html': HTML file containing the image gallery.

### Details:
- The gallery layout is created using CSS flexbox.
- Each image is accompanied by a title and location description.

====================================================================

## String Transformation Test ("Str_Transform_Test.html")

### Description:
- The 'Str_Transform_Test.html' file provides a form to test a string transformation function.

### How to Run:
1. Open "Str_Transform_Test.html" in a web browser.
2. Enter a string in the input field.
3. Click the "submit" button.
4. Transformed string will be displayed below the input field.

Files:
- "Str_Transform_Test.html": HTML file containing the form.
- "stringTransform.js": JavaScript file containing the string transformation function.

### String Transformation Function:

- The "stringTransform.js" file contains a JavaScript function called "transform".
- It transforms the input string based on specific rules:
- If the length of the string is divisible by 15, reverse the string and replace each character with its ASCII code, separated by commas.
- If the length is divisible by 5, replace each character with its ASCII code separated by commas.
- If the length is divisible by 3, simply reverse the string.

============================================================================

## Subarray with Sum of Target Found ("arrayMap.js")

### Description:

- The "arrayMap.js" file contains a JavaScript function to find a subarray with a sum equal to the target.

### How to Run:

1. Open a JavaScript environment like a browser console or Node.js.
2. Paste the code from "arrayMap.js".
3. Test the function with different arrays and target values.

### Function Details:

- The function iterates over the array to find a subarray whose sum equals the target.
- It logs the subarray indices if found and returns `true`, otherwise `false`.

