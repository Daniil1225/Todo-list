/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const buttonOpenPopup = document.querySelector(\".button-add\")\r\nconst buttonClosePopup = document.querySelector(\".popup__close\")\r\nconst popUp = document.querySelector(\".popup\")\r\nconst hideDiv = document.querySelector(\".hide\")\r\nconst container = document.querySelector(\".container\")\r\n\r\n//Open popup\r\nbuttonOpenPopup.onclick = () => {\r\n  popUp.classList.remove(\"invisible\")\r\n  hideDiv.classList.remove(\"invisible\")\r\n  container.classList.add(\"blur\")\r\n}\r\n//Close popup\r\nbuttonClosePopup.onclick = () => {\r\n  popUp.classList.add(\"invisible\")\r\n  hideDiv.classList.add(\"invisible\")\r\n  container.classList.remove(\"blur\")\r\n}\r\n\r\n\r\n\r\n\r\nconst listNavbarMain = document.querySelectorAll(\".list__element\")\r\nconst listNavbarPopup = document.querySelectorAll(\".list__element-popup\")\r\nconst hoverListItems = document.querySelectorAll(\".hover\")\r\n\r\n//Check if main navbar element was clicked. Add click animation.\r\nlistNavbarMain.forEach((element, index) => {\r\n  element.addEventListener(\"click\", function() {\r\n    listNavbarMain.forEach((element, index) => {\r\n      if(element.classList.contains(\"chosen\") && !this.classList.contains(\"projects\")){\r\n        element.classList.remove(\"chosen\")\r\n      }\r\n    })\r\n    if(element.classList.contains(\"projects\") == false){\r\n      this.classList.add(\"chosen\")\r\n    }\r\n  })\r\n})\r\n//Check if popup navbar element was clicked. Add click animation.\r\nlistNavbarPopup.forEach((element, index) => {\r\n  element.addEventListener(\"click\", function() {\r\n    listNavbarPopup.forEach((element, index) => {\r\n      if(element.classList.contains(\"chosen\")){\r\n        element.classList.remove(\"chosen\")\r\n      }\r\n    })\r\n    this.classList.add(\"chosen\")\r\n  })\r\n})\n\n//# sourceURL=webpack://todo-list__odin-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;