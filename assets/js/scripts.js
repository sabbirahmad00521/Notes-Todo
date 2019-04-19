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
        // COMMENT: Style in CSS
        journalTextEditor.document.execCommand('StyleWithCSS', false, true);

        // COMMENT: Writing mode on
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

        document.querySelector('.j-editor .fa-redo').addEventListener('click', () => journalTextEditor.document.execCommand('redo'));

        document.querySelector('.j-editor .fa-undo').addEventListener('click', () => journalTextEditor.document.execCommand('undo'));

        // COMMENT: quote
        document.querySelector('.j-editor .fa-quote-left').addEventListener('click', () => journalTextEditor.document.execCommand('formatBlock', false, '<blockquote>'));


        // COMMENT: get writting text when click on save button
        document.querySelector('.fa-save').addEventListener('click', () => {
            document.querySelector('.test-para').innerHTML = journalTextEditor.document.getElementsByTagName('body')[0].innerHTML
        });

        // COMMENT: Paste As Plain Text
        journalTextEditor.addEventListener('paste', function (e) {
            e.preventDefault();
            var text = (e.originalEvent || e).clipboardData.getData('text/plain');
            journalTextEditor.document.execCommand("insertText", false, text);
        })

        // COMMENT: Font Style
        document.querySelector('.j-editor .font-select').addEventListener('change', function () {
            journalTextEditor.document.execCommand('fontName', false, this.value)
        });

        // COMMENT: Font Color
        document.querySelector('.j-editor .fa-highlighter input').addEventListener('change', function () {
            journalTextEditor.document.execCommand('foreColor', false, this.value)
        });

        // COMMENT: Font background
        document.querySelector('.j-editor .fa-tenge input').addEventListener('change', function () {
            journalTextEditor.document.execCommand('backColor', false, this.value)
        });

        // COMMENT: Font size
        function fontsize() {
            let increasedFontSize = document.querySelector('.j-editor .quantity').value //POINT: it's taking input number box's value

            // journalTextEditor.document.execCommand('fontSize', false, increasedFontSize) //POINT: it's apply the number box's value in selected text by grabbing that text in a span and style that inline 

            // var selectedElement = journalTextEditor.document.getSelection().focusNode.parentNode; // POINT: it's grabbing the selected text's span element

            // console.log(selectedElement);
            // selectedElement.style.fontSize = increasedFontSize + 'px'; // POINT: And this guy is overwritting the css and make it to PX size
            // journalTextEditor.document.getElementsByTagName('body')[0].style.fontSize = '14px';  // POINT: it's making body font size default by 14px

            //COMMENT: last gahtaghati
            // if (journalTextEditor.document.getSelection()) {
            //     let increasedFontSize = document.querySelector('.j-editor .quantity').value
            //     journalTextEditor.document.execCommand('fontSize', false, increasedFontSize)
            //     var selectedElement = journalTextEditor.document.getSelection().focusNode.parentNode;
            //     console.log(selectedElement);
            //     selectedElement.style.fontSize = increasedFontSize + 'px';
            //     journalTextEditor.document.getElementsByTagName('body')[0].style.fontSize = '14px';
            //     console.log('there is some text ');
            // } else {
            //     console.log('Text box is empty');
            // }

            // COMMENT: this is working one, bt can't overwrite

            var asdasd = journalTextEditor.document.getSelection().toString().length
            console.log('get selection' + asdasd);

            // var asss = journalTextEditor.document.getSelection();
            // console.log(asss);
            // console.log(toString(asss).length);

            if (journalTextEditor.document.getSelection().toString().length > 0) {
                // if (journalTextEditor.document.getSelection().anchorOffset > 0) {
                journalTextEditor.document.execCommand('fontSize', false, increasedFontSize) //POINT: it's apply the number box's value in selected text by grabbing that text in a span and style that inline 

                var selectedElement = journalTextEditor.document.getSelection().focusNode.parentNode; // POINT: it's grabbing the selected text's span element

                selectedElement.style.fontSize = increasedFontSize + 'px'; // POINT: And this guy is overwritting the css and make it to PX size
                journalTextEditor.document.getElementsByTagName('body')[0].style.fontSize = '14px'; // POINT: it's making body font size default by 14px
            }


            // var span = journalTextEditor.document.createElement("span");
            // span.style.fontSize = increasedFontSize + 'px';
            // if (journalTextEditor.window.getSelection) {
            //     var sel = journalTextEditor.window.getSelection();
            //     console.log(selectedElementa);

            //     if (sel.rangeCount) {
            //         var range = sel.getRangeAt(0).cloneRange();
            //         range.surroundContents(span);
            //         sel.removeAllRanges();
            //         sel.addRange(range);
            //     }
            // }

            //COMMENT: this is working one, bt it's making too much clone
            // var selection = journalTextEditor.document.getSelection().getRangeAt(0);
            // var selectedText = selection.extractContents();
            // var span = journalTextEditor.document.createElement("span");
            // span.style.fontSize = increasedFontSize + 'px';
            // span.appendChild(selectedText);
            // selection.insertNode(span);




            // journalTextEditor.document.querySelectorAll('div').style.fontSize = ''; //COMMENT: need more expirement

            //COMMENT: There is something intersting. check it out
            // var selectedElementa = journalTextEditor.document.getSelection().focusNode.parentNode;
            // if (selectedElementa.tagName == "DIV" || selectedElementa.tagName == "SPAN") {
            //     let increasedFontSize = document.querySelector('.j-editor .quantity').value
            //     journalTextEditor.document.execCommand('fontSize', false, increasedFontSize)
            //     var selectedElement = journalTextEditor.document.getSelection().focusNode.parentNode;
            //     selectedElement.style.fontSize = increasedFontSize + 'px';
            //     journalTextEditor.document.getElementsByTagName('body')[0].style.fontSize = '14px';
            //     console.log('yeah is has a span parent');
            // } else {
            //     console.log('There is no span in parent node, so we have to do it manually');
            //     var getSelectedText = journalTextEditor.document.getSelection().anchorNode.data.substr(journalTextEditor.document.getSelection().focusOffset, journalTextEditor.document.getSelection().anchorOffset) //COMMENT: To get just selected string 
            //     console.log('Element should be created');
            // }

        }

        journalTextEditor.document.addEventListener('click', function () {

            var selectedElement = journalTextEditor.document.getSelection().focusNode.parentNode;
            var fontsize = window.getComputedStyle(selectedElement).getPropertyValue('font-size');

            document.querySelector('.quantity').value = parseInt(fontsize)
        })

        document.querySelector('.j-editor .quantity').addEventListener('change', () => fontsize());
        document.querySelector('.j-editor .increase').addEventListener('click', () => fontsize());
        document.querySelector('.j-editor .decrease').addEventListener('click', () => fontsize());

        //TODO: font size problem solve || quote don't work well || image attachment || voice record || 


        //PROBLEM: after giving some enter and set a font size if i start to write, then it's taking font 7 style automatically. don't know why
        //PROBLEM: first time giving value in px, then it turn into font value >_< 








    }
}
Journal.JournalEditor();