# numberfmt

<p>
  <img src="https://img.shields.io/npm/v/@tuplo/numberfmt">
  <a href="https://codeclimate.com/github/tuplo/numberfmt/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/7978f92305e2d8ed67c6/maintainability" />
  </a>
  <a href="https://codeclimate.com/github/tuplo/numberfmt/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/7978f92305e2d8ed67c6/test_coverage" />
  </a>
  <img src="https://github.com/tuplo/numberfmt/workflows/Build/badge.svg">
  <img src="https://david-dm.org/tuplo/numberfmt.svg">
</p>

> Numeric formatting using a text pattern and native `Intl.NumberFormat()`

## Why

JS provides powerful number formatting with the standard built-in object `Intl.NumberFormat`, but we find its API a little verbose and hard to grasp its full potential. We took inspiration from older libraries like numbro.js and numeral.js and built a string based pattern for interacting with `Intl.NumberFormat`.

## Usage

```typescript
// numeric
numberfmt(123456, '0,0.00'); // → 123,456.00

// currency
numberfmt(123456, '0,0GBP'); // → £123,456

// digital units
numberfmt(123456, '0b'); // → 120.56kb

// functional programming, partial application
const nf = numberfmt('0,0.00');
nf(123456); // → 123,456.00
```

## Install

```bash
$ npm install @tuplo/numberfmt

# or with yarn
$ yarn add @tuplo/numberfmt
```

## Reference

| Character | Meaning                          |                  |
| --------- | -------------------------------- | ---------------- |
| 0         | digit                            | 1                |
| .         | decimal separator                | 1.2              |
| ,         | thousands group separator        | 1,234            |
| []        | optional                         |                  |
| -         | negative sign                    | -1               |
| ()        | negative sign (accounting)       | (123)            |
| %         | percentage                       | 95%              |
| o         | ordinals                         | 1st              |
| a         | compact notation (short display) | 1K               |
| A         | compact notation (long display)  | 1 thousand       |
| e         | exponential (scientific)         | 1E4              |
| E         | exponential (engineering)        | 100E3            |
| b         | bits                             | 1.23Mb           |
| B         | bytes                            | 1.23TB           |
| m         | length                           | 1.23km           |
| k         | mass                             | 1.23kg           |
| USD       | currency symbol                  | US$1,000         |
| s         | currency narrow symbol           | $1,000           |
| c         | currency code                    | USD 1,000        |
| n         | currency name                    | 1,000 US dollars |

### Numbers

| Value   | Format  | Result   |                                   |
| ------- | ------- | -------- | --------------------------------- |
| 123456  | 0,0     | 123,456  | thousands separator               |
| 1234.5  | 0,0.0   | 1,234.5  | decimal separator                 |
| 1234.5  | 0,0.00  | 1,234.50 | fixed number of decimal digits    |
| 123     | 0[.]0   | 123      | optional decimal separator        |
| 123.4   | 0[.]0   | 123.4    |                                   |
| 123.4   | 0[.]00  | 123.40   |                                   |
| 123.45  | 0.00[0] | 123.45   | fixed and optional decimal digits |
| 123.456 | 0.00[0] | 123.456  |                                   |
| -1      | -0      | -1       | negative sign                     |
| 1       | (0)     | 1        | negative sign (accounting)        |
| -1      | (0)     | (1)      |                                   |

### Percentage

| Value   | Format | Result |
| ------- | ------ | ------ |
| 1       | 0%     | 100%   |
| -0.12   | 0%     | -12%   |
| 0.12345 | 0.00%  | 12.34% |

### Ordinals

| Value | Format | Result  |
| ----- | ------ | ------- |
| 0     | 0o     | 0th     |
| 1     | 0o     | 1st     |
| 2     | 0o     | 2nd     |
| 3     | 0o     | 3rd     |
| 4     | 0o     | 4th     |
| 1234  | 0,0o   | 1,234th |

### Compact notation

| Value         | Format | Result      |                               |
| ------------- | ------ | ----------- | ----------------------------- |
| 123           | 0a     | 123         | short display                 |
| 1234          | 0a     | 1K          |                               |
| 12345         | 0a     | 12K         |                               |
| 123456        | 0a     | 123K        |                               |
| 1234567       | 0a     | 1M          |                               |
| 1234567890    | 0a     | 1B          |                               |
| 1234567890123 | 0a     | 1T          |                               |
| 1234          | 0A     | 1 thousand  | long display                  |
| 1234567       | 0A     | 1 million   |                               |
| 1234567890    | 0A     | 1 billion   |                               |
| 1234567890123 | 0A     | 1 trillion  |                               |
| 1234567       | 0.0a   | 1.2M        | combined with numeric formats |
| 1234567       | 0.0A   | 1.2 million |                               |

