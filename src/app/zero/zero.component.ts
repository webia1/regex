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
  public posixClasses = [
    '[:alnum:]',
    ['[:alpha:]'],
    ['[:blank:]'],
    ['[:cntrl:]'],
    ['[:digit:]'],
    ['[:graph:]'],
    ['[:lower:]'],
    ['[:print:]'],
    ['[:punct:]'],
    ['[:space:]'],
    ['[:upper:]'],
    ['[:xdigit:]'],
  ];

  public unicodeClassesCo = ['\\p{prop}', '\\P{prop}'];

  public unicodeClassesCoExamples = [
    ['\\p{Ll}', 'Lowercase Letters in any Unicode supported language'],
    [
      '\\X',
      '(PCRE) Matches any valid Unicode sequence, including line breaks.',
    ],
  ];

  constructor() {}

  ngOnInit(): void {}
}
