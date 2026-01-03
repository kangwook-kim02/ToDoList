import "./ToDoList.css"

const ToDoList = ({ items, setItems }) => {
    const today = new Date();

    const onClickDelete = (itemId) => {
        setItems(items.filter(i => i.id !== itemId));
    }

    return (
        <div>
            <h4>Todo List 🌱</h4>
            <input
                aria-label="할 일 검색"
                placeholder="검색어를 입력하세요"
                style={
                    {
                        width: "100%",
                        border: "none",
                        borderBottom: "1px solid rgb(220,220,220)",
                        padding: "15px 0",
                        marginBottom: "14px",
                    }
                } />
            {items.map(item => (
                <div key={item.id}
                    className="TodoItem">
                    <input readOnly type="checkbox" style={{
                        width: "20px"
                    }} />
                    <div className="content">{item.content}</div>
                    <div className="date">{today.getFullYear()}. {today.getMonth() + 1}. {today.getDate()} </div>
                    <button
                        onClick={() => onClickDelete(item.id)}>
                        삭제
                    </button>
                </div>
            ))
            }

        </div >
    )
}

export default ToDoList;