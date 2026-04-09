import { useState, useCallback, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import QuestionFlow from './components/QuestionFlow';
import AnalyzingScreen from './components/AnalyzingScreen';
import ResultScreen from './components/ResultScreen';
import { computeResult } from './logic/scoring';
import { decodeShareHash } from './logic/share';

export default function App() {
  const [screen, setScreen] = useState('intro');
  const [result, setResult] = useState(null);
  const [testKey, setTestKey] = useState(0);
  const [pendingAnswers, setPendingAnswers] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#r=')) {
      const decoded = decodeShareHash(hash.slice(3));
      if (decoded) {
        setResult(decoded);
        setScreen('result');
      }
    }
  }, []);

  const handleStart = useCallback(() => {
    window.location.hash = '';
    setTestKey(k => k + 1);
    setScreen('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleComplete = useCallback((answers) => {
    setPendingAnswers(answers);
    setScreen('analyzing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAnalyzeDone = useCallback(() => {
    if (pendingAnswers) {
      setResult(computeResult(pendingAnswers));
      setPendingAnswers(null);
    }
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pendingAnswers]);

  const handleHome = useCallback(() => {
    window.location.hash = '';
    setScreen('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="shell">
      {screen === 'intro' && <IntroScreen onStart={handleStart} />}
      {screen === 'test' && (
        <QuestionFlow key={testKey} onComplete={handleComplete} />
      )}
      {screen === 'analyzing' && (
        <AnalyzingScreen onDone={handleAnalyzeDone} />
      )}
      {screen === 'result' && result && (
        <ResultScreen result={result} onRestart={handleStart} onHome={handleHome} />
      )}
    </div>
  );
}
