var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
navigator.saveBlob = navigator.saveBlob || navigator.msSaveBlob || navigator.mozSaveBlob || navigator.webkitSaveBlob;
window.saveAs = window.saveAs || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs;

// Because highlight.js is a bit awkward at times
var languageOverrides = {
    js: 'javascript',
    html: 'xml'
};

var livestyles;

emojify.setConfig({
    img_dir: 'emoji'
});

var md = markdownit({
        html: true,
        highlight: function(code, lang) {
            if (languageOverrides[lang]) lang = languageOverrides[lang];
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, code).value;
                } catch (e) {}
            }
            return '';
        }
    })
    .use(markdownitFootnote);

var hashto;

function update(e) {
    setOutput(e.getValue());

    //If a title is added to the document it will be the new document.title, otherwise use default
    var headerElements = document.querySelectorAll('h1');
    if (headerElements.length > 0 && headerElements[0].textContent.length > 0) {
        title = headerElements[0].textContent;
    } else {
        title = 'Markdown Editor'
    }

    //To avoid to much title changing we check if is not the same as before
    oldTitle = document.title;
    if (oldTitle != title) {
        oldTitle = title;
        document.title = title;
    }
    //clearTimeout(hashto);
    //hashto = setTimeout(updateHash, 1000);
}

function setOutput(val) {
    val = val.replace(/<equation>((.*?\n)*?.*?)<\/equation>/ig, function(a, b) {
        return '<img src="http://latex.codecogs.com/png.latex?' + encodeURIComponent(b) + '" />';
    });

    var out = document.getElementById('out');
    var old = out.cloneNode(true);
    out.innerHTML = md.render(val);
    emojify.run(out);

    var allold = old.getElementsByTagName("*");
    if (allold === undefined) return;

    var allnew = out.getElementsByTagName("*");
    if (allnew === undefined) return;

    for (var i = 0, max = Math.min(allold.length, allnew.length); i < max; i++) {
        if (!allold[i].isEqualNode(allnew[i])) {
            out.scrollTop = allnew[i].offsetTop;
            return;
        }
    }
}

CodeMirrorSpellChecker({
    codeMirrorInstance: CodeMirror,
});

var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: "spell-checker",
    backdrop: "gfm",
    lineNumbers: false,
    matchBrackets: true,
    lineWrapping: true,
    theme: 'base16-light',
    extraKeys: {
        "Enter": "newlineAndIndentContinueMarkdownList"
    }
});

editor.on('change', update);

function selectionChanger(selection,operator,endoperator){
    if(selection == ""){
        return operator;
    }
    if(!endoperator){
        endoperator = operator
    }
    var isApplied = selection.slice(0, 2) === operator && seisAppliedection.slice(-2) === endoperator;
    var finaltext = isApplied ? selection.slice(2, -2) : operator + selection + endoperator;
    return finaltext;
}

editor.addKeyMap({
    // bold
    'Ctrl-B': function(cm) {
        cm.replaceSelection(selectionChanger(cm.getSelection(),'**'));
    },
    // italic
    'Ctrl-I': function(cm) {
        cm.replaceSelection(selectionChanger(cm.getSelection(),'_'));
    },
    // code
    'Ctrl-K': function(cm) {
        cm.replaceSelection(selectionChanger(cm.getSelection(),'`'));
    },
    // keyboard shortcut
    'Ctrl-L': function(cm) {
        cm.replaceSelection(selectionChanger(cm.getSelection(),'<kbd>','</kbd>'));
    }
});

document.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var reader = new FileReader();
    reader.onload = function(e) {
        editor.setValue(e.target.result);
    };

    reader.readAsText(e.dataTransfer.files[0]);
}, false);

//Print the document named as the document title encoded to avoid strange chars and spaces
function saveAsMarkdown() {
    save(editor.getValue(), document.title.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, '') + ".md");
}

//Print the document named as the document title encoded to avoid strange chars and spaces
function saveAsHtml() {
    save(document.getElementById('out').innerHTML, document.title.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, '') + ".html");
}

document.getElementById('saveas-markdown').addEventListener('click', function() {
    saveAsMarkdown();
    hideMenu();
});

document.getElementById('saveas-html').addEventListener('click', function() {
    saveAsHtml();
    hideMenu();
});

function save(code, name) {
    var blob = new Blob([code], {
        type: 'text/plain'
    });
    if (window.saveAs) {
        window.saveAs(blob, name);
    } else if (navigator.saveBlob) {
        navigator.saveBlob(blob, name);
    } else {
        url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", name);
        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(event);
    }
}

var menuVisible = false;
var menu = document.getElementById('menu');

function showMenu() {
    menuVisible = true;
    menu.style.display = 'block';
}

function hideMenu() {
    menuVisible = false;
    menu.style.display = 'none';
}

function openFile(evt) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var files = evt.target.files;
        console.log(files);
        var reader = new FileReader();
        reader.onload = function(file) {
            console.log(file.target.result);
            editor.setValue(file.target.result);
            return true;
        };
        reader.readAsText(files[0]);

    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}

document.getElementById('close-menu').addEventListener('click', function() {
    hideMenu();
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 83 && (e.ctrlKey || e.metaKey)) {
        e.shiftKey ? showMenu() : saveInBrowser();

        e.preventDefault();
        return false;
    }

    if (e.keyCode === 27 && menuVisible) {
        hideMenu();

        e.preventDefault();
        return false;
    }
});

function clearEditor() {
    editor.setValue("");
}

