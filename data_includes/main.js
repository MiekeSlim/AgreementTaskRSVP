PennController.ResetPrefix(null) // Shorten command names (keep this line here)
AddHost("https://users.ugent.be/~mslim/VW_DWR_Stimuli/images/");

newTrial("FirstInstructions",
    newText("Instructions","<p>For each of the phrases below, we would like you to judge whether it refers to one thing or more than one thing, whether it is easy or difficult to evoke a mental image of its referent, and whether it is easy or difficult to understand the phrase. </p><p>In order to judge the numerosity of the phrase. Imagine each phrase appearing in the blank in the following question: “If you were thinking about ________, would you be thinking about one thing or more than one thing?”. Please indicate your answer by checking the box under ‘‘one thing’’ or ‘‘more than one thing’’. Sometimes both answers will seem possible. In these cases, just pick the answer that makes more sense to you. </p><p>In order to judge the imageability of the phrase, please rate each of the phrases below according to the ease or difficulty with which it evokes a mental image of its referent. If an image is easily evoked (as it might be for a phrase like ‘‘the skyscraper in the city’’, for example), you should give the phrase a high imagery rating. Phrases that evoke images only with great difficulty or not at all (for example, a phrase like ‘‘the truth of the matter’’) should get low imagery ratings. Indicate your rating by selecting a number on the five-point scale beside each phrase, where 1 is lowest in imageability and 5 is highest in imageability. </p><p>Finally, in order to judge the sensibility of the phrase, please rate how understandable the phrase seems to you. Indicate your rating by selecting a number on the five-point scale beside each phrase, where 1 is lowest in sensibility (nonsense) and 5 is highest in sensibility (completely sensible). </p>")
	    .css("font-size", "2vh")
	,
	newCanvas( "myCanvas", "60vw" , "60vh")
        .settings.add(0,0, getText("Instructions"))       
        .print("center at 50%", "middle at 50%")  
    ,
    newButton("Next", "Next")
        .print()
        .wait()
	)    

newTrial( "trials" ,
    newText("<p> Some key to each cabinet </p>")
        .print()
    ,
    newScale("Number", "One thing","More than one thing")
        .settings.before( newText("Number of things:") )
        .print()
    ,
    newScale("Imageibility", "1","2","3","4","5")
        .settings.before( newText("Imageability:") )
        .print()
    ,
    newScale("Sensibility", "1","2","3","4","5")
        .settings.before( newText("Sensibility:") )
        .print()
    ,
    newButton("Instructions", "Revise instructions")
        .print()
        .callback(
            newTooltip("Instructions", "<p>For each of the phrases below, we would like you to judge whether it refers to one thing or more than one thing, whether it is easy or difficult to evoke a mental image of its referent, and whether it is easy or difficult to understand the phrase. </p><p>In order to judge the numerosity of the phrase. Imagine each phrase appearing in the blank in the following question: “If you were thinking about ________, would you be thinking about one thing or more than one thing?”. Please indicate your answer by checking the box under ‘‘one thing’’ or ‘‘more than one thing’’. Sometimes both answers will seem possible. In these cases, just pick the answer that makes more sense to you. </p><p>In order to judge the imageability of the phrase, please rate each of the phrases below according to the ease or difficulty with which it evokes a mental image of its referent. If an image is easily evoked (as it might be for a phrase like ‘‘the skyscraper in the city’’, for example), you should give the phrase a high imagery rating. Phrases that evoke images only with great difficulty or not at all (for example, a phrase like ‘‘the truth of the matter’’) should get low imagery ratings. Indicate your rating by selecting a number on the five-point scale beside each phrase, where 1 is lowest in imageability and 5 is highest in imageability. </p><p>Finally, in order to judge the sensibility of the phrase, please rate how understandable the phrase seems to you. Indicate your rating by selecting a number on the five-point scale beside each phrase, where 1 is lowest in sensibility (nonsense) and 5 is highest in sensibility (completely sensible). </p><p>")
                .print()
            )
    ,
    newButton("Next", "Next")
        .print()
        .wait()
)



