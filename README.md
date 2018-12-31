### babel-plugin-no-console-logs
 
# ✄

This babel plugin is used for removing console logs from the code base at the time of build process.

### Input

```
console.log('This is a console log');

function Test() {
  console.log('Another');
}

```

### Output

```
"use strict";

function Test() {}

```