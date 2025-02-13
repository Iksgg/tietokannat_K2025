const book={
    bookArray:[
        {'id_book' :1, 'name':"Everything You Ever Wanted to Know", 'author' :"Upton", 'isbn': "082305649x"},
        {'id_book' :2, 'name':"Photography", 'author' :"	Vilppu", 'isbn': "205711499"},
        {'id_book' :3, 'name':"Drawing Manual Vilppu", 'author' :"Zelanshi", 'isbn': "1892053039"},
        {'id_book' :4, 'name':"TBA", 'author' :"Zelanshi", 'isbn': "0534613932"},
    ],

    getAllBooks: function(){
        console.log(this.bookArray);
    },

    getOneBook: function(num){
        console.log(this.bookArray[num]);
    },

    addBook: function(addName, addAuth, addISBN){
        var newID = this.bookArray.length + 1;
        this.bookArray.push({
            id_book:newID, 
            name:addName, 
            author:addAuth, 
            isbn:addISBN
        });
    }
};

book.getAllBooks();
book.getOneBook(2);
book.addBook('Shaping Space','Speight','0534613934')
book.getAllBooks();
