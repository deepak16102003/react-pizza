const Image = {
    height: "9rem",
};

const card = {
    display: "flex",
    gap: "1rem",
    padding: "2rem",
};

const main = {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
};

const count = {
    marginTop: "auto",
};

const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

function Pizza(props) {
    const { name, ingredients, price, photoName, soldOut } = props.pizzaData;
    return (
        <div style={main}>
            <div style={!soldOut ? card : { ...card, filter: "grayscale(1)" }}>
                <div>
                    <img style={Image} src={`./${photoName}`} alt={`${name}`} />
                </div>
                <div style={detailsStyle}>
                    <p>{name}</p>
                    <p>{ingredients}</p>
                    <p style={count}>{soldOut ? "SOLDOUT" : `$ ${price}`}</p>
                </div>
            </div>
        </div>
    );
}
export default Pizza;
