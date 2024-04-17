({
    fetchResult : function(component) {
        const action = component.get("c.getResults");
        action.setCallback(this,function(response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                //the list from GameResultController.cls will be available here 
                //on this resp var
                const resp = response.getReturnValue();
                component.set("v.data",resp);
            }
        });
        $A.enqueueAction(action);
    }
})
