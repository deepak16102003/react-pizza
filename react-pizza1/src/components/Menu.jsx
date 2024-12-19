import Pizza from "./Pizza";
import data from "../data/data.js";

const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    marginTop: "3rem",
};

const menuHeader = {
    textAlign: "center",
};

const menuHeading = {
    textTransform: "uppercase",
    padding: "0.6rem",
    fontWeight: "400",
    borderTop: "2px solid #27272a",
    borderBottom: "2px solid #27272a",
    display: "inline-block",
    marginBottom: "3rem",
};

function Menu() {
    return (
        <div>
            <div style={menuHeader}>
                <h2 style={menuHeading}>Our menu</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero incidunt molestiae suscipit magni debitis hic
                    repudiandae nostrum pariatur voluptates? At sequi id culpa,
                    provident quidem nemo nobis expedita placeat aut.
                </p>
            </div>

            <div style={menuBoxStyle}>
                {data.map(function (pizzaData) {
                    return <Pizza pizzaData={pizzaData} key={pizzaData.name} />;
                })}
            </div>
        </div>
    );
}

export default Menu;
