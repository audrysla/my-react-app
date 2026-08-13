import { useState, useRef, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      // 1초마다 seconds 상태를 1씩 증가
      timerIdRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
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

  const formatTime = (totalCentiseconds: number) => {
    // const minutes = Math.floor(totalCentiseconds / 6000); // 1분 = 6000 (10ms)
    const seconds = Math.floor((totalCentiseconds % 6000) / 100); // 1초 = 100 (10ms)
    const centiseconds = totalCentiseconds % 100; // 남은 1/100초

    // const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    const cs = String(centiseconds).padStart(2, '0');

    return (<span><i>{ss}</i>.{cs}</span>);
  };

  // 핸들러 함수들
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  
  return (
    <div>
      <h2>Timer</h2>
      <p>useState, useRef, useEffect를 활용한 타이머 예제</p>
      <div className='timerWrap'>
        <p>{formatTime(time)}초</p>
        <div className='btns'>
          <button onClick={handleStart} disabled={isRunning}>
            Start
          </button>
          <button onClick={handleStop} disabled={!isRunning}>
            Stop!
          </button>
          <button onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}