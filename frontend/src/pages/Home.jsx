import image from "../assets/food.jpg";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="image">
        <img src={image} alt="food" />
        <div className="content">
          <h1>Welcome to Brewberry Cafe</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque, nisl nec luctus lacinia, libero lacus imperdiet odio,
            id aliquet justo libero sit amet justo. Donec ac urna nec nisl
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
