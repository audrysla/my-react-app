import { useState, useRef, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      // 1초마다 seconds 상태를 1씩 증가
      timerIdRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      // 정지 상태이면 타이머 해제
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
      }
    }

    // [중요] Cleanup 함수: 컴포넌트가 언마운트되거나 useEffect가 재실행될 때 타이머 제거
    return () => {
      if (timerIdRef.current) {
        clearInterval(timerIdRef.current);
      }
    };
  }, [isRunning]); // isRunning 값이 변경될 때만 실행

  // 핸들러 함수들
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };
  
  return (
    <div>
      <h2>Timer 페이지</h2>

      <div className='timerWrap'>
        <p><i>{seconds}</i>초</p>
        <div className='btns'>
          <button onClick={handleStart} disabled={isRunning}>
            시작
          </button>
          <button onClick={handleStop} disabled={!isRunning}>
            정지
          </button>
          <button onClick={handleReset}>
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}