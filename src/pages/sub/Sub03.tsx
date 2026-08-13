import { useState, useRef, useEffect } from 'react';


export default function Sub03() {
  // useState: 값이 바뀌면 리렌더링을 유발함 & 데이터 유지됨
  const [stateCount, setStateCount] = useState(0);

  // useRef: 값이 바뀌어도 리렌더링을 유발하지 않음 & 데이터 유지됨
  const refCount = useRef(0);
  const renderCounter = useRef(1);
  
  let localVariable = 0;  // 일반 변수: 렌더링될 때마다 재선언되면서 0으로 초기화됨

  // 렌더링 카운터 증가 (Effect 안에서 올려야 무한 루프에 안 빠짐)
  useEffect(() => {
    renderCounter.current += 1;
  });

  const StateUp = () => {
    setStateCount(prev => prev + 1); // State 변경 -> 리렌더링 발생!
  };

  const RefUp = () => {
    refCount.current += 1; // Ref 변경 -> 리렌더링 안 일어남!
  };

  const LetUp = () => {
    localVariable += 1; // 일반 변수 값 올려봄
    console.log(localVariable)
  };

  const handleReset = () => {
    setStateCount(0);
    refCount.current = 0;
  };

  return (
    <>
      <h2>렌더링에 대한 이해</h2>

      <div style={{ margin: '0 auto 60px auto', width: '230px', textAlign : 'left', whiteSpace :'nowrap' }}>
        {/* <p><strong>렌더링된 횟수</strong> : <b>{renderCounter.current}</b></p> */}
        <p><strong>useState</strong> (stateCount) : <b>{stateCount}</b></p>
        <p><strong>useRef</strong> (refCount.current) : <b>{refCount.current}</b></p>
        <p><strong>let</strong> (일반 변수) : <b>{localVariable}</b></p>
      </div>

      <div className='btns'>
        <button onClick={StateUp}>
          useState +1
        </button>
        <button  onClick={RefUp}>
          Ref +1
        </button>
        <button  onClick={LetUp}>
          let +1
        </button>
        <button className='style2' onClick={handleReset}>
            Reset
          </button>
      </div>
    </>
  );
}