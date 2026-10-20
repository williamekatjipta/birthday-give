import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import sunflowerReal from '../sunflower-real-top.svg';
import childhoodTwo from '../biography/2th.jpeg';
import childhoodSix from '../biography/6th.jpeg';
import childhoodSixTwo from '../biography/6th (2).jpeg';
import childhoodTrain from '../biography/WhatsApp Image 2026-10-12 at 21.53.46.jpeg';
import childhoodMascot from '../biography/WhatsApp Image 2026-10-12 at 21.53.48 (1).jpeg';
import childhoodGlasses from '../biography/WhatsApp Image 2026-10-12 at 21.53.48 (3).jpeg';
import childhoodPark from '../biography/WhatsApp Image 2026-10-12 at 21.53.49 (1).jpeg';
import childhoodSnoopy from '../biography/WhatsApp Image 2026-10-12 at 21.53.49 (3).jpeg';
import withDaddy from '../biography/With daddy.jpg';
import withMommy from '../biography/with mommy.jpeg';
import withSister from '../biography/with sister.jpeg';
import withSisterGrown from '../biography/with sister grown.jpeg';
import birthdayTwentyFive from '../biography/25 birthday.jpeg';
import finalBirthdayPhoto from '../C2409246.jpg';
import childhoodSong from '../biography/Still Held by Grace.mp3';
import wishEvaDaniel from '../wish/WhatsApp Video 2026-10-09 at 12.38.27.mp4';
import wishDaddy from '../wish/WhatsApp Video 2026-10-15 at 16.18.25.mp4';
import wishFeli from '../wish/sister-iphone.mp4';
import wishEllen from '../wish/ellen.mp4';
import wishMamaPapa from '../wish/mama & papa.mp4';
import wishAni from '../wish/ani-iphone.mp4';
import wishJesNat from '../wish/JesNat-iphone.mp4';
import wishEvaDanielAudio from '../wish/WhatsApp Video 2026-10-09 at 12.38.27-audio.m4a';
import wishDaddyAudio from '../wish/WhatsApp Video 2026-10-15 at 16.18.25-audio.m4a';
import wishFeliAudio from '../wish/sister-iphone-audio.m4a';
import wishEllenAudio from '../wish/ellen-audio.m4a';
import wishMamaPapaAudio from '../wish/mama & papa-audio.m4a';
import wishAniAudio from '../wish/ani-iphone-audio.m4a';
import wishJesNatAudio from '../wish/JesNat-iphone-audio.m4a';
import memorySong from '../withMe/web/backsound.mp3';

const memoryImageModules = import.meta.glob('../withMe/web/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

const BIRTHDAY_PASSWORD = import.meta.env.VITE_BIRTHDAY_PASSWORD || '211001';
const AUTO_UNLOCK = import.meta.env.VITE_AUTO_UNLOCK === 'true';
const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'delete', '0', 'enter'];
const BLOOM_START_DELAY = 950;
const MESSAGE_REVEAL_DELAY = 3900;
const CHILDHOOD_TRANSITION_DURATION = 950;
const WISHES_TRANSITION_DURATION = 1100;
const MEMORIES_TRANSITION_DURATION = 2200;
const VIDEO_WISHES = [
  { id: 'eva-daniel', from: 'Ce Eva & Ko Daniel', src: wishEvaDaniel, audio: wishEvaDanielAudio },
  { id: 'daddy', from: 'Daddy', src: wishDaddy, audio: wishDaddyAudio },
  { id: 'feli', from: 'Feli', src: wishFeli, audio: wishFeliAudio },
  { id: 'ellen', from: 'Ellen', src: wishEllen, audio: wishEllenAudio },
  { id: 'mama-papa', from: 'Mama & Papa', src: wishMamaPapa, audio: wishMamaPapaAudio },
  { id: 'ani', from: 'Ani', src: wishAni, audio: wishAniAudio },
  { id: 'jes-nat', from: 'JesNat', src: wishJesNat, audio: wishJesNatAudio },
];

const MEMORY_CAPTIONS = [
  'I’m so grateful our paths crossed—\nand that I get to have you in my life.',
  'Through every fiery mood and little sulk,\nyou are still you—and I cherish every side.',
  'You’ve already been through so much,\nwith more strength and grace than you realize.',
  'Whatever life brings next, remember:\nyou will never have to face it alone.',
  'I may not always get everything right,\nbut I’ll keep doing my best to stay beside you.',
];
const MEMORY_PHOTOS = Object.entries(memoryImageModules)
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([path, image], index) => ({
    id: path.split('/').pop(),
    image,
    alt: `A memory of us ${index + 1}`,
    highlight: index % 8 === 2,
    caption: MEMORY_CAPTIONS[Math.floor(index / 8) % MEMORY_CAPTIONS.length],
  }));

