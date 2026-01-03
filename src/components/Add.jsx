const Add = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: "10px"
                }}>
                <input placeholder="새로운 Todo..." style={{
                    flex: "1",
                    padding: "15px",
                    border: "1px solid rgb(220,220,220)",
                    borderRadius: "5px",
                }} />
                <button style={{
                    width: "80px",
                    backgroundColor: "#2593FF",
                    border: "none",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>추가</button>
            </div>
        </>
    )
}

export default Add;