var changedSettingMap = {};

function loadModalSettingsContainerReadability()
{
    //modal container
    var modalSettingsContainer = document.createElement("div");
    modalSettingsContainer.id = "_modal_settings_container";
    modalSettingsContainer.className = "modal_settings_container";
    modalSettingsContainer.style.className = "div.modal_settings_container";

    //modal content
    var modalSettingsContent = document.createElement("div");
    modalSettingsContent.id = "_modal_settings_content";
    modalSettingsContent.className = "modal_settings_content";
    modalSettingsContent.style.className = "div.modal_settings_content";

    //apply button
    var applySettingsButton = document.createElement("input");
    applySettingsButton.type = "button";
    applySettingsButton.value = "Apply";
    applySettingsButton.id = "_apply_settings_button";
    applySettingsButton.className = "apply_settings_button";
    applySettingsButton.style.className = "input.apply_settings_button";
    applySettingsButton.addEventListener("click", function(){
        var arrayOfStyles = Object.keys(changedSettingMap);
        var outputTextarea = document.getElementById("_output_textarea");
        for (var i = 0; i < arrayOfStyles.length; i++)
        {
            if (arrayOfStyles[i] == "backgroundColor")
            {
                var mainOutputContainer = document.getElementById("_main_output_container");
                mainOutputContainer["style"][arrayOfStyles[i]] = changedSettingMap[arrayOfStyles[i]];
            }
            else
            {
                //instead of having the 'changedSettingMap' have keys of the same element on the document,
                //it is now given string versions of namespaces that the settings will aim to change and values
                //are set to what the setting will be set to. In js you can call methods and access namespace variables
                //through the following syntax which is used to dynamically set all of the settings the user changed
                outputTextarea["style"][arrayOfStyles[i]] = changedSettingMap[arrayOfStyles[i]];
                    //as opposed to a static namespace access of outputTextarea.style.fontFamily = changedSettingMap[arrayOfStyles[i]];
                //where we would need as many lines like the one above for each possible setting and would have no efficient way of
                //only having certain static namespaces be called. With the user possibly only wanting 1 or no changes and having to
                //reset all of the settings.
            }
        }
        //redraw highlighting line so that it will coincide with the changed settings
        drawHighlightingLine();
        //reset the map of all the settings that needed to be changed so they can't be changed unless the user wants to again
        for (var i in changedSettingMap) {
            delete changedSettingMap[i];
        }
    });
///////////////////////////////////////////////////////////////////////////////////////

    //font label
    var textFontSettingLabel = document.createElement("p");
    textFontSettingLabel.innerHTML = "Font";
    textFontSettingLabel.id = "_text_font_setting_label";
    textFontSettingLabel.className = "settings_label text_font_setting_label";
    textFontSettingLabel.style.className = "p.settings_label";
    
    //font dropdown
    var textFontSettingDropdown = document.createElement("select");
    textFontSettingDropdown.id = "_text_font_setting_dropdown";
    textFontSettingDropdown.className = "settings_dropdown text_font_setting_dropdown";
    textFontSettingDropdown.style.className = "select.settings_dropdown";

    textFontSettingDropdown.addEventListener("change", function(){
        var value = textFontSettingDropdown.value;
        userSettings.readabilityFont = value;
        changedSettingMap["fontFamily"] = value;
    });
  
    //font1
    var arialFont = document.createElement("option");
    arialFont.value = "Arial";
    arialFont.innerHTML = "Arial";

    //font2
    var helveticaFont = document.createElement("option");
    helveticaFont.value = "Helvetica";
    helveticaFont.innerHTML = "Helvetica";

    //font3
    var timesnewromanFont = document.createElement("option");
    timesnewromanFont.value = "Times New Roman";
    timesnewromanFont.innerHTML = "Times New Roman";

    //font4
    var verdanaFont = document.createElement("option");
    verdanaFont.value = "Verdana";
    verdanaFont.innerHTML = "Verdana";

    //font5
    var courierFont = document.createElement("option");
    courierFont.value = "Courier";
    courierFont.innerHTML = "Courier";

///////////////////////////////////////////////////////////////////////////////////////

    //font size label
    var textFontSizeSettingLabel = document.createElement("p");
    textFontSizeSettingLabel.innerHTML = "Font Size";
    textFontSizeSettingLabel.id = "_text_font_size_setting_label";
    textFontSizeSettingLabel.className = "settings_label text_font_size_setting_label"
    textFontSizeSettingLabel.style.className = "p.settings_label";

    //font size dropdown
    var textFontSizeSettingDropdown = document.createElement("select");
    textFontSizeSettingDropdown.id = "_text_font_size_setting_dropdown";
    textFontSizeSettingDropdown.className = "settings_dropdown text_font_size_setting_dropdown";
    textFontSizeSettingDropdown.style.className = "select.settings_dropdown";
  
    textFontSizeSettingDropdown.addEventListener("change", function(){
        var value = textFontSizeSettingDropdown.value;
        userSettings.readabilityFontSize = value;
        changedSettingMap["fontSize"] = value;
    });

    //font size 1
    var tenFont = document.createElement("option");
    tenFont.value = "10px";
    tenFont.innerHTML = "10";

    //font size 2
    var twelveFont = document.createElement("option");
    twelveFont.value = "12px";
    twelveFont.innerHTML = "12";

    //font size 3
    var fourteenFont = document.createElement("option");
    fourteenFont.value = "14px";
    fourteenFont.innerHTML = "14";

    //font size 4
    var eighteenFont = document.createElement("option");
    eighteenFont.value = "18px";
    eighteenFont.innerHTML = "18";

    //font size 5
    var twentyFont = document.createElement("option");
    twentyFont.value = "20px";
    twentyFont.innerHTML = "20";

    //font size 6
    var twentyfourFont = document.createElement("option");
    twentyfourFont.value = "24px";
    twentyfourFont.innerHTML = "24";

///////////////////////////////////////////////////////////////////////////////////////

    //text color label
    var textColorSettingLabel = document.createElement("p");
    textColorSettingLabel.innerHTML = "Text Color";
    textColorSettingLabel.id = "_text_color_setting_label";
    textColorSettingLabel.className = "settings_label text_color_setting_label";
    textColorSettingLabel.style.className = "p.settings_label"

    //text color dropdown
    var textColorSettingDropdown = document.createElement("select");
    textColorSettingDropdown.id = "_text_color_setting_dropdown";
    textColorSettingDropdown.className = "settings_dropdown text_color_setting_dropdown";
    textColorSettingDropdown.style.className = "select.settings_dropdown";
  
    textColorSettingDropdown.addEventListener("change", function(){
        var value = textColorSettingDropdown.value;
        userSettings.readabilityTextColor = value;
        changedSettingMap["color"] = value;
    });

    //text color 1
    var textColorBlack = document.createElement("option");
    textColorBlack.value = "Black";
    textColorBlack.innerHTML = "Black";

    //text color 2
    var textColorGrey = document.createElement("option");
    textColorGrey.value = "Grey";
    textColorGrey.innerHTML = "Grey";

    //text color 3
    var textColorWhite = document.createElement("option");
    textColorWhite.value = "White";
    textColorWhite.innerHTML = "White";

/////////////////////////////////////////////////////////////////////////////////////////

    //background color label
    var backgroundColorSettingLabel = document.createElement("p");
    backgroundColorSettingLabel.innerHTML = "Background Color";
    backgroundColorSettingLabel.id = "_background_color_setting_label";
    backgroundColorSettingLabel.className = "settings_label background_color_setting_label";
    backgroundColorSettingLabel.style.className = "p.settings_label";

    //background color dropdown
    var backgroundColorSettingDropdown = document.createElement("select");
    backgroundColorSettingDropdown.id = "_background_color_setting_dropdown";
    backgroundColorSettingDropdown.className = "settings_dropdown background_color_setting_dropdown";
    backgroundColorSettingDropdown.style.className = "select.settings_dropdown";
  
    backgroundColorSettingDropdown.addEventListener("change", function(){
        var value = backgroundColorSettingDropdown.value;
        userSettings.readabilityBackgroundColor = value;
        changedSettingMap["backgroundColor"] = value;
    });

    //background color 1
    var backgroundColorBlack = document.createElement("option");
    backgroundColorBlack.value = "Black";
    backgroundColorBlack.innerHTML = "Black";

    //background color 2
    var backgroundColorGrey = document.createElement("option");
    backgroundColorGrey.value = "Grey";
    backgroundColorGrey.innerHTML = "Grey";

    //background color 3
    var backgroundColorWhite = document.createElement("option");
    backgroundColorWhite.value = "White";
    backgroundColorWhite.innerHTML = "White";

/////////////////////////////////////////////////////////////////////////////////////////

    //line spacing label
    var lineSpacingSettingLabel = document.createElement("p");
    lineSpacingSettingLabel.innerHTML = "Line Spacing";
    lineSpacingSettingLabel.id = "_line_spacing_setting_label";
    lineSpacingSettingLabel.className = "settings_label background_color_setting_label";
    lineSpacingSettingLabel.style.className = "p.settings_label";

    //line spacing dropdown
    var lineSpacingSettingDropdown = document.createElement("select");
    lineSpacingSettingDropdown.id = "_background_color_setting_dropdown";
    lineSpacingSettingDropdown.className = "settings_dropdown line_spacing_setting_dropdown";
    lineSpacingSettingDropdown.style.className = "select.settings_dropdown";
  
    lineSpacingSettingDropdown.addEventListener("change", function(){
        var value = lineSpacingSettingDropdown.value;
        userSettings.readabilityLineSpacing = value;
        changedSettingMap["lineHeight"] = value;
    });

    //line spacing 1
    var lineSpacingOne = document.createElement("option");
    lineSpacingOne.value = "1.0";
    lineSpacingOne.innerHTML = "1.0";

    //line spacing 2
    var lineSpacingOnePointFive = document.createElement("option");
    lineSpacingOnePointFive.value = "1.5";
    lineSpacingOnePointFive.innerHTML = "1.5";

    //line spacing 3
    var lineSpacingTwo = document.createElement("option");
    lineSpacingTwo.value = "2.0";
    lineSpacingTwo.innerHTML = "2.0";

    //line spacing 4
    var lineSpacingThree = document.createElement("option");
    lineSpacingThree.value = "3.0";
    lineSpacingThree.innerHTML = "3.0";

/////////////////////////////////////////////////////////////////////////////////////////

    //toggle hot keys label
    var toggleHotkeysSettingLabel = document.createElement("p");
    toggleHotkeysSettingLabel.innerHTML = "Toggle HotKeys";
    toggleHotkeysSettingLabel.id = "_toggle_hotkeys_setting_label";
    toggleHotkeysSettingLabel.className = "settings_label toggle_hotkeys_setting_label";
    toggleHotkeysSettingLabel.style.className = "p.settings_label";

    //toggle hot keys checkbox
    var toggleHotkeysSettingCheckbox = document.createElement("input");
    toggleHotkeysSettingCheckbox.type = "checkbox";
    toggleHotkeysSettingCheckbox.id = "_toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.className = "toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.style.className = "input.toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.checked = true;
    
    var hotkeysInstructions = document.createElement("div")
    
    toggleHotkeysSettingCheckbox.addEventListener("change", function(){
        var value = toggleHotkeysSettingCheckbox.checked;
        userSettings.ToggleHotkeys = value;
        //doesn't affect anything in the textarea ouput so we won't put it into the changedSettingMap
    });

    //modal container
    document.getElementsByTagName("body")[0].appendChild(modalSettingsContainer);

    //modal content
    modalSettingsContainer.appendChild(modalSettingsContent);

    //apply button
    modalSettingsContent.appendChild(applySettingsButton);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //font
    modalSettingsContent.appendChild(textFontSettingLabel);
    modalSettingsContent.appendChild(textFontSettingDropdown);
    textFontSettingDropdown.appendChild(arialFont);
    textFontSettingDropdown.appendChild(helveticaFont);
    textFontSettingDropdown.appendChild(timesnewromanFont);
    textFontSettingDropdown.appendChild(verdanaFont);
    textFontSettingDropdown.appendChild(courierFont);
    //setting initial value
    textFontSettingDropdown.value = userSettings.readabilityFont;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //font size
    modalSettingsContent.appendChild(textFontSizeSettingLabel);
    modalSettingsContent.appendChild(textFontSizeSettingDropdown);
    textFontSizeSettingDropdown.appendChild(tenFont);
    textFontSizeSettingDropdown.appendChild(twelveFont);
    textFontSizeSettingDropdown.appendChild(fourteenFont);
    textFontSizeSettingDropdown.appendChild(eighteenFont);
    textFontSizeSettingDropdown.appendChild(twentyFont);
    textFontSizeSettingDropdown.appendChild(twentyfourFont);
    //setting initial value
    textFontSizeSettingDropdown.value = userSettings.readabilityFontSize;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //text color
    modalSettingsContent.appendChild(textColorSettingLabel);
    modalSettingsContent.appendChild(textColorSettingDropdown);
    textColorSettingDropdown.appendChild(textColorBlack);
    textColorSettingDropdown.appendChild(textColorGrey);
    textColorSettingDropdown.appendChild(textColorWhite);
    //setting initial value
    backgroundColorSettingDropdown.value = userSettings.readabilityTextColor;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //background color
    modalSettingsContent.appendChild(backgroundColorSettingLabel);
    modalSettingsContent.appendChild(backgroundColorSettingDropdown);
    backgroundColorSettingDropdown.appendChild(backgroundColorBlack);
    backgroundColorSettingDropdown.appendChild(backgroundColorGrey);
    backgroundColorSettingDropdown.appendChild(backgroundColorWhite);
    //setting initial value
    backgroundColorSettingDropdown.value = userSettings.readabilityBackgroundColor;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    
    //line spacing
    modalSettingsContent.appendChild(lineSpacingSettingLabel);
    modalSettingsContent.appendChild(lineSpacingSettingDropdown);
    lineSpacingSettingDropdown.appendChild(lineSpacingOne);
    lineSpacingSettingDropdown.appendChild(lineSpacingOnePointFive);
    lineSpacingSettingDropdown.appendChild(lineSpacingTwo);
    lineSpacingSettingDropdown.appendChild(lineSpacingThree);
    //setting initial value
    lineSpacingSettingDropdown.value = userSettings.readabilityLineSpacing;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //toggle hot keys
    modalSettingsContent.appendChild(toggleHotkeysSettingLabel);
    modalSettingsContent.appendChild(toggleHotkeysSettingCheckbox);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    //setting initial value
    toggleHotkeysSettingCheckbox.checked = userSettings.ToggleHotkeys;
  
    modalSettingsContent.appendChild(hotkeysInstructions);
}

