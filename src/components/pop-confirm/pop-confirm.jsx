import styles from './pop-confirm.module.scss';

export const PopConfirm = () => {
  return (
    <div className={styles['pop-confirm']}>
      <img className={styles['pop-triangle']} src="src/assets/pop-triangle.svg" />
      <div className={styles['content']}>
        <span className={styles['confirm-text-wrapper']}>
          <img className={styles['confirm-text-wrapper__icon']} src="src/assets/pop-circle-icon.svg" />
          Are you sure to delete this article?
        </span>
        <div className={styles['buttons-wrapper']}>
          <button className={`${styles['buttons-wrapper__button-no']} ${styles['buttons-wrapper__button']}`}>No</button>
          <button className={`${styles['buttons-wrapper__button-yes']} ${styles['buttons-wrapper__button']}`}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
