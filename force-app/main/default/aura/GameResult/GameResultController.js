({
    doInit : function(component, event, helper) {
        const columns = [
            { label: "Game number", fieldName: "Name", type: "text"},
            { label: "Mode", fieldName: "Mode__c", type: "text"},
            { label: "Played on", fieldName: "CreatedDate", type: "date"},
            { label: "Result", fieldName: "Result__c", type: "text"}
        ];
        component.set("v.columns",columns);

        //get previous results
        helper.fetchResult(component);
    },
    onResultHandler : function(component, event, helper) {
        //get previous results
        helper.fetchResult(component);
    },
})
