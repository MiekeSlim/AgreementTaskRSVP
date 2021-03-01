PennController.ResetPrefix(null) // Shorten command names (keep this line here)
PennController.DebugOff()
AddHost("https://users.ugent.be/~mslim/VW_DWR_Stimuli/images/");

Header(
    newImage("logo", "logo_UGent_EN_RGB_2400_color.png")
        .size("10vw")       
        .print("20vw","00vh")
    ,
    newImage("logo2", "icon_UGent_PP_EN_RGB_2400_color.png")
        .size("20vw")       
        .print("55vw","2vh")                                         
    )

newTrial("Instructions",
	newText("Instructions","<p>Welcome to this survey!</p><p>In this survey, you will see a number of phrases. For each of these phrases, we would like you to judge whether it refers to one thing or more than one thing, whether it is easy or difficult to evoke a mental image of its referent, and whether it is easy or difficult to understand the phrase. </p><p>In order to judge the numerosity of the phrase: Imagine each phrase appearing in the blank in the following question: “If you were thinking about ________, would you be thinking about one thing or more than one thing?”. Please indicate your answer by selecting <i>One</i> or <i>More than one</i> with your mouse. Sometimes both answers will seem possible. In these cases, just pick the answer that makes more sense to you. </p><p>In order to judge the imageability of the phrase, please rate each phrase according to the ease or difficulty with which it evokes a mental image of its referent. If an image is easily evoked (as it might be for a phrase like <i>the skyscraper in the city</i>, for example), you should give the phrase a high imagery rating. Phrases that evoke images only with great difficulty or not at all (for example, a phrase like <i>the truth of the matter</i>) should get low imagery ratings. Indicate your rating by selecting a number on the five-point scale underneath each phrase, where 1 is lowest in imageability and 5 is highest in imageability. </p><p>Finally, in order to judge the sensibility of the phrase, please rate how understandable the phrase seems to you. Indicate your rating by selecting a number on the five-point scale beside each phrase, where 1 is lowest in sensibility (nonsense) and 5 is highest in sensibility (completely sensible).</p><p>The survey should take roughly ... minutes to complete. Feel free to have short breaks, but make sure that you finish the full survey within ... minutes so you will not time out on Prolific.")
	,
	newCanvas( "myCanvas", "60vw" , "60vh")
	    .settings.add(0,0, getText("Instructions"))
	    .print("center at 50%", "middle at 50%")  
	,
	newButton("Next", "Next")
	    .print("center at 50%", "middle at 80%")
	    .wait()
	)    

newTrial("Consent",             
    newText("ConsentText", "<p>We request your consent for participation in this experiment. Please read the following carefully: </p > <p>I declare that I, as a participant in a research project in the Department of Experimental Psychology at Ghent University:<br><br> <ol> <li> have been informed about the research objectives, the questions and the tasks that I will encounter during the research and that I was given the opportunity to receive further information if desired<br><br> </li><li> will participate out of free will in the research project <br><br> </li><li> am aware that the researchers do not collect any personal information that may be used to identify my identity. All the data that will be collected is completely anonymized; <br><br> </li><li> give informed consent to the researchers to store, process, and report my data in anonymized form <br><br> </li><li> am aware of the option to stop my participation in this research at any moment in time without having to provide a reason; <br><br> </li><li> know that participating or stopping my participation in the research has no negative consequences of any kind for me (apart from not receiving my payment via Prolific) <br><br> </li><li> am aware of the option to ask the researcher(s) for a summary of the results after the study is finished and the results have been known; <br><br> </li><li> agree that my data may be used for further analysis by other researchers after complete anonymization; <br><br> </li><li> am aware that Ghent University is the responsible entity with regards to the personal information collected during the study. I am also aware that the data protection officer can give me more information about the protection of my personal information. Contact: Hanne Elsen (privacy@ugent.be).</li> </ol> <br>In case you give your informed consent to participate in this study, please click on the button below. If you do not give your informed consent, please close this experiment. </p>")
    ,
    newCanvas( "myCanvas", "60vw" , "60vh")
        .settings.add(0,0, getText("ConsentText"))
        .print("20vw", "15vh")
    ,
    newButton("I have read the study information and give my informed consent. Continue to the next page")
            .center()
            .print("center at 50vw", "65vh")
            .wait()
)