### Exponential

| Value    | Format | Result |                                                       |
| -------- | ------ | ------ | ----------------------------------------------------- |
| 1        | 0e     | 1E0    | scientific (order-of-magnitude)                       |
| 10       | 0e     | 1E1    |                                                       |
| 100      | 0e     | 1E2    |                                                       |
| 1000     | 0e     | 1E3    |                                                       |
| 10000    | 0e     | 1E4    |                                                       |
| 1        | 0E     | 1E0    | engineering (exponent of ten when divisible by three) |
| 10       | 0E     | 10E0   |                                                       |
| 100      | 0E     | 100E0  |                                                       |
| 1000     | 0E     | 1E3    |                                                       |
| 10000    | 0E     | 10E3   |                                                       |
| 100000   | 0E     | 100E3  |                                                       |
| 12345678 | 0.0e   | 1.2E7  | combined with numeric formats                         |
| 12345678 | 0.0E   | 12.3E6 |                                                       |

### Digital

| Value         | Format | Result |                   |
| ------------- | ------ | ------ | ----------------- |
| 1             | 0b     | 1bit   | bits (narrow)     |
| 1024          | 0b     | 1kb    |                   |
| 1048576       | 0b     | 1Mb    |                   |
| 1073741824    | 0b     | 1Gb    |                   |
| 1099511627776 | 0b     | 1Tb    |                   |
| 1             | 0B     | 1B     | bytes (narrow)    |
| 1024          | 0B     | 1kB    |                   |
| 1048576       | 0B     | 1MB    |                   |
| 1073741824    | 0B     | 1GB    |                   |
| 1099511627776 | 0B     | 1TB    |                   |
| 1             | 0 b    | 1 bit  | bits (short)      |
| 1024          | 0 b    | 1 kb   |                   |
| 1             | 0 B    | 1 byte | bytes (short)     |
| 1024          | 0 B    | 1 kB   |                   |
| 1524          | 0b     | 1.49kb | 2 fraction digits |
| 1524          | 0B     | 1.49kB |                   |

### Length

| Value | Format | Result |                                                     |
| ----- | ------ | ------ | --------------------------------------------------- |
| 0.001 | 0m     | 1mm    | value in meters, formatted to closest unit (narrow) |
| 0.01  | 0m     | 1cm    |                                                     |
| 1     | 0m     | 1m     |                                                     |
| 1000  | 0m     | 1km    |                                                     |
| 1200  | 0m     | 1.2km  |                                                     |
| 0.001 | 0 m    | 1 mm   | (short)                                             |
| 0.01  | 0 m    | 1 cm   |                                                     |
| 1     | 0 m    | 1 m    |                                                     |
| 1000  | 0 m    | 1 km   |                                                     |
| 1200  | 0 m    | 1.2 km |                                                     |

### Mass

| Value | Format | Result  |        |
| ----- | ------ | ------- | ------ |
| 1     | 0k     | 1kg     | narrow |
| 0.001 | 0k     | 1g      |        |
| 1.23  | 0k     | 1.23kg  |        |
| 1     | 0 k    | 1 kg    | short  |
| 0.001 | 0 k    | 1 g     |        |
| 1.23  | 0 k    | 1.23 kg |        |

### Currency

| Value | Format    | Result               |                   |
| ----- | --------- | -------------------- | ----------------- |
| 123   | GBP       | £123                 | symbol            |
| 1234  | 0,0GBP    | £1,234               |                   |
| 1234  | 0,0.00GBP | £1,234.00            |                   |
| 123   | EUR       | €123                 |                   |
| 123   | JPY       | JP¥123               |                   |
| 123   | USD       | US$123               |                   |
| 123   | CAD       | CA$123               |                   |
| 1000  | 0,0GBPs   | £1,000               | narrow symbol     |
| 1000  | 0,0EURs   | €1,000               |                   |
| 1000  | 0,0USDs   | $1,000               |                   |
| 1000  | 0,0CADs   | $1,000               |                   |
| 1000  | 0,0JPYs   | ¥1,000               |                   |
| 1000  | 0,0GBPc   | GBP 1,000            | ISO currency code |
| 1000  | 0,0EURc   | EUR 1,000            |                   |
| 1000  | 0,0USDc   | USD 1,000            |                   |
| 1000  | 0,0JPYc   | JPY 1,000            |                   |
| 1000  | 0,0GBPn   | 1,000 British pounds | currency name     |
| 1000  | 0,0EURn   | 1,000 euros          |                   |
| 1000  | 0,0USDn   | 1,000 US dollars     |                   |
| 1000  | 0,0JPYn   | 1,000 Japanese yen   |                   |

## API

### numberfmt(value: number, format: string) => number

## Contribute

Contributions are always welcome!

## License

MIT
