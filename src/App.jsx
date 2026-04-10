import { useMemo } from 'react';
import useHashRoute from './useHashRoute';
import useCases from './useCases';
import HomePage from './components/HomePage';
import TestFlow from './components/TestFlow';

export default function App() {
  const { path, navigate } = useHashRoute();
  const { cases, error } = useCases();

  const caseMap = useMemo(
    () => cases ? Object.fromEntries(cases.map(c => [c.meta.id, c])) : {},
    [cases]
  );

  // path: "/" | "/c/sbti" | "/c/sbti/test" | "/c/sbti/result"
  const segments = path.replace(/^\//, '').split('/');
  const isCase = segments[0] === 'c';
  const caseId = isCase ? segments[1] : '';
  const subPage = isCase ? (segments[2] || '') : '';
  const caseData = caseMap[caseId];

  if (error) return <div className="shell"><p>加载失败，请刷新重试</p></div>;
  if (!cases) return <div className="shell"><p>加载中…</p></div>;

  return (
    <div className="shell">
      {caseData ? (
        <TestFlow key={caseId} caseData={caseData} allCases={cases} subPage={subPage} navigate={navigate} />
      ) : (
        <HomePage cases={cases} navigate={navigate} />
      )}
    </div>
  );
}
