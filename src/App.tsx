import React, { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="box">
      <div className="info">
        <div className="date-box">
          <span className="date">2022년 11월 28일</span>
          <span className="day">화요일</span>
        </div>
        <span className="remainder">할 일 2개 남음</span>
      </div>
      <div className="todo-list">todo목록 들어가는 곳</div>
      <button>플러스 버튼</button>
    </div>
  );
};

export default App;
