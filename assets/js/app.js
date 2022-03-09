/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("$(function(){\r\n    var header = $(\"#header\"),\r\n     introH = $(\"#header\").innerHeight(),\r\n     scrollOffset =   $(window).scrollTop();\r\n  \r\n    //  fixed Header\r\n     checkScroll(scrollOffset);\r\n  \r\n  \r\n    $(window).on(\"scroll\", function() {\r\n  \r\n        scrollOffset = $(this).scrollTop();\r\n  \r\n        checkScroll(scrollOffset);\r\n        \r\n        });\r\n  \r\n        function checkScroll(scrollOffset){\r\n  \r\n            console.log(scrollOffset);\r\n    \r\n            if( scrollOffset >= introH) {\r\n                header.addClass(\"fixed\");\r\n    \r\n            }\r\n            else{\r\n                header.removeClass(\"fixed\");\r\n            }\r\n        }\r\n    })\r\n// wow.js\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll(\"[data-modal]\");\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll(\".modal__close\");\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach(item =>{\r\n    item.addEventListener('click', event =>{\r\n       let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute('data-modal'); /*для опознования, какое именно модальное окно было вызвано*/\r\n        let modal  = document.getElementById(modalId);/*выборка по айди, храним модальное окно, которе хотим сохранить*/\r\n        let modalCntent = modal.querySelector('.modal__content');\r\n\r\n        modalCntent.addEventListener('click',event =>{\r\n            event.stopPropagation();\r\n        });\r\n    //    вызываем класс для отображения\r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n    });\r\n});\r\n// удаление класса при закрытии модалки\r\nmodalClose.forEach(item =>{\r\n    item.addEventListener('click', event =>{\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n           \r\n\r\n      closeModal(currentModal);\r\n    });\r\n});\r\n\r\nmodal.forEach(item =>{\r\n    item.addEventListener('click', event =>{\r\n        let currentModal = event.currentTarget;\r\n   \r\n\r\n      closeModal(currentModal);\r\n    }); \r\n});\r\nfunction closeModal(currentModal){\r\n    currentModal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n}\r\n/*\r\n\r\nmodalClose.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n        \r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\n\r\nmodal.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget;\r\n        \r\n        closeModal(currentModal);\r\n    });\r\n});*/ \n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/swiper.js":
/*!*********************************!*\
  !*** ./src/assets/js/swiper.js ***!
  \*********************************/
/***/ (function() {

eval("var swiper = new Swiper(\".mySwiper\", {\r\n    effect: \"cube\",\r\n    grabCursor: true,\r\n    cubeEffect: {\r\n      shadow: true,\r\n      slideShadows: true,\r\n      shadowOffset: 20,\r\n      shadowScale: 0.94,\r\n    },\r\n    pagination: {\r\n      el: \".swiper-pagination\",\r\n    },\r\n  });\r\n// swiper\r\n\r\n// modal\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/swiper.js"]();
/******/ 	
/******/ })()
;