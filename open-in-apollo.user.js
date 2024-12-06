// ==UserScript==
// @name         Open Apollo App
// @version      1.0.1
// @author       AnthonyGress
// @match        *://*.reddit.com/*
// @inject-into content
// ==/UserScript==

if (window.self !== window.top) return; // iframe
if (window.location.pathname === '/redirect') return; // Opening link in browser from app
window.location.href = `apollo://${window.location.hostname}${window.location.pathname}`
