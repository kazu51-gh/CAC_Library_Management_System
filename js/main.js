function search_func() {
    var input = document.getElementById('input_keyword');
    filter = input.value.toUpperCase();
    book_contents = Array.from(document.getElementsByClassName('a_book'));
    for (var i = 0; i < book_contents.length; i++) {
        // var text_only_name = book_contents[i].getElementsByClassName('book_title')[0].textContent; // only book title
        var text = book_contents[i].textContent;
        if (text.toUpperCase().indexOf(filter) !== -1) {
            book_contents[i].style.display = "";
        } else {
            book_contents[i].style.display = "none";
        }
    }
}