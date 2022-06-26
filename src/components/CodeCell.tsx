import { useState, useEffect } from 'react';
import { Cell, cellsActions } from '../state';
import { useAppDispatch } from '../hooks/useAppSelector';
import bundle from '../bundler';

// Components
import CodeEditor from './CodeEditor/CodeEditor';
import Resizable from './Resizable';
import Preview from './Preview/Preview';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const onChange = (value: string) => {
    dispatch(cellsActions.updateCell({ id: cell.id, content: value }));
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output?.code!);
      setError(output?.error!);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction='vertical'>
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction='horizontal'>
          <CodeEditor initialValue={cell.content} onChange={onChange} />
        </Resizable>
        <Preview error={error} code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
