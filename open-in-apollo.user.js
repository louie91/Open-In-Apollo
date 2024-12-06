// ==UserScript==
// @name         Open Apollo App
// @version      1.0.2
// @author       Original by AnthonyGress, modified by louie91
// @match        *://*.reddit.com/*
// @downloadURL  https://gist.github.com/louie91/1975a73500be2c8e0f9d94445af6fbd6/raw/open-in-apollo.user.js
// @updateURL    https://gist.github.com/louie91/1975a73500be2c8e0f9d94445af6fbd6/raw/open-in-apollo.user.js
// @homepage     https://gist.github.com/louie91/1975a73500be2c8e0f9d94445af6fbd6/
// @inject-into content
// ==/UserScript==

if (window.self !== window.top) return; // iframe
if (window.location.pathname === '/redirect') return; // Opening link in browser from app
window.location.href = `apollo://${window.location.hostname}${window.location.pathname}`
