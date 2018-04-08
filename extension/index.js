/*
This file is loaded once the popup.js file makes a call to create a new tab loaded with the 'index.html' file

This file handles the load order for all the elements in the program and is the source for functions that are used throughout the program
*/

//a global string that will contain either "READABILITY" or "SPEED_READER" and will be used to tell the program which elements to load and functionality to carry out
var readingState = "";

//constant strings that will be used to set the 'readingState' variable
const READABILITY = "READABILITY";
const SPEED_READER = "SPEED_READER";

//a global variable that will store the data the user entered to get into the application and is retrieved through localstorage
var USER_INPUT;

//a global hashmap that keeps track of all the settings that the user has access to during the lifetime of the application
var userSettings = {
    readabilityLineNumber: 0,
    readabilityFont: "Arial",
    readabilityFontSize: "12px",
    readabilityTextColor: "Black",
    readabilityBackgroundColor: "Grey",
    readabilityLineSpacing: "1.0",
    readabilityPastLineMapping: 38,
    readabilityNextLineMapping: 40,
    
    speedReaderWPM: 240,
    speedReaderInterval:0,
    speedReaderWordNumber: 0,
    speedReaderFont: "Arial",
    speedReaderFontSize: "48px",
    speedReaderTextColor: "White",
    speedReaderBackgroundColor: "Black",
    ToggleHotkeys: true,
    speedReaderPlayAndPauseMapping: 32,
    speedReaderDecrementWPMMapping: 37,
    speedReaderIncrementWPMMapping: 39,
    ResetMapping: 82,
};

//function that will be called as soon as the page loads. Will be used to set the text obtained by the user into the '_output_textarea'
window.onload = function()
{
    if (localStorage.getItem("userInput") == null)
    {
        localStorage.setItem("userInput", JSON.stringify("Default Text"));
    }

    readingState = READABILITY;

    var data = JSON.parse(localStorage.getItem("userInput"));
    //data = data.replace(/"+/g, '');
    data = data.replace(/\\t+/g, '');
    data = data.replace(/\\n+/g, '');
    data = data.split(" ");
    USER_INPUT = data;
    loadAllElements();
}

function loadAllElements()
{
    //created a reference to the body on index.html
    var body = document.getElementsByTagName("body")[0];

    //remove all elements inside the body to leave a clean slate to load the document with a new layout
    while (body.hasChildNodes())
    {
        body.removeChild(body.lastChild);
    }

    //load the document with all the elements that are part of the current state of the program
    loadMainOuputContainer();
    loadFeaturesContainers();
    loadSideBarContainer();
    loadModalSettingsContainer();
}

//onclick function linked to '_settings_icon_image' that will display a hidden container that holds the list of settings.
//for now, the user will be able to exit the settings container by clicking on the settings button again.
function toggleSettingsDisplay()
{
    var modal = document.getElementById("_modal_settings_container");

    if (window.getComputedStyle(modal).getPropertyValue("display") == "none")
    {
        modal.style.display = "block";
    }
    else
    {
        modal.style.display = "none";
    }
}

//onclick function linked to '_readability_icon_label' that will toggle between the black and blue version when clicked and change the state of the program
function toggleReadabilityState()
{
    var readabilityIcon = document.getElementById("_readability_icon_label");
    var speedReaderIcon = document.getElementById("_speed_reader_icon_label");

    var readabilityIconColor = window.getComputedStyle(readabilityIcon).getPropertyValue("color");
    var speedReaderIconColor = window.getComputedStyle(speedReaderIcon).getPropertyValue("color");

    if (readabilityIconColor == "rgb(0, 0, 0)")
    {
        readabilityIconColor = "rgb(0, 123, 255)";
        readabilityIcon.style.color = readabilityIconColor;
        readingState = READABILITY;
        loadAllElements();
    }
}

//onclick function linked to '_speed_reader_icon_label' that will toggle between the black and blue version when clicked and change the state of the program
function toggleSpeedReaderState()
{
    var speedReaderIcon = document.getElementById("_speed_reader_icon_label");
    var readabilityIcon = document.getElementById("_readability_icon_label");

    var speedReaderIconColor = window.getComputedStyle(speedReaderIcon).getPropertyValue("color");
    var readabilityIconColor = window.getComputedStyle(readabilityIcon).getPropertyValue("color");

    if (speedReaderIconColor == "rgb(0, 0, 0)")
    {
        speedReaderIconColor = "rgb(0, 123, 255)";
        speedReaderIcon.style.color = speedReaderIconColor;
        readingState = SPEED_READER;
        loadAllElements();
    }
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//Functions used to control the dynamic creation of the main output container of both stages
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function loadMainOuputContainer()
{
    //functions found inside main_output_container.js
    if (readingState == READABILITY)
    {
        loadMainOuputContainerReadability();
    }
    else if (readingState == SPEED_READER)
    {
        loadMainOuputContainerSpeedReader();
    }
}





//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Functions used to control the dynamic creation of the containers for features of both stages
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function loadFeaturesContainers()
{
    //functions found inside features_container.js
    if (readingState == READABILITY)
    {
        loadFeaturesContainersReadability();
    }
    else if (readingState == SPEED_READER)
    {
        loadFeaturesContainersSpeedReader();
    }
}



//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//Functions used to control the dynamic creation of the side bar container for both stages
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


function loadSideBarContainer()
{
    //functions found inside side_bar_container.js
    if (readingState == READABILITY)
    {
        loadSideBarContainerReadability();
    }
    else if (readingState == SPEED_READER)
    {
        loadSideBarContainerSpeedReader();
    }
}


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//Functions used to control the dynamic creation of the settings container for both stages
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function loadModalSettingsContainer()
{
    //functions found inside modal_settings_container.js
    if (readingState == READABILITY)
    {
        loadModalSettingsContainerReadability();
    }
    else if (readingState == SPEED_READER)
    {
        loadModalSettingsContainerSpeedReader();
    }
}

function drawHighlightingLine()
{
    var highlightingLine = document.getElementById("_highlighting_line");

    var heightAsNumber = parseInt(userSettings.readabilityFontSize);
    var heightFromLineSpacing = userSettings.readabilityLineSpacing;
    
    var margin;
    
    if (heightFromLineSpacing == 1.0)
    {
        margin = ((heightAsNumber * userSettings.readabilityLineNumber * heightFromLineSpacing).toString() + "px");
    }
    
    else if (heightFromLineSpacing == 1.5)
    {
        margin = (((heightAsNumber * userSettings.readabilityLineNumber * heightFromLineSpacing) + (heightAsNumber / 2 / heightFromLineSpacing)).toString() + "px");
    }
    
    else if (heightFromLineSpacing == 2.0)
    {
        margin = (((heightAsNumber * userSettings.readabilityLineNumber * heightFromLineSpacing) + (heightAsNumber / 2)).toString() + "px");
    }
    
    else if (heightFromLineSpacing == 3.0)
    {
        margin = (((heightAsNumber * userSettings.readabilityLineNumber * heightFromLineSpacing) + (heightAsNumber * 3 / heightFromLineSpacing)).toString() + "px");
    }
    
  
    highlightingLine.style.height = heightAsNumber;
    highlightingLine.style.marginTop = margin;
}

function getNextLinePosition()
{
    var highlightingLine = document.getElementById("_highlighting_line");
    
    var heightAsNumber = parseInt(userSettings.readabilityFontSize);
    var heightFromLineSpacing = userSettings.readabilityLineSpacing;

    return {
        height: heightAsNumber,
        heightFromLineSpacing: heightFromLineSpacing
    };
}