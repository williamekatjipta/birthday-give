import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const BIRTHDAY_PASSWORD = import.meta.env.VITE_BIRTHDAY_PASSWORD || '211001';
const AUTO_UNLOCK = import.meta.env.VITE_AUTO_UNLOCK === 'true';
const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'delete', '0', 'enter'];

const FLOWERS = [
  { x: -7, y: -9, size: 25, delay: 0, rotate: -18, depth: 1 },
  { x: 10, y: -12, size: 21, delay: .12, rotate: 11, depth: 2 },
  { x: 25, y: -8, size: 23, delay: .24, rotate: -8, depth: 1 },
  { x: 41, y: -13, size: 26, delay: .36, rotate: 15, depth: 3 },
  { x: 60, y: -8, size: 22, delay: .48, rotate: -12, depth: 1 },
  { x: 75, y: -12, size: 24, delay: .6, rotate: 8, depth: 2 },
  { x: 91, y: -7, size: 25, delay: .72, rotate: -15, depth: 1 },
  { x: -10, y: 13, size: 24, delay: .22, rotate: 17, depth: 2 },
  { x: 4, y: 20, size: 19, delay: .54, rotate: -9, depth: 3 },
  { x: 18, y: 17, size: 21, delay: .82, rotate: 12, depth: 2 },
  { x: 72, y: 17, size: 20, delay: .92, rotate: -11, depth: 3 },
  { x: 86, y: 20, size: 22, delay: .68, rotate: 8, depth: 2 },
  { x: 98, y: 13, size: 24, delay: .4, rotate: -15, depth: 1 },
  { x: -9, y: 38, size: 23, delay: .7, rotate: -11, depth: 1 },
  { x: 8, y: 43, size: 18, delay: 1.02, rotate: 14, depth: 3 },
  { x: 22, y: 38, size: 17, delay: 1.3, rotate: -7, depth: 4 },
  { x: 70, y: 39, size: 17, delay: 1.42, rotate: 9, depth: 4 },
  { x: 85, y: 43, size: 19, delay: 1.1, rotate: -13, depth: 3 },
  { x: 99, y: 39, size: 23, delay: .8, rotate: 10, depth: 1 },
  { x: -8, y: 63, size: 24, delay: .94, rotate: 13, depth: 2 },
  { x: 7, y: 70, size: 20, delay: 1.18, rotate: -9, depth: 1 },
  { x: 21, y: 68, size: 18, delay: 1.5, rotate: 11, depth: 3 },
  { x: 73, y: 68, size: 18, delay: 1.62, rotate: -12, depth: 3 },
  { x: 87, y: 70, size: 20, delay: 1.28, rotate: 8, depth: 2 },
  { x: 99, y: 62, size: 23, delay: 1.04, rotate: -10, depth: 1 },
  { x: 13, y: 86, size: 23, delay: 1.36, rotate: -6, depth: 1 },
  { x: 42, y: 82, size: 25, delay: 1.66, rotate: 9, depth: 2 },
  { x: 73, y: 86, size: 23, delay: 1.48, rotate: -13, depth: 1 },
  { x: 2, y: 4, size: 14, delay: .86, rotate: 19, depth: 4 },
  { x: 34, y: 5, size: 17, delay: 1.04, rotate: -16, depth: 4 },
  { x: 68, y: 4, size: 13, delay: 1.2, rotate: 17, depth: 4 },
  { x: 91, y: 5, size: 16, delay: .96, rotate: -19, depth: 3 },
  { x: -2, y: 27, size: 15, delay: 1.28, rotate: 8, depth: 4 },
  { x: 29, y: 22, size: 14, delay: 1.52, rotate: -14, depth: 5 },
  { x: 59, y: 20, size: 18, delay: 1.68, rotate: 12, depth: 4 },
  { x: 94, y: 29, size: 14, delay: 1.38, rotate: -7, depth: 5 },
  { x: 13, y: 53, size: 13, delay: 1.72, rotate: 18, depth: 5 },
  { x: 28, y: 48, size: 12, delay: 1.9, rotate: -11, depth: 6 },
  { x: 62, y: 50, size: 15, delay: 2.02, rotate: 15, depth: 5 },
  { x: 78, y: 54, size: 12, delay: 1.82, rotate: -18, depth: 6 },
  { x: -1, y: 78, size: 16, delay: 1.46, rotate: 9, depth: 4 },
  { x: 31, y: 74, size: 14, delay: 1.94, rotate: -15, depth: 5 },
  { x: 62, y: 76, size: 17, delay: 2.08, rotate: 13, depth: 4 },
  { x: 94, y: 80, size: 15, delay: 1.58, rotate: -9, depth: 5 },
  { x: 18, y: 6, size: 11, delay: 1.12, rotate: -20, depth: 6 },
  { x: 52, y: 3, size: 15, delay: 1.34, rotate: 16, depth: 5 },
  { x: 82, y: 7, size: 10, delay: 1.56, rotate: -12, depth: 6 },
  { x: 10, y: 31, size: 12, delay: 1.44, rotate: 14, depth: 6 },
  { x: 38, y: 25, size: 11, delay: 1.76, rotate: -17, depth: 7 },
  { x: 52, y: 27, size: 13, delay: 1.88, rotate: 19, depth: 6 },
  { x: 80, y: 30, size: 11, delay: 1.62, rotate: -10, depth: 7 },
  { x: 3, y: 56, size: 10, delay: 1.7, rotate: 17, depth: 7 },
  { x: 20, y: 61, size: 12, delay: 1.98, rotate: -14, depth: 6 },
  { x: 35, y: 57, size: 10, delay: 2.16, rotate: 11, depth: 8 },
  { x: 56, y: 59, size: 12, delay: 2.24, rotate: -18, depth: 7 },
  { x: 70, y: 62, size: 10, delay: 2.06, rotate: 15, depth: 8 },
  { x: 89, y: 58, size: 13, delay: 1.84, rotate: -12, depth: 6 },
  { x: 17, y: 77, size: 10, delay: 1.78, rotate: 13, depth: 7 },
  { x: 50, y: 73, size: 12, delay: 2.18, rotate: -16, depth: 7 },
  { x: 82, y: 78, size: 11, delay: 1.92, rotate: 18, depth: 6 },
  { x: -5, y: 2, size: 12, delay: 1.26, rotate: 12, depth: 7 },
  { x: 6, y: 10, size: 10, delay: 1.42, rotate: -17, depth: 8 },
  { x: 29, y: 9, size: 13, delay: 1.58, rotate: 18, depth: 7 },
  { x: 46, y: 12, size: 10, delay: 1.74, rotate: -13, depth: 8 },
  { x: 71, y: 10, size: 12, delay: 1.9, rotate: 16, depth: 7 },
  { x: 96, y: 7, size: 11, delay: 1.52, rotate: -19, depth: 8 },
  { x: -4, y: 21, size: 13, delay: 1.48, rotate: 15, depth: 7 },
  { x: 18, y: 27, size: 10, delay: 1.72, rotate: -12, depth: 8 },
  { x: 32, y: 34, size: 12, delay: 1.96, rotate: 17, depth: 8 },
  { x: 61, y: 34, size: 10, delay: 2.12, rotate: -16, depth: 8 },
  { x: 76, y: 27, size: 13, delay: 1.86, rotate: 11, depth: 7 },
  { x: 97, y: 22, size: 10, delay: 1.64, rotate: -14, depth: 8 },
  { x: -5, y: 48, size: 12, delay: 1.76, rotate: -18, depth: 8 },
  { x: 27, y: 63, size: 11, delay: 2.08, rotate: 14, depth: 8 },
  { x: 43, y: 66, size: 9, delay: 2.3, rotate: -11, depth: 9 },
  { x: 59, y: 66, size: 12, delay: 2.36, rotate: 17, depth: 8 },
  { x: 78, y: 65, size: 10, delay: 2.02, rotate: -15, depth: 8 },
  { x: 98, y: 48, size: 13, delay: 1.82, rotate: 12, depth: 7 },
  { x: 4, y: 87, size: 12, delay: 1.68, rotate: -16, depth: 7 },
  { x: 28, y: 88, size: 10, delay: 2.04, rotate: 18, depth: 8 },
  { x: 53, y: 86, size: 13, delay: 2.24, rotate: -13, depth: 7 },
  { x: 66, y: 90, size: 9, delay: 2.14, rotate: 16, depth: 9 },
  { x: 86, y: 88, size: 12, delay: 1.94, rotate: -17, depth: 8 },
  { x: 98, y: 77, size: 10, delay: 1.72, rotate: 13, depth: 8 },
  { x: -3, y: 9, size: 15, delay: .38, rotate: -12, depth: 3, filler: true },
  { x: 14, y: 12, size: 12, delay: .62, rotate: 17, depth: 5, filler: true },
  { x: 31, y: 15, size: 14, delay: .86, rotate: -15, depth: 4, filler: true },
  { x: 48, y: 8, size: 13, delay: .74, rotate: 11, depth: 6, filler: true },
  { x: 64, y: 14, size: 15, delay: .96, rotate: -18, depth: 4, filler: true },
  { x: 83, y: 12, size: 12, delay: .7, rotate: 14, depth: 5, filler: true },
  { x: 98, y: 9, size: 14, delay: .48, rotate: -10, depth: 3, filler: true },
  { x: 5, y: 30, size: 13, delay: .82, rotate: 16, depth: 5, filler: true },
  { x: 22, y: 27, size: 11, delay: 1.08, rotate: -13, depth: 7, filler: true },
  { x: 37, y: 31, size: 14, delay: 1.22, rotate: 18, depth: 6, filler: true },
  { x: 53, y: 28, size: 12, delay: 1.14, rotate: -16, depth: 7, filler: true },
  { x: 69, y: 31, size: 14, delay: 1.3, rotate: 12, depth: 6, filler: true },
  { x: 85, y: 28, size: 11, delay: 1.02, rotate: -14, depth: 7, filler: true },
  { x: 97, y: 32, size: 13, delay: .9, rotate: 17, depth: 5, filler: true },
  { x: 3, y: 53, size: 14, delay: 1.12, rotate: -18, depth: 5, filler: true },
  { x: 18, y: 48, size: 11, delay: 1.38, rotate: 13, depth: 7, filler: true },
  { x: 34, y: 52, size: 13, delay: 1.54, rotate: -11, depth: 8, filler: true },
  { x: 58, y: 51, size: 12, delay: 1.62, rotate: 16, depth: 8, filler: true },
  { x: 75, y: 49, size: 13, delay: 1.46, rotate: -17, depth: 7, filler: true },
  { x: 92, y: 53, size: 14, delay: 1.2, rotate: 12, depth: 5, filler: true },
  { x: 8, y: 74, size: 13, delay: 1.34, rotate: 15, depth: 6, filler: true },
  { x: 26, y: 72, size: 11, delay: 1.68, rotate: -13, depth: 8, filler: true },
  { x: 43, y: 76, size: 14, delay: 1.84, rotate: 18, depth: 7, filler: true },
  { x: 61, y: 72, size: 12, delay: 1.76, rotate: -16, depth: 8, filler: true },
  { x: 78, y: 75, size: 14, delay: 1.58, rotate: 11, depth: 7, filler: true },
  { x: 95, y: 72, size: 13, delay: 1.42, rotate: -14, depth: 6, filler: true },
  { x: 18, y: 94, size: 13, delay: 1.52, rotate: 17, depth: 5, filler: true },
  { x: 82, y: 94, size: 14, delay: 1.66, rotate: -12, depth: 5, filler: true },
  { x: 2, y: 18, size: 11, delay: .64, rotate: 13, depth: 7, filler: true },
  { x: 19, y: 19, size: 13, delay: .88, rotate: -16, depth: 6, filler: true },
  { x: 42, y: 19, size: 10, delay: 1.02, rotate: 18, depth: 8, filler: true },
  { x: 73, y: 19, size: 12, delay: .94, rotate: -11, depth: 7, filler: true },
  { x: 92, y: 18, size: 11, delay: .72, rotate: 15, depth: 7, filler: true },
  { x: 13, y: 40, size: 12, delay: 1.16, rotate: -17, depth: 8, filler: true },
  { x: 28, y: 42, size: 10, delay: 1.34, rotate: 12, depth: 9, filler: true },
  { x: 46, y: 43, size: 11, delay: 1.5, rotate: -14, depth: 9, filler: true },
  { x: 62, y: 42, size: 10, delay: 1.44, rotate: 17, depth: 9, filler: true },
  { x: 82, y: 41, size: 12, delay: 1.24, rotate: -12, depth: 8, filler: true },
  { x: 13, y: 63, size: 11, delay: 1.4, rotate: 16, depth: 8, filler: true },
  { x: 31, y: 64, size: 12, delay: 1.62, rotate: -15, depth: 9, filler: true },
  { x: 48, y: 65, size: 10, delay: 1.78, rotate: 13, depth: 9, filler: true },
  { x: 67, y: 64, size: 12, delay: 1.7, rotate: -18, depth: 9, filler: true },
  { x: 86, y: 63, size: 11, delay: 1.48, rotate: 14, depth: 8, filler: true },
  { x: 8, y: 88, size: 12, delay: 1.52, rotate: -11, depth: 7, filler: true },
  { x: 48, y: 89, size: 13, delay: 1.86, rotate: 17, depth: 8, filler: true },
  { x: 93, y: 88, size: 12, delay: 1.6, rotate: -15, depth: 7, filler: true },
];

