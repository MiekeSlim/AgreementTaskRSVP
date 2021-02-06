PennController.ResetPrefix(null) // Shorten command names (keep this line here)

newTrial(
    newVar("HandednessVar")
    ,
    newText("Handedness", "Are you left or right handed?")
        .print()
    ,
    newKey("forj", "FJ")
        .wait()
    ,
    newKey("forj", "FJ")
        .wait("first")
    ,
    getKey("forj")
        .test.pressed("F")
        .success( 
            getVar("HandednessVar")
                .set("lefthanded")
            ,
            getText("Handedness").remove()
            ,
            newText("success", "You're a lefty!").print() )
        .failure(
            getVar("HandednessVar")
                .set("righthanded")
            ,
            getText("Handedness").remove()
            ,
            newText("failure", "You're a righty!").print() )

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
            .add("center at 25%","middle at 10%", getText("sg"))
            .add("center at 75%","middle at 10%", getText("pl"))
            .add("center at 25%","middle at 70%", getText("F"))
            .add("center at 75%","middle at 70%", getText("J"))
            .print("center at 50%", "middle at 50%")
        ,
        newTimer("ResponseTime", 1200)
            .log()
            .start()
        ,
        newKey("Response", "FJ")    
            .log("first")
            .callback( getTimer("ResponseTime").stop() )
        ,
        getTimer("ResponseTime")
            .wait()
        ,
        getKey("Response")    
            .test.pressed()
            .failure(
                    getCanvas("verbselection.canvas").remove()
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
        )
    )
