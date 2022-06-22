import { useState, useEffect } from 'react';
import bundle from '../bundler';

// Components
import CodeEditor from './CodeEditor/CodeEditor';
import Resizable from './Resizable';
import Preview from './Preview/Preview';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output?.code!);
      setError(output?.error!);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue='const a = 1;'
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview error={error} code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
