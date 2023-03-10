import { randomInt } from 'crypto';

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  }
  if (typeof value !== 'number' && value === '') {
    return true;
  }
  if (typeof value === 'undefined' || value === undefined) {
    return true;
  }
  if (
    value !== null &&
    typeof value === 'object' &&
    !Object.keys(value)?.length
  ) {
    return true;
  }
  return false;
};

/**
 * @method isNull
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isNull Check
 */
export const isNull = (val: null): boolean => val === null;

/**
 * @method isUndefined
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isUndefined Check
 */
export const isUndefined = (obj: any): boolean => typeof obj === 'undefined';

/**
 * @method isNil
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isNil Check
 */
export const isNil = (val: string): boolean => val === '';

/**
 * @method isBoolean
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isBoolean Check
 */
export const isBoolean = (obj: any): boolean => typeof obj === 'boolean';

/**
 * @method getOsEnv
 * @param {String} value
 * @returns {String} true & false
 * @description this value is getOsEnv Check
 */
export const getOsEnv = (key: string): string => {
  const { env } = process as any;
  if (isEmpty(env[key])) {
    throw new Error(`[ENV] ${key} is not set.`);
  }
  return env[key]!;
};

/**
 * @method getOsEnvOptional
 * @param {String} value
 * @returns {String} true & false
 * @description this value is getOsEnvOptional Check
 */
export const getOsEnvOptional = (key: string): string => process.env[key]!;

/**
 * @method toNumber
 * @param {String} value
 * @returns {Number} true & false
 * @description this value is toNumber Check
 */
export const toNumber = (val: string): number => Number.parseInt(val, 10);

/**
 * @method toInteger
 * @param {String | Number} value
 * @returns {Number} true & false
 * @description this value is toInteger Check
 */
export const toInteger = (val: any): number => {
  if (Number.isNaN(Number.parseInt(val, 10))) {
    return 0;
  }
  return Number.parseInt(val, 10);
};

/**
 * @method toBool
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is toBool Check
 */
export const toBool = (val: string | boolean): boolean => {
  if (val === true || val === 'true') {
    return true;
  }
  if (val === false || val === 'false') {
    return false;
  }
  throw new Error('Parse failed (boolean string is expected)');
};

/**
 * @method isValidInt
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isValidInt Check
 */
export const isValidInt = (val: string): boolean => toInteger(val) !== 0;

/**
 * @method normalizePort
 * @param {String | Number} value
 * @returns {Number | Boolean} true & false
 * @description this value is normalizePort Check
 */
export const normalizePort = (port: any): number | boolean => {
  const parsedPort = toNumber(port);
  if (Number.isNaN(parsedPort)) {
    return port;
  }
  if (parsedPort >= 0) {
    return parsedPort;
  }
  return false;
};

/**
 * @method isObject
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isObject Check
 */
export const isObject = (fn: string): boolean =>
  !isEmpty(fn) && typeof fn === 'object';

/**
 * @method isFunction
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isFunction Check
 */
export const isFunction = (val: string): boolean => typeof val === 'function';

/**
 * @method isString
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isString Check
 */
export const isString = (val: string): boolean => typeof val === 'string';

/**
 * @method isNumber
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isNumber Check
 */
export const isNumber = (val: string): boolean => typeof val === 'number';

/**
 * @method isConstructor
 * @param {String} value
 * @returns {Boolean} true & false
 * @description this value is isConstructor Check
 */
export const isConstructor = (val: string): boolean => val === 'constructor';

/**
 * Generate OTP of the length
 * @param  {number} length length of password.
 * @param  {object} options
 * @param  {boolean} options.digits Default: `true` true value includes digits in OTP
 * @param  {boolean} options.lowerCaseAlphabets Default: `true` true value includes lowercase alphabets in OTP
 * @param  {boolean} options.upperCaseAlphabets Default: `true` true value includes uppercase alphabets in OTP
 * @param  {boolean} options.specialChars Default: `true` true value includes specialChars in OTP
 * @param  {boolean} options.onlyNumbers Default: `true` true value includes only number digits in OTP
 */
