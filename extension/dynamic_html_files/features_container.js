function loadFeaturesContainersReadability()
{
    
}

function loadFeaturesContainersSpeedReader()
{
    var controlButtonContainer = document.createElement("div");
    controlButtonContainer.id = "_control_button_container";
    controlButtonContainer.className = "control_button_container";
    controlButtonContainer.style.className = "div.control_button_container";

    var percentageCompleteMeter = document.createElement("div");
    percentageCompleteMeter.id = "_percentage_complete_meter";
    percentageCompleteMeter.className = "percentage_complete_meter";
    percentageCompleteMeter.style.className = "div.percentage_complete_meter";

    var meter = document.createElement("div");
    meter.id = "_meter";
    meter.className = "meter";
    meter.style.className = "div.meter";
    meter.style.width = (((userSettings.speedReaderWordNumber + 1) / USER_INPUT.length) * 100).toString() + "%";

    var playAndPauseButton = document.createElement("input");
    playAndPauseButton.type = "button";
    playAndPauseButton.value = "Play";
    playAndPauseButton.id = "_play_and_pause_button";
    playAndPauseButton.className = "play_and_pause_button";
    playAndPauseButton.style.className = "input.play_and_pause_button";
    playAndPauseButton.addEventListener("click", function(){
        if (playAndPauseButton.value == "Play")
        {
            userSettings.speedReaderInterval = speedReaderStartInterval(userSettings.speedReaderInterval, meter, playAndPauseButton);
            return userSettings.speedReaderInterval;
        }
        else if (playAndPauseButton.value == "Pause")
        {
            clearInterval(userSettings.speedReaderInterval);
            playAndPauseButton.value = "Play";
        }
    });

    var resetButton = document.createElement("input");
    resetButton.type = "button";
    resetButton.value = "Reset";
    resetButton.id = "_reset_button";
    resetButton.className = "reset_button";
    resetButton.style.className = "input.reset_button";
    resetButton.addEventListener("click", function(){resetSpeedReaderWordNumber()});

    var increaseSpeedButton = document.createElement("input");
    increaseSpeedButton.type = "button";
    increaseSpeedButton.value = "+";
    increaseSpeedButton.id = "_increase_speed_button";
    increaseSpeedButton.className = "increase_speed_button";
    increaseSpeedButton.style.className = "input.increase_speed_button";
    increaseSpeedButton.addEventListener("click", function(){
        incrementWPM(50);
        if (playAndPauseButton.value == "Pause")
        {
            clearInterval(userSettings.speedReaderInterval);
            userSettings.speedReaderInterval = speedReaderStartInterval(userSettings.speedReaderInterval, meter, playAndPauseButton);
        }
    });

    var decreaseSpeedButton = document.createElement("input");
    decreaseSpeedButton.type = "button";
    decreaseSpeedButton.value = "-";
    decreaseSpeedButton.id = "_decrease_speed_button";
    decreaseSpeedButton.className = "decrease_speed_button";
    decreaseSpeedButton.style.className = "input.decrease_speed_button";
    decreaseSpeedButton.addEventListener("click", function(){
        decrementWPM(50);
        if (playAndPauseButton.value == "Pause")
        {
            clearInterval(userSettings.speedReaderInterval);
            userSettings.speedReaderInterval = speedReaderStartInterval(userSettings.speedReaderInterval, meter, playAndPauseButton);
        }
    });

    var speedOutputLabel = document.createElement("p");
    speedOutputLabel.innerHTML = userSettings.speedReaderWPM;
    speedOutputLabel.id = "_speed_output_label";
    speedOutputLabel.className = "speed_output_label";
    speedOutputLabel.style.className = "p.speed_output_label";

    //adding the created elements to the document
    document.getElementsByTagName("body")[0].appendChild(controlButtonContainer);

    document.getElementsByTagName("body")[0].appendChild(percentageCompleteMeter);

    percentageCompleteMeter.appendChild(meter);
    
    controlButtonContainer.appendChild(playAndPauseButton);
    controlButtonContainer.appendChild(resetButton);
    controlButtonContainer.appendChild(increaseSpeedButton);
    controlButtonContainer.appendChild(decreaseSpeedButton);
    controlButtonContainer.appendChild(speedOutputLabel);
}

