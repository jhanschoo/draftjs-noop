import React, { useState } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import './App.css';
import 'draft-js/dist/Draft.css';

function App() {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText("hello")));
  const handleChange = (newEditorState) => {
    const s = newEditorState.getCurrentContent().getPlainText();
    console.log(s);
    if (s.length <= 5) {
      setEditorState(newEditorState);
    } else {
      setEditorState(EditorState.set(editorState, {}));
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Editor editorState={editorState} onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
