function loadSideBarContainerReadability()
{
    //creating the side bar container
    var sideBarContainer = document.createElement("div");
    sideBarContainer.id = "_side_bar_container";
    sideBarContainer.className = "side_bar_container";
    sideBarContainer.style.className = "div.side_bar_container";

    //creating the next line button to place inside the navigation button container
    var nextLineButton = document.createElement("input");
    nextLineButton.type = "button";
    nextLineButton.id = "_next_line_button";
    nextLineButton.className = "next_line_button";
    nextLineButton.value = "Next Line";
    nextLineButton.style.className = "input.next_line_button";
    nextLineButton.addEventListener("click", function(){readabilityNextLine()});

    //creating the previous line button to place inside the navigation button container
    var previousLineButton = document.createElement("input");
    previousLineButton.type = "button";
    previousLineButton.id = "_previous_line_button";
    previousLineButton.className = "previous_line_button";
    previousLineButton.value = "Past Line";
    previousLineButton.style.className = "input.previous_line_button";
    previousLineButton.addEventListener("click", function(){readabilityPastLine()});
    
    //adding reset button
    var readabilityResetButton = document.createElement("input");
    readabilityResetButton.type = "button";
    readabilityResetButton.id = "_readibility_reset_button";
    readabilityResetButton.className = "readibility_reset_button";
    readabilityResetButton.value = "reset";
    readabilityResetButton.style.className = "input.reset_button";
    readabilityResetButton.addEventListener("click", function(){resetReadabilityLineNumber()});
    
    //creating the settings icon image to go at the top of the side bar container
    var settingsIconImage = document.createElement("img");
    settingsIconImage.id = "_settings_icon_image";
    settingsIconImage.className = "side_bar_image settings_icon_image";
    settingsIconImage.src = "assets/settings_icon.png";
    settingsIconImage.onclick = toggleSettingsDisplay;
    settingsIconImage.alt = "settings";
    settingsIconImage.style.className = "img.side_bar_image img.settings_icon_image img.side_bar_image:hover";

    //creating the readability icon label to go below the settings icon image in the side bar container
    var readabilityIconLabel = document.createElement("p");
    readabilityIconLabel.id = "_readability_icon_label";
    readabilityIconLabel.className = "side_bar_label readability_icon_label";
    readabilityIconLabel.innerHTML = "<i><b>Read</b></i>";
    readabilityIconLabel.onclick = toggleReadabilityState;
    readabilityIconLabel.style.className = "p.side_bar_label p.side_bar_label:hover";

    readabilityIconLabel.style.color = "rgb(0, 123, 255)";

    //creating the speed reader icon label to go below the readability icon label in the side bar container
    var speedReaderIconLabel = document.createElement("p");
    speedReaderIconLabel.id = "_speed_reader_icon_label";
    speedReaderIconLabel.className = "side_bar_label speed_reader_icon_label";
    speedReaderIconLabel.innerHTML = "<i><b>Speed</b><i>";
    speedReaderIconLabel.onclick = toggleSpeedReaderState;
    speedReaderIconLabel.style.className = "p.side_bar_label p.side_bar_label:hover";

    //creating the horizontal line to divide the settings and reading modes with the current mode's featuers
    var optionsFeaturesDivider = document.createElement("hr");
    optionsFeaturesDivider.id = "_options_features_divider";
    optionsFeaturesDivider.className = "options_features_divider";
    optionsFeaturesDivider.style.className = "hr.options_features_divider";

    //creating the features for the current state
    var lineHighlightingLabel = document.createElement("p");
    lineHighlightingLabel.id = "_line_highlighting_label";
    lineHighlightingLabel.className = "features_label line_highlighting_label";
    lineHighlightingLabel.innerHTML = "Line Highlighting";
    lineHighlightingLabel.style.className = "p.features_label";

    var lineHighlightingCheckbox = document.createElement("input");
    lineHighlightingCheckbox.type = "checkbox";
    lineHighlightingCheckbox.checked = false;
    
    lineHighlightingCheckbox.id = "_line_highlighting_checkbox";
    lineHighlightingCheckbox.className = "features_checkbox line_highlighting_checkbox";
    lineHighlightingCheckbox.style.className = "input.features_checkbox";



    lineHighlightingCheckbox.addEventListener("change", function(){
        if (lineHighlightingCheckbox.checked){
            // document.getElementById("_navigation_button_container").style.display = "block";
            document.getElementById("_next_line_button").style.display = "block";
            document.getElementById("_previous_line_button").style.display = "block";
            document.getElementById("_readibility_reset_button").style.display = "block";
            document.getElementById("_highlighting_line").style.display = "block";
        }
        else
        {
            // document.getElementById("_navigation_button_container").style.display = "none";
            document.getElementById("_next_line_button").style.display = "none";
            document.getElementById("_previous_line_button").style.display = "none";
            document.getElementById("_highlighting_line").style.display = "none";
            document.getElementById("_readibility_reset_button").style.display = "none";
        }
    });

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(sideBarContainer);

    sideBarContainer.appendChild(settingsIconImage);
    sideBarContainer.appendChild(readabilityIconLabel);
    sideBarContainer.appendChild(speedReaderIconLabel);
    sideBarContainer.appendChild(optionsFeaturesDivider);
    sideBarContainer.appendChild(lineHighlightingLabel);
    sideBarContainer.appendChild(lineHighlightingCheckbox);
    sideBarContainer.appendChild(document.createElement("br"));
    sideBarContainer.appendChild(document.createElement("br"));
    sideBarContainer.appendChild(document.createElement("br"));
    sideBarContainer.appendChild(nextLineButton);
    sideBarContainer.appendChild(previousLineButton);
    sideBarContainer.appendChild(readabilityResetButton);
}

