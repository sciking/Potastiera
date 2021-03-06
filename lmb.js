Keyboards.lmo = {
  label: 'Lumbard',
  shortLabel: 'lm',
  menuLabel: 'Lumbard',
  imEngine: 'latin',
  types: ['text', 'url', 'email', 'password'],
  autoCorrectLanguage: 'lmo',
  lang: 'lmo',
  alt: {
    a: 'à@æ',
    c: 'çĉ',
    d: 'ðḑ'
    e: 'èéêë€',
    i: 'ìï',
    o: 'òóöø',
    u: 'ùü',
    s: '$ß',
    l: '£',
    y: '¥',
    ö: 'ëäïü'
    '.': ',;:\'?!…',
    "'": '"«»',
    '-': '—_'
  },
  keys: [
    [
      { value: 'q' }, { value: 'z' }, { value: 'e' } , { value: 'r' },
      { value: 't' }, { value: 'y' }, { value: 'u' } , { value: 'i' },
      { value: 'o' }, { value: 'p' }
    ], [
      { value: 'a' }, { value: 's' }, { value: 'd' }, { value: 'f' },
      { value: 'g' }, { value: 'h' }, { value: 'j' }, { value: 'k' },
      { value: 'l' }
    ], [
      { value: '⇪', ratio: 1.5, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
      { value: 'w' }, { value: 'x' }, { value: 'c' }, { value: 'v' },
      { value: 'b' }, { value: 'n' }, { value: 'm' }, { value: 'ö' }
      { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
    ], [
      { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
      { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
    ]
  ],
  pages: [undefined, {
    alt: {
      '0': ['º'],
      '1': ['1°', '1ª'],
      '2': ['2°', '2ª'],
      '3': ['3°', '3ª'],
      '4': ['4°', '4ª'],
      '5': ['5°', '5ª'],
      '6': ['6°', '6ª'],
      '7': ['7°', '7ª'],
      '8': ['8°', '8ª'],
      '9': ['9°', '9ª'],
      '€': [ '$', '£', '¢', '¥'],
      '"': ['“', '”'],
      '\'':['‘', '’'],
      '?': ['¿'],
      '!': ['¡'],
      '+': ['-', '×', '÷', '±'],
      '.': '·'
    },
    // These are based on the en layout with $ localized.
    keys: [
      [
        { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' },
        { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' },
        { value: '9' }, { value: '0' }
      ], [
        { value: '@' }, { value: '#' },
        { value: '€', className: 'alternate-indicator' }, { value: '&' },
        { value: '*' }, { value: '-' }, { value: '_' }, { value: '/' },
        { value: '(' }, { value: ')' }
      ], [
        { value: 'Alt', ratio: 1.5,
          keyCode: KeyboardEvent.DOM_VK_ALT,
          className: 'page-switch-key',
          targetPage: 2
        },
        { value: '+',
          supportsSwitching: {
            value: ','
          }
        }, { value: ':' }, { value: ';' }, { value: '"' },
        { value: '\'' }, { value: '!' }, { value: '?' },
        { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
      ], [
        { value: '&nbsp', ratio: 8, keyCode: KeyboardEvent.DOM_VK_SPACE },
        { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
      ]
    ]
  } ]
};
