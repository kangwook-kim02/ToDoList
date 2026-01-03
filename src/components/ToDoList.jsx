import "./ToDoList.css"

const ToDoList = () => {
    const today = new Date();

    return <div>
        <h4>Todo List 🌱</h4>
        <input placeholder="검색어를 입력하세요" style={
            {
                width: "100%",
                border: "none",
                borderBottom: "1px solid rgb(220,220,220)",
                padding: "15px 0",
                marginBottom: "14px",
            }
        } />
        <div className="TodoItem">
            <input readOnly type="checkbox" style={{
                width: "20px"
            }} />
            <div className="content">React 공부하기</div>
            <div className="date">{today.getFullYear()}. {today.getMonth() + 1}. {today.getDate()} </div>
            <button>삭제</button>
        </div>
        <div className="TodoItem">
            <input readOnly type="checkbox" style={{
                width: "20px"
            }} />
            <div className="content">빨래하기</div>
            <div className="date">{today.getFullYear()}. {today.getMonth() + 1}. {today.getDate()} </div>
            <button>삭제</button>
        </div>
        <div className="TodoItem">
            <input readOnly type="checkbox" style={{
                width: "20px"
            }} />
            <div className="content">노래연습하기</div>
            <div className="date">{today.getFullYear()}. {today.getMonth() + 1}. {today.getDate()} </div>
            <button>삭제</button>
        </div>
    </div>
}

export default ToDoList;