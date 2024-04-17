({
    getWords: function (count) {
        if (count > 100) return;
        //building an array
        let wordsArray = [
            "apple","banana","giraffe","ocean","umbrella","joyful",
            "sparkle","whisper","mountain","laughter","breeze","sunshine",
            "cozy","garden","cuddle","daisy","harmony","serene","giggly","delight",
            "tangerine","moonlight","adventure","carousel","bubble","mystery",
            "splendid","twinkle","cotton","lullaby","chocolate","eclipse","serendipity",
            "tranquil","laughter","glisten","enchanted","puzzle","marvel","storybook",
            "whimsical","butterfly","whistle","velvet","silhouette","dazzle","tranquil",
            "wonder","zephyr","blissful","wanderlust","sapphire","whisper","captivate",
            "blossom","luminous","ethereal","delicate",
            "charming","cascade","soothe","azure","lull","ripple","gazebo",
            "pajamas","coconut","lagoon","dream","cosmic",
            "serenity","melody","carousel","marshmallow","snuggle","tulip","dreamy",
            "truffle","gossamer","glimmer","ballet","harmonize","captivate","sunset",
            "sunflower","bubbles","silken","moonbeam","chirp",
            "whisk","sunset","breeze","cocoa","nostalgia"
        ];
        //randomising words before returning
        wordsArray = this.randomizeArray(wordsArray);
        //for setting open=false property
        
        const wordsObjArray=wordsArray.map( element => {
            return {word : element, open : false}
        })
        //return requested words
        return wordsObjArray.slice(0, count);
    },
    randomizeArray: function (arr) {
        const randomArr = arr;
        //randomize the array
        for (let i = randomArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = randomArr[i];
            randomArr[i] = randomArr[j];
            randomArr[j] = temp;
        }
        return randomArr;
    },
    
    getWinWord: function (arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex].word;
    },
    
    disableBoard : function(component) {
        component.set("v.boardDisabled", true);
    },
    
    enableBoard : function(component) {
        component.set("v.boardDisabled", false);
    },
    
    resetBoard : function(component) {
        this.enableBoard(component);
        //reset the counter
        component.set("v.clickCount", 0);
        //reset the result
        component.set("v.result", "");
    }, 
    fireResultEvent : function(resultValue) {
        const appEvent= $A.get("e.c:ResultApplicationEvent");
        appEvent.setParams({ result: resultValue });
        appEvent.fire();
    }, 
});
