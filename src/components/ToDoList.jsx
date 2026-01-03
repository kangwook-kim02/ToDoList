import "./ToDoList.css"
import { useState } from "react"

const ToDoList = ({ items, setItems }) => {
    const today = new Date();

    const onClickDelete = (itemId) => {
        setItems(prev => prev.filter(i => i.id !== itemId));
    }

    const [search, setSearch] = useState("");

    const filteredItems = search.trim() === "" ? items : items.filter(i => i.content.includes(search));
    return (
        <div>
            <h4>Todo List 🌱</h4>
            <input
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                aria-label="할 일 검색"
                placeholder="검색어를 입력하세요"
                style={
                    {
                        width: "100%",
                        border: "none",
                        borderBottom: "1px solid rgb(220,220,220)",
                        padding: "15px",
                        marginBottom: "14px",
                    }
                } />
            {filteredItems.map(item => (
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
        </div>
    )
}

export default ToDoList;