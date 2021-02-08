PennController.ResetPrefix(null) // Shorten command names (keep this line here)
AddHost("https://users.ugent.be/~mslim/VW_DWR_Stimuli/images/");

newTrial("FirstInstructions",
    newText("Instructions","<p> In this experiment, you will read the beginning of a couple of sentences. These fragments will be presented word by word. After the full fragment is shown, the verbs <strong>is</strong> and <strong>are</strong> will be shown on the screen. It is your task to select the right verb following the preamble. You can select the response by pressing the keys 'F' or 'J' on your keyboard. </p> <p> You will have roughly a second to select a verb. If you do not select a verb within a second, the next sentence will be shown. Therefore, it is not only important to select te correct verb following the preamble, but also to do this as fast as possible. </p> <p> Press the spacebar to continue </p>")
	    .css("font-size", "2vh")
	,
	newCanvas( "myCanvas", "60vw" , "60vh")
        .settings.add(0,0, getText("Instructions"))       
        .print("center at 50%", "middle at 50%")  
    ,
    newKey("next", " ")
        .wait()
	)    
    
newTrial("HandednessSelection",
    newVar("HandednessVar")
        .global()
    ,
    newText("Handedness", "Are you left or right handed?")
        .css("font-size", "2vh")
    ,
    newText("F", "Press F")
        .css("font-size", "2vh")
        .css("color", "blue")
    ,     
    newText("J", "Press J")
        .css("font-size", "2vh")
        .css("color", "blue")
    ,
    newCanvas("verbselection.canvas", "80vw", "20vh")
        .add("center at 50%","middle at 0%", getText("Handedness"))
        .add("center at 20%","middle at 40%", newText("Left", "Left").css("font-size", "2vh"))
        .add("center at 80%","middle at 40%", newText("Right", "Right").css("font-size", "2vh"))
        .add("center at 20%","middle at 80%", getText("F"))
        .add("center at 80%","middle at 80%", getText("J"))
        .print("center at 50%", "middle at 50%")
    ,
    newKey("forj", "FJ")
        .wait("first")
        .log()
    ,
    getKey("forj")
        .test.pressed("F")
        .success( 
            getVar("HandednessVar")
                .set("lefthanded")
                .log()
            )
        .failure(
            getVar("HandednessVar")
                .set("righthanded")
                .log()
            )
    )
    
newTrial("HandednessCheck",
    newText("RightHandednessCheck", "<p>You selected that you are righthanded. If this is correct, press the <strong>spacebar</strong> to continue.</p><p>If this is not correct, press on the <strong>'F'</strong> key to indicate that you are lefthanded .</p>")
        .css("font-size", "2vh")
    ,
    newText("LeftHandednessCheck", "<p>You selected that you are lefthanded. If this is correct, press the <strong>spacebar</strong> to continue.</p><p>If this is not correct, press on the <strong>'J'</strong> key to indicate that you are righthanded .</p>")
        .css("font-size", "2vh")
    ,
    getVar("HandednessVar")
            .test.is("lefthanded")
            .success(
                newCanvas( "myCanvas", "60vw" , "60vh")
                    .settings.add(0,0, getText("LeftHandednessCheck"))       
                    .print("center at 50%", "middle at 50%")  
                ,
                newKey("LeftHandednessCheckKey", " J")
                    .wait()
                ,
                getKey("LeftHandednessCheckKey")
                    .test.pressed("J")
                    .success( 
                        getVar("HandednessVar")
                            .set("righthanded")
                            .log()
            )
                )
            .failure(
                newCanvas( "myCanvas", "60vw" , "60vh")
                    .settings.add(0,0, getText("RightHandednessCheck"))       
                    .print("center at 50%", "middle at 50%")
                    ,
                    newKey("RightHandednessCheckKey", " F")
                        .wait()
                    ,
                    getKey("RightHandednessCheckKey")
                        .test.pressed("F")
                        .success( 
                            getVar("HandednessVar")
                                .set("lefthanded")
                                .log()
                            )
                )
    )    

