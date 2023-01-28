import styles from './Banner.module.css';

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Best</span>
        <span className={styles.title2}>Coffee Shops</span>
        <span className={styles.title1}>around...</span>
      </h1>
      <p className={styles.subTitle}>Discover you local shops</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
