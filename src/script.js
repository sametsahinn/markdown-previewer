import React, { useState, useEffect } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";
import { FontAwesomeIcon } from "https://esm.sh/@fortawesome/react-fontawesome@latest"
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
  
  return (
    <div>
    <div className={`editorWrap ${divEditorClass}`}>
      <div class="toolbar">
        <i class="fa-free-code-camp"> <FontAwesomeIcon icon={faFreeCodeCamp} title="no-stack-dub-sack" /></i>  Editor
         <i class="fa-arrows-alt" onClick={toggleEditorMaximized}> <FontAwesomeIcon icon={faArrows} /> </i>
          
        </div>
      <textarea id="editor" value={editorMarkdown} type="text"> </textarea>
  
</div>
    
    <div className={`previewWrap ${divPreviewerClass}`}>
      <div class="toolbar">
        <i class="fa-free-code-camp"> <FontAwesomeIcon icon={faFreeCodeCamp} title="no-stack-dub-sack" /></i>  Previewer
         <i class="fa-arrows-alt" onClick={togglePreviewerMaximized}> <FontAwesomeIcon icon={faArrows} /> </i>        
          
        </div>
      
      <div id="preview">
        <h1 id="welcome-to-my-react-markdown-previewer">Welcome to my React Markdown Previewer!</h1>
        <h2 id="this-is-a-sub-heading">This is a sub-heading...</h2>
        <h3 id="and-heres-some-other-cool-stuff">And here's some other cool stuff:</h3>
        <p>Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2 backticks.</p>
        
        <pre><code><span class="token comment">// this is multi-line code:</span><br/><br/>

<span class="token keyword">function</span> <span class="token function">anotherExample</span><span class="token punctuation">(</span><span class="token parameter">firstLine<span class="token punctuation">,</span> lastLine</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><br/>
  <span class="token keyword">  if</span> <span class="token punctuation">(</span>firstLine <span class="token operator">==</span> <span class="token string">'```'</span> <span class="token operator">&amp;&amp;</span> lastLine <span class="token operator">==</span> <span class="token string">'```'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span><br/>
    <span class="token keyword">    return</span> multiLineCode<span class="token punctuation">;</span><br/>
<span class="token punctuation">  &#125;</span><br/>
<span class="token punctuation">&#125;</span>
</code></pre>
        
        <p>You can also make text <strong>bold</strong>... whoa!<br/>Or <em>italic</em>.<br/>Or... wait for it... <strong><em>both!</em></strong><br/>And feel free to go crazy <del>crossing stuff out</del>.</p>
          
          <p>There's also <a target="_blank" href="https://www.freecodecamp.org">links</a>, and</p>
          <blockquote>
            <p>Block Quotes!</p>
          </blockquote>
          <p>
            And if you want to get really crazy, even tables:               </p>
          <table>
            <thead>
              <tr>
                <th>Wild Header</th>
                <th>Crazy Header</th>
                <th>Another Header?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Your content can</td>
                <td>be here, and it</td>
                <td>can be here....</td>
              </tr>
              <tr>
                <td>And here.</td>
                <td>Okay.</td>
                <td>I think we get it.</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>And of course there are lists.<ul>
            <li>Some are bulleted.<ul>
            <li>With different indentation levels.<ul>
            <li>That look like this.</li>
          </ul>
          </li>
          </ul>
          </li>
          </ul>
          </li>
          </ul>
              <ol>
    <li>And there are numbered lists too.</li>
    <li>Use just 1s if you want!</li>
    <li>And last but not least, let's not forget embedded images:</li>
    </ol>
          <p>
            <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg" alt="freeCodeCamp Logo" />             </p>
      </div>

    </div>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
