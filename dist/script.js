import React, { useState, useEffect } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";
import { FontAwesomeIcon } from "https://esm.sh/@fortawesome/react-fontawesome@latest";
import { faArrows } from "https://esm.sh/@fortawesome/free-solid-svg-icons@latest";
import { faFreeCodeCamp } from "https://esm.sh/@fortawesome/free-brands-svg-icons";

const editorMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const App = () => {
  const [editorMaximized, setEditorMax] = useState(false);
  const [previewerMaximized, setPreviewerMax] = useState(false);
  const [divEditorClass, setDivEditorClass] = useState('');
  const [divPreviewerClass, setDivPreviewerClass] = useState('');

  const linkPrism = document.createElement('link');
  linkPrism.rel = 'stylesheet';
  linkPrism.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css';

  // Append the <link> element to the head of the document
  document.head.appendChild(linkPrism);

  const toggleEditorMaximized = () => {
    setEditorMax(!editorMaximized);
    setDivEditorClass(!editorMaximized ? 'maximized' : '');
    setDivPreviewerClass(!editorMaximized ? 'hide' : '');
  };

  const togglePreviewerMaximized = () => {
    setPreviewerMax(!previewerMaximized);
    setDivEditorClass(!previewerMaximized ? 'hide' : '');
    setDivPreviewerClass(!previewerMaximized ? 'maximized' : '');
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: `editorWrap ${divEditorClass}` }, /*#__PURE__*/
    React.createElement("div", { class: "toolbar" }, /*#__PURE__*/
    React.createElement("i", { class: "fa-free-code-camp" }, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, { icon: faFreeCodeCamp, title: "no-stack-dub-sack" })), "  Editor", /*#__PURE__*/
    React.createElement("i", { class: "fa-arrows-alt", onClick: toggleEditorMaximized }, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, { icon: faArrows }), " ")), /*#__PURE__*/


    React.createElement("textarea", { id: "editor", value: editorMarkdown, type: "text" }, " ")), /*#__PURE__*/



    React.createElement("div", { className: `previewWrap ${divPreviewerClass}` }, /*#__PURE__*/
    React.createElement("div", { class: "toolbar" }, /*#__PURE__*/
    React.createElement("i", { class: "fa-free-code-camp" }, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, { icon: faFreeCodeCamp, title: "no-stack-dub-sack" })), "  Previewer", /*#__PURE__*/
    React.createElement("i", { class: "fa-arrows-alt", onClick: togglePreviewerMaximized }, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, { icon: faArrows }), " ")), /*#__PURE__*/



    React.createElement("div", { id: "preview" }, /*#__PURE__*/
    React.createElement("h1", { id: "welcome-to-my-react-markdown-previewer" }, "Welcome to my React Markdown Previewer!"), /*#__PURE__*/
    React.createElement("h2", { id: "this-is-a-sub-heading" }, "This is a sub-heading..."), /*#__PURE__*/
    React.createElement("h3", { id: "and-heres-some-other-cool-stuff" }, "And here's some other cool stuff:"), /*#__PURE__*/
    React.createElement("p", null, "Heres some code, ", /*#__PURE__*/React.createElement("code", null, "<div></div>"), ", between 2 backticks."), /*#__PURE__*/

    React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, /*#__PURE__*/React.createElement("span", { class: "token comment" }, "// this is multi-line code:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/

    React.createElement("span", { class: "token keyword" }, "function"), " ", /*#__PURE__*/React.createElement("span", { class: "token function" }, "anotherExample"), /*#__PURE__*/React.createElement("span", { class: "token punctuation" }, "("), /*#__PURE__*/React.createElement("span", { class: "token parameter" }, "firstLine", /*#__PURE__*/React.createElement("span", { class: "token punctuation" }, ","), " lastLine"), /*#__PURE__*/React.createElement("span", { class: "token punctuation" }, ")"), " ", /*#__PURE__*/React.createElement("span", { class: "token punctuation" }, "{"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
    React.createElement("span", { class: "token keyword" }, "  if"), " ", /*#__PURE__*/React.createElement("span", { class: "token punctuation" }, "("), "firstLine ", /*#__PURE__*/React.createElement("span", { class: "token operator" }, "=="), " ", /*#__PURE__*/React.createElement("span", { class: "token string" }, "'```'"), " ", /*#__PURE__*/React.createElement("span", { class: "token operator" }, "&&"), " lastLine ", /*#__PURE__*/React.createElement("span", { class: "token operator" }, "=="), " ", /*#__PURE__*/React.createElement("span", { class: "token string" }, "'```'"), /*#__PURE__*/React.createElement("span", { class: "token punctuation" }, ")"), " ", /*#__PURE__*/React.createElement("span", { class: "token punctuation" }, "{"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
    React.createElement("span", { class: "token keyword" }, "    return"), " multiLineCode", /*#__PURE__*/React.createElement("span", { class: "token punctuation" }, ";"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
    React.createElement("span", { class: "token punctuation" }, "  }"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
    React.createElement("span", { class: "token punctuation" }, "}"))), /*#__PURE__*/


    React.createElement("p", null, "You can also make text ", /*#__PURE__*/React.createElement("strong", null, "bold"), "... whoa!", /*#__PURE__*/React.createElement("br", null), "Or ", /*#__PURE__*/React.createElement("em", null, "italic"), ".", /*#__PURE__*/React.createElement("br", null), "Or... wait for it... ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "both!")), /*#__PURE__*/React.createElement("br", null), "And feel free to go crazy ", /*#__PURE__*/React.createElement("del", null, "crossing stuff out"), "."), /*#__PURE__*/

    React.createElement("p", null, "There's also ", /*#__PURE__*/React.createElement("a", { target: "_blank", href: "https://www.freecodecamp.org" }, "links"), ", and"), /*#__PURE__*/
    React.createElement("blockquote", null, /*#__PURE__*/
    React.createElement("p", null, "Block Quotes!")), /*#__PURE__*/

    React.createElement("p", null, "And if you want to get really crazy, even tables:               "), /*#__PURE__*/

    React.createElement("table", null, /*#__PURE__*/
    React.createElement("thead", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("th", null, "Wild Header"), /*#__PURE__*/
    React.createElement("th", null, "Crazy Header"), /*#__PURE__*/
    React.createElement("th", null, "Another Header?"))), /*#__PURE__*/


    React.createElement("tbody", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", null, "Your content can"), /*#__PURE__*/
    React.createElement("td", null, "be here, and it"), /*#__PURE__*/
    React.createElement("td", null, "can be here....")), /*#__PURE__*/

    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", null, "And here."), /*#__PURE__*/
    React.createElement("td", null, "Okay."), /*#__PURE__*/
    React.createElement("td", null, "I think we get it.")))), /*#__PURE__*/



    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, "And of course there are lists.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, "Some are bulleted.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, "With different indentation levels.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, "That look like this.")))))))), /*#__PURE__*/







    React.createElement("ol", null, /*#__PURE__*/
    React.createElement("li", null, "And there are numbered lists too."), /*#__PURE__*/
    React.createElement("li", null, "Use just 1s if you want!"), /*#__PURE__*/
    React.createElement("li", null, "And last but not least, let's not forget embedded images:")), /*#__PURE__*/

    React.createElement("p", null, /*#__PURE__*/
    React.createElement("img", { src: "https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg", alt: "freeCodeCamp Logo" }), "             ")))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));