export function generateOtp(
  length = 6,
  options = {
    digits: true,
    upperCaseAlphabets: true,
    specialChars: false,
    lowerCaseAlphabets: false,
    onlyNumbers: true,
  }
) {
  const digits = '0123456789';
  const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
  const specialChars = '#!&@';
  const stringLength: number = length || 6;
  const generateOptions: any = options || {};

  generateOptions.digits = Object.prototype.hasOwnProperty.call(
    generateOptions,
    'digits'
  )
    ? options.digits
    : true;
  generateOptions.lowerCaseAlphabets = Object.prototype.hasOwnProperty.call(
    generateOptions,
    'lowerCaseAlphabets'
  )
    ? options.lowerCaseAlphabets
    : true;
  generateOptions.upperCaseAlphabets = Object.prototype.hasOwnProperty.call(
    generateOptions,
    'upperCaseAlphabets'
  )
    ? options.upperCaseAlphabets
    : true;
  generateOptions.specialChars = Object.prototype.hasOwnProperty.call(
    generateOptions,
    'specialChars'
  )
    ? options.specialChars
    : true;

  let allowsChars = '';
  if (options?.onlyNumbers) {
    allowsChars = (generateOptions.digits || '') && digits;
  } else {
    allowsChars =
      ((generateOptions.digits || '') && digits) +
      ((generateOptions.lowerCaseAlphabets || '') && lowerCaseAlphabets) +
      ((generateOptions.upperCaseAlphabets || '') && upperCaseAlphabets) +
      ((generateOptions.specialChars || '') && specialChars);
  }
  let password = '';
  while (password.length < stringLength) {
    const charIndex = randomInt(0, allowsChars?.length);
    password += allowsChars[charIndex];
  }
  return password;
}

/**
 * Generate slug of string
 * @param  {string} string string to create a slug
 * @param  {object} options
 * @param  {string} options.replacement replace spaces with replacement character, defaults to `-`.
 * @param  {RegExp} options.remove remove characters that match regex, defaults to `undefined`
 * @param  {boolean} options.lower convert to lower case, defaults to `false`
 * @param  {boolean} options.strict strip special characters except replacement, defaults to `false`
 * @param  {string} options.locale language code of the locale to use
 * @param  {boolean} options.trim trim leading and trailing replacement chars, defaults to `true`
 */