function loadSideBarContainerSpeedReader()
{
    //creating the side bar container
    var sideBarContainer = document.createElement("div");
    sideBarContainer.id = "_side_bar_container";
    sideBarContainer.className = "side_bar_container";
    sideBarContainer.style.className = "div.side_bar_container";

    //creating the settings icon image to go at the top of the side bar container
    var settingsIconImage = document.createElement("img");
    settingsIconImage.id = "_settings_icon_image";
    settingsIconImage.className = "side_bar_image settings_icon_image";
    settingsIconImage.src = "assets/settings_icon.png";
    settingsIconImage.onclick = toggleSettingsDisplay;
    settingsIconImage.alt = "settings";
    settingsIconImage.style.className = "img.side_bar_image img.settings_icon_image img.side_bar_image:hover";

    //creating the readability icon label to go below the settings icon image in the side bar container
    var readabilityIconLabel = document.createElement("p");
    readabilityIconLabel.id = "_readability_icon_label";
    readabilityIconLabel.className = "side_bar_label readability_icon_label";
    readabilityIconLabel.innerHTML = "<i><b>Read</b></i>";
    readabilityIconLabel.onclick = toggleReadabilityState;
    readabilityIconLabel.style.className = "p.side_bar_label p.side_bar_label:hover";

    //creating the speed reader icon label to go below the readability icon label in the side bar container
    var speedReaderIconLabel = document.createElement("p");
    speedReaderIconLabel.id = "_speed_reader_icon_label";
    speedReaderIconLabel.className = "side_bar_label speed_reader_icon_label";
    speedReaderIconLabel.innerHTML = "<i><b>Speed</b><i>";
    speedReaderIconLabel.onclick = toggleSpeedReaderState;
    speedReaderIconLabel.style.className = "p.side_bar_label p.side_bar_label:hover";

    speedReaderIconLabel.style.color = "rgb(0, 123, 255)";

    //creating the horizontal line to divide the settings and reading modes with the current mode's featuers
    var optionsFeaturesDivider = document.createElement("hr");
    optionsFeaturesDivider.id = "_options_features_divider";
    optionsFeaturesDivider.className = "options_features_divider";
    optionsFeaturesDivider.style.className = "hr.options_features_divider";

    ///////////////creating the features for the current state
    var hideControlButtonsContainerLabel = document.createElement("p");
    hideControlButtonsContainerLabel.innerHTML = "Hide Controls";
    hideControlButtonsContainerLabel.id = "_hide_control_buttons_container_label";
    hideControlButtonsContainerLabel.className = "features_label hide_control_buttons_container_label";
    hideControlButtonsContainerLabel.style.className = "p.features_label";

    var hideControlButtonsContainerCheckbox = document.createElement("input");
    hideControlButtonsContainerCheckbox.type = "checkbox";
    hideControlButtonsContainerCheckbox.id = "_hide_control_buttons_container_checkbox";
    hideControlButtonsContainerCheckbox.className = "features_checkbox hide_control_buttons_container_checkbox";
    hideControlButtonsContainerCheckbox.style.className = "input.features_checkbox";
    hideControlButtonsContainerCheckbox.addEventListener("change", function(){
        if (hideControlButtonsContainerCheckbox.checked){
            var controlButtonContainer = document.getElementById("_control_button_container");
            controlButtonContainer.style.display = "none";
        }
        else
        {
            var controlButtonContainer = document.getElementById("_control_button_container");
            controlButtonContainer.style.display = "block";
        }
    });

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(sideBarContainer);

    sideBarContainer.appendChild(settingsIconImage);
    sideBarContainer.appendChild(readabilityIconLabel);
    sideBarContainer.appendChild(speedReaderIconLabel);
    sideBarContainer.appendChild(optionsFeaturesDivider);
    sideBarContainer.appendChild(hideControlButtonsContainerLabel);
    sideBarContainer.appendChild(hideControlButtonsContainerCheckbox);
    sideBarContainer.appendChild(document.createElement("br"));
    sideBarContainer.appendChild(document.createElement("br"));
    sideBarContainer.appendChild(document.createElement("br"));
}