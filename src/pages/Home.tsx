import { useState, useEffect, useRef } from 'react';
import { Button } from '../components/common/Button'

export default function Home() {
  const [status, setStatus] = useState('status');
  const [count, setCount] = useState(0);   
  const countNumRef = useRef<HTMLElement>(null);

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

      if (countNumRef.current) {
        const el = countNumRef.current;      
        el.classList.remove('animate');
        void el.offsetWidth;
        el.classList.add('animate');
      }
    }
  }, [count])
  

  return (
    <>
        <h2>React 19 기본 세팅 및 깃 호스팅</h2>
        <h3>최신 리액트 19 환경 구축</h3>
        <br/>
        <h3>Typescript 적용 컴포넌트</h3>      
        <br/>
        <p>{status}</p>
        <h5>카운트 : <em ref={countNumRef} className='countNum'>{count}</em></h5>
        <br/>
        <div>        
          <Button onClick={handleClick}>클릭!</Button>
          <Button onClick={reset}>reset</Button>
        </div>
        <br/>
        <p>React.ReactNode 버튼 컴포넌트</p>        

    </>
  );
}