import { useState } from 'react';
import './App.css'
import Modal from './Modal';

function App() {

  // 데이터 바인딩
  let post = '강남제육맛집';

  const [title, setTitle] = useState([
    '남자코트추천',
    '강남우동맛집',
    '자바스터디'
  ]);

  const [createDate, setCreateDate] = useState([
    '2025-5-1',
    '2025-6-1',
    '2025-7-1',
  ]);

  // 좋아요 누름 숫자를 보관할 스테이트
  const [like, setLike] = useState([0,0,0]);

  // 좋아요 처리 함수
  // function addLikes(num){
  //   setLike(like[num]+1)
  // }

  function changeTitle(){
    const newTitle = [... title];
    newTitle[0] = '여자코드추천';
    setTitle(newTitle);
  }

  // 모달페이지가 보이게/안보이게 작업하기위한 스테이트
  const [modal, setModal] = useState(false);

  // 직전 선택한 인덱스를 저장할 스테이트
  const [currentIndex, setCurrentIndex] = useState(null);


  // 제목 클릭 시 모달 보이기
  function handleTitle(index){
    // 조건 : 같은 제목을 클릭하면 나타나고 사라짐
    // 다른 제목을 클릭하면 그냥 보여야 하고..
    if(! modal) {
      //1. 현재 모달이 닫혀있으면 연다.
      setModal(true);
      setCurrentIndex(index);
    } else if(currentIndex === index){
      // 2. 같은 타이틀이 선택된 경우
      setModal(false);
    } else {
      setCurrentIndex(index);
    }
  }

  return (
    <div className='App'>
      <div className='black-bg'>
        React + Vite로 만드는 블로그
      </div>
      {/* <h4 style={{color: 'red', fontSize: '20px'}}>{post}</h4> */}

      {/* 타이틀 정렬하기 */}
      <button onClick={()=>{
        const sortedTitle = [...title].sort()
        setTitle(sortedTitle);
      }}>글 정렬하기</button>

      <div className='list'>
        {title.map((item, index)=>{
          return(
            <div key={index}>
              <h4 onClick={()=> handleTitle(index)}>
                    {title[index]}
                <span onClick={()=>{
                  const newLikes = [... like]
                  newLikes[index]++
                  setLike(newLikes)
                  }}>👍
                </span>{like[index]} 
              </h4>      
              <p>작성일 : {createDate[index]}</p>
            </div>  
          )
        })}           
      </div>

      {/* 상세페이지 나타날 곳 */}
      {modal ? <Modal />: null }
    </div>
  )
}

export default App
