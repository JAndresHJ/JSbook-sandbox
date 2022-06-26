import { useAppSelector } from '../../hooks/useAppSelector';
import { Fragment } from 'react';

// Components
import AddCell from '../AddCell';
import CellListItem from './CellListItem';

const CellList: React.FC = () => {
  const cells = useAppSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderCells}
    </div>
  );
};

export default CellList;
