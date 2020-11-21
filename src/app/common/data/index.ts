export const SpecialCharactersArray = '^$.,-*+?=!:|()[]{}\\/'.split('');
export const ClassShorthands = [
  '\\d',
  '\\w',
  '\\s',
  '\\b',
  '\\D',
  '\\W',
  '\\S',
  '\\B',
];

export const RegexExamples = [
  {
    regex: '^$.,-*+?=!:|()[]{}\\',
    desc: 'Besondere Zeichen',
    url: '',
  },
  {
    regex: '/^e/',
    desc: 'Beginnend mit "e"',
    url: '',
  },
  {
    regex: '/[a-zA-Z0-9]/',
    desc: 'Klein/Groß-Buchstaben und Ziffern',
    url: '',
  },
  {
    regex: '/[\'"][^\'"]*[\'"]/',
    desc:
      '<div>Alles unter single/double quote, wobei beginnende und abschließende nicht gleich sind. Nächstes Beispiel löst das Problem.</div><div><strong>Wichtig:</strong> Das Dachzeichen "^" innerhalb der eckigen Klammern bedeutet Negierung (d.h. darf nicht enthalten sein). </div>',
    url: '',
  },
  {
    regex: '/([\'"])[^\'"]*\\1/',
    desc:
      '<div>Alles unter single/double quote, wobei beginnende und abschließende gleich sind</div><div>"<strong>\\1</strong>" ist eine Referenz auf den ersten Klammerinhalt. D.h. was immer dort (zwischen dem ersten Klammerpaar vorkam ) vorkam, muss auch hier ( wo "\\1" steht) vorkommen.</div>',
    url: 'https://regex101.com/r/J6ZTfl/1/',
  },
];
