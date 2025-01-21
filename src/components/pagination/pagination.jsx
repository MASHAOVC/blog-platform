import styles from './pagination.module.scss';
import { Pagination as AntdPagination } from 'antd';

export const Pagination = () => {
  return (
    <AntdPagination className={styles['pagination']} align="center" defaultCurrent={1} total={50}></AntdPagination>
  );
};