function Character({ compact = false, happy = false }) {
  return (
    <div className={`character-wrap ${compact ? 'character-wrap--compact' : ''} ${happy ? 'character-wrap--happy' : ''}`} aria-hidden="true">
      <div className="character-shadow" />
      <svg className="character" viewBox="0 0 260 280" role="img" aria-label="A cute pig holding a heart">
        <path className="pig-tail" d="M198 178c27-5 28 20 10 21-14 1-12-15-2-16" />
        <path className="ear ear--left" d="M77 81C54 73 50 48 65 39c16-9 29 12 34 29" />
        <path className="ear ear--right" d="M183 81c23-8 27-33 12-42-16-9-29 12-34 29" />
        <path className="body" d="M61 148c0-57 29-94 69-94s69 37 69 94v39c0 49-29 74-69 74s-69-25-69-74z" />
        <ellipse className="belly" cx="130" cy="188" rx="52" ry="62" />
        <path className="arm arm--left" d="M78 169c14 3 27 13 36 29" />
        <path className="arm arm--right" d="M182 169c-14 3-27 13-36 29" />
        <circle className="eye" cx="103" cy="119" r="5" />
        <circle className="eye" cx="157" cy="119" r="5" />
        <ellipse className="pig-snout" cx="130" cy="143" rx="30" ry="21" />
        <ellipse className="nostril" cx="119" cy="143" rx="3.5" ry="5" />
        <ellipse className="nostril" cx="141" cy="143" rx="3.5" ry="5" />
        <path className="pig-smile" d="M123 154q7 5 14 0" />
        <ellipse className="cheek" cx="88" cy="145" rx="12" ry="6" />
        <ellipse className="cheek" cx="172" cy="145" rx="12" ry="6" />
        <path className="hoof" d="M89 250v10m82-10v10" />
        <g className="heart">
          <path d="M130 224c-8-12-32-24-32-43 0-17 21-24 32-8 11-16 32-9 32 8 0 19-24 31-32 43z" />
        </g>
      </svg>
      <span className="spark spark--one">✦</span>
      <span className="spark spark--two">·</span>
    </div>
  );
}

