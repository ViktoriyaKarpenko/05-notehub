import ReactPaginateLib from 'react-paginate';
import css from './Pagination.module.css';

type ReactPaginateType = typeof ReactPaginateLib;

const ReactPaginate = ((
  ReactPaginateLib as unknown as { default: ReactPaginateType }
).default ?? ReactPaginateLib) as ReactPaginateType;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={({ selected }: { selected: number }) =>
        onPageChange(selected + 1)
      }
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousLabel="«"
      nextLabel="»"
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
    />
  );
}
