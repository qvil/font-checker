import React, { useState } from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  outline: none;
`;

const App = () => {
  const [text, setText] = useState("무궁화 꽃이 활짝 피었습니다.");

  return (
    <div>
      <h1>Font Checker</h1>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <TextArea value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

export default App;
