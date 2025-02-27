import styles from './pop-confirm.module.scss';

import triangleImage from '../../assets/pop-triangle.svg';
import circleImage from '../../assets/pop-circle-icon.svg';

export const PopConfirm = (props) => {
  const { setShowPopConfirm, onDelete } = props;

  return (
    <div className={styles['pop-confirm']} onClick={(event) => event.stopPropagation()}>
      <img className={styles['pop-triangle']} src={triangleImage} />
      <div className={styles['content']}>
        <span className={styles['confirm-text-wrapper']}>
          <img className={styles['confirm-text-wrapper__icon']} src={circleImage} />
          Are you sure to delete this article?
        </span>
        <div className={styles['buttons-wrapper']}>
          <button
            className={`${styles['buttons-wrapper__button-no']} ${styles['buttons-wrapper__button']}`}
            onClick={() => setShowPopConfirm(false)}
          >
            No
          </button>
          <button
            className={`${styles['buttons-wrapper__button-yes']} ${styles['buttons-wrapper__button']}`}
            onClick={() => onDelete()}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