const CHILDHOOD_PAGES = [
  { image: childhoodTwo, label: 'little you', narration: 'Ini dia, anak pertama, putri pertama dan cinta pertama, dan kebahagiaan terbesar dari keluargamu' },
  { image: childhoodSix, label: 'a cute nose', narration: 'Dulu lucu yaa ternyataaa.. dan hidung kecilnya ternyata dari dulu kek gitu 😝' },
  { image: childhoodSixTwo, label: 'pinky girl', narration: 'Everything is pink, but say no to yellow.' },
  { image: childhoodTrain, label: 'bring happiness', narration: 'Kamu itu selalu bisa membawa aura positive dan kebahagiaan ke semua orang.' },
  { image: childhoodMascot, label: 'hokben lovers', narration: 'hmmm, dari dulu sampe sekarang hokben mulu kek daddy 🤭' },
  { image: childhoodSnoopy, label: 'little adventures', narration: 'Perjalanan hidupmu penuh dengan kenangan walaupun gak mudah...' },
  { image: childhoodPark, label: 'the you becoming you', narration: 'Mungkin dulu kamu merasa bingung dengan keadaanmu...', fit: 'contain' },
  { image: childhoodGlasses, label: 'a little older', narration: 'Tapi, semakin besar, semua yang kamu lewati perlahan membentukmu jadi pribadi yang lebih kuat.', fit: 'contain' },
  { image: withSister, label: 'sisters, from the start', narration: 'Tapi ingeten yaa, kamu gak sendirian kok...', fit: 'contain' },
  { image: withSisterGrown, label: 'still side by side', narration: 'Walaupun banyak perubahan kondisi, ada keluarga yang selalu ada.', fit: 'contain' },
  { image: withDaddy, label: 'with dad', narration: 'Dan, mereka sayang sama kamu dengan cara yang berbeda beda', fit: 'contain' },
  { image: withMommy, label: 'with mom', narration: 'Mereka selalu jaga kamu walaupun tidak secara fisik.', fit: 'contain' },

  { image: birthdayTwentyFive, label: 'twenty-five looks beautiful on you', narration: 'And here you are at twenty-five, still carrying every version of yourself, only brighter, braver, and more beautiful than ever.', fit: 'focus' },
];

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

function getFlowerViewport() {
  if (typeof window === 'undefined') return { width: 1440, height: 900, limit: 260 };
  const { innerWidth: width, innerHeight: height } = window;
  const limit = width <= 540 ? 190 : width <= 1024 ? 225 : 260;
  return { width, height, limit };
}

function halton(index, base) {
  let fraction = 1;
  let result = 0;
  let value = index;

  while (value > 0) {
    fraction /= base;
    result += fraction * (value % base);
    value = Math.floor(value / base);
  }

  return result;
}

function selectFlowers({ width, height, limit }) {
  const vmin = Math.min(width, height) / 100;
  const minimumDiameter = width <= 540 ? 32 : 46;
  const specs = Array.from({ length: limit }, (_, index) => {
    const seed = FLOWERS[index % FLOWERS.length];
    const size = Math.max(6, Math.min(15, seed.size * .5 + ((index * 7) % 3)));
    return { seed, size, order: index };
  }).sort((a, b) => b.size - a.size);

  const placed = [];

  specs.forEach(({ seed, size, order }) => {
    const diameter = Math.max(minimumDiameter, size * vmin);
    let bestCandidate = null;
    let bestClearance = -Infinity;

    for (let attempt = 0; attempt < 180; attempt += 1) {
      const sequence = 1 + order * 193 + attempt * 17;
      const centerX = halton(sequence, 2) * width;
      const centerY = halton(sequence, 3) * height;
      let clearance = Infinity;

      placed.forEach((other) => {
        const distance = Math.hypot(centerX - other.centerX, centerY - other.centerY);
        const requiredDistance = (diameter + other.diameter) * .34;
        clearance = Math.min(clearance, distance - requiredDistance);
      });

      if (clearance > bestClearance) {
        bestClearance = clearance;
        bestCandidate = { centerX, centerY };
      }
      if (clearance >= 0) break;
    }

    placed.push({
      ...seed,
      x: ((bestCandidate.centerX - diameter / 2) / width) * 100,
      y: ((bestCandidate.centerY - diameter / 2) / height) * 100,
      size,
      rotate: seed.rotate + (((order * 13) % 11) - 5),
      depth: 1 + (order % 9),
      filler: order >= FLOWERS.length || seed.filler,
      centerX: bestCandidate.centerX,
      centerY: bestCandidate.centerY,
      diameter,
    });
  });

  return placed;
}

function useFlowerViewport() {
  const [viewport, setViewport] = useState(getFlowerViewport);

  useEffect(() => {
    let frame;
    const syncViewport = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => setViewport(getFlowerViewport()));
    };

    window.addEventListener('resize', syncViewport, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', syncViewport);
    };
  }, []);

  return viewport;
}

function Sunflower({ flower }) {
  const style = {
    '--x': `${flower.x}%`,
    '--y': `${flower.y}%`,
    '--size': `${flower.size}vmin`,
    '--tilt': `${flower.rotate}deg`,
    '--depth': flower.depth,
  };

  return (
    <div className={`sunflower ${flower.filler ? 'sunflower--filler' : ''}`} style={style} aria-hidden="true">
      <div className="sunflower__head">
        <img className="sunflower__art" src={sunflowerReal} alt="" draggable="false" />
      </div>
    </div>
  );
}

function FloralScene({ leaving = false }) {
  const viewport = useFlowerViewport();
  const flowers = selectFlowers(viewport);
  const layers = Array.from({ length: 4 }, () => []);
  flowers.forEach((flower, index) => layers[index % layers.length].push(flower));

  return (
    <div className={`floral-scene ${leaving ? 'floral-scene--leaving' : ''}`} aria-hidden="true">
      <div className="warm-glow" />
      {layers.map((layer, layerIndex) => (
        <div className={`flower-layer flower-layer--${layerIndex}`} key={layerIndex}>
          <div className="flower-layer__field">
            {layer.map((flower, flowerIndex) => (
              <Sunflower key={`${flower.x}-${flower.y}-${flower.size}-${flowerIndex}`} flower={flower} />
            ))}
          </div>
        </div>
      ))}
      <span className="petal petal--one" />
      <span className="petal petal--two" />
      <span className="petal petal--three" />
      <span className="petal petal--four" />
      <div className="floral-vignette" />
    </div>
  );
}

function WrittenNarration({ text }) {
  let letterIndex = 0;

  return (
    <p className="scrapbook-narration">
      <span className="sr-only">{text}</span>
      <span className="writing-line" aria-hidden="true">
        {text.split(' ').map((word, wordIndex) => (
          <span className="writing-word" key={`${word}-${wordIndex}`}>
            {Array.from(word).map((character, characterIndex) => {
              const delay = .6 + letterIndex * .07;
              letterIndex += 1;
              return (
                <span
                  className="writing-character"
                  key={`${character}-${characterIndex}`}
                  style={{ '--letter-delay': `${delay}s` }}
                >
                  {character}
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </p>
  );
}

function ScrapbookIntroPage({ leaving = false, onStart }) {
  return (
    <article className={`scrapbook-page scrapbook-intro ${leaving ? 'scrapbook-page--leave-left' : 'scrapbook-page--current'}`}>
      <span className="scrapbook-tape scrapbook-tape--one" aria-hidden="true" />
      <span className="scrapbook-tape scrapbook-tape--two" aria-hidden="true" />
      <span className="scrapbook-doodle scrapbook-doodle--heart" aria-hidden="true">♡</span>
      <span className="scrapbook-doodle scrapbook-doodle--flower" aria-hidden="true">✿</span>

      <div className="scrapbook-intro__copy">
        <span className="scrapbook-label">a note before we begin</span>
        <h3>Hi, Jess ♡</h3>
        <p>
          I hope this finds you in one of the happiest moments of your life.
        </p>
        <p>
          I made this little place for you—to look back and see how beautifully you have grown.
        </p>
        <button className="lookback-button" type="button" onClick={onStart}>
          Look back with me <span>♡</span>
        </button>
      </div>
    </article>
  );
}

function ScrapbookPage({ page, state = 'current', direction = 1, isFinal = false, onContinue }) {
  const isPortrait = page.fit === 'contain';
  const motionClass = state === 'current'
    ? 'scrapbook-page--current'
    : state === 'leaving'
      ? `scrapbook-page--leave-${direction > 0 ? 'left' : 'right'}`
      : `scrapbook-page--enter-${direction > 0 ? 'right' : 'left'}`;

  return (
    <article className={`scrapbook-page ${motionClass} ${isPortrait ? 'scrapbook-page--portrait' : ''} ${isFinal ? 'scrapbook-page--final' : ''}`}>
      <span className="scrapbook-tape scrapbook-tape--one" aria-hidden="true" />
      <span className="scrapbook-tape scrapbook-tape--two" aria-hidden="true" />
      <span className="scrapbook-doodle scrapbook-doodle--heart" aria-hidden="true">♡</span>
      <span className="scrapbook-doodle scrapbook-doodle--flower" aria-hidden="true">✿</span>

      <figure className={`scrapbook-photo ${page.fit ? `scrapbook-photo--${page.fit}` : ''}`}>
        <img src={page.image} alt="A childhood memory" draggable="false" decoding="async" />
      </figure>

      <div className="scrapbook-copy">
        <span className="scrapbook-label">{page.label}</span>
        <WrittenNarration text={page.narration} />
        <span className="scrapbook-note" aria-hidden="true">a little memory, kept with love</span>
        {isFinal && (
          <button className="scrapbook-continue" type="button" onClick={onContinue}>
            <span className="scrapbook-continue__copy">
              <small>chapter two</small>
              <strong>All the Love Around You</strong>
            </span>
            <span className="scrapbook-continue__arrow" aria-hidden="true">
              <svg viewBox="0 0 32 32" focusable="false">
                <circle cx="7" cy="16" r="1.5" />
                <path d="M9 16h15" />
                <path d="m18.5 9.5 6.5 6.5-6.5 6.5" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </article>
  );
}

function ChildhoodSection({ entering = false, leaving = false, audioRef, songDuration = 94, onContinue }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [transition, setTransition] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const [hasStartedLookback, setHasStartedLookback] = useState(false);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [slideshowStartTime, setSlideshowStartTime] = useState(0);
  const transitionTimer = useRef(null);
  const introTimer = useRef(null);
  const touchStart = useRef(null);

  const changePage = (nextIndex, direction, isManual = true) => {
    if (transition || nextIndex === pageIndex) return;
    if (isManual) setAutoplay(false);
    setTransition({ from: pageIndex, to: nextIndex, direction });
    setPageIndex(nextIndex);
    transitionTimer.current = window.setTimeout(() => setTransition(null), 1230);
  };

  const movePage = (step, isManual = true) => {
    const nextIndex = (pageIndex + step + CHILDHOOD_PAGES.length) % CHILDHOOD_PAGES.length;
    changePage(nextIndex, step, isManual);
  };

  useEffect(() => {
    CHILDHOOD_PAGES.forEach((page) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = page.image;
      image.decode?.().catch(() => undefined);
    });
  }, []);

  useEffect(() => {
    if (!hasStartedLookback || !autoplay || transition || entering || pageIndex >= CHILDHOOD_PAGES.length - 1) return undefined;
    const segmentDuration = ((songDuration - slideshowStartTime) * 1000) / CHILDHOOD_PAGES.length;
    const currentTime = Math.max(0, (audioRef.current?.currentTime || 0) - slideshowStartTime) * 1000;
    const nextBoundary = (pageIndex + 1) * segmentDuration;
    const timer = window.setTimeout(() => movePage(1, false), Math.max(250, nextBoundary - currentTime));
    return () => window.clearTimeout(timer);
  }, [audioRef, autoplay, entering, hasStartedLookback, pageIndex, slideshowStartTime, songDuration, transition]);

  useEffect(() => () => {
    window.clearTimeout(transitionTimer.current);
    window.clearTimeout(introTimer.current);
  }, []);

  const beginLookback = () => {
    if (introLeaving) return;
    let startTime = audioRef.current?.currentTime || 0;
    const minimumSlideshowTime = CHILDHOOD_PAGES.length * 6;

    if (songDuration - startTime < minimumSlideshowTime && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => undefined);
      startTime = 0;
    }

    setSlideshowStartTime(startTime);
    setIntroLeaving(true);
    introTimer.current = window.setTimeout(() => {
      setHasStartedLookback(true);
      setIntroLeaving(false);
    }, 1230);
  };

  const handleTouchStart = (event) => {
    if (!hasStartedLookback) return;
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (!hasStartedLookback) return;
    if (touchStart.current === null) return;
    if (event.target.closest('button, a')) {
      touchStart.current = null;
      return;
    }
    const distance = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) < 45) return;
    movePage(distance < 0 ? 1 : -1);
  };

  const visiblePages = transition
    ? [
        { index: transition.from, state: 'leaving', direction: transition.direction },
        { index: transition.to, state: 'entering', direction: transition.direction },
      ]
    : [{ index: pageIndex, state: 'current', direction: 1 }];
  const renderedPhotoPages = hasStartedLookback
    ? visiblePages
    : introLeaving
      ? [{ index: 0, state: 'entering', direction: 1 }]
      : [];

  return (
    <section className={`childhood-section ${entering ? 'childhood-section--entering' : ''} ${leaving ? 'childhood-section--leaving' : ''}`} aria-label="Childhood memories">
      <div className="childhood-heading">
        <span>chapter one</span>
        <h2>Little pieces of you</h2>
      </div>

      <div className="scrapbook-shell" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="scrapbook-stage">
          {!hasStartedLookback && <ScrapbookIntroPage leaving={introLeaving} onStart={beginLookback} />}
          {renderedPhotoPages.map(({ index, state, direction }) => (
            <ScrapbookPage
              key={`childhood-page-${index}`}
              page={CHILDHOOD_PAGES[index]}
              state={state}
              direction={direction}
              isFinal={index === CHILDHOOD_PAGES.length - 1}
              onContinue={onContinue}
            />
          ))}
        </div>

        <div className={`scrapbook-controls ${!hasStartedLookback ? 'scrapbook-controls--hidden' : ''}`} aria-hidden={!hasStartedLookback || undefined}>
          <button type="button" onClick={() => movePage(-1)} aria-label="Previous memory" disabled={!hasStartedLookback}>← <span>prev</span></button>
          <div className="scrapbook-progress" aria-label={`Memory ${pageIndex + 1} of ${CHILDHOOD_PAGES.length}`}>
            {CHILDHOOD_PAGES.map((page, index) => (
              <button
                type="button"
                className={index === pageIndex ? 'is-active' : ''}
                key={page.label}
                onClick={() => changePage(index, index > pageIndex ? 1 : -1)}
                aria-label={`Open ${page.label}`}
                aria-current={index === pageIndex ? 'true' : undefined}
                disabled={!hasStartedLookback}
              />
            ))}
          </div>
          <button type="button" onClick={() => movePage(1)} aria-label="Next memory" disabled={!hasStartedLookback}><span>next</span> →</button>
        </div>
      </div>
    </section>
  );
}

function FilmStripLoop({ photos, variant = 'main', duplicate = false, activePhotoId = null }) {
  return (
    <div className="film-strip__loop" aria-hidden={duplicate || undefined}>
      {photos.map((photo, index) => (
        <figure
          className={`film-frame ${photo.highlight ? 'film-frame--highlight' : ''} ${photo.id === activePhotoId ? 'film-frame--active' : ''}`}
          data-photo-id={photo.id}
          data-caption={photo.caption || ''}
          data-highlight={photo.highlight || undefined}
          key={`${variant}-${duplicate ? 'duplicate' : 'original'}-${photo.id}`}
        >
          <img
            src={photo.image}
            alt={duplicate ? '' : photo.alt}
            loading={index < 6 ? 'eager' : 'lazy'}
            decoding="async"
            draggable="false"
          />
        </figure>
      ))}
    </div>
  );
}

function MemoryFilmSection({ entering = false }) {
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [activePhotoId, setActivePhotoId] = useState(null);
  const [activeCaption, setActiveCaption] = useState(MEMORY_CAPTIONS[0]);
  const mainStripRef = useRef(null);
  const mainTrackRef = useRef(null);
  const highlightTimer = useRef(null);
  const rateAnimationFrame = useRef(null);
  const currentPlaybackRate = useRef(1);
  const lastHighlightId = useRef(null);
  const secondaryPhotos = MEMORY_PHOTOS.filter((_, index) => index % 3 === 0);
  const paused = manuallyPaused;

  const easeMainStripRate = (targetRate, duration = 400) => {
    const scrollAnimation = mainTrackRef.current?.getAnimations()
      .find((animation) => animation.animationName === 'memory-strip-scroll');
    if (!scrollAnimation) return;

    window.cancelAnimationFrame(rateAnimationFrame.current);
    const startRate = currentPlaybackRate.current;
    const startedAt = performance.now();

    const updateRate = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - ((1 - progress) ** 3);
      const nextRate = startRate + ((targetRate - startRate) * easedProgress);

      if (typeof scrollAnimation.updatePlaybackRate === 'function') scrollAnimation.updatePlaybackRate(nextRate);
      else scrollAnimation.playbackRate = nextRate;
      currentPlaybackRate.current = nextRate;

      if (progress < 1) rateAnimationFrame.current = window.requestAnimationFrame(updateRate);
    };

    rateAnimationFrame.current = window.requestAnimationFrame(updateRate);
  };

  useEffect(() => {
    const strip = mainStripRef.current;
    if (!strip || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const centeredFrame = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => Math.abs(left.boundingClientRect.left + left.boundingClientRect.width / 2 - window.innerWidth / 2)
          - Math.abs(right.boundingClientRect.left + right.boundingClientRect.width / 2 - window.innerWidth / 2))[0];

      if (!centeredFrame) return;
      const photoId = centeredFrame.target.dataset.photoId;
      if (!photoId || lastHighlightId.current === photoId) return;

      lastHighlightId.current = photoId;
      setActivePhotoId(photoId);
      setActiveCaption(centeredFrame.target.dataset.caption || MEMORY_CAPTIONS[0]);
      easeMainStripRate(.42, 400);
      window.clearTimeout(highlightTimer.current);
      highlightTimer.current = window.setTimeout(() => easeMainStripRate(1, 600), 2100);
    }, {
      root: strip,
      rootMargin: '0px -42% 0px -42%',
      threshold: .12,
    });

    strip.querySelectorAll('.film-frame--highlight').forEach((frame) => observer.observe(frame));

    return () => {
      observer.disconnect();
      window.clearTimeout(highlightTimer.current);
      window.cancelAnimationFrame(rateAnimationFrame.current);
    };
  }, []);

  const toggleManualPause = () => setManuallyPaused((current) => !current);

  const handleStripTap = (event) => {
    if (!event.target.closest('.film-frame')) return;
    toggleManualPause();
  };

  const handleStripKeyDown = (event) => {
    if (event.key !== ' ' && event.key !== 'Enter') return;
    event.preventDefault();
    toggleManualPause();
  };

  return (
    <section className={`memory-film-section ${entering ? 'memory-film-section--entering' : ''}`} aria-label="Our memories together">
      <div className="memory-film-heading">
        <span>chapter three</span>
        <h2>Right Here, Beside You</h2>
        <p>Dan di antara semua cerita itu...<br /><strong>aku juga punya banyak kenangan tentang kita.</strong></p>
      </div>

      <div className={`film-strip film-strip--secondary ${paused ? 'film-strip--paused' : ''}`} aria-hidden="true">
        <div className="film-strip__track">
          <FilmStripLoop photos={secondaryPhotos} variant="secondary" duplicate />
          <FilmStripLoop photos={secondaryPhotos} variant="secondary" duplicate />
        </div>
      </div>

      <div
        className={`film-strip film-strip--main ${paused ? 'film-strip--paused' : ''}`}
        ref={mainStripRef}
        role="region"
        tabIndex="0"
        aria-label="Memory film strip. Tap or press Enter to pause and continue."
        onClick={handleStripTap}
        onKeyDown={handleStripKeyDown}
      >
        <div className="film-strip__track" ref={mainTrackRef}>
          <FilmStripLoop photos={MEMORY_PHOTOS} activePhotoId={activePhotoId} />
          <FilmStripLoop photos={MEMORY_PHOTOS} activePhotoId={activePhotoId} duplicate />
        </div>
      </div>

      <div className="memory-film-footer">
        <p key={activeCaption} aria-live="polite">{activeCaption}</p>
      </div>
    </section>
  );
}

function WishSection({ entering = false, leaving = false, onContinue }) {
  const [phase, setPhase] = useState('resting');
  const [activeWishId, setActiveWishId] = useState(null);
  const closeTimer = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const focusEnvelope = (wishId) => {
    if (phase !== 'resting') return;
    setActiveWishId(wishId);
    setPhase('focused');
  };

  const openEnvelope = () => {
    if (phase === 'focused') setPhase('open');
  };

  const closeCard = () => {
    if (phase !== 'open') return;
    videoRef.current?.pause();
    audioRef.current?.pause();
    setPhase('closing');
    closeTimer.current = window.setTimeout(() => {
      setPhase('resting');
      setActiveWishId(null);
    }, 850);
  };

  const activeWish = VIDEO_WISHES.find((wish) => wish.id === activeWishId);
  const isCardVisible = phase === 'open' || phase === 'closing';
  const isPlayerOpen = phase === 'open';

  return (
    <section className={`wish-section ${entering ? 'wish-section--entering' : ''} ${leaving ? 'wish-section--leaving' : ''}`} aria-label="A video wish">
      <div className="wish-section__heading">
        <span>chapter two</span>
        <h2>Some people left these for you</h2>
      </div>

      <div className={`envelope-moment envelope-moment--${phase}`}>
        <div className={`envelope-list ${activeWish ? 'envelope-list--active' : ''}`}>
          {VIDEO_WISHES.map((wish) => {
            const isSelected = wish.id === activeWishId;

            return (
              <div className={`envelope-shell ${isSelected ? 'envelope-shell--selected' : ''}`} key={wish.id}>
                <div className="envelope-back" aria-hidden="true" />

                <button
                  className="envelope-front"
                  type="button"
                  onClick={() => focusEnvelope(wish.id)}
                  disabled={phase !== 'resting'}
                  aria-label={`Bring the envelope from ${wish.from} closer`}
                >
                  <span>from: {wish.from}</span>
                </button>

                <button
                  className="envelope-flap"
                  type="button"
                  onClick={openEnvelope}
                  disabled={!isSelected || phase !== 'focused'}
                  aria-label={`Open the envelope from ${wish.from}`}
                />
              </div>
            );
          })}
        </div>

        {activeWish && (
          <article className="wish-card" aria-hidden={!isCardVisible}>
            <button className="wish-card__close" type="button" onClick={closeCard} aria-label="Close video wish" tabIndex={isPlayerOpen ? 0 : -1}>×</button>
            <div className="wish-card__header">
              <span>a little wish from {activeWish.from}</span>
              <strong>Press play ♡</strong>
            </div>
            <div className="wish-card__video">
              {isPlayerOpen && (
                <video
                  key={activeWish.id}
                  ref={videoRef}
                  src={activeWish.src}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  onPlay={() => {
                    const video = videoRef.current;
                    const audio = audioRef.current;
                    if (!video || !audio) return;
                    audio.currentTime = video.currentTime;
                    audio.play().catch(() => undefined);
                  }}
                  onPause={() => audioRef.current?.pause()}
                  onSeeked={() => {
                    if (videoRef.current && audioRef.current) {
                      audioRef.current.currentTime = videoRef.current.currentTime;
                    }
                  }}
                  onEnded={() => audioRef.current?.pause()}
                  aria-label={`Video wish from ${activeWish.from}`}
                />
              )}
            </div>
            {isPlayerOpen && (
              <div className="wish-card__audio">
                <span>sound</span>
                <audio ref={audioRef} controls preload="metadata" src={activeWish.audio} aria-label={`Audio from ${activeWish.from}`} />
              </div>
            )}
            {isPlayerOpen && (
              <a className="wish-card__fallback" href={activeWish.src} target="_blank" rel="noreferrer">
                video not playing? open it directly ↗
              </a>
            )}
          </article>
        )}

        <div className="wish-footer">
          <p className="envelope-hint" aria-live="polite">
            {phase === 'resting' ? 'choose an envelope' : phase === 'focused' ? 'tap flap to open' : '\u00a0'}
          </p>
          <button
            className="wish-continue"
            type="button"
            onClick={onContinue}
            disabled={phase !== 'resting'}
          >
            <span className="wish-continue__copy">
              <small>chapter three</small>
              <strong>Right Here, Beside You</strong>
            </span>
            <span className="wish-continue__arrow" aria-hidden="true">
              <svg viewBox="0 0 32 32" focusable="false">
                <circle cx="7" cy="16" r="1.5" />
                <path d="M9 16h15" />
                <path d="m18.5 9.5 6.5 6.5-6.5 6.5" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function FinalBirthdayNote() {
  return (
    <section className="final-note" aria-label="Final birthday note">
      <div className="final-note__glow" aria-hidden="true" />
      <div className="final-note__card">
        <span className="final-note__eyebrow">chapter four · today</span>
        <div className="final-note__photo-wrap">
          <span className="final-note__spark" aria-hidden="true">✦</span>
          <img className="final-note__photo" src={finalBirthdayPhoto} alt="A birthday portrait of you" />
        </div>
        <div className="final-note__copy">
          <p className="final-note__kicker">Happy birthday, sayang.</p>
          <p>Terima kasih sudah tumbuh menjadi dirimu yang sekarang.<br />
            Aku harap di tahun ini kamu selalu dikelilingi banyak bahagia,<br className="final-note__desktop-break" />
            hal-hal baik, dan hati yang tenang.</p>
        </div>
        <div className="final-note__divider" aria-hidden="true"><span>♡</span></div>
        <p className="final-note__signature"><span>with love,</span> William</p>
      </div>
    </section>
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
  const [songDuration, setSongDuration] = useState(94);
  const errorTimer = useRef(null);
  const sectionTimer = useRef(null);
  const audioRef = useRef(null);
  const memoryAudioRef = useRef(null);
  const memoryAudioFadeFrame = useRef(null);
  const memoryAudioEndedRef = useRef(false);

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
            window.setTimeout(() => setScene('bloom'), BLOOM_START_DELAY);
            window.setTimeout(() => setScene('final'), MESSAGE_REVEAL_DELAY);
          }, 220);
        }
      }, 115);
    }, 450);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(typingTimer);
    };
  }, [scene]);

  useEffect(() => () => {
    window.clearTimeout(errorTimer.current);
    window.clearTimeout(sectionTimer.current);
    window.cancelAnimationFrame(memoryAudioFadeFrame.current);
  }, []);

  const validate = (candidate) => {
    if (candidate.length !== BIRTHDAY_PASSWORD.length) return;
    if (candidate === BIRTHDAY_PASSWORD) {
      setScene('success');
      window.setTimeout(() => setScene('bloom'), BLOOM_START_DELAY);
      window.setTimeout(() => setScene('final'), MESSAGE_REVEAL_DELAY);
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
    if (scene !== 'final') return;
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = .58;
      audioRef.current.play().catch(() => undefined);
    }
    setScene('to-childhood');
    sectionTimer.current = window.setTimeout(() => setScene('childhood'), CHILDHOOD_TRANSITION_DURATION);
  };

  const handleContinueToWishes = () => {
    if (scene !== 'childhood') return;

    if (audioRef.current && !audioRef.current.paused) {
      const startVolume = audioRef.current.volume;
      const fadeStartedAt = performance.now();
      const fadeAudio = (time) => {
        const progress = Math.min(1, (time - fadeStartedAt) / WISHES_TRANSITION_DURATION);
        audioRef.current.volume = startVolume * (1 - progress);
        if (progress < 1) {
          window.requestAnimationFrame(fadeAudio);
        } else {
          audioRef.current.pause();
          audioRef.current.volume = .58;
        }
      };
      window.requestAnimationFrame(fadeAudio);
    }

    setScene('to-wishes');
    sectionTimer.current = window.setTimeout(() => setScene('wishes'), WISHES_TRANSITION_DURATION);
  };

  const startMemoryAudio = () => {
    const audio = memoryAudioRef.current;
    if (!audio) return;
    if (!audio.paused) return;

    memoryAudioEndedRef.current = false;
    window.cancelAnimationFrame(memoryAudioFadeFrame.current);
    audio.currentTime = 0;
    audio.volume = 0;
    audio.play()
      .then(() => {
        const targetVolume = .42;
        const fadeStartedAt = performance.now();
        const fadeIn = (time) => {
          const progress = Math.min(1, (time - fadeStartedAt) / 1800);
          audio.volume = targetVolume * (1 - ((1 - progress) ** 3));
          if (progress < 1) memoryAudioFadeFrame.current = window.requestAnimationFrame(fadeIn);
        };
        memoryAudioFadeFrame.current = window.requestAnimationFrame(fadeIn);
      })
      .catch((error) => {
        console.warn('Memory soundtrack could not start yet:', error.name);
      });
  };

  const handleContinueToMemories = () => {
    if (scene !== 'wishes') return;

    startMemoryAudio();

    setScene('to-memories');
    sectionTimer.current = window.setTimeout(() => setScene('memories'), MEMORIES_TRANSITION_DURATION);
  };

  const handleMemoryAudioEnded = () => {
    if (memoryAudioEndedRef.current) return;
    memoryAudioEndedRef.current = true;
    window.cancelAnimationFrame(memoryAudioFadeFrame.current);
    if (memoryAudioRef.current) {
      memoryAudioRef.current.pause();
      memoryAudioRef.current.currentTime = 0;
      memoryAudioRef.current.volume = .42;
    }
    setScene('final-note');
  };

  const isFloral = scene === 'bloom' || scene === 'final' || scene === 'to-childhood';
  const isChildhood = scene === 'to-childhood' || scene === 'childhood' || scene === 'to-wishes';
  const isWishes = scene === 'to-wishes' || scene === 'wishes' || scene === 'to-memories';
  const isMemories = scene === 'to-memories' || scene === 'memories';

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

      {isChildhood && (
        <ChildhoodSection
          entering={scene === 'to-childhood'}
          leaving={isWishes}
          audioRef={audioRef}
          songDuration={songDuration}
          onContinue={handleContinueToWishes}
        />
      )}

      {isWishes && (
        <WishSection
          entering={scene === 'to-wishes'}
          leaving={scene === 'to-memories'}
          onContinue={handleContinueToMemories}
        />
      )}

      {isMemories && <MemoryFilmSection entering={scene === 'to-memories'} />}

      {scene === 'final-note' && <FinalBirthdayNote />}

      {isFloral && <FloralScene leaving={scene === 'to-childhood'} />}

      {(scene === 'final' || scene === 'to-childhood') && (
        <section className={`message-card ${scene === 'to-childhood' ? 'message-card--leaving' : ''}`}>
          <span className="message-card__kicker">for you, today</span>
          <h1>On your special day,<br />there is something<br />I want to show you.</h1>
          <button className="start-button" type="button" onClick={handleStart}>
            <span className="start-button__copy">
              <small>chapter one</small>
              <strong>The Journey That Made You</strong>
            </span>
            <span className="start-button__arrow" aria-hidden="true">
              <svg viewBox="0 0 32 32" focusable="false">
                <circle cx="7" cy="16" r="1.5" />
                <path d="M9 16h15" />
                <path d="m18.5 9.5 6.5 6.5-6.5 6.5" />
              </svg>
            </span>
          </button>
        </section>
      )}

      <audio
        ref={audioRef}
        preload="metadata"
        playsInline
        onLoadedMetadata={(event) => setSongDuration(event.currentTarget.duration || 94)}
      >
        <source src={childhoodSong} type="audio/mpeg" />
      </audio>
      <audio
        ref={memoryAudioRef}
        preload="auto"
        playsInline
        onEnded={handleMemoryAudioEnded}
        onTimeUpdate={(event) => {
          const audio = event.currentTarget;
          if (Number.isFinite(audio.duration) && audio.duration > 0 && audio.currentTime >= audio.duration - 0.15) {
            handleMemoryAudioEnded();
          }
        }}
      >
        <source src={memorySong} type="audio/mpeg" />
      </audio>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
