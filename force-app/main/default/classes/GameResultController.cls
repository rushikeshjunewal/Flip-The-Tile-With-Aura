public with sharing class GameResultController {
    @AuraEnabled
    public static List<Word_Shuffle__c> getResults(){
        //get current user id
        String userId=UserInfo.getUserId();
        List<Word_Shuffle__c> results=[
            SELECT Id, Name, Result__c,CreatedDate,Mode__c 
            FROM Word_Shuffle__c
            WHERE CreatedById=: userId
            ORDER BY CreatedDate DESC]; 
        return results;
    }
}