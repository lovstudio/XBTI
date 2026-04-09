import { useState, useMemo, useCallback } from 'react';
import { questions, specialQuestions } from '../data/questions';
import { shuffle } from '../logic/scoring';

export default function QuestionFlow({ onComplete }) {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animDir, setAnimDir] = useState('in');

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

  const total = visibleQuestions.length;
  const current = visibleQuestions[currentIndex];
  const percent = total ? (currentIndex / total) * 100 : 0;
  const isLast = currentIndex === total - 1;

  const handleAnswer = useCallback((questionId, value) => {
    setAnswers(prev => {
      const next = { ...prev, [questionId]: value };
      if (questionId === 'drink_gate_q1' && value !== 3) {
        delete next['drink_gate_q2'];
      }
      return next;
    });

    // Auto-advance after short delay
    setTimeout(() => {
      if (!isLast) {
        setAnimDir('out');
        setTimeout(() => {
          setCurrentIndex(i => i + 1);
          setAnimDir('in');
        }, 250);
      }
    }, 300);
  }, [isLast]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setAnimDir('out');
      setTimeout(() => {
        setCurrentIndex(i => i - 1);
        setAnimDir('in');
      }, 250);
    }
  }, [currentIndex]);

  const handleSubmit = useCallback(() => {
    // Check all answered
    const allAnswered = visibleQuestions.every(q => answers[q.id] !== undefined);
    if (allAnswered) {
      onComplete(answers);
    }
  }, [answers, visibleQuestions, onComplete]);

  if (!current) return null;

  const allAnswered = visibleQuestions.every(q => answers[q.id] !== undefined);
  const code = ['A', 'B', 'C', 'D'];

  return (
    <section className="screen active">
      <div className="test-wrap card">
        <div className="topbar">
          <div className="progress">
            <span style={{ width: `${percent}%` }} />
          </div>
          <div className="progress-text">{currentIndex + 1} / {total}</div>
        </div>

        <div className={`question-slide ${animDir === 'in' ? 'slide-in' : 'slide-out'}`}>
          <article className="question">
            <div className="question-meta">
              <div className="badge">第 {currentIndex + 1} 题</div>
              <div>{current.special ? '补充题' : '维度已隐藏'}</div>
            </div>
            <div className="question-title">{current.text}</div>
            <div className="options">
              {current.options.map((opt, i) => (
                <label key={i} className="option">
                  <input
                    type="radio"
                    name={current.id}
                    checked={answers[current.id] === opt.value}
                    onChange={() => handleAnswer(current.id, opt.value)}
                  />
                  <div className="option-code">{code[i] || String(i + 1)}</div>
                  <div>{opt.label}</div>
                </label>
              ))}
            </div>
          </article>
        </div>

        <div className="actions-bottom">
          <button
            className="btn-secondary"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            上一题
          </button>
          <div style={{ display: 'flex', gap: '12px' }}>
            {isLast && allAnswered && (
              <button className="btn-primary" onClick={handleSubmit}>
                查看结果
              </button>
            )}
            {!isLast && answers[current.id] !== undefined && (
              <button
                className="btn-primary"
                onClick={() => {
                  setAnimDir('out');
                  setTimeout(() => {
                    setCurrentIndex(i => i + 1);
                    setAnimDir('in');
                  }, 250);
                }}
              >
                下一题
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
