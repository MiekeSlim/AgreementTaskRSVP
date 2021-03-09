PennController.ResetPrefix(null) // Shorten command names (keep this line here)
PennController.DebugOff()
AddHost("https://users.ugent.be/~mslim/VW_DWR_Stimuli/images/");


PennController.Template("trials.csv",
    row => newTrial("Trials", 
        newText("Phrase",row.Phrase)
            .center()
            .css("font-size", "3vh")
            .print()
        ,
        newButton("Instructions", "Revise instructions")
            .print("center at 50%", "top at 55%")
            .callback(
                newTooltip("Instructions", "<p>In order to judge the numerosity of the phrase: Imagine each phrase appearing in the blank in the following question: “If you were thinking about ________, would you be thinking about one thing or more than one thing?”. Please indicate your answer by selecting <i>One</i> or <i>More than one</i> with your mouse. Sometimes both answers will seem possible. In these cases, just pick the answer that makes more sense to you. </p><p>In order to judge the imageability of the phrase, please rate each phrase according to the ease or difficulty with which it evokes a mental image of its referent. If an image is easily evoked (as it might be for a phrase like <i>the skyscraper in the city</i>, for example), you should give the phrase a high imagery rating. Phrases that evoke images only with great difficulty or not at all (for example, a phrase like <i>the truth of the matter</i>) should get low imagery ratings. Indicate your rating by selecting a number on the five-point scale underneath each phrase, where 1 is lowest in imageability and 5 is highest in imageability. </p><p>Finally, in order to judge the sensibility of the phrase, please rate how understandable the phrase seems to you. Indicate your rating by selecting a number on the five-point scale beside each phrase, where 1 is lowest in sensibility (nonsense) and 5 is highest in sensibility (completely sensible).</p>")
                    .print("center at 50%", "top at 60%")
                )
        ,
        newCanvas("NumberCanvas", "100vw", "30vh")
            .center()
            .add("center at 50%", "top at 10%", newText("Number", row.NumberQuestion).css("font-size", "2vh"))
            .add("center at 40%", "top at 20%", newText("One", "One")               .css("font-size", "2vh")
                                                                                    .css("background-color", "lightgrey"))
            .add("center at 60%", "top at 20%", newText("Multiple", "More than one").css("font-size", "2vh")
                                                                                    .css("background-color", "lightgrey"))
            .print()
        ,
        newSelector("NumberSelector")
            .add(getText("One"), getText("Multiple"))
            .wait()
            .log()
        ,
        getCanvas("NumberCanvas").remove()
        ,
        newCanvas("ImageabilityCanvas", "100vw", "30vh")
            .center()
            .add("center at 50%", "top at 10%", newText("Imageability", "How easy is it to evoke a mental image of this phrase?").css("font-size", "2vh"))
            .add("center at 35%", "top at 20%", newText("difficult").css("font-size", "2vh"))            
            .add("center at 40%", "top at 20%", newText("1im", "1") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 45%", "top at 20%", newText("2im", "2") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 50%", "top at 20%", newText("3im", "3") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))      
            .add("center at 55%", "top at 20%", newText("4im", "4") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 60%", "top at 20%", newText("5im", "5") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))   
            .add("center at 65%", "top at 20%", newText("easy").css("font-size", "2vh"))                                                            
            .print()
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
            .center()
            .add("center at 50%", "top at 10%", newText("Sensibility", "How easy is it to understand this phrase?").css("font-size", "2vh"))
            .add("center at 35%", "top at 20%", newText("nonsense").css("font-size", "2vh"))
            .add("center at 40%", "top at 20%", newText("1se", "1") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 45%", "top at 20%", newText("2se", "2") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 50%", "top at 20%", newText("3se", "3") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))      
            .add("center at 55%", "top at 20%", newText("4se", "4") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))
            .add("center at 60%", "top at 20%", newText("5se", "5") .css("font-size", "2vh")
                                                            .css("background-color", "lightgrey"))    
            .add("center at 65%", "top at 20%", newText("completely sensible").css("font-size", "2vh"))
            .print()
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