function saveInBrowser() {
    var text = editor.getValue();
    if (localStorage.getItem('content')) {
        swal({
                title: "Existing Data Detected",
                text: "You will overwrite the data previously saved!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, overwrite!",
                closeOnConfirm: false
            },
            function() {
                localStorage.setItem('content', text);
                swal("Saved", "Your Document has been saved.", "success");
            });
    } else {
        localStorage.setItem('content', text);
        swal("Saved", "Your Document has been saved.", "success");
    }
    console.log("Saved");
}

function toggleNightMode(button) {
    button.classList.toggle('selected');
    document.getElementById('toplevel').classList.toggle('nightmode');
}

function toggleReadMode(button) {
    button.classList.toggle('selected');
    document.getElementById('out').classList.toggle('focused');
    document.getElementById('in').classList.toggle('hidden');
}

function updateHash() {
    window.location.hash = btoa( // base64 so url-safe
        RawDeflate.deflate( // gzip
            unescape(encodeURIComponent( // convert to utf8
                editor.getValue()
            ))
        )
    );
}

function processQueryParams() {
    var params = window.location.search.split('?')[1];
    if (window.location.hash) {
        document.getElementById('readbutton').click(); // Show reading view
    }
    if (params) {
        var obj = {};
        params.split('&').forEach(function(elem) {
            obj[elem.split('=')[0]] = elem.split('=')[1];
        });
        if (obj.reading === 'false') {
            document.getElementById('readbutton').click(); // Hide reading view
        }
        if (obj.dark === 'true') {
            document.getElementById('nightbutton').click(); // Show night view
        }
    }
}

var file_val = false;
function setFile(val) {
    file_val = val;
    document.getElementById('file-saver').style.display = 'initial';
    var t = document.getElementById('oppened-file-name');
    t.style.display = 'initial';
    t.innerText = file_val;
}

function start() {
    // processQueryParams();
    // if (window.location.hash) {
    //     var h = window.location.hash.replace(/^#/, '');
    //     if (h.slice(0, 5) == 'view:') {
    //         setOutput(decodeURIComponent(escape(RawDeflate.inflate(atob(h.slice(5))))));
    //         document.body.className = 'view';
    //     } else {
    //         editor.setValue(
    //             decodeURIComponent(escape(
    //                 RawDeflate.inflate(
    //                     atob(
    //                         h
    //                     )
    //                 )
    //             ))
    //         );
    //     }
    // } else if (localStorage.getItem('content')) {
    //     editor.setValue(localStorage.getItem('content'));
    // }
    // update(editor);
    // editor.focus();
    // document.getElementById('fileInput').addEventListener('change', openFile, false);

    document.getElementById('show-file-list').onclick = e => {
        document.getElementById('file-list').style.display = 'block';
    };
    document.getElementById('exit-to-constructors').onclick = e => {
        $.ajax({
            url: '/service/doc/editor/ajax.php',
            method: 'POST',
            dataType: 'json',
            data: {
                action: 'exitTo'
            },
            success: function(data) {
                if(data) {
                    location.reload();
                } else {
                    alert('что то пошло не так, почистите кеш');
                }
            },
            error: function () {
                alert('что то пошло не так, почистите кеш');
            }
        });
    };
    document.getElementById('file-saver').onclick = e => {
        console.log(editor.getValue());
        $.ajax({
            url: '/service/doc/editor/ajax.php',
            method: 'POST',
            dataType: 'json',
            data: {
                action: 'setDocValue',
                dir: file_val,
                val: editor.getValue()
            },
            success: function(data) {
                if(data) {
                    alert('успешно сохранено!')
                } else {
                    alert('не удалось сохранить!')
                }
            }
        });
    };

    $.ajax({
        url: '/service/doc/editor/ajax.php',
        method: 'POST',
        dataType: 'json',
        data: {
            action: 'getDocStruct'
        },
        success: function(data) {
            var closer = document.createElement('button');
            closer.innerText = 'Закрыть';
            closer.style.float = 'right';
            closer.onclick = e => { e.target.parentElement.style.display = 'none'; };//file-saver
            if(data) {
                var list = document.createElement('div');
                for(var i in data) {
                    var caption = document.createElement('b');
                    caption.innerText = i;
                    list.appendChild(caption);
                    var l = document.createElement('ul');
                    l.style['margin-top'] = '0';
                    for(var j in data[i]) {
                        var g = i;
                        var t = data[i][j];
                        var li = document.createElement('li');
                        var b = document.createElement('a');
                        b.href = 'javascript:;';
                        b.innerText = t;
                        b.value = g + '/' + t;
                        b.onclick = function (e) {
                            $.ajax({
                                url: '/service/doc/editor/ajax.php',
                                method: 'POST',
                                dataType: 'json',
                                data: {
                                    action: 'getDocValue',
                                    page: e.target.value
                                },
                                success: function(data) {
                                    if(data) {
                                        editor.setValue(data);
                                        setFile(e.target.value);
                                        closer.onclick({target: closer});
                                    } else {
                                        alert('Ошибка получения данных');
                                    }
                                }
                            });
                        };
                        li.appendChild(b);
                        l.appendChild(li);
                    }
                    list.appendChild(l);
                }
                var file_list = document.getElementById('file-list');
                file_list.innerHTML = '';
                file_list.appendChild(closer);
                file_list.appendChild(list);
            } else {
                document.getElementById('file-list').innerHTML = '<p>Не найдены доступный файлы</p>';
            }
            // editor.setValue(data)
        }
    });
}

start();