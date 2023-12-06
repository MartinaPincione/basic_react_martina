import React, { useState, useEffect, useMemo } from 'react';

const Jokes = () => {
  const jokesData = useMemo(() => [
    { setup: "How did SpongeBob find his way home?", punchline: "Mussel memory!" },
    { setup: "Why did SpongeBob get a gym membership?", punchline: "To get stronger mussels!" },
    { setup: "How can you make Squidward laugh?", punchline: "Give him ten-tickles!" },
    { setup: "Where did Fred Rechid go to school?", punchline: "At the School of Fish." },
    { setup: "SpongeBob: 'I don’t think we can stop the dragon with our bare hands.'", punchline: "Patrick: 'Yeah, we need some gloves.'" },
    { setup: "Why do people love SpongeBob so much?", punchline: "He’s a very holesome guy." },
    { setup: "What kind of tea do SpongeBob and Patrick drink?", punchline: "Pearl Grey." }
  ], []);

  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    const jokeInterval = setInterval(() => {
      setShowPunchline(true);

      setTimeout(() => {
        setShowPunchline(false);
        setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokesData.length);
      }, 5000);
    }, 15000);

    return () => clearInterval(jokeInterval);
  }, [currentJokeIndex, jokesData.length]);

  const currentJoke = jokesData[currentJokeIndex];

  return (
    <div>
      <h2>SpongeBob Jokes</h2>
      <div>
        <p>{currentJoke.setup}</p>
        {showPunchline && <p>{currentJoke.punchline}</p>}
      </div>
    </div>
  );
};

export default Jokes;