function resetSpeedReaderWordNumber()
{
    userSettings.speedReaderWordNumber = 0;
    document.getElementById("_speed_reader_output_container").innerHTML = USER_INPUT[userSettings.speedReaderWordNumber];
    document.getElementById("_meter").style.width = (((userSettings.speedReaderWordNumber + 1) / USER_INPUT.length) * 100).toString() + "%";
}

function incrementWPM(numIncrease, speedReaderInterval)
{
    var speedOutputLabel = document.getElementById("_speed_output_label");
    userSettings.speedReaderWPM += numIncrease;
    speedOutputLabel.innerHTML = userSettings.speedReaderWPM;
}

function decrementWPM(numDecrease, speedReaderInterval)
{
    if (userSettings.speedReaderWPM - numDecrease > 0)
    {
        var speedOutputLabel = document.getElementById("_speed_output_label");
        userSettings.speedReaderWPM -= numDecrease;
        speedOutputLabel.innerHTML = userSettings.speedReaderWPM;
    }
}

function resetReadabilityLineNumber()
{
    userSettings.readabilityLineNumber = 0;
    drawHighlightingLine();
    document.getElementById("_output_textarea").scrollTop = 0;
}

function readabilityNextLine()
{
    userSettings.readabilityLineNumber += 1;
    var outputTextarea = document.getElementById("_output_textarea");
    var highlightingLine = document.getElementById("_highlighting_line");

    var nextPosition = getNextLinePosition();

    if ((parseInt(highlightingLine.style.marginTop) + (nextPosition.height * parseFloat(nextPosition.heightFromLineSpacing))) > outputTextarea.clientHeight)
    {
        readabilityPastLine();
        outputTextarea.scrollTop += (nextPosition.height * parseFloat(nextPosition.heightFromLineSpacing));
    }
    else
    {
        drawHighlightingLine();
    }
}

function readabilityPastLine()
{
    var outputTextarea = document.getElementById("_output_textarea");
    var highlightingLine = document.getElementById("_highlighting_line");

    var nextPosition = getNextLinePosition();

    if (userSettings.readabilityLineNumber > 0)
    {
        userSettings.readabilityLineNumber -= 1;
        drawHighlightingLine();
    }
    
    //if the user has caused the textarea to scroll down, and tries to go back up, bring down the text for them
    else if (userSettings.readabilityLineNumber == 0 && outputTextarea.scrollTop > 0)
    {
        outputTextarea.scrollTop -= (nextPosition.height * parseFloat(nextPosition.heightFromLineSpacing));
    }
}

//if (/[^a-zA-Z]/.test(USER_INPUT[userSettings.speedReaderWordNumber - 1]))

