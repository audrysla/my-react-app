import { useState } from 'react';
import { Button } from '../common/Button'
import { UserProfile } from '../member/UserProfile'

export function Contents() {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const reset = () => {
    setCount(0)
  }
  return (
    <main className="main-content">
      <h2>메인 화면에 오신 것을 환영합니다!</h2>
      <p>여기에 본문 내용을 작성하거나 다른 세부 컴포넌트들을 넣습니다.</p>
      
      <div>
        <h2>카운트 : {count}</h2>
        <Button onClick={handleClick}>클릭!</Button>
        <Button onClick={reset}>reset</Button>
      </div>
      <UserProfile 
        name="김개발"
        age={43}
        job="웹퍼블리셔"
        email="kmkyou1@gmail.com"/>

    </main>
  );
}