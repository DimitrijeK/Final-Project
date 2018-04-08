/*
This file will be loaded on extension startup through the manifest.json file "background" signal
The following code will be read and executed on extension startup
*/

//an event listener that will wait for the DOM to be fully loaded before being called.
document.addEventListener('DOMContentLoaded', function(){

    //create an event listener for the dropdown menu to toggle between having the textarea and button loaded onto the popup
    document.getElementById("_input_type_dropdown").addEventListener("change", function(){
        //if the dropdown menu is set to "container highligher" then hide the '_textarea_option' div
        if (this.value == "container highlighter")
        {
            document.getElementById("_textarea_option").style.display = "none";
        }
        //otherwise if the dropdown menu has the "text area" option set then show the '_textarea_option' div
        else if (this.value == "text area")
        {
            //load the textarea with the last text it had
            var data = JSON.parse(localStorage.getItem("tempInput"));

            //display the '_textarea_option' div and set the textarea content to 'data'
            document.getElementById("_textarea_option").style.display = "block";
            document.getElementById("_input_textarea").value = data;
            
            //add an event listener to the textarea that will overwrite the localstorage with the most current content inside the textarea
            document.getElementById("_input_textarea").addEventListener("input", function(){
                localStorage.setItem("tempInput", JSON.stringify(this.value));
            });
        }
    });
    //add an event listener to the '_ok_button' that calls the okButtonHandler() function to launch the extension into the main application
    document.getElementById("_ok_button").addEventListener("click", function(){ okButtonHandler(); });
    
});

//creating a listener that will be searching for incoming messages (from contentscript.js)
chrome.runtime.onMessage.addListener(function(message){
    localStorage.setItem("userInput", JSON.stringify(message.data));
    chrome.tabs.create({url: "index.html"});
});

//creating an onclick function linked to the '_ok_button' on popup.html
function okButtonHandler()
{
    //once the '_ok_button' is clicked, then the function will obtain the text inside the '_input_textarea' element on  popup.html
    var textArea = document.getElementById("_input_textarea");
    var input = textArea.value;
    
    //then proceed to store the text inside the textarea into localstorage...
    localStorage.setItem("userInput", JSON.stringify(input));
    //and call the chrome API function to open another tab with the 'index.html' file
    chrome.tabs.create({url: "index.html"});
}