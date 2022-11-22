import "./Header.css";

function Header() {
  const styleElement = {
    display: "flex",
    fontSize: 56,
    lineSpacing: 5,
    //Notice how the properties with multiple words in name are converted into
    //camelCase objects.
    color: "#ae2356",
    // The color code is also in double quotes as its a string.
    letterSpacing: 18,
  };

  return (
    <div className="nav">
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
      </ul>

      <h1 style={styleElement}>This is some text here</h1>
    </div>
  );
}

export default Header;