PennController.Template("trials.csv",
    row => newTrial("Trials", 
        newText("Phrase",row.Phrase)
            .css("font-size", "3vh")
            .print("center at 50%", "middle at 30%")
        ,
        newButton("Instructions", "Revise instructions")
            .print("center at 50%", "middle at 55%")
            .callback(
                newTooltip("Instructions", "<p>In order to judge the numerosity of the phrase: Imagine each phrase appearing in the blank in the following question: “If you were thinking about ________, would you be thinking about one thing or more than one thing?”. Please indicate your answer by selecting <i>One</i> or <i>More than one</i> with your mouse. Sometimes both answers will seem possible. In these cases, just pick the answer that makes more sense to you. </p><p>In order to judge the imageability of the phrase, please rate each phrase according to the ease or difficulty with which it evokes a mental image of its referent. If an image is easily evoked (as it might be for a phrase like <i>the skyscraper in the city</i>, for example), you should give the phrase a high imagery rating. Phrases that evoke images only with great difficulty or not at all (for example, a phrase like <i>the truth of the matter</i>) should get low imagery ratings. Indicate your rating by selecting a number on the five-point scale underneath each phrase, where 1 is lowest in imageability and 5 is highest in imageability. </p><p>Finally, in order to judge the sensibility of the phrase, please rate how understandable the phrase seems to you. Indicate your rating by selecting a number on the five-point scale beside each phrase, where 1 is lowest in sensibility (nonsense) and 5 is highest in sensibility (completely sensible).</p>")
                    .print("center at 50%", "top at 60%")
                )
        ,
        newCanvas("NumberCanvas", "100vw", "30vh")
            .add("center at 50%", "15vh", newText("Number", row.NumberQuestion).css("font-size", "2vh"))
            .add("center at 40%", "20vh", newText("One", "One")               .css("font-size", "2vh")
                                                                                    .css("background-color", "lightgrey"))
            .add("center at 60%", "20vh", newText("Multiple", "More than one").css("font-size", "2vh")
                                                                                    .css("background-color", "lightgrey"))
            .print("center at 50%", "middle at 40%")
        ,
        newSelector("NumberSelector")
            .add(getText("One"), getText("Multiple"))
            .wait()
            .log()
        ,
        getCanvas("NumberCanvas").remove()
        ,
        newCanvas("ImageabilityCanvas", "100vw", "30vh")
            .add("center at 50%", "15vh", newText("Imageability", "How easy is it to evoke a mental image of this phrase?").css("font-size", "2vh"))
            .add("center at 35%", "20vh", newText("difficult").css("font-size", "2vh"))            
            .add("center at 40%", "20vh", newText("1im", "1") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 45%", "20vh", newText("2im", "2") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 50%", "20vh", newText("3im", "3") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))      
            .add("center at 55%", "20vh", newText("4im", "4") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 60%", "20vh", newText("5im", "5") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))   
            .add("center at 65%", "20vh", newText("easy").css("font-size", "2vh"))                                                            
            .print("center at 50%", "middle at 40%")
        ,
        newSelector("ImageabilitySelector")
            .add(getText("1im"), getText("2im"), getText("3im"), getText("4im"), getText("5im"))
            .wait()
            .log()
        ,
        getCanvas("ImageabilityCanvas")
            .remove()
        ,
        newCanvas("SensibilityCanvas", "100vw", "30vh")
            .add("center at 50%", "15vh", newText("Sensibility", "How easy is it to understand this phrase?").css("font-size", "2vh"))
            .add("center at 35%", "20vh", newText("nonsense").css("font-size", "2vh"))
            .add("center at 40%", "20vh", newText("1se", "1") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 45%", "20vh", newText("2se", "2") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 50%", "20vh", newText("3se", "3") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))      
            .add("center at 55%", "20vh", newText("4se", "4") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 60%", "20vh", newText("5se", "5") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))    
            .add("center at 65%", "20vh", newText("completely sensible").css("font-size", "2vh"))
            .print("center at 50%", "middle at 40%")
        ,
        newSelector("SensibilitySelector")
            .add(getText("1se"), getText("2se"), getText("3se"), getText("4se"), getText("5se"))
            .wait()
            .log()
        ,
        getCanvas("ImageabilityCanvas")
            .remove()            
    )
    .log("Phrase",              row.Phrase)
    .log("BasePhrase",          row.BasePhrase)
    .log("Condition",           row.Condition)
    .log("NumberConfiguration", row.NumberConfiguration)
    .log("Quantifier",          row.Quantifier)
    .log("Experiment",          row.Experiment)
)

SendResults()

newTrial(
    exitFullscreen()
    ,
    newText("The is the end of the experiment, you can now close this window. Thank you!").print()
    ,
    newButton("waitforever").wait() // Not printed: wait on this page forever
)
.setOption("countsForProgressBar",false)
