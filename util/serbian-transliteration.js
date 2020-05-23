const cyrillics = [
  'Љ',
  'Љ',
  'Њ',
  'Њ',
  'Џ',
  'Џ',
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Ђ',
  'Е',
  'Ж',
  'З',
  'И',
  'Ј',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'Ћ',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'љ',
  'њ',
  'џ',
  'а',
  'б',
  'в',
  'г',
  'д',
  'ђ',
  'е',
  'ж',
  'з',
  'и',
  'ј',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'ћ',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
];

const latin = [
  'Lj',
  'LJ',
  'Nj',
  'NJ',
  'Dž',
  'DŽ',
  'A',
  'B',
  'V',
  'G',
  'D',
  'Đ',
  'E',
  'Ž',
  'Z',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'R',
  'S',
  'T',
  'Ć',
  'U',
  'F',
  'H',
  'C',
  'Č',
  'Š',
  'lj',
  'nj',
  'dž',
  'a',
  'b',
  'v',
  'g',
  'd',
  'đ',
  'e',
  'ž',
  'z',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'ć',
  'u',
  'f',
  'h',
  'c',
  'č',
  'š',
];

const normalized = [
  'Lj',
  'LJ',
  'Nj',
  'NJ',
  'Dz',
  'DZ',
  'A',
  'B',
  'V',
  'G',
  'D',
  'D',
  'E',
  'Z',
  'Z',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'R',
  'S',
  'T',
  'C',
  'U',
  'F',
  'H',
  'C',
  'C',
  'S',
  'lj',
  'nj',
  'dz',
  'a',
  'b',
  'v',
  'g',
  'd',
  'd',
  'e',
  'z',
  'z',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'c',
  'u',
  'f',
  'h',
  'c',
  'c',
  's',
];

function convert(input, fromSet, toSet) {
  if (typeof input !== 'string') {
    return input;
  }
  let value = input;
  for (let index = 0; index < fromSet.length; ++index) {
    value = value.replace(new RegExp(fromSet[index], 'g'), toSet[index]);
  }

  return value;
}

function serbianLatinToCyrillic(input) {
  return convert(input, latin, cyrillics);
}

function serbianCyrillicToLatin(input) {
  return convert(input, cyrillics, latin);
}

function serbianNormalize(input) {
  return convert(convert(input, cyrillics, normalized), latin, normalized);
}

module.exports = {
  serbianCyrillicToLatin,
  serbianLatinToCyrillic,
  serbianNormalize
};