# Workflow

Uses `browserify` and `uglify-js`. Make sure they're installed.

Then do `npm install` in this folder. Then, edit `source.js`. Then, run:

`npm run build` (actually just `browserify source.js | uglifyjs > bundle.js`)

This compiles `bundle.js`, which is loaded by `index.html`.
