const quotes = [
    {
      quote:
        'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
      character: "Homer Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
      characterDirection: "Right",
    },
    {
      quote: "Hi, Super Nintendo Chalmers!",
      character: "Ralph Wiggum",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
      characterDirection: "Left",
    },
    {
      quote:
        "You're turning me into a criminal when all I want to be is a petty thug.",
      character: "Bart Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
      characterDirection: "Right",
    },
    {
      quote: "But my mom says I'm cool.",
      character: "Milhouse Van Houten",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
      characterDirection: "Right",
    },
    {
      quote: "Hey, I'm the chief here. Bake him away, toys.",
      character: "Chief Wiggum",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FChiefWiggum.png?1497567511716",
      characterDirection: "Left",
    },
    {
      quote: "Oh, wow, windows. I don't think I could afford this place.",
      character: "Otto",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FOttoMann.png?1497567511803",
      characterDirection: "Left",
    },
  
    {
      quote: "Shut up, brain. I got friends now. I don't need you anymore.",
      character: "Lisa Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
      characterDirection: "Right",
    },
    {
      quote:
        'Last night\'s "Itchy & Scratchy" was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.',
      character: "Comic Book Guy",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
      characterDirection: "Right",
    },
    {
      quote:
        "I live in a single room above a bowling alley...and below another bowling alley.",
      character: "Frank Grimes",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
      characterDirection: "Left",
    },
    {
      quote:
        "Well, I'm better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can't compete with that stuff.",
      character: "Moe Szyslak",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
      characterDirection: "Right",
    },
    {
      quote:
        "I don't want to sound like a killjoy, but because this is not to my taste I don't think anyone else should be allowed to enjoy it.",
      character: "Marge Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
      characterDirection: "Right",
    },
    {
      quote: "My eyes! The goggles do nothing!",
      character: "Rainier Wolfcastle",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035",
      characterDirection: "Right",
    },
    {
      quote:
        "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
      character: "Principal Skinner",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460",
      characterDirection: "Right",
    },
  ];
  
  const fetchQuotes = () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        const selectedQuotes = quotes.sort(() => 0.5 - Math.random()).slice(0, 4);
        resolve({ data: selectedQuotes });
      }, 300)
    );
  };
  
  export default fetchQuotes;
  