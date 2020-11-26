import {
  SpecialCharactersArray,
  ClassShorthands,
} from './../common/data/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zero',
  templateUrl: './zero.component.html',
  styleUrls: ['./zero.component.scss'],
})
export class ZeroComponent implements OnInit {
  public specialCharacters = SpecialCharactersArray;
  public classShorthands = ClassShorthands;

  public normalClasses = ['[...]', ['[^...]']];

  public octalEscape = [['\\015\\012', 'matches an ASCII CR/LF Sequence']];

  public controlCharacters = [
    ['\\cH', 'matches Control-H an ASCII Backspace Character'],
  ];
  public hexUniCodeEscapes = ['\\xnum', '\\x{num}', '\\unum', '\\Unum'];

  public posixClasses = [
    '[:alnum:]',
    '[:alpha:]',
    '[:blank:]',
    '[:cntrl:]',
    '[:digit:]',
    '[:graph:]',
    '[:lower:]',
    '[:print:]',
    '[:punct:]',
    '[:space:]',
    '[:upper:]',
    '[:xdigit:]',
  ];



  public unicodeClassesCo = ['\\p{prop}', '\\P{prop}'];

  public unicodeClassesCoExamples = [
    ['\\p{L}', 'Letters'],
    ['\\p{Ll}', 'Lowercase Letters'],
    ['\\p{Lm}', 'Modifier Letters &rarr; Try it out'],
    ['\\p{Lo}', 'Letters other'],
    ['\\p{Lt}', 'Titlecase Letters'],
    ['\\p{Lu}', 'Uppercase Letters'],
    ['\\p{C}', 'Control codes and Characters'],
    ['\\p{Cc}', 'ASCI and Latin-1 control chracters'],
    ['\\p{Cf}', 'Nonvisible formatting Characters'],
    ['\\p{Cn}', 'Unassigned Codepoints'],
    ['\\p{Co}', 'Private use, such as company logos '],
    ['\\p{Cs}', 'Surrogates (Ersatzmittel)'],
    ['\\p{M}', 'Meant to combine with base characters, such as accent marks'],
    ['\\p{Mc}', 'Modification Characters (e.g. vowel signs: ă, ĕ, ĭ, ŏ, ŭ.)'],
    [
      '\\p{Me}',
      'a character that encloses the character it is combined with (circle, square, keycap, etc.).',
    ],
    [
      '\\p{Mn}',
      'a character intended to be combined with another character without taking up extra space (e.g. accents, umlauts, etc.).',
    ],
    ['\\p{N}', 'any kind of numeric character in any script.'],
    [
      '\\p{Nd}',
      'a digit zero through nine in any script except ideographic scripts.',
    ],
    ['\\p{Nl}', 'a number that looks like a letter, such as a Roman numeral'],
    [
      '\\p{No}',
      'a superscript or subscript digit, or a number that is not a digit 0–9 (excluding numbers from ideographic scripts).',
    ],
    ['\\p{P}', 'any kind of punctuation character'],
    [
      '\\p{Pc}',
      'a punctuation character such as an underscore that connects words.',
    ],
    ['\\p{Pd}', 'any kind of hyphen or dash'],
    ['\\p{Pe}', 'any kind of closing bracket'],
    ['\\p{Pi}', 'any kind of opening quote'],
    ['\\p{Pf}', 'any kind of closing quote'],
    [
      '\\p{Po}',
      'any kind of punctuation character that is not a dash, bracket, quote or connecto',
    ],
    ['\\p{Ps}', 'any kind of opening bracket'],
    [
      '\\p{S}',
      'math symbols, currency signs, dingbats, box-drawing characters, etc',
    ],
    ['\\p{Sc}', 'any currency sign'],
    ['\\p{Sk}', 'a combining character (mark) as a full character on its own'],
    ['\\p{Sm}', 'any mathematical symbol'],
    [
      '\\p{So}',
      'various symbols that are not math symbols, currency signs, or combining characters',
    ],
    ['\\p{Z}', 'any kind of whitespace or invisible separator'],
    ['\\p{Zl}', 'line separator character U+2028'],
    ['\\p{Zp}', 'paragraph separator character U+2029'],
    [
      '\\p{Zs}',
      'a whitespace character that is invisible, but does take up space',
    ],
  ];

  public unicodeCombiningCharacterSequence = [
    [
      '\\X',
      '(PCRE-PHP) Matches any valid Unicode sequence, including line breaks.',
    ],
  ];

  // ANCHORS AND ZERO-WIDTH ASSERTIONS

  public startOfLineString = ['^', ['\\A']];

  constructor() {}

  ngOnInit(): void {}
}
