// This is a simple demo script, feel free to edit or delete it
// Find a tutorial and the list of availalbe elements at:
// https://www.pcibex.net/documentation/

PennController.ResetPrefix(null) // Shorten command names (keep this line here)

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
        newCanvas("verbselection.canvas", "80vw", "20vh")
            .add("center at 25%",0, getText("sg"))
            .add("center at 75%",0, getText("pl"))
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
