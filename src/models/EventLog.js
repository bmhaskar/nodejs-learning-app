/**
 * Created by AbhishekG on 8/9/2016.
 */

class EventLog{
    book;
    user;
    eventType;
    eventData;
    date;

    constructor(){
       this.book;
       this.user;
       this.eventType = "";
       this.eventData = {};
       this.date = new Date();
    }
}