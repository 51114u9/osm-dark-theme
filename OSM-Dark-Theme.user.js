// ==UserScript==
// @name        OSM Dark Theme
// @namespace   http://about.me/marcoantoniofrias

// @include     http://openstreetmap.org/*
// @include     https://openstreetmap.org/*
// @include     http://*.openstreetmap.org/*
// @include     https://*.openstreetmap.org/*

// @license     BSD License; http://www.opensource.org/licenses/bsd-license.php
// @version     0.1
// @grant       none
// ==/UserScript==

// Load prerequisites
loadGlobalCSS();

// Functions
function addGlobalStyle(device, css) {
  var elmHead, elmStyle;
  elmHead = document.getElementsByTagName('head')[0];
  elmStyle = document.createElement('style');
  elmStyle.type = 'text/css';
  elmStyle.media = device;
  elmHead.appendChild(elmStyle);
  elmStyle.innerHTML = css;
}

function loadGlobalCSS() {
  addGlobalStyle('screen',
    'body { background-color: #232323; color: #ccc; } ' +
    'a { color: #888; } a:hover { color: #fff; } ' +
    'input[type="text"], input[type="email"], input[type="url"], input[type="password"], textarea { background-color: #2d2d2d; border: 1px solid #181818; color: #888; } ' +
    'input[type="button"], input[type="submit"], input[type="reset"], a.button { background: #2d2d2d; border: 1px solid #181818; color: #888; } ' +
    'input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover, a.button:hover { background: #373737; } ' +
    '/* navbar */ ' +
    'header h1 a { color: #ccc; } ' +
    'nav.primary > ul { border: 1px solid #181818; } ' +
    'nav.primary > ul > li, nav.primary > ul > li.dropdown > a.tab { border-right: 1px solid #181818; } ' +
    'nav.primary > ul > li > a:hover { background: #2d2d2d; } ' +
    'nav.primary > ul > li.current { background-color: #2d2d2d; } ' +
    'nav.primary > ul > li.current > a:hover { background: #373737; } ' +
    'nav.primary a.tab, nav.primary .dropdown-toggle { color: #888; } ' +
    'nav.primary a.tab:hover, nav.primary .dropdown-toggle:hover { color: #fff; } ' +
    'nav.primary .caret, nav.secondary .caret { border-top-color: #888; } ' +
    'nav.secondary > ul a:hover, nav.secondary > ul .dropdown-toggle:hover { color: #fff; } ' +
    'nav.secondary .user-menu { border: 1px solid #181818; } ' +
    'nav.secondary .user-menu.logged-in > a:hover > .user-button { color: #fff; } ' +
    'nav.secondary #inboxanchor, .count-number { background: #a40000; color: #fff; } ' +
    '.dropdown-menu { background-color: #232323; border: 1px solid #181818; } ' +
    '.dropdown-menu > li > a { color: #888; } ' +
    '.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-submenu:hover > a, .dropdown-submenu:focus > a { background-color: #2d2d2d; color: #fff; } ' +
    '.dropdown-menu .divider { background-color: #232323; border-bottom: 1px solid #181818; } ' +
    '/* sidebar-left */ ' +
    '.search_form, .directions_form { background-color: #232323; } ' +
    '.search_form .describe_location, .directions_form .describe_location { color: #888; } ' +
    '.search_form input:focus, .directions_form input:focus { box-shadow: 0px 0px 7px #555555; } ' +
    '.map-layout #sidebar { background: #232323; } ' +
    '#turnbyturn tr.turn:hover { background: #2d2d2d; } ' +
    '#turnbyturn td.instruction, #turnbyturn td.distance { border-bottom: 1px solid #181818; } ' +
    '.buttons input[type="submit"], .buttons input[type="button"], .buttons input[type="reset"], .buttons .button, .buttons .button_to { border-right: 1px solid #181818; } ' +
    'input[type="button"]:disabled, input[type="submit"]:disabled, input[type="reset"]:disabled, a.button:disabled { background: #555753; } ' +
    'input[type="button"]:disabled:hover, input[type="submit"]:disabled:hover, input[type="reset"]:disabled:hover, a.button:disabled:hover { background: #EEE; } ' +
    '#sidebar .changesets li { border-bottom: 1px solid #181818; } ' +
    '#sidebar .changesets li.selected { border-bottom: 1px solid #2d2d2d; } ' +
    '#sidebar .changesets h4 a { color: #888; } ' +
    '#sidebar_content .browse-section { border-bottom: 1px solid #181818; } ' +
    '#sidebar_content .browse-tag-list { background-color: #232323; border: 1px solid #181818; } ' +
    '#sidebar_content .browse-tag-list .browse-tag-k { background-color: #2d2d2d; } ' +
    '#sidebar_content .browse-tag-list .browse-tag-v { background-color: #232323; border-left: 1px solid #181818; } ' +
    '#sidebar_content .browse-tag-list th, #sidebar_content .browse-tag-list td { border-bottom: 1px solid #181818; } ' +
    '/* sidebar-right (map-ui) */ ' +
    '.map-layout #map-ui { background: #232323; } ' +
    '.map-layout #map-ui .section { border-bottom: 1px solid #181818; } ' +
    '.layers-ui .base-layers li { border: 2px solid #181818; } ' +
    '.layers-ui .base-layers li.active { border-color: #000; } ' +
    '.layers-ui .base-layers li.active:hover { border-color: #181818; } ' +
    '.layers-ui .base-layers li label { background: rgba(35, 35, 35, 0.9); } ' +
    '.leaflet-container { background: #232323; } ' +
    '.leaflet-container a.leaflet-popup-close-button { color: #888; } ' +
    '.leaflet-popup-content-wrapper, .leaflet-popup-tip { background: #232323; } ' +
    '.share-ui .share-tabs a.active { background-color: #232323; } ' +
    '.share-ui .share-tabs a:first-child, .share-ui .share-tabs a:last-child { border: 1px solid #181818; } ' +
    '.share-ui .share-tabs a { background-color: #232323; border-top: 1px solid #181818; border-right: 1px solid #181818; border-bottom: 1px solid #181818; color: #888; } ' +
    '.share-ui #geo_uri { width: 100%; font-family: monospace; font-size: small; line-height: 1.3; } ' +
    '/* leaflet-control */ ' +
    '.leaflet-control .control-button.active { background-color: #2d2d2d; } '
  );
}
