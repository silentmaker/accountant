/* eslint-disable no-undef */
const isProduction = process.env.NODE_ENV === 'production';
const winURL = isProduction ? 'dist/index.html' : 'http://localhost:8081';
const winOpts = nw.App.manifest.window;

winOpts.new_instance = true;

nw.Window.open(winURL, winOpts);