export function slugify(
  string: string,
  options?:
    | {
        replacement?: string;
        remove?: RegExp;
        lower?: boolean;
        strict?: boolean;
        locale?: string;
        trim?: boolean;
      }
    | string
): string {
  const charMap = JSON.parse(
    '{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","??":"cent","??":"pound","??":"currency","??":"yen","??":"(c)","??":"a","??":"(r)","??":"o","??":"A","??":"A","??":"A","??":"A","??":"A","??":"A","??":"AE","??":"C","??":"E","??":"E","??":"E","??":"E","??":"I","??":"I","??":"I","??":"I","??":"D","??":"N","??":"O","??":"O","??":"O","??":"O","??":"O","??":"O","??":"U","??":"U","??":"U","??":"U","??":"Y","??":"TH","??":"ss","??":"a","??":"a","??":"a","??":"a","??":"a","??":"a","??":"ae","??":"c","??":"e","??":"e","??":"e","??":"e","??":"i","??":"i","??":"i","??":"i","??":"d","??":"n","??":"o","??":"o","??":"o","??":"o","??":"o","??":"o","??":"u","??":"u","??":"u","??":"u","??":"y","??":"th","??":"y","??":"A","??":"a","??":"A","??":"a","??":"A","??":"a","??":"C","??":"c","??":"C","??":"c","??":"D","??":"d","??":"DJ","??":"dj","??":"E","??":"e","??":"E","??":"e","??":"e","??":"e","??":"E","??":"e","??":"G","??":"g","??":"G","??":"g","??":"I","??":"i","??":"i","??":"i","??":"I","??":"i","??":"I","??":"i","??":"k","??":"k","??":"L","??":"l","??":"L","??":"l","??":"L","??":"l","??":"N","??":"n","??":"N","??":"n","??":"N","??":"n","??":"O","??":"o","??":"O","??":"o","??":"OE","??":"oe","??":"R","??":"r","??":"R","??":"r","??":"S","??":"s","??":"S","??":"s","??":"S","??":"s","??":"T","??":"t","??":"T","??":"t","??":"U","??":"u","??":"u","??":"u","??":"U","??":"u","??":"U","??":"u","??":"U","??":"u","??":"W","??":"w","??":"Y","??":"y","??":"Y","??":"Z","??":"z","??":"Z","??":"z","??":"Z","??":"z","??":"E","??":"f","??":"O","??":"o","??":"U","??":"u","??":"LJ","??":"lj","??":"NJ","??":"nj","??":"S","??":"s","??":"T","??":"t","??":"e","??":"o","??":"A","??":"E","??":"H","??":"I","??":"O","??":"Y","??":"W","??":"i","??":"A","??":"B","??":"G","??":"D","??":"E","??":"Z","??":"H","??":"8","??":"I","??":"K","??":"L","??":"M","??":"N","??":"3","??":"O","??":"P","??":"R","??":"S","??":"T","??":"Y","??":"F","??":"X","??":"PS","??":"W","??":"I","??":"Y","??":"a","??":"e","??":"h","??":"i","??":"y","??":"a","??":"b","??":"g","??":"d","??":"e","??":"z","??":"h","??":"8","??":"i","??":"k","??":"l","??":"m","??":"n","??":"3","??":"o","??":"p","??":"r","??":"s","??":"s","??":"t","??":"y","??":"f","??":"x","??":"ps","??":"w","??":"i","??":"y","??":"o","??":"y","??":"w","??":"Yo","??":"DJ","??":"Ye","??":"I","??":"Yi","??":"J","??":"LJ","??":"NJ","??":"C","??":"DZ","??":"A","??":"B","??":"V","??":"G","??":"D","??":"E","??":"Zh","??":"Z","??":"I","??":"J","??":"K","??":"L","??":"M","??":"N","??":"O","??":"P","??":"R","??":"S","??":"T","??":"U","??":"F","??":"H","??":"C","??":"Ch","??":"Sh","??":"Sh","??":"U","??":"Y","??":"","??":"E","??":"Yu","??":"Ya","??":"a","??":"b","??":"v","??":"g","??":"d","??":"e","??":"zh","??":"z","??":"i","??":"j","??":"k","??":"l","??":"m","??":"n","??":"o","??":"p","??":"r","??":"s","??":"t","??":"u","??":"f","??":"h","??":"c","??":"ch","??":"sh","??":"sh","??":"u","??":"y","??":"","??":"e","??":"yu","??":"ya","??":"yo","??":"dj","??":"ye","??":"i","??":"yi","??":"j","??":"lj","??":"nj","??":"c","??":"u","??":"dz","??":"G","??":"g","??":"GH","??":"gh","??":"KH","??":"kh","??":"NG","??":"ng","??":"UE","??":"ue","??":"U","??":"u","??":"H","??":"h","??":"AE","??":"ae","??":"OE","??":"oe","??":"A","??":"B","??":"G","??":"D","??":"E","??":"Z","??":"E\'","??":"Y\'","??":"T\'","??":"JH","??":"I","??":"L","??":"X","??":"C\'","??":"K","??":"H","??":"D\'","??":"GH","??":"TW","??":"M","??":"Y","??":"N","??":"SH","??":"CH","??":"P","??":"J","??":"R\'","??":"S","??":"V","??":"T","??":"R","??":"C","??":"P\'","??":"Q\'","??":"O\'\'","??":"F","??":"EV","??":"a","??":"aa","??":"a","??":"u","??":"i","??":"e","??":"a","??":"b","??":"h","??":"t","??":"th","??":"j","??":"h","??":"kh","??":"d","??":"th","??":"r","??":"z","??":"s","??":"sh","??":"s","??":"dh","??":"t","??":"z","??":"a","??":"gh","??":"f","??":"q","??":"k","??":"l","??":"m","??":"n","??":"h","??":"w","??":"a","??":"y","??":"an","??":"on","??":"en","??":"a","??":"u","??":"e","??":"","??":"0","??":"1","??":"2","??":"3","??":"4","??":"5","??":"6","??":"7","??":"8","??":"9","??":"p","??":"ch","??":"zh","??":"k","??":"g","??":"y","??":"0","??":"1","??":"2","??":"3","??":"4","??":"5","??":"6","??":"7","??":"8","??":"9","???":"baht","???":"a","???":"b","???":"g","???":"d","???":"e","???":"v","???":"z","???":"t","???":"i","???":"k","???":"l","???":"m","???":"n","???":"o","???":"p","???":"zh","???":"r","???":"s","???":"t","???":"u","???":"f","???":"k","???":"gh","???":"q","???":"sh","???":"ch","???":"ts","???":"dz","???":"ts","???":"ch","???":"kh","???":"j","???":"h","???":"S","???":"s","???":"W","???":"w","???":"W","???":"w","???":"W","???":"w","???":"SS","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"A","???":"a","???":"E","???":"e","???":"E","???":"e","???":"E","???":"e","???":"E","???":"e","???":"E","???":"e","???":"E","???":"e","???":"E","???":"e","???":"E","???":"e","???":"I","???":"i","???":"I","???":"i","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"O","???":"o","???":"U","???":"u","???":"U","???":"u","???":"U","???":"u","???":"U","???":"u","???":"U","???":"u","???":"U","???":"u","???":"U","???":"u","???":"Y","???":"y","???":"Y","???":"y","???":"Y","???":"y","???":"Y","???":"y","???":"-","???":"\'","???":"\'","???":"\\"","???":"\\"","???":"\\"","???":"+","???":"*","???":"...","???":"ecu","???":"cruzeiro","???":"french franc","???":"lira","???":"mill","???":"naira","???":"peseta","???":"rupee","???":"won","???":"new shequel","???":"dong","???":"euro","???":"kip","???":"tugrik","???":"drachma","???":"penny","???":"peso","???":"guarani","???":"austral","???":"hryvnia","???":"cedi","???":"kazakhstani tenge","???":"indian rupee","???":"turkish lira","???":"russian ruble","???":"bitcoin","???":"sm","???":"tm","???":"d","???":"delta","???":"sum","???":"infinity","???":"love","???":"yuan","???":"yen","???":"rial","???":"laa","???":"laa","???":"lai","???":"la"}'
  );
  const locales = JSON.parse(
    '{"bg":{"??":"Y","??":"Ts","??":"Sht","??":"A","??":"Y","??":"y","??":"ts","??":"sht","??":"a","??":"y"},"de":{"??":"AE","??":"ae","??":"OE","??":"oe","??":"UE","??":"ue","??":"ss","%":"prozent","&":"und","|":"oder","???":"summe","???":"unendlich","???":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","??":"centavos","??":"libras","??":"moneda","???":"francos","???":"suma","???":"infinito","???":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","??":"centime","??":"livre","??":"devise","???":"franc","???":"somme","???":"infini","???":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","??":"centavo","???":"soma","??":"libra","???":"infinito","???":"amor"},"uk":{"??":"Y","??":"y","??":"Y","??":"y","??":"Ts","??":"ts","??":"Kh","??":"kh","??":"Shch","??":"shch","??":"H","??":"h"},"vi":{"??":"D","??":"d"},"da":{"??":"OE","??":"oe","??":"AA","??":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st??rre end"},"nb":{"&":"og","??":"AA","??":"AE","??":"OE","??":"aa","??":"ae","??":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","??":"AA","??":"AE","??":"OE","??":"aa","??":"ae","??":"oe"}}'
  );
  if (typeof string !== 'string') {
    throw new Error('slugify: string argument expected');
  }

  // eslint-disable-next-line no-param-reassign
  options =
    typeof options === 'string' ? { replacement: options } : options || {};

  const locale: { [key: string]: string } = locales[options.locale!] || {};

  const replacement: string =
    options.replacement === undefined ? '-' : options.replacement;

  const trim: boolean = options.trim === undefined ? true : options.trim;

  const lower: boolean = options.lower === undefined ? true : options.lower;

  let slug: string = string
    .normalize()
    .split('')
    // replace characters based on charMap
    .reduce((result, ch) => {
      let appendChar: string = locale[ch] || charMap[ch] || ch;
      if (appendChar === replacement) {
        appendChar = ' ';
      }
      return (
        result +
        appendChar
          // remove not allowed characters
          .replace((options as any)?.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
      );
    }, '');

  if (options.strict) {
    slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
  }

  if (trim) {
    slug = slug.trim();
  }

  // Replace spaces with replacement character, treating multiple consecutive
  // spaces as a single space.
  slug = slug.replace(/\s+/g, replacement);

  if (lower) {
    slug = slug.toLowerCase();
  }

  return slug;
}