function loadModalSettingsContainerSpeedReader()
{
    //modal container
    var modalSettingsContainer = document.createElement("div");
    modalSettingsContainer.id = "_modal_settings_container";
    modalSettingsContainer.className = "modal_settings_container";
    modalSettingsContainer.style.className = "div.modal_settings_container";

    //modal content
    var modalSettingsContent = document.createElement("div");
    modalSettingsContent.id = "_modal_settings_content";
    modalSettingsContent.className = "modal_settings_content";
    modalSettingsContent.style.className = "div.modal_settings_content";

    //apply button
    var applySettingsButton = document.createElement("input");
    applySettingsButton.type = "button";
    applySettingsButton.value = "Apply";
    applySettingsButton.id = "_apply_settings_button";
    applySettingsButton.className = "apply_settings_button";
    applySettingsButton.style.className = "input.apply_settings_button";
    applySettingsButton.addEventListener("click", function(){
        var arrayOfStyles = Object.keys(changedSettingMap);
        var speedReaderOutputContainer = document.getElementById("_speed_reader_output_container");
        for (var i = 0; i < arrayOfStyles.length; i++)
        {
            speedReaderOutputContainer["style"][arrayOfStyles[i]] = changedSettingMap[arrayOfStyles[i]];
        }
        //reset the map of all the settings that needed to be changed so they can't be changed unless the user wants to again
        for (var i in changedSettingMap) {
            delete changedSettingMap[i];
        }
    });

///////////////////////////////////////////////////////////////////////////////////////

    //font label
    var textFontSettingLabel = document.createElement("p");
    textFontSettingLabel.innerHTML = "Font";
    textFontSettingLabel.id = "_text_font_setting_label";
    textFontSettingLabel.className = "settings_label text_font_setting_label";
    textFontSettingLabel.style.className = "p.settings_label";
    
    //font dropdown
    var textFontSettingDropdown = document.createElement("select");
    textFontSettingDropdown.id = "_text_font_setting_dropdown";
    textFontSettingDropdown.className = "settings_dropdown text_font_setting_dropdown";
    textFontSettingDropdown.style.className = "select.settings_dropdown";
    textFontSettingDropdown.addEventListener("change", function(){
        var value = textFontSettingDropdown.value;
        userSettings.speedReaderFont = value;
        changedSettingMap["fontFamily"] = value;
    });

    //font1
    var arialFont = document.createElement("option");
    arialFont.value = "Arial";
    arialFont.innerHTML = "Arial";

    //font2
    var helveticaFont = document.createElement("option");
    helveticaFont.value = "Helvetica";
    helveticaFont.innerHTML = "Helvetica";

    //font3
    var timesnewromanFont = document.createElement("option");
    timesnewromanFont.value = "Times New Roman";
    timesnewromanFont.innerHTML = "Times New Roman";

    //font4
    var verdanaFont = document.createElement("option");
    verdanaFont.value = "Verdana";
    verdanaFont.innerHTML = "Verdana";

    //font5
    var courierFont = document.createElement("option");
    courierFont.value = "Courier";
    courierFont.innerHTML = "Courier";

///////////////////////////////////////////////////////////////////////////////////////

    //font size label
    var textFontSizeSettingLabel = document.createElement("p");
    textFontSizeSettingLabel.innerHTML = "Font Size";
    textFontSizeSettingLabel.id = "_text_font_size_setting_label";
    textFontSizeSettingLabel.className = "settings_label text_font_size_setting_label"
    textFontSizeSettingLabel.style.className = "p.settings_label";

    //font size dropdown
    var textFontSizeSettingDropdown = document.createElement("select");
    textFontSizeSettingDropdown.id = "_text_font_size_setting_dropdown";
    textFontSizeSettingDropdown.className = "settings_dropdown text_font_size_setting_dropdown";
    textFontSizeSettingDropdown.style.className = "select.settings_dropdown";
    textFontSizeSettingDropdown.addEventListener("change", function(){
        var value = textFontSizeSettingDropdown.value;
        userSettings.speedReaderFontSize = value;
        changedSettingMap["fontSize"] = value
    });

    //font size 1
    var tenFont = document.createElement("option");
    tenFont.value = "48px";
    tenFont.innerHTML = "48";

    //font size 2
    var twelveFont = document.createElement("option");
    twelveFont.value = "54px";
    twelveFont.innerHTML = "54";

    //font size 3
    var fourteenFont = document.createElement("option");
    fourteenFont.value = "60px";
    fourteenFont.innerHTML = "60";

    //font size 4
    var eighteenFont = document.createElement("option");
    eighteenFont.value = "72px";
    eighteenFont.innerHTML = "72";

    //font size 5
    var twentyFont = document.createElement("option");
    twentyFont.value = "78px";
    twentyFont.innerHTML = "78";

    //font size 6
    var twentyfourFont = document.createElement("option");
    twentyfourFont.value = "86px";
    twentyfourFont.innerHTML = "86";

///////////////////////////////////////////////////////////////////////////////////////

    //text color label
    var textColorSettingLabel = document.createElement("p");
    textColorSettingLabel.innerHTML = "Text Color";
    textColorSettingLabel.id = "_text_color_setting_label";
    textColorSettingLabel.className = "settings_label text_color_setting_label";
    textColorSettingLabel.style.className = "p.settings_label"

    //text color dropdown
    var textColorSettingDropdown = document.createElement("select");
    textColorSettingDropdown.id = "_text_color_setting_dropdown";
    textColorSettingDropdown.className = "settings_dropdown text_color_setting_dropdown";
    textColorSettingDropdown.style.className = "select.settings_dropdown";
    textColorSettingDropdown.addEventListener("change", function(){
        var value = textColorSettingDropdown.value;
        userSettings.speedReaderTextColor = value;
        changedSettingMap["color"] = value;
    });

    //text color 1
    var textColorBlack = document.createElement("option");
    textColorBlack.value = "Black";
    textColorBlack.innerHTML = "Black";

    //text color 2
    var textColorGrey = document.createElement("option");
    textColorGrey.value = "Grey";
    textColorGrey.innerHTML = "Grey";

    //text color 3
    var textColorWhite = document.createElement("option");
    textColorWhite.value = "White";
    textColorWhite.innerHTML = "White";

/////////////////////////////////////////////////////////////////////////////////////////

    //background color label
    var backgroundColorSettingLabel = document.createElement("p");
    backgroundColorSettingLabel.innerHTML = "Background Color";
    backgroundColorSettingLabel.id = "_background_color_setting_label";
    backgroundColorSettingLabel.className = "settings_label background_color_setting_label";
    backgroundColorSettingLabel.style.className = "p.settings_label";

    //background color dropdown
    var backgroundColorSettingDropdown = document.createElement("select");
    backgroundColorSettingDropdown.id = "_background_color_setting_dropdown";
    backgroundColorSettingDropdown.className = "settings_dropdown background_color_setting_dropdown";
    backgroundColorSettingDropdown.style.className = "select.settings_dropdown";
    backgroundColorSettingDropdown.addEventListener("change", function(){
        var value = backgroundColorSettingDropdown.value;
        userSettings.speedReaderBackgroundColor = value;
        changedSettingMap["backgroundColor"] = value;
    });

    //background color 1
    var backgroundColorBlack = document.createElement("option");
    backgroundColorBlack.value = "Black";
    backgroundColorBlack.innerHTML = "Black";

    //background color 2
    var backgroundColorGrey = document.createElement("option");
    backgroundColorGrey.value = "Grey";
    backgroundColorGrey.innerHTML = "Grey";

    //background color 3
    var backgroundColorWhite = document.createElement("option");
    backgroundColorWhite.value = "White";
    backgroundColorWhite.innerHTML = "White";

/////////////////////////////////////////////////////////////////////////////////////////

    //toggle hot keys label
    var toggleHotkeysSettingLabel = document.createElement("p");
    toggleHotkeysSettingLabel.innerHTML = "Toggle HotKeys";
    toggleHotkeysSettingLabel.id = "_toggle_hotkeys_setting_label";
    toggleHotkeysSettingLabel.className = "settings_label toggle_hotkeys_setting_label";
    toggleHotkeysSettingLabel.style.className = "p.settings_label";

    //toggle hot keys checkbox
    var toggleHotkeysSettingCheckbox = document.createElement("input");
    toggleHotkeysSettingCheckbox.type = "checkbox";
    toggleHotkeysSettingCheckbox.id = "_toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.className = "toggle_hot_keys_checkbox";
    toggleHotkeysSettingCheckbox.style.className = "input.toggle_hot_keys_checkbox";
  
    var hotkeysInstructions = document.createElement("div");
  
    toggleHotkeysSettingCheckbox.addEventListener("change", function(){
        var value = toggleHotkeysSettingCheckbox.checked;
        userSettings.ToggleHotkeys = value;
        //doesn't affect anything in the textarea ouput so we won't put it into the changedSettingMap
    });

    //modal container
    document.getElementsByTagName("body")[0].appendChild(modalSettingsContainer);

    //modal content
    modalSettingsContainer.appendChild(modalSettingsContent);

    //apply button
    modalSettingsContent.appendChild(applySettingsButton);
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //font
    modalSettingsContent.appendChild(textFontSettingLabel);
    modalSettingsContent.appendChild(textFontSettingDropdown);
    textFontSettingDropdown.appendChild(arialFont);
    textFontSettingDropdown.appendChild(helveticaFont);
    textFontSettingDropdown.appendChild(timesnewromanFont);
    textFontSettingDropdown.appendChild(verdanaFont);
    textFontSettingDropdown.appendChild(courierFont);
    //setting initial value
    textFontSettingDropdown.value = userSettings.speedReaderFont;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //font size
    modalSettingsContent.appendChild(textFontSizeSettingLabel);
    modalSettingsContent.appendChild(textFontSizeSettingDropdown);
    textFontSizeSettingDropdown.appendChild(tenFont);
    textFontSizeSettingDropdown.appendChild(twelveFont);
    textFontSizeSettingDropdown.appendChild(fourteenFont);
    textFontSizeSettingDropdown.appendChild(eighteenFont);
    textFontSizeSettingDropdown.appendChild(twentyFont);
    textFontSizeSettingDropdown.appendChild(twentyfourFont);
    //setting initial value
    textFontSizeSettingDropdown.value = userSettings.speedReaderFontSize;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //text color
    modalSettingsContent.appendChild(textColorSettingLabel);
    modalSettingsContent.appendChild(textColorSettingDropdown);
    textColorSettingDropdown.appendChild(textColorBlack);
    textColorSettingDropdown.appendChild(textColorGrey);
    textColorSettingDropdown.appendChild(textColorWhite);
    //setting initial value
    textColorSettingDropdown.value = userSettings.speedReaderTextColor;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //background color
    modalSettingsContent.appendChild(backgroundColorSettingLabel);
    modalSettingsContent.appendChild(backgroundColorSettingDropdown);
    backgroundColorSettingDropdown.appendChild(backgroundColorBlack);
    backgroundColorSettingDropdown.appendChild(backgroundColorGrey);
    backgroundColorSettingDropdown.appendChild(backgroundColorWhite);
    //setting initial value
    backgroundColorSettingDropdown.value = userSettings.speedReaderBackgroundColor;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));

    //toggle hot keys
    modalSettingsContent.appendChild(toggleHotkeysSettingLabel);
    modalSettingsContent.appendChild(toggleHotkeysSettingCheckbox);
    //setting initial value
    toggleHotkeysSettingCheckbox.checked = userSettings.ToggleHotkeys;
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
    modalSettingsContent.appendChild(document.createElement("br"));
}