newTrial("HandednessInstructions",
    newText("LefthandedInstructions", "You will read the beginning of sentences word-by-word. It is your task to select the right verb after this short preamble. You can choose between 'is' and 'are'.<p>If you want to select 'is', press the 'F' button on your keyboard, if you want to select 'are', press the 'J' button.</p><p>You have roughly a second to give your answer before the next trial starts. It is thus important that you give the correct response, but also to do this as fast as possible </p>")
         .css("font-size", "2vh")
    ,
    newText("RighthandedInstructions", "You will read the beginning of sentences word-by-word. It is your task to select the right verb after this short preamble. You can choose between 'is' and 'are'.<p>If you want to select 'is', press the 'J' button on your keyboard, if you want to select 'are', press the 'F' button.</p><p>You have roughly a second to give your answer before the next trial starts. It is thus important that you give the correct response, but also to do this as fast as possible </p>")
         .css("font-size", "2vh")
    
    ,
    getVar("HandednessVar")
        .test.is("lefthanded")
        .success(
            newCanvas("TaskInstructions", "60vw" , "60vh")
                .add("center at 50%", "middle at 10%", getText("LefthandedInstructions"))
                .add("center at 50%", "middle at 50%", newText("Press the spacebar to start the experiment").css("font-size", "2vh"))
                .print("center at 50%", "middle at 50%")

            )
            .failure(
            newCanvas("TaskInstructions", "60vw" , "60vh")
                .add("center at 50%", "middle at 10%", getText("RighthandedInstructions"))
                .add("center at 50%", "middle at 50%", newText("Press the spacebar to start the experiment").css("font-size", "2vh"))
                .print("center at 50%", "middle at 50%")
            )
    ,
    newKey("next", " ")
        .wait()
    )

PennController.Template("trials.csv",
    row => newTrial("Trials", 
      newController("DashedSentence", {
            s: row.Sentence,
            mode: "speeded acceptability",
            display: "in place",
            wordTime: 250,
            wordPauseTime: 150
            })
                .print("center at 50%", "middle at 50%")
                .css("font-size", "10vh")
                .wait()
        ,
        newText("sg", "is")
            .css("font-size", "10vh")
        ,     
        newText("pl", "are")
            .css("font-size", "10vh")
        ,
        newText("F", "F")
            .css("font-size", "5vh")
            .css("color", "blue")
        ,     
        newText("J", "J")
            .css("font-size", "5vh")
            .css("color", "blue")            
        ,
        newCanvas("verbselection.canvas", "80vw", "20vh")
        ,
        getVar("HandednessVar")
            .test.is("lefthanded")
            .success(
                getCanvas("verbselection.canvas")
                    .add("center at 25%","middle at 10%", getText("sg"))
                    .add("center at 75%","middle at 10%", getText("pl"))
                    .add("center at 25%","middle at 70%", getText("F"))
                    .add("center at 75%","middle at 70%", getText("J"))
                    .print("center at 50%", "middle at 50%")
            )
            .failure(
                getCanvas("verbselection.canvas")
                    .add("center at 25%","middle at 10%", getText("pl"))
                    .add("center at 75%","middle at 10%", getText("sg"))
                    .add("center at 25%","middle at 70%", getText("F"))
                    .add("center at 75%","middle at 70%", getText("J"))
                    .print("center at 50%", "middle at 50%")
            )
        ,
        newVar("Response")
        ,
        newTimer("ResponseTime", 1200)
            .log()
            .start()
        ,
        newKey("ResponseKey", "FJ")    
            .log("first")
            .callback( getTimer("ResponseTime").stop() )
        ,
        getTimer("ResponseTime")
            .wait()
        ,
        getKey("ResponseKey")
            .test.pressed()
            .failure(
                    getVar("Response")
                        .set("TimedOut")
                        .log()
                    ,    
                    getCanvas("verbselection.canvas")
                        .remove()
                    ,
                    newText("slow", "Too slow...")
                        .log()
                        .print("center at 50%", "middle at 50%")
                        .css("font-size", "15vh")
                    ,
                    newTimer("TimetoNextTrial", 1000)
                        .start()
                        .wait()
                    )
            .success(
                getKey("ResponseKey")
                    .test.pressed("J")
                        .success(
                            getVar("HandednessVar")
                                .test.is("lefthanded")
                                    .success(
                                        getVar("Response")
                                            .set("pl")
                                            .log()
                                            )
                                    .failure(
                                        getVar("Response")
                                            .set("sg")
                                            .log()
                                            )
                            )
                        .failure(
                           getKey("ResponseKey")
                            .test.pressed("F")
                                .success(getVar("HandednessVar")
                                .test.is("lefthanded")
                                    .success(
                                        getVar("Response")
                                            .set("sg")
                                            .log()
                                            )
                                    .failure(
                                        getVar("Response")
                                            .set("pl")
                                            .log()
                                            )
                                )
                            )
                    )
        )
    .log("Sentence", row.Sentence)
    .log("Handedness", getVar("HandednessVar"))
    .log("NumberConfiguration", row.NumberConfiguration)
    .log("Quantifier", row.Quantifier)
    )