function speedReaderStartInterval(speedReaderInterval, meter, playAndPauseButton)
{
    //clearInterval(speedReaderInterval); //shouldn't be necessary but would be a good counter-measure to prevent doubling of intervals. but also don't know the effects it may have
    
    //frequency holds WPM converted to Words Per Second and converted to how many Milliseconds are in this new interval
    var frequency = 1000 / (userSettings.speedReaderWPM / 60);
    var speedReaderOutputContainer = document.getElementById("_speed_reader_output_container");
    speedReaderInterval = setInterval(function(){
        //if the current word count has not reached the end of the USER_INPUT array, then prepare the interval to output the next word
        if (userSettings.speedReaderWordNumber < USER_INPUT.length - 1)
        {
            userSettings.speedReaderWordNumber += 1;
        }
        //otherwise if the word count has reached the end, then increment the last bit of the meter so it reaches the end, and cut off the interval since it no longer has any words to display
        else
        {
            meter.style.width = (((userSettings.speedReaderWordNumber + 1) / USER_INPUT.length) * 100).toString() + "%";
            clearInterval(speedReaderInterval);
        }

        //check to see if the current word about to be displayed contains a non alphabetic character,
        //briefly pause the running of the speed reader to allow the user to take in the context of the sentence
        if (/[^a-zA-Z]/.test(USER_INPUT[userSettings.speedReaderWordNumber]))
        {
            clearInterval(speedReaderInterval);
            setTimeout(function(){
                playAndPauseButton.click();
                speedReader = playAndPauseButton.click();
            }, 100);
            
        }
        //output the next word in the sequence and adjust the meter to show the user how close they are to the end of the sequence
        speedReaderOutputContainer.innerHTML = USER_INPUT[userSettings.speedReaderWordNumber];
        meter.style.width = (((userSettings.speedReaderWordNumber + 1) / USER_INPUT.length) * 100).toString() + "%";
        
    }, frequency);

    //set the 'playAndPauseButton' to "Pause" to set up the logic gate to allow the user to stop the current running interval
    playAndPauseButton.value = "Pause";

    //return a reference to the created interval so that it can be stopped if needed
    return speedReaderInterval;
}
//hotkeys

document.addEventListener('keydown',function(e){
	if(userSettings.ToggleHotkeys === true)
	{
	    switch(e.keyCode){
	        case userSettings.readabilityPastLineMapping:
						if(readingState == SPEED_READER || document.getElementById("_line_highlighting_checkbox").checked === false)
							{
								break;
							}
					readabilityPastLine();
					break;
					case userSettings.readabilityNextLineMapping:
							if(readingState == SPEED_READER || document.getElementById("_line_highlighting_checkbox").checked === false)
							{
								break;
							}
							readabilityNextLine();
							break;
	        case userSettings.speedReaderPlayAndPauseMapping:
	        if(readingState == READABILITY)
	        {
	        	break;
	        }

	        if (document.getElementById("_play_and_pause_button").value == "Play")
	        {
	            userSettings.speedReaderInterval = speedReaderStartInterval(userSettings.speedReaderInterval, document.getElementById("_meter"), document.getElementById("_play_and_pause_button"));
	            return userSettings.speedReaderInterval;
	        }
	        else if (document.getElementById("_play_and_pause_button").value == "Pause")
	        {
	            clearInterval(userSettings.speedReaderInterval);
	            document.getElementById("_play_and_pause_button").value = "Play";
	        }
	            break;
	        case userSettings.speedReaderIncrementWPMMapping:
	         if(readingState == READABILITY)
	        {
	        	break;
	        }
	        incrementWPM(50);
	         if (document.getElementById("_play_and_pause_button").value == "Pause")
	        {
	            clearInterval(userSettings.speedReaderInterval);
	            userSettings.speedReaderInterval = speedReaderStartInterval(userSettings.speedReaderInterval, document.getElementById("_meter"), document.getElementById("_play_and_pause_button"));
	        }
	        break;
	        case userSettings.speedReaderDecrementWPMMapping:
	         if(readingState == READABILITY)
	        {
	        	break;
	        }
	        decrementWPM(50);
	        if (document.getElementById("_play_and_pause_button").value == "Pause")
	        {
	            clearInterval(userSettings.speedReaderInterval);
	            userSettings.speedReaderInterval = speedReaderStartInterval(userSettings.speedReaderInterval, document.getElementById("_meter"), document.getElementById("_play_and_pause_button"));
	        }
	        break;
	        case userSettings.ResetMapping:
	        	if(readingState == READABILITY && document.getElementById("_line_highlighting_checkbox").checked === false)
	        	{
	        		break;
	        	}
					else if(readingState == READABILITY)
						{
							resetReadabilityLineNumber();
						}
					else if(readingState == SPEED_READER)
						{
							resetSpeedReaderWordNumber();
						}
	        	break;
	        default:
	            break;
        }
    }
});