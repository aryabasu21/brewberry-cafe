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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            reiciendis impedit laborum quibusdam nihil beatae distinctio ratione
            eos voluptatibus sed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
