/**
 * Created by AbhishekG on 8/9/2016.
 */

class UserBookHistory{
    userId;
    bookId;
    date;
    isBorrowed;
    isReturned;

    constructor(){
        this.userId ;
        this.bookId;
        this.date = new Date();
        this.isBorrowed = false;
        this.isReturned = false;
    }
}