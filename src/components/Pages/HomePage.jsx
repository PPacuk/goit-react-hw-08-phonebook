import ReactTyped from 'react-typed';
import css from './HomePage.module.css';

export const Home = () => {
  return (
    <div className={css.homeContainer}>
      <div className={css.homeBox}>
        <ReactTyped strings={['Welcome on phonebook, please login or register to create your own list!']} typeSpeed={50} loop={false} />
        
      </div>
    </div>
  );
};
