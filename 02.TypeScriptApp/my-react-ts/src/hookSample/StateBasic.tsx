import { useState } from "react";

// Propsの型宣言
type StateBasicProps = {
  init: number
};

export default function StateBasic({ init }: StateBasicProps) {
  // Props(init)でState(count)を初期化
  const [count, setCount] = useState<number>(init);
  console.log(`count is ${count}`);
  // [カウント]ボタンクリック時にカウント値をインクリメント
  const handleClick = () => {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされた</p>
    </div>
  );
}