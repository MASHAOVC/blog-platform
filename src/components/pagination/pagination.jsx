import styles from './pagination.module.scss';
import { Pagination as AntdPagination } from 'antd';

export const Pagination = (props) => {
  const { page, setPage, articlesCount } = props;

  return (
    <AntdPagination
      className={styles['pagination']}
      align="center"
      current={page}
      total={articlesCount}
      showSizeChanger={false}
      onChange={setPage}
    ></AntdPagination>
  );
};
