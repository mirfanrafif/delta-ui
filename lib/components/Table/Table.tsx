import { ReactElement } from 'react';

import styles from './Table.module.css';

type TableHeaderProps = {
  title: string;
};

type TableProps = {
  header: TableHeaderProps[];
  EmptyComponent?: ReactElement;
};

const Table: React.FC<TableProps> = (props) => {
  return (
    <table className={styles['main-table']}>
      <thead>
        <tr className={styles['table-head-tr']}>
          {props.header.map((header, index) => {
            return (
              <td scope="col" key={`header-${index}`}>
                {header.title}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-white rounded-b-lg">
        {props.EmptyComponent && (
          <tr>
            <td
              colSpan={props.header.length}
              className={styles['table-content']}
            >
              {props.EmptyComponent}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
