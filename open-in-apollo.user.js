// ==UserScript==
// @name         Open Apollo App
// @version      1.0.1
// @author       AnthonyGress
// @match        *://*.reddit.com/*
// ==/UserScript==
if (window.location.pathname === '/redirect') return;
window.location.href = `apollo://${window.location.hostname}${window.location.pathname}`
