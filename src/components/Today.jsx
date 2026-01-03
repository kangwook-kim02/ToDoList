const Today = () => {
    let today = new Date();

    return (
        <div>
            <h3>오늘은 📅</h3>
            <h1 style={{ color: "#2593FF" }}>{today.toDateString()}</h1>
        </div>
    )
}

export default Today;