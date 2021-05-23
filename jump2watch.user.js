// ==UserScript==
// @name         jump2watch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A poor people try to free herself
// @author       You
// @include      http://wsdx.ncu.edu.cn/user/lesson
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    for (var i = 0; i < document.getElementsByClassName("study_plan2").length; i++)
    {
        var courseInfo = document.getElementsByClassName("study_plan2")[i];
        if (courseInfo.children[2].children[2].style.color == "red"){
            courseInfo.children[2].children[1].children[0].click();
        };
    }
})();