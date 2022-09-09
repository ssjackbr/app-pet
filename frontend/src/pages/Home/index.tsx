import Navbar from 'components/Navbar';
import { ReactComponent as MainImage} from 'assets/images/main-image.svg';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
                <h1>Agora não tem mais desculpas para cuidado, carinho e prevenção!</h1>
                <p className="p-content">Aproveite as vantagens do PetShop em sua casa garantindo o bom humor e o bem estar do seu Pet</p>
                <div className="home-content-container-btn"><ButtonIcon/></div>
          </div>
          <div className="home-image-container">
              <MainImage/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
