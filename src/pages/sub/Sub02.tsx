import { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Timer() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const triggerConfetti = () => {
    // 중앙에서
    confetti({
      particleCount: 80,
      spread: 100,
      shapes: ['star', 'circle'], // 'square'(기본), 'circle', 'star' 가능
      colors: ['#FFE100', '#FF007A', '#00E5FF'], // 색상도 직접 지정 가능!
    });
    // 왼쪽 구석에서
    confetti({
      particleCount: 30,
      startVelocity: 30,
      spread: 360,
      origin: { x: Math.random() * 0.3, y: Math.random() - 0.2 },
    });
    // 오른쪽 구석에서
    confetti({
      particleCount: 30,
      startVelocity: 30,
      spread: 360,
      origin: { x: Math.random() * 0.7 + 0.3, y: Math.random() - 0.2 },
    });
  }

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
  const handleStop = () => {
    setIsRunning(false);

    const stoppedTime = time;

    // 100분의 1초 값 추출
    const centiseconds = stoppedTime % 100;
    const seconds = Math.floor((stoppedTime % 6000) / 100);

    if (stoppedTime > 0 && centiseconds === 0) {
      console.log(`성공! ${seconds}초 정각!`);
      triggerConfetti(); // 폭죽 터뜨리기!
    } else {
      console.log(`실패! 현재 초: ${seconds}.${centiseconds}`);
    }
  }
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  
  return (
    <div className='no-select'>
      <h2>Timer</h2>      
      <h3>초 정각(00)을 맞춰보세요!</h3><br/>
      <p>1.00초 2.00초 3.00초...</p><br/>
      <div className='timerWrap'>
        <p>{formatTime(time)}초</p>
        <div className='btns'>
          <button onClick={handleStart} disabled={isRunning}>
            Start
          </button>
          <button onClick={handleStop} disabled={!isRunning}>
            Stop!
          </button>
          <button className='style2' onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <br/><br/>
      <p>useState, useRef, useEffect를 활용한 타이머 예제</p>
    </div>
  );
}