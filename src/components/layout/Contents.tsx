import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { Button } from '../common/Button'
import { UserProfile } from '../member/UserProfile'
import { About } from '../../pages/About'

export function Contents() {
  const [status, setStatus] = useState('status');
  const [count, setCount] = useState(0);   

  const handleClick = () => {
    setCount(count + 1)
  }

  const reset = () => {
    setStatus('초기화')
    setCount(0)
  }

  useEffect(() => {
    if (count > 0) {
      setStatus(`count가 ${count}로 변경됨`);
    }
  }, [count])

  

  return (
    <main className="main-content">
        <h2>React 19 기본 세팅 및 깃 호스팅</h2><br/>
        <h3>최신 리액트 19 환경 구축</h3>
        <br/>
        <h3>Typescript 적용 컴포넌트</h3>      
        <br/>
        <p>{status}</p>
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
          skills="react, vue, javascript, typescript, html, css, scss, git, api"
          email="myoung_kyo@hanmail.net"
          notes="jsp, asp, php"/>

    </main>
  );
}