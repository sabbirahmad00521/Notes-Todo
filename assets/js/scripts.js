//SECTION: Journal Code Start From Here

// var Journal = {
//     journalEditor: 'sabbir ahmad',
//     journditor:  function() {
//         return this.journalEditor

//     }
// }
// console.log(Journal.journditor())

var Journal = {
    JournalEditor: function () {
        journalTextEditor.document.designMode = 'on';

        document.querySelector('.j-editor .fa-bold').addEventListener('click', () => journalTextEditor.document.execCommand('bold'));

        document.querySelector('.j-editor .fa-italic').addEventListener('click', () => journalTextEditor.document.execCommand('italic'));

        document.querySelector('.j-editor .fa-underline').addEventListener('click', () => journalTextEditor.document.execCommand('underline'));

        document.querySelector('.j-editor .fa-strikethrough').addEventListener('click', () => journalTextEditor.document.execCommand('strikeThrough'));

        document.querySelector('.j-editor .fa-align-left').addEventListener('click', () => journalTextEditor.document.execCommand('justifyLeft'));

        document.querySelector('.j-editor .fa-align-center').addEventListener('click', () => journalTextEditor.document.execCommand('justifyCenter'));

        document.querySelector('.j-editor .fa-align-right').addEventListener('click', () => journalTextEditor.document.execCommand('justifyRight'));

        document.querySelector('.j-editor .fa-list-ol').addEventListener('click', () => journalTextEditor.document.execCommand('insertUnorderedList'));

        document.querySelector('.j-editor .fa-list-ul').addEventListener('click', () => journalTextEditor.document.execCommand('insertOrderedList'));

        // COMMENT: get writting text when click on save button
        document.querySelector('.fa-save').addEventListener('click', () => {
            document.querySelector('.test-para').innerHTML = journalTextEditor.document.getElementsByTagName('body')[0].innerHTML
        });

        // COMMENT: CODE
        document.querySelector('.j-editor .fa-highlighter').addEventListener('click', () => {
            journalTextEditor.document.getElementsByTagName('body')[0].textContent = journalTextEditor.document.getElementsByTagName('body')[0].innerHTML
        });

        // TODO:
        // document.querySelector('.j-editor .font-select').addEventListener('change', () => journalTextEditor.document.execCommand('fontName', false, this.value));

        document.querySelector('.j-editor .font-select').addEventListener('change', function () {
            journalTextEditor.document.execCommand('fontName', false, this.value)
        });

    }
}
Journal.JournalEditor();