function Sunflower({ flower }) {
  const backPetalCount = flower.filler ? 7 : 13;
  const frontPetalCount = flower.filler ? 9 : 17;
  const backPetals = Array.from({ length: backPetalCount }, (_, index) => index);
  const frontPetals = Array.from({ length: frontPetalCount }, (_, index) => index);
  const windDirection = flower.depth % 2 === 0 ? 1 : -1;
  const windAngle = flower.rotate % 2 === 0 ? 1.8 : -1.8;
  const style = {
    '--x': `${flower.x}%`,
    '--y': `${flower.y}%`,
    '--size': `${flower.size}vmin`,
    '--delay': `${flower.delay * .72}s`,
    '--tilt': `${flower.rotate}deg`,
    '--depth': flower.depth,
    '--wind-duration': `${5.6 + (Math.abs(flower.x) % 7) * .37}s`,
    '--wind-x': `${windDirection * 5}px`,
    '--wind-x-back': `${windDirection * -2}px`,
    '--wind-x-soft': `${windDirection * 1.5}px`,
    '--wind-angle': `${windAngle}deg`,
    '--wind-angle-back': `${windAngle * -.45}deg`,
    '--wind-angle-soft': `${windAngle * .3}deg`,
  };

  return (
    <div className={`sunflower ${flower.filler ? 'sunflower--filler' : ''}`} style={style} aria-hidden="true">
      <div className="sunflower__head">
        <div className="petal-ring petal-ring--back">
          {backPetals.map((petal) => <i key={petal} style={{ '--rotation': `${petal * (360 / backPetals.length)}deg` }} />)}
        </div>
        <div className="petal-ring petal-ring--front">
          {frontPetals.map((petal) => <i key={petal} style={{ '--rotation': `${petal * (360 / frontPetals.length) + 7}deg` }} />)}
        </div>
        <div className="sunflower__center"><span /></div>
      </div>
    </div>
  );
}

