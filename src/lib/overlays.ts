export type Overlay = {
  id: string;
  name: string;
  category: string;
  type: string;
  function: string;
  theme: string;
  isNew?: boolean;
  price: number;
};

export const overlaysData: Overlay[] = [
  { id: '1', name: 'Bug - Future', category: 'nfl', type: 'bug', function: 'team board', theme: 'base', isNew: false, price: 8 },
  { id: '2', name: 'Lower Third - Future', category: 'mlb', type: 'lower third', function: 'team board', theme: 'downtown', isNew: false, price: 6 },
  { id: '3', name: 'Ticker - Zombie', category: 'nba', type: 'baseline', function: 'text scroller', theme: 'kaboom', isNew: true, price: 10 },
  { id: '4', name: 'Panel - Stadium', category: 'nhl', type: 'panel', function: 'counter', theme: 'color blast', isNew: false, price: 12 },
  { id: '5', name: 'Image Loop - Retro', category: 'mls', type: 'image loop', function: 'timer', theme: 'base', isNew: true, price: 5 },
  { id: '6', name: 'Scoreboard - Classic', category: 'nfl', type: 'panel', function: 'team board', theme: 'downtown', isNew: false, price: 9 },
  { id: '7', name: 'Counter - Modern', category: 'mlb', type: 'baseline', function: 'counter', theme: 'kaboom', isNew: false, price: 7 },
  { id: '8', name: 'Timer - Neon', category: 'nba', type: 'bug', function: 'timer', theme: 'color blast', isNew: true, price: 11 },
  { id: '9', name: 'Scroller - Wave', category: 'nhl', type: 'image loop', function: 'text scroller', theme: 'base', isNew: false, price: 4 },
];

export default overlaysData;
