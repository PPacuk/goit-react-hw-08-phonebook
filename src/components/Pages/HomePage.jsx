import css from './HomePage.module.css';

export const Home = () => {
  return (
    <div className={css.homeContainer}>
      <div className={css.homeBox}>
        Welcome on phonebook, please login or register to create your own list!
      </div>
    </div>
  );
};
