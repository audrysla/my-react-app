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
      <h3>최신 리액트 19 환경 구축</h3>
      <br/>
      <h3>Typescript 적용 컴포넌트</h3>      
      <br/>      
      <h5>카운트 : {count}</h5>
      <br/>
      <div>        
        <Button onClick={handleClick}>클릭!</Button>
        <Button onClick={reset}>reset</Button>
      </div>
      <br/>
      <p>React.ReactNode 버튼 컴포넌트</p>
      <br/><br/>
      <h3>유저 프로필</h3>
      <p>(interface 프롭스)</p>
      <UserProfile 
        name="김명교"
        age={43}
        job="웹퍼블리셔"
        skills="react, vue, javascript, html, css, scss, git"
        email="kmkyou1@gmail.com"/>

    </main>
  );
}