import Giscus from "@giscus/react";
import React from "react";

export const Comments = () => {
  return (
    <Giscus
      repo="JeonJaewon/jeonjaewon.github.io"
      repoId="R_kgDOKaVh6A"
      category="Comments"
      categoryId="DIC_kwDOKaVh6M4CiG0a"
      mapping="pathname"
      strict="1"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="ko"
    />
  );
};
