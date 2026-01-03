let id = 4;

const Add = ({ content, setContent, items, setItems }) => {
    // 스프레드 연산을 통한 item list 추가
    const onClickButton = (e) => {

        // content 값이 비어있는 경우 List에 추가하지 않음
        if (content == "") {
            return;
        }

        setItems([
            ...items,
            { id: id, content: content }
        ])
        id++;
        setContent("");
    }

    // 키 입력을 받을 때마다 content 값 변경
    const onChangeInput = (e) => {
        setContent(e.target.value);
    }

    return (
        <div
            style={{
                display: "flex",
                gap: "10px"
            }}>
            <input
                placeholder="새로운 Todo..."
                value={content}
                onChange={onChangeInput}
                style={{
                    flex: "1",
                    padding: "15px",
                    border: "1px solid rgb(220,220,220)",
                    borderRadius: "5px",
                }} />
            <button
                onClick={onClickButton}
                style={{
                    width: "80px",
                    backgroundColor: "#2593FF",
                    border: "none",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>추가</button>
        </div>
    )
}

export default Add;