function FloralScene() {
  return (
    <div className="floral-scene" aria-hidden="true">
      <div className="warm-glow" />
      {FLOWERS.map((flower, index) => <Sunflower key={index} flower={flower} />)}
      <span className="petal petal--one" />
      <span className="petal petal--two" />
      <span className="petal petal--three" />
      <span className="petal petal--four" />
      <div className="floral-vignette" />
    </div>
  );
}

function PasswordDots({ length, error }) {
  return (
      <div className={`password-dots ${error ? 'password-dots--error' : ''}`} aria-label={`${length} of ${BIRTHDAY_PASSWORD.length} digits entered`}>
      {Array.from({ length: BIRTHDAY_PASSWORD.length }, (_, index) => (
        <span key={index} className={index < length ? 'is-filled' : ''} />
      ))}
    </div>
  );
}

function App() {
  const [scene, setScene] = useState('intro');
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [notice, setNotice] = useState('');
  const errorTimer = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setScene('password'), 2100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!AUTO_UNLOCK || scene !== 'password') return undefined;

    let typingTimer;
    const startTimer = window.setTimeout(() => {
      let digitCount = 0;
      typingTimer = window.setInterval(() => {
        digitCount += 1;
        setPin(BIRTHDAY_PASSWORD.slice(0, digitCount));

        if (digitCount === BIRTHDAY_PASSWORD.length) {
          window.clearInterval(typingTimer);
          window.setTimeout(() => {
            setScene('success');
            window.setTimeout(() => setScene('bloom'), 950);
            window.setTimeout(() => setScene('final'), 5450);
          }, 220);
        }
      }, 115);
    }, 450);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(typingTimer);
    };
  }, [scene]);

  useEffect(() => () => window.clearTimeout(errorTimer.current), []);

  const validate = (candidate) => {
    if (candidate.length !== BIRTHDAY_PASSWORD.length) return;
    if (candidate === BIRTHDAY_PASSWORD) {
      setScene('success');
      window.setTimeout(() => setScene('bloom'), 950);
      window.setTimeout(() => setScene('final'), 5450);
      return;
    }
    setError(true);
    errorTimer.current = window.setTimeout(() => {
      setError(false);
      setPin('');
    }, 600);
  };

  const pressKey = (key) => {
    if (error || scene !== 'password') return;
    if (key === 'delete') {
      setPin((value) => value.slice(0, -1));
      return;
    }
    if (key === 'enter') {
      validate(pin);
      return;
    }
    if (pin.length >= BIRTHDAY_PASSWORD.length) return;
    const nextPin = `${pin}${key}`;
    setPin(nextPin);
    if (nextPin.length === BIRTHDAY_PASSWORD.length) {
      window.setTimeout(() => validate(nextPin), 180);
    }
  };

  const handleStart = () => {
    setNotice('The next chapter is coming soon ♡');
    window.setTimeout(() => setNotice(''), 2600);
  };

  const isFloral = scene === 'bloom' || scene === 'final';

  return (
    <main className={`app app--${scene}`}>
      <div className="background-orb background-orb--one" />
      <div className="background-orb background-orb--two" />

      {(scene === 'intro' || scene === 'password' || scene === 'success' || scene === 'bloom') && (
        <section className={`opening ${scene !== 'intro' ? 'opening--gate' : ''} ${scene === 'bloom' ? 'opening--leaving' : ''}`}>
          <Character compact={scene !== 'intro'} happy={scene === 'success' || scene === 'bloom'} />

          {scene !== 'intro' && (
            <div className={`gate ${scene === 'success' || scene === 'bloom' ? 'gate--success' : ''}`}>
              <p className="eyebrow">You know what to do :)</p>
              <p className="hint">the most special date</p>
              <PasswordDots length={pin.length || (scene === 'success' ? BIRTHDAY_PASSWORD.length : 0)} error={error} />
              <div className={`keypad ${error ? 'keypad--error' : ''}`}>
                {KEYS.map((key) => (
                  <button
                    key={key}
                    className={`key ${key === 'delete' || key === 'enter' ? 'key--action' : ''}`}
                    type="button"
                    onClick={() => pressKey(key)}
                    disabled={scene !== 'password'}
                    aria-label={key === 'delete' ? 'Delete digit' : key === 'enter' ? 'Confirm password' : `Number ${key}`}
                  >
                    {key === 'delete' ? '⌫' : key === 'enter' ? '♡' : key}
                  </button>
                ))}
              </div>
              <p className="error-copy" role="status">{error ? 'Hmm, try to remember again ♡' : scene === 'success' || scene === 'bloom' ? 'Yes, that is it!' : '\u00a0'}</p>
            </div>
          )}
        </section>
      )}

      {isFloral && <FloralScene />}

      {scene === 'final' && (
        <section className="message-card">
          <span className="message-card__kicker">for you, today</span>
          <h1>On your special day,<br />there is something<br />I want to show you.</h1>
          <button className="start-button" type="button" onClick={handleStart}>Start <span>→</span></button>
          <p className={`notice ${notice ? 'notice--visible' : ''}`} role="status">{notice}</p>
        </section>
      )}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
