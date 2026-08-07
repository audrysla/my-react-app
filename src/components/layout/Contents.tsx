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
      <h2>React 19 기본 세팅 및 깃 호스팅</h2><br/>
      <p>
        최신 리액트 19 환경 구축해봄
      </p>
      <br/>
      <h3>Typescript 적용 컴포넌트</h3><br/>
      <div>
        <h5>카운트 : {count}</h5><br/>
        <Button onClick={handleClick}>클릭!</Button>
        <Button onClick={reset}>reset</Button><br/>React.ReactNode 버튼 컴포넌트
      </div>
      <br/><br/>
      <h3>유저 프로필 컴포넌트</h3>
      <UserProfile 
        name="김개발"
        age={43}
        job="웹퍼블리셔"
        email="kmkyou1@gmail.com"/>

    </main>
  );
}