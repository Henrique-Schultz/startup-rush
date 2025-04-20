import "./ButtonSquare.css";

function ButtonSquare({text, onClick}){
    return (
        <button className="button-square" onClick={onClick}>{text}</button>
    );
}

export default ButtonSquare;