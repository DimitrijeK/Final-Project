function loadMainOuputContainerReadability()
{
    //creating the main output container
    var mainOutputContainer = document.createElement("div");
    mainOutputContainer.id = "_main_output_container";
    mainOutputContainer.className = "main_output_container";
    mainOutputContainer.style.className = "div.main_output_container";
    mainOutputContainer.style.backgroundColor = userSettings.readabilityBackgroundColor;
    
    var highlightingLine = document.createElement("div");
    highlightingLine.id = "_highlighting_line";
    highlightingLine.className = "highlighting_line";
    highlightingLine.style.className = "div.highlighting_line";
    highlightingLine.style.height = userSettings.readabilityFontSize;

    var fontAsNumber = parseInt(userSettings.readabilityFontSize);
    var height = ((fontAsNumber / 2).toString()) + "px";
    
    var margin = ((fontAsNumber * userSettings.readabilityLineNumber + height).toString());


    //creating the output text area to place inside the main output container
    var outputTextarea = document.createElement("textarea");
    outputTextarea.id = "_output_textarea";
    outputTextarea.className = "output_textarea";
    outputTextarea.style.className = "textarea.output_textarea";
    outputTextarea.readOnly = true;

    //setting all the user settings for the text
    outputTextarea.style.fontFamily = userSettings.readabilityFont;
    outputTextarea.style.fontSize = userSettings.readabilityFontSize;
    outputTextarea.style.color = userSettings.readabilityTextColor;
    outputTextarea.style.lineHeight = userSettings.readabilityLineSpacing;
    //allowing the user to resize the textarea and have the new size carried over to the '_main_output_container'
    //so that the linehighlighting and div still match up
    outputTextarea.addEventListener("mouseup", function(){
       mainOutputContainer.style.width = outputTextarea.clientWidth;
       mainOutputContainer.style.height = outputTextarea.clientHeight;
    });

    //setting the text inside the textarea
    var data = localStorage.getItem("userInput");
    outputTextarea.value = JSON.parse(data);

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(mainOutputContainer);
    
    mainOutputContainer.appendChild(highlightingLine);
    mainOutputContainer.appendChild(outputTextarea);
}

function loadMainOuputContainerSpeedReader()
{
    //creating the speed reader output container
    var speedReaderOutputContainer = document.createElement("div");
    speedReaderOutputContainer.id = "_speed_reader_output_container";
    speedReaderOutputContainer.className = "speed_reader_output_container";
    speedReaderOutputContainer.style.className = "div.speed_reader_output_container";

    //setting all the user settings for the text
    speedReaderOutputContainer.style.fontFamily = userSettings.speedReaderFont;
    speedReaderOutputContainer.style.fontSize = userSettings.speedReaderFontSize;
    speedReaderOutputContainer.style.color = userSettings.speedReaderTextColor;
    speedReaderOutputContainer.style.backgroundColor = userSettings.speedReaderBackgroundColor;

    //setting the text inside the container
    var data = localStorage.getItem("userInput");
    speedReaderOutputContainer.innerHTML = USER_INPUT[userSettings.speedReaderWordNumber];

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(speedReaderOutputContainer);
}