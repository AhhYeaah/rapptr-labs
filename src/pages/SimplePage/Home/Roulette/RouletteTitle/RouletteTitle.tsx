import React, { ReactNode, useRef, useState } from 'react';
import { Button } from '../../../../../Components/Button/Button';

interface RouletteTitleProps {
  title: string;
  words: string[];
  fontSize: number;
  roulettableWordsIndex: number[];
}

export function RouletteTitle({ title, words, roulettableWordsIndex, fontSize }: RouletteTitleProps) {
  const [currWords, changeWordsOrder] = useState(words);
  const [rolling, roll] = useState(false);

  function getAnimationDurationInMilliseconds() {
    return 2000;
  }

  function getAnimationsProperty() {
    if (!rolling) return null;
    const timeInMilliseconds = getAnimationDurationInMilliseconds();
    const largerPartsTime = Math.round(timeInMilliseconds * 0.375);
    const smallerPartsTime = Math.round(timeInMilliseconds * 0.25);

    return {
      animationName: 'roll, roll, rollStop',
      animationDuration: `${largerPartsTime}ms, ${smallerPartsTime}ms, ${largerPartsTime}ms`,
      animationDelay: `0ms, ${largerPartsTime}ms, ${smallerPartsTime + largerPartsTime}ms`,
      animationTimingFunction: 'ease-in, linear, ease-out',
    };
  }

  const currentUsefullWorld = useRef(0);

  function nextRoll() {
    if (currentUsefullWorld.current < 3) {
      currentUsefullWorld.current += 1;
    } else {
      currentUsefullWorld.current = 0;
    }
    changeWordsOrder([
      currWords[currWords.length - 1],
      ...words.slice(roulettableWordsIndex[currentUsefullWorld.current] + 1),
      ...words.slice(0, roulettableWordsIndex[currentUsefullWorld.current] + 1),
    ]);

    roll(true);

    setTimeout(() => {
      roll(false);
    }, getAnimationDurationInMilliseconds());
  }

  return (
    <div className="flex flex-row" style={{ fontSize: fontSize, lineHeight: 1 }}>
      <h1>{title}&nbsp;</h1>
      <div className="overflow-hidden" style={{ height: fontSize }}>
        <div
          className="relative"
          style={{
            top: (currWords.length - 1) * -fontSize,
            ...getAnimationsProperty(),
          }}
        >
          {currWords.map((word, index) => {
            return <div key={index}>{word}</div>;
          })}
        </div>
      </div>
      <Button disabled={rolling} className="border border-black rounded-md" onClick={() => nextRoll()}>
        Roll
      </Button>
    </div>
  );
}
