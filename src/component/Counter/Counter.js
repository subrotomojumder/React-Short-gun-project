const Counter = ({count, plusHandle, minusHandle}) => {
    return (
        <div>
            <h5>Counter part</h5>
            <h1>Count:{count}</h1>
            <button onClick={plusHandle}>Plus</button>
            <button onClick={minusHandle}>Minus</button>
        </div>
    );
};

export default Counter;