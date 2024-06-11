import reactImg from "../../assets/react-core-concepts.png";
import './Header.css'

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const desciption =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  //When returning multiline code, wrap the code in parenthesis
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* Dynamic values are added using curly braces and you can add any javascript values to it */}
        {desciption} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}