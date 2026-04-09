import { useState, useCallback } from 'react';
import IntroScreen from './components/IntroScreen';
import TestScreen from './components/TestScreen';
import ResultScreen from './components/ResultScreen';
import { computeResult } from './logic/scoring';

export default function App() {
  const [screen, setScreen] = useState('intro');
  const [result, setResult] = useState(null);
  const [testKey, setTestKey] = useState(0);

  const handleStart = useCallback(() => {
    setTestKey(k => k + 1);
    setScreen('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = useCallback((answers) => {
    setResult(computeResult(answers));
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleHome = useCallback(() => {
    setScreen('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="shell">
      {screen === 'intro' && <IntroScreen onStart={handleStart} />}
      {screen === 'test' && (
        <TestScreen key={testKey} onSubmit={handleSubmit} onBack={handleHome} />
      )}
      {screen === 'result' && result && (
        <ResultScreen result={result} onRestart={handleStart} onHome={handleHome} />
      )}
    </div>
  );
}
