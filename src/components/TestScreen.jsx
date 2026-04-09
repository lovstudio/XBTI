import { useState, useMemo } from 'react';
import { questions, specialQuestions } from '../data/questions';
import { dimensionMeta } from '../data/dimensions';
import { shuffle } from '../logic/scoring';

export default function TestScreen({ onSubmit, onBack }) {
  const [answers, setAnswers] = useState({});

  const shuffledQuestions = useMemo(() => {
    const shuffled = shuffle(questions);
    const insertIndex = Math.floor(Math.random() * shuffled.length) + 1;
    return [
      ...shuffled.slice(0, insertIndex),
      specialQuestions[0],
      ...shuffled.slice(insertIndex)
    ];
  }, []);

  const visibleQuestions = useMemo(() => {
    const visible = [...shuffledQuestions];
    const gateIndex = visible.findIndex(q => q.id === 'drink_gate_q1');
    if (gateIndex !== -1 && answers['drink_gate_q1'] === 3) {
      visible.splice(gateIndex + 1, 0, specialQuestions[1]);
    }
    return visible;
  }, [shuffledQuestions, answers]);

  const done = visibleQuestions.filter(q => answers[q.id] !== undefined).length;
  const total = visibleQuestions.length;
  const percent = total ? (done / total) * 100 : 0;
  const complete = done === total && total > 0;

  function handleAnswer(questionId, value) {
    setAnswers(prev => {
      const next = { ...prev, [questionId]: value };
      if (questionId === 'drink_gate_q1' && value !== 3) {
        delete next['drink_gate_q2'];
      }
      return next;
    });
  }

  function getMetaLabel(q) {
    if (q.special) return '补充题';
    return '维度已隐藏';
  }

  return (
    <section className="screen active">
      <div className="test-wrap card">
        <div className="topbar">
          <div className="progress">
            <span style={{ width: `${percent}%` }} />
          </div>
          <div className="progress-text">{done} / {total}</div>
        </div>

        <div className="question-list">
          {visibleQuestions.map((q, index) => (
            <article key={q.id} className="question">
              <div className="question-meta">
                <div className="badge">第 {index + 1} 题</div>
                <div>{getMetaLabel(q)}</div>
              </div>
              <div className="question-title">{q.text}</div>
              <div className="options">
                {q.options.map((opt, i) => {
                  const code = ['A', 'B', 'C', 'D'][i] || String(i + 1);
                  return (
                    <label key={i} className="option">
                      <input
                        type="radio"
                        name={q.id}
                        checked={answers[q.id] === opt.value}
                        onChange={() => handleAnswer(q.id, opt.value)}
                      />
                      <div className="option-code">{code}</div>
                      <div>{opt.label}</div>
                    </label>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <div className="actions-bottom">
          <div className="hint">
            {complete
              ? '都做完了。现在可以把你的电子魂魄交给结果页审判。'
              : '全选完才会放行。世界已经够乱了，起码把题做完整。'}
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={onBack}>返回首页</button>
            <button
              className="btn-primary"
              disabled={!complete}
              onClick={() => onSubmit(answers)}
            >
              提交并查看结果
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
