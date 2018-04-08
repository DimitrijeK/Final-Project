/*
File will be executed on extension load-up by the extension's manifest.json file content_scripts signal
These functions will be injected into every webpage that the user visits serve the purpose of helping the
user see which container's text would be sent to the actual application.
*/

//if the user places their mouse over a container on a webpage, then the container will be styled with a black border
window.onmouseover = function(e){
    try {
        var elementId = e.target.id;
        var element = document.getElementById(elementId);
        element.style.border = "2px solid black";
    } catch (e) {
        if (e) {
            
        }
    }
};

//if the user moves their mouse out of a container on a webpage, then the container will be styled with no border
window.onmouseout = function(e){
    try {
        var elementId = e.target.id;
        var element = document.getElementById(elementId);
        element.style.border = "";
    } catch (e) {
        if (e) {
            
        }
    }
};

//if the user clicks on a container, then the script will obtain the text inside the element and send the text through a message to popup.js
window.onclick = function(e){
    var elementId = e.target.id;
    var element = document.getElementById(elementId);

    var text = element.innerText || element.textContent || element.value;
    
    chrome.runtime.sendMessage({data: text});
}
