function TodoHeader(){

    return(
        <header className="header">
        <div className="header-section">
            <h1 className="header-logo">TODO APP</h1>
            <div className="header-form">
                <button type="button" className="header-form-btn">
                    <img src="add_button.svg" alt="" class="header-form-img" />
                </button>
                <input type="text" className="header-form-text" placeholder="새 할 일을 입력해주세요."/>
            </div>
        </div>
    </header>
    );

}

export default TodoHeader;