(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n*{margin: 0; padding: 0;box-sizing: border-box;font-family: 'Muli', sans-serif;}\n.nav_style {\nbackground-color: #a29bfe!important;\n}\n.nav_style a{\ncolor: white;\n\n}\n.main_header{\n    height: 450px;\n    width: 100%;\n}\n.right h1{\n    font-size: 3rem;\n    z-index: 0.4;\n}\n#corona_rot img{\n    -webkit-animation: gocorona 3s linear infinite;\n            animation: gocorona 3s linear infinite;\n    \n }\n@-webkit-keyframes gocorona{\n     0% { transform: rotate(0);}\n     100% { transform: rotate(360deg);}\n }\n@keyframes gocorona{\n     0% { transform: rotate(0);}\n     100% { transform: rotate(360deg);}\n }\n.leftsaid img{ -webkit-animation: heartback 5s linear infinite; animation: heartback 5s linear infinite;\n \n }\n@-webkit-keyframes  heartback{\n     0%{\n         transform: scale(.75);\n     }\n     20%{\n         transform: scale(1);\n     }\n     40%{\n         transform: scale(.75);\n     }\n     60%{\n         transform: scale(1);\n     }\n }\n@keyframes  heartback{\n     0%{\n         transform: scale(.75);\n     }\n     20%{\n         transform: scale(1);\n     }\n     40%{\n         transform: scale(.75);\n     }\n     60%{\n         transform: scale(1);\n     }\n }\n.corona_update{\n    margin: 0 0 30px 0;\n}\n.corona_update h3{\n    color: #ff7675;\n}\n.corona_update h1{\n    text-align: center ;\n    font-size: 2rem;\n}\n.section_header{\n    font-family: black;\n    font-weight: bold;\n}\n/* .sub_section{\n    background-color: #fbfafb;\n} */\nhtml{\n    scroll-behavior: smooth;\n}\n/*toster*/\n.toast-center-center {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n.toast-top-center {\n    top: 0;\n    right: 0;\n    width: 100%;\n  }\n.toast-bottom-center {\n    bottom: 0;\n    right: 0;\n    width: 100%;\n  }\n.toast-top-full-width {\n    top: 0;\n    right: 0;\n    width: 100%;\n  }\n.toast-bottom-full-width {\n    bottom: 0;\n    right: 0;\n    width: 100%;\n  }\n.toast-top-left {\n    top: 12px;\n    left: 12px;\n  }\n.toast-top-right {\n    top: 12px;\n    right: 12px;\n  }\n.toast-bottom-right {\n    right: 12px;\n    bottom: 12px;\n  }\n.toast-bottom-left {\n    bottom: 12px;\n    left: 12px;\n  }\n/* toast styles */\n.toast-title {\n    font-weight: bold;\n  }\n.toast-message {\n    word-wrap: break-word;\n  }\n.toast-message a,\n  .toast-message label {\n    color: #FFFFFF;\n  }\n.toast-message a:hover {\n    color: #CCCCCC;\n    text-decoration: none;\n  }\n.toast-close-button {\n    position: relative;\n    right: -0.3em;\n    top: -0.3em;\n    float: right;\n    font-size: 20px;\n    font-weight: bold;\n    color: #FFFFFF;\n    text-shadow: 0 1px 0 #ffffff;\n    /* opacity: 0.8; */\n  }\n.toast-close-button:hover,\n  .toast-close-button:focus {\n    color: #000000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.4;\n  }\n/*Additional properties for button version\n   iOS requires the button element instead of an anchor tag.\n   If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    border: 0;\n  }\n.toast-container {\n    pointer-events: none;\n    position: fixed;\n    z-index: 999999;\n  }\n.toast-container * {\n    box-sizing: border-box;\n  }\n.toast-container .ngx-toastr {\n    position: relative;\n    overflow: hidden;\n    margin: 0 0 6px;\n    padding: 15px 15px 15px 50px;\n    width: 300px;\n    border-radius: 3px 3px 3px 3px;\n    background-position: 15px center;\n    background-repeat: no-repeat;\n    background-size: 24px;\n    box-shadow: 0 0 12px #999999;\n    color: #FFFFFF;\n  }\n.toast-container .ngx-toastr:hover {\n    box-shadow: 0 0 12px #000000;\n    opacity: 1;\n    cursor: pointer;\n  }\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n  }\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n  }\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n  }\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n  }\n.toast-container.toast-top-center .ngx-toastr,\n  .toast-container.toast-bottom-center .ngx-toastr {\n    width: 300px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n.toast-container.toast-top-full-width .ngx-toastr,\n  .toast-container.toast-bottom-full-width .ngx-toastr {\n    width: 96%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n.ngx-toastr {\n    background-color: #030303;\n    pointer-events: auto;\n  }\n.toast-success {\n    background-color: #51A351;\n  }\n.toast-error {\n    background-color: #BD362F;\n  }\n.toast-info {\n    background-color: #2F96B4;\n  }\n.toast-warning {\n    background-color: #F89406;\n  }\n.toast-progress {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 4px;\n    background-color: #000000;\n    opacity: 0.4;\n  }\n/* Responsive Design */\n@media all and (max-width: 240px) {\n    .toast-container .ngx-toastr.div {\n      padding: 8px 8px 8px 50px;\n      width: 11em;\n    }\n    .toast-container .toast-close-button {\n      right: -0.2em;\n      top: -0.2em;\n    }\n  }\n@media all and (min-width: 241px) and (max-width: 480px) {\n    .toast-container .ngx-toastr.div {\n      padding: 8px 8px 8px 50px;\n      width: 18em;\n    }\n    .toast-container .toast-close-button {\n      right: -0.2em;\n      top: -0.2em;\n    }\n  }\n@media all and (min-width: 481px) and (max-width: 768px) {\n    .toast-container .ngx-toastr.div {\n      padding: 15px 15px 15px 50px;\n      width: 25em;\n    }\n  }\n.footer_style{\n    background-color: #a29bfe!important;\n  }\n.footer_style p{\n    margin-bottom: 0!important;\n  }\n.btn-warning {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107;\n   \n\n  }\n@media(max-width:768px){\n    .main_header{height: 700px; text-align: center;}\n      .count_style{\n      display: inline!important;\n    }\n   \n   \n  }\n.row{\n    margin-left: 0!important;\n    margin-right: 0!important;\n\n  }\n.count_style p{\n   text-align: center;\n  }\n.symtos:hover{ -webkit-animation: heeart 5s linear infinite; animation: heeart 5s linear infinite;\n    }\n@-webkit-keyframes  heeart{\n    0%{\n        transform: scale(.75);\n    }\n    20%{\n        transform: scale(1);\n    }\n    40%{\n        transform: scale(.75);\n    }\n    60%{\n        transform: scale(1);\n    }\n}\n@keyframes  heeart{\n    0%{\n        transform: scale(.75);\n    }\n    20%{\n        transform: scale(1);\n    }\n    40%{\n        transform: scale(.75);\n    }\n    60%{\n        transform: scale(1);\n    }\n}\n.loader{\n  border: #f3f3f3;\n  border-top: 16px solid #3498db;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  top: 50%;\n  left: 50%;\n  position: fixed;\n  margin-top: -9em;\n  margin-left: -15em;\n}\n@-webkit-keyframes spin{\n  0%{transform: rotate(0deg);}\n  100%{transform: rotate(360deg);}\n}\n@keyframes spin{\n  0%{transform: rotate(0deg);}\n  100%{transform: rotate(360deg);}\n}\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsc0JBQXNCLENBQUMsK0JBQStCLENBQUM7QUFDL0U7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDOztDQUV6QztBQUNBO0tBQ0ksS0FBSyxvQkFBb0IsQ0FBQztLQUMxQixPQUFPLHlCQUF5QixDQUFDO0NBQ3JDO0FBSEE7S0FDSSxLQUFLLG9CQUFvQixDQUFDO0tBQzFCLE9BQU8seUJBQXlCLENBQUM7Q0FDckM7QUFDQSxlQUFlLCtDQUF1QyxFQUF2Qyx1Q0FBdUM7O0NBRXREO0FBRUE7S0FDSTtTQUNJLHFCQUFxQjtLQUN6QjtLQUNBO1NBQ0ksbUJBQW1CO0tBQ3ZCO0tBQ0E7U0FDSSxxQkFBcUI7S0FDekI7S0FDQTtTQUNJLG1CQUFtQjtLQUN2QjtDQUNKO0FBYkE7S0FDSTtTQUNJLHFCQUFxQjtLQUN6QjtLQUNBO1NBQ0ksbUJBQW1CO0tBQ3ZCO0tBQ0E7U0FDSSxxQkFBcUI7S0FDekI7S0FDQTtTQUNJLG1CQUFtQjtLQUN2QjtDQUNKO0FBRUE7SUFDRyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBLFNBQVM7QUFDVDtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0VBQ2xDO0FBQ0E7SUFDRSxNQUFNO0lBQ04sUUFBUTtJQUNSLFdBQVc7RUFDYjtBQUNBO0lBQ0UsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0VBQ2I7QUFDQTtJQUNFLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztFQUNiO0FBQ0E7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7RUFDYjtBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7RUFDYjtBQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNFLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0E7O0lBRUUsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7QUFDQTs7SUFFRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTs7MkRBRXlEO0FBQ3pEO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsU0FBUztFQUNYO0FBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNBLGlIQUFpSDtBQUNqSDtJQUNFLHFsQkFBcWxCO0VBQ3ZsQjtBQUNBLGtIQUFrSDtBQUNsSDtJQUNFLDZqQkFBNmpCO0VBQy9qQjtBQUNBLDJHQUEyRztBQUMzRztJQUNFLHdkQUF3ZDtFQUMxZDtBQUNBLDBIQUEwSDtBQUMxSDtJQUNFLHNvQkFBc29CO0VBQ3hvQjtBQUNBOztJQUVFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0E7O0lBRUUsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixvQkFBb0I7RUFDdEI7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDQSxzQkFBc0I7QUFDdEI7SUFDRTtNQUNFLHlCQUF5QjtNQUN6QixXQUFXO0lBQ2I7SUFDQTtNQUNFLGFBQWE7TUFDYixXQUFXO0lBQ2I7RUFDRjtBQUNBO0lBQ0U7TUFDRSx5QkFBeUI7TUFDekIsV0FBVztJQUNiO0lBQ0E7TUFDRSxhQUFhO01BQ2IsV0FBVztJQUNiO0VBQ0Y7QUFDQTtJQUNFO01BQ0UsNEJBQTRCO01BQzVCLFdBQVc7SUFDYjtFQUNGO0FBQ0E7SUFDRSxtQ0FBbUM7RUFDckM7QUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7OztFQUd2QjtBQUNBO0lBQ0UsYUFBYSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7TUFDN0M7TUFDQSx5QkFBeUI7SUFDM0I7OztFQUdGO0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCOztFQUUzQjtBQUVBO0dBQ0Msa0JBQWtCO0VBQ25CO0FBR0EsZUFBZSw0Q0FBb0MsRUFBcEMsb0NBQW9DO0lBQ2pEO0FBQ0Y7SUFDRTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKO0FBYkU7SUFDRTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsR0FBRyx1QkFBdUIsQ0FBQztFQUMzQixLQUFLLHlCQUF5QixDQUFDO0FBQ2pDO0FBSEE7RUFDRSxHQUFHLHVCQUF1QixDQUFDO0VBQzNCLEtBQUsseUJBQXlCLENBQUM7QUFDakMiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qe21hcmdpbjogMDsgcGFkZGluZzogMDtib3gtc2l6aW5nOiBib3JkZXItYm94O2ZvbnQtZmFtaWx5OiAnTXVsaScsIHNhbnMtc2VyaWY7fVxuLm5hdl9zdHlsZSB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjYTI5YmZlIWltcG9ydGFudDtcbn1cbi5uYXZfc3R5bGUgYXtcbmNvbG9yOiB3aGl0ZTtcblxufVxuLm1haW5faGVhZGVye1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucmlnaHQgaDF7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHotaW5kZXg6IDAuNDtcbn1cbiNjb3JvbmFfcm90IGltZ3tcbiAgICBhbmltYXRpb246IGdvY29yb25hIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBcbiB9XG4gQGtleWZyYW1lcyBnb2Nvcm9uYXtcbiAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTt9XG4gICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbiB9XG4gLmxlZnRzYWlkIGltZ3sgYW5pbWF0aW9uOiBoZWFydGJhY2sgNXMgbGluZWFyIGluZmluaXRlO1xuIFxuIH1cblxuIEBrZXlmcmFtZXMgIGhlYXJ0YmFja3tcbiAgICAgMCV7XG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gICAgIH1cbiAgICAgMjAle1xuICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgfVxuICAgICA0MCV7XG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gICAgIH1cbiAgICAgNjAle1xuICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgfVxuIH0gXG5cbiAuY29yb25hX3VwZGF0ZXtcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG59XG4uY29yb25hX3VwZGF0ZSBoM3tcbiAgICBjb2xvcjogI2ZmNzY3NTtcbn1cbi5jb3JvbmFfdXBkYXRlIGgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlciA7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLnNlY3Rpb25faGVhZGVye1xuICAgIGZvbnQtZmFtaWx5OiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi8qIC5zdWJfc2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYWZiO1xufSAqL1xuaHRtbHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi8qdG9zdGVyKi9cbi50b2FzdC1jZW50ZXItY2VudGVyIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLnRvYXN0LXRvcC1jZW50ZXIge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9hc3QtYm90dG9tLWNlbnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50b2FzdC10b3AtbGVmdCB7XG4gICAgdG9wOiAxMnB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbiAgLnRvYXN0LXRvcC1yaWdodCB7XG4gICAgdG9wOiAxMnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICB9XG4gIC50b2FzdC1ib3R0b20tcmlnaHQge1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJvdHRvbTogMTJweDtcbiAgfVxuICAudG9hc3QtYm90dG9tLWxlZnQge1xuICAgIGJvdHRvbTogMTJweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG4gIFxuICAvKiB0b2FzdCBzdHlsZXMgKi9cbiAgLnRvYXN0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAudG9hc3QtbWVzc2FnZSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIC50b2FzdC1tZXNzYWdlIGEsXG4gIC50b2FzdC1tZXNzYWdlIGxhYmVsIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuICAudG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI0NDQ0NDQztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAtMC4zZW07XG4gICAgdG9wOiAtMC4zZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAgIC8qIG9wYWNpdHk6IDAuODsgKi9cbiAgfVxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLFxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICAvKkFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cbiAgIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuICAgSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbiAgYnV0dG9uLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG4gIH1cbiAgLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggIzk5OTk5OTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwMDAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2luZm8tY2lyY2xlLnN2ZyAqL1xuICAudG9hc3QtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7XG4gIH1cbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvdGltZXMtY2lyY2xlLnN2ZyAqL1xuICAudG9hc3QtZXJyb3Ige1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICB9XG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xuICAudG9hc3Qtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICB9XG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2V4Y2xhbWF0aW9uLXRyaWFuZ2xlLnN2ZyAqL1xuICAudG9hc3Qtd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWNlbnRlciAubmd4LXRvYXN0cixcbiAgLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyIC5uZ3gtdG9hc3RyIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWZ1bGwtd2lkdGggLm5neC10b2FzdHIsXG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLm5neC10b2FzdHIge1xuICAgIHdpZHRoOiA5NiU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5uZ3gtdG9hc3RyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG4gIC50b2FzdC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xuICB9XG4gIC50b2FzdC1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JEMzYyRjtcbiAgfVxuICAudG9hc3QtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTZCNDtcbiAgfVxuICAudG9hc3Qtd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjtcbiAgfVxuICAudG9hc3QtcHJvZ3Jlc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICAvKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkge1xuICAgIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgICB3aWR0aDogMTFlbTtcbiAgICB9XG4gICAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgICB0b3A6IC0wLjJlbTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgICB3aWR0aDogMThlbTtcbiAgICB9XG4gICAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgICB0b3A6IC0wLjJlbTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gICAgICB3aWR0aDogMjVlbTtcbiAgICB9XG4gIH1cbiAgLmZvb3Rlcl9zdHlsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTI5YmZlIWltcG9ydGFudDtcbiAgfVxuICAuZm9vdGVyX3N0eWxlIHB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ0bi13YXJuaW5nIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICAgIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbiAgIFxuXG4gIH1cbiAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XG4gICAgLm1haW5faGVhZGVye2hlaWdodDogNzAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjt9XG4gICAgICAuY291bnRfc3R5bGV7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUhaW1wb3J0YW50O1xuICAgIH1cbiAgIFxuICAgXG4gIH1cbiAgLnJvd3tcbiAgICBtYXJnaW4tbGVmdDogMCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwIWltcG9ydGFudDtcblxuICB9XG5cbiAgLmNvdW50X3N0eWxlIHB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG5cbiAgLnN5bXRvczpob3ZlcnsgYW5pbWF0aW9uOiBoZWVhcnQgNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgQGtleWZyYW1lcyAgaGVlYXJ0e1xuICAgIDAle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gICAgfVxuICAgIDIwJXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgNDAle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC43NSk7XG4gICAgfVxuICAgIDYwJXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG4ubG9hZGVye1xuICBib3JkZXI6ICNmM2YzZjM7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLXRvcDogLTllbTtcbiAgbWFyZ2luLWxlZnQ6IC0xNWVtO1xufVxuQGtleWZyYW1lcyBzcGlue1xuICAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gIDEwMCV7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5cbiAgIl19 */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\corona\app\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map