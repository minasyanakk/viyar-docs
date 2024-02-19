<?
    if(!(Constructor::inDev() || User::isAdmin()) ){
        die();
    }
?>
<!DOCTYPE html>
<html>
  <head>
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T6TNW4M');</script>
      <!-- End Google Tag Manager -->
    <title>Markdown Editor</title>
    <link rel="stylesheet" href="/service/doc/editor/lib/material-icons.css">
    <link rel="stylesheet" href="/service/doc/editor/lib/base16-light.css">
    <link rel="stylesheet" href="/service/doc/editor/codemirror/lib/codemirror.css">
    <link rel="stylesheet" href="/service/doc/editor/lib/default.css">
    <!--<link rel="stylesheet" href="lib/github-markdown.css">-->
    <link rel="stylesheet" href="/service/doc/editor/lib/spell-checker.min.css">
    <link rel="stylesheet" href="/service/doc/editor/lib/sweetalert.css">
    <link rel="stylesheet" href="/service/css/help.css">
    <link rel="stylesheet" href="/service/doc/editor/index.css">
  </head>
  <body id="toplevel">
    <div id="top-menu">
        <button id="show-file-list">Список</button>
        <button id="exit-to-constructors">Выйти</button>
        <button id="file-saver">Сохранить</button>
        <div id="oppened-file-name"></div>
    </div>
    <div id="file-list">

    </div>
    <div id="in"><form><textarea id="code"></textarea></form></div>
    <div id="out" class="markdown-body"></div>
    <div id="menu"> sdaa
      <span>Save As</span>
      <div id="saveas-markdown">
        <svg height="64" width="64" xmlns="http://www.w3.org/2000/svg">
          <g transform="scale(0.0625)">
            <path d="M950.154 192H73.846C33.127 192 0 225.12699999999995 0 265.846v492.308C0 798.875 33.127 832 73.846 832h876.308c40.721 0 73.846-33.125 73.846-73.846V265.846C1024 225.12699999999995 990.875 192 950.154 192zM576 703.875L448 704V512l-96 123.077L256 512v192H128V320h128l96 128 96-128 128-0.125V703.875zM767.091 735.875L608 512h96V320h128v192h96L767.091 735.875z" />
          </g>
        </svg>
        <span>Markdown</span>
      </div>
      <div id="saveas-html">
        <svg height="64" width="64" xmlns="http://www.w3.org/2000/svg">
          <g transform="scale(0.0625) translate(64,0)">
            <path d="M608 192l-96 96 224 224L512 736l96 96 288-320L608 192zM288 192L0 512l288 320 96-96L160 512l224-224L288 192z" />
          </g>
        </svg>
        <span>HTML</span>
      </div>
      <a id="close-menu">&times;</a>
    </div>
    <!--<div id="navbar">-->
      <!--<div id="navcontent">-->
        <!--<a id="logo" href = "https://github.com/jbt/markdown-editor" tooltip = "Check out the code on Github!">-->
          <!--<p id="title" class="left"># Markdown Editor</p>-->
        <!--</a>-->
        <!--<p id="openbutton" title="Open from Disk" class="navbutton left" onclick="document.getElementById('fileInput').click();"><i class="material-icons">open_in_browser</i></p>-->
        <!--<input id="fileInput" type="file" class="hidden" accept=".md,.mdown,.txt,.markdown"/>-->
        <!--<p id="savebutton" title="Download" class="navbutton left" onclick="showMenu()"><i class="material-icons">file_download</i></p>-->
        <!--<p id="browsersavebutton" title="Browser Save(Experimental)" class="navbutton left" onclick="saveInBrowser()"><i class="material-icons">save</i></p>-->
        <!--<p id="sharebutton" title="Generate Shareable Link" class="navbutton left" onclick="updateHash()"><i class="material-icons">share</i></p>-->
        <!--<p id="nightbutton" title="Night Mode" class="navbutton left" onclick="toggleNightMode(this)"><i class="material-icons">invert_colors</i></p>-->
        <!--<p id="readbutton" title="Reading Mode" class="navbutton left" onclick="toggleReadMode(this)"><i class="material-icons">chrome_reader_mode</i></p>-->
        <!--<p id="newbutton" class="navbutton left hidden" onclick="clearEditor()">Clear</p>-->
        <!--<p id="sharebutton" class="navbutton left selected hidden">Share</p>-->
      <!--</div>-->
    <!--</div>-->
    <script src="/service/doc/editor/lib/markdown-it.js"></script>
    <script src="/service/doc/editor/lib/markdown-it-footnote.js"></script>
    <script src="/service/doc/editor/lib/highlight.pack.js"></script>
    <script src="/service/doc/editor/lib/emojify.js"></script>
    <script src="/service/doc/editor/codemirror/lib/codemirror.js"></script>
    <script src="/service/doc/editor/codemirror/overlay.js"></script>
    <script src="/service/doc/editor/codemirror/xml/xml.js"></script>
    <script src="/service/doc/editor/codemirror/markdown/markdown.js"></script>
    <script src="/service/doc/editor/codemirror/gfm/gfm.js"></script>
    <script src="/service/doc/editor/codemirror/javascript/javascript.js"></script>
    <script src="/service/doc/editor/codemirror/css/css.js"></script>
    <script src="/service/doc/editor/codemirror/htmlmixed/htmlmixed.js"></script>
    <script src="/service/doc/editor/codemirror/lib/util/continuelist.js"></script>
    <script src="/service/doc/editor/lib/spell-checker.min.js"></script>
    <script src="/service/doc/editor/lib/rawinflate.js"></script>
    <script src="/service/doc/editor/lib/rawdeflate.js"></script>
    <script src="/service/doc/editor/lib/sweetalert.min.js"></script>
    <script src="/service/js/jquery.min.js"></script>
    <script src="/service/doc/editor/index.js"></script>
  </body>
</html>
