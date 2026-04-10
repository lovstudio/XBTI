import { useState, useCallback } from 'react';
import CaseIntro from './CaseIntro';
import TestScreen from './TestScreen';
import ResultScreen from './ResultScreen';
import { computeResult } from '../logic/scoring';

export default function TestFlow({ caseData, subPage, navigate }) {
  const [result, setResult] = useState(null);
  const [testKey, setTestKey] = useState(0);

  const caseBase = '/' + caseData.meta.id;

  const handleStart = useCallback(() => {
    setTestKey(k => k + 1);
    setResult(null);
    navigate(caseBase + '/test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate, caseBase]);

  const handleSubmit = useCallback((answers) => {
    setResult(computeResult(answers, caseData));
    navigate(caseBase + '/result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [caseData, navigate, caseBase]);

  const handleHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleBack = useCallback(() => {
    navigate(caseBase);
  }, [navigate, caseBase]);

  if (subPage === 'test') {
    return <TestScreen key={testKey} caseData={caseData} onSubmit={handleSubmit} onBack={handleBack} />;
  }

  if (subPage === 'result' && result) {
    return <ResultScreen caseData={caseData} result={result} onRestart={handleStart} onHome={handleHome} />;
  }

  return <CaseIntro caseData={caseData} onStart={handleStart} navigate={navigate} />;
}
