import React, { useState } from "react";

export function Box(props) {
  const [showContent, setShowContent] = useState(false);

  let childrenElement = null;
  if (showContent) {
    childrenElement = <div className="ArticleChildren">{props.children}</div>;
  }

  return (
    <div className="Article">
      <button id="btnShowContent" onClick={() => setShowContent(!showContent)}>{(showContent) ? "Hide Content" : "Show content"}</button>
      <h2>{props.breed}</h2>

      {childrenElement}
    </div>
  );
}


