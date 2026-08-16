import { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

// 1. 별 모양 Path 생성
const star = confetti.shapeFromPath({
  path: 'M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.399 8.165L12 18.896l-7.333 3.863 1.399-8.165-5.934-5.784 8.2-1.192zm0 0',
});

export default function Timer() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const timerIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isGiveup, setIsGiveup] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const triggerConfetti = () => {
    // 중앙에서
    confetti({
      particleCount: 80,
      spread: 130,
      gravity:.5,
      drift: -.5,
      shapes: [ 'square'], // 'square'(기본), 'circle', 'star' 가능
      colors: ['#FFE100', '#FF007A', '#00E5FF'], // 색상도 직접 지정 가능!
    });
    confetti({
      particleCount: 80,
      spread: 130,
      gravity:.5,
      drift: .5,
      shapes: [ 'circle'], // 'square'(기본), 'circle', 'star' 가능
      colors: ['#FFE100', '#FF007A', '#00E5FF'], // 색상도 직접 지정 가능!
    });
    confetti({
      particleCount: 80,
      spread: 100,
      gravity:.8,
      shapes: [ star], // 'square'(기본), 'circle', 'star' 가능
      scalar: 1.8,
      colors: ['#FFE100', '#FF007A', '#00E5FF'], // 색상도 직접 지정 가능!
    });
    // 왼쪽 구석에서
    // confetti({
    //   particleCount: 30,
    //   startVelocity: 30,
    //   spread: 360,
    //   origin: { x: Math.random() * 0.3, y: Math.random() - 0.2 },
    // });
    // // 오른쪽 구석에서
    // confetti({
    //   particleCount: 30,
    //   startVelocity: 30,
    //   spread: 360,
    //   origin: { x: Math.random() * 0.7 + 0.3, y: Math.random() - 0.2 },
    // });
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
      setIsSuccess(true) // 성공 구분
      triggerConfetti(); // 폭죽 터뜨리기!
    } else {
      console.log(`실패! 현재 초: ${seconds}.${centiseconds}`);
    }

    if(stoppedTime >= 2000) {      
      setIsGiveup(true)
    }
  }
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setIsFinish(false)
    setIsGiveup(false)
    setIsSuccess(false)
  };
  
  const handleSuccess = () => triggerConfetti();

  const showConfetti = () => {
    setIsFinish(true)
    setIsGiveup(false)
  }

  return (
    <div className='no-select'>
      <h2>Timer</h2>      
      <h3>정각 초(00)를 맞춰보세요!</h3><br/>
      
      {isSuccess ? (
        <p className="congratulations-neon">축하합니다! 🎉</p>
      ) : (
        <p>1.00초 2.00초 3.00초...</p>
      )}
      
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
          {(isFinish || isSuccess) && (
            <button className='style3' onClick={handleSuccess}>
              🎇
            </button>
          )}
          {isGiveup && !isSuccess && (
            <button className='style3 ani' onClick={showConfetti}>
              give up?
            </button>
          )}
        </div>
      </div>
      <br/>      
      <p>useState, useRef, useEffect를 활용한 타이머 예제</p>
    </div>
  );
}