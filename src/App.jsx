import useHashRoute from './useHashRoute';
import HomePage from './components/HomePage';
import TestFlow from './components/TestFlow';
import { CASES } from '../cases/registry';

const caseMap = Object.fromEntries(CASES.map(c => [c.meta.id, c]));

export default function App() {
  const { path, navigate } = useHashRoute();

  // path: "/" | "/sbti" | "/sbti/test" | "/sbti/result"
  const segments = path.replace(/^\//, '').split('/');
  const caseId = segments[0];
  const subPage = segments[1] || '';
  const caseData = caseMap[caseId];

  return (
    <div className="shell">
      {caseData ? (
        <TestFlow key={caseId} caseData={caseData} subPage={subPage} navigate={navigate} />
      ) : (
        <HomePage navigate={navigate} />
      )}
    </div>
  );
}
