const headingStyle = {
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: "3rem",
    color: "#edc84b",
    textAlign: "center",
    marginBottom: "3rem",
};

function Header() {
    return (
        <div>
            <h1 style={headingStyle}>fast React Pizza co.</h1>
        </div>
    );
}
export default Header;