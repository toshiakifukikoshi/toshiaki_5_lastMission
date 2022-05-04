import { memo, VFC } from "react";
import { Link } from "react-router-dom";

export const Page404: VFC = memo(() => {
  return (
    <>
      <p>404ページです。</p>
      <Link to="/">HOMEへ戻る</Link>
    </>
  );
});
