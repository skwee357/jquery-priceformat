# jQuery Price Format

## jQuery plugin to format price inputs

jQuery price format is a plugin used to format input fields into fields capable to contain price.
It limits the input field to able to receive only numbers, and automatically inserts the decimal point<br>
as you type. Such functionality is needed when developing accounting applications or online shops or anything that require a price like input.

## Install via bower

You can install the package using `bower`<br>
`bower install jquery.priceformat --save`

## Example Usage

```html
<!DOCTYPE html>
<html>
<head lang="en">
 <meta charset="UTF-8">
 <title></title>
</head>
<body>

<label for="price">Price: </label>
<input id="price" type="text"/>

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="../jquery.priceformat.js"></script>
<script type="text/javascript">
 $(document).ready(function () {
     $('#price').priceformat({
         defaultValue: 10050,
         decimalSeparator: '.',
         thousandsSeparator: ','
     });
 })
</script>
</body>
</html>
```

The default value is 100.50, with `.` as a decimal separator and `,` as thousands separator (for example `1,300.50`)

More examples are available inside the `examples/` directory.

`examples/jsinit.html` - how to initialize via javascript<br>
`examples/datattrinit.html` - how to initialize via data attributes<br>
`examples/signedunsinged.html` - signed and unsigned functionality

## Initializing
The plugin can be initialized manually by calling `$('#field').priceformat({..options..});` or by using `data-format="price"` on the field itself, for example:<br>
`<input type="text" data-format="price" />`

## Plugin Options
The plugin can accept few options either via the constructor or html `data-*` attributes.

*Default value* integer, default = `0`<br>
Specified either via **defaultValue** in plugin constructor or **value** attribute on the input field.<br>
Sets the initial value of the input. For example to set the initial value to `100.50`, specify the default value as 10050<br>

*Decimals Separator* char, default = `.`<br>
Specified either via **decimalSeparator** in plugin constructor or **data-decimal-separator** attribute on the input field.<br>
Sets the decimals separator character.<br>

*Thousands Separator* char, default = null<br>
Specified either via **thousandsSeparator** in the plugin constructor or **data-thousands-separator** attribute on the input field.<br>
Sets the thousands separator character, default to null means no character will be used.<br>

*Allow signed numbers* boolean, default = false<br>
Specified exclusively via **allowSign** in the plugin constructor.<br>
Whether to allow signed numbers. Default false. If set to true, user can change the sign of the input by using the `-` or `+` keys.<br>

*Display plus sign* boolean, default = false<br>
Specified exclusively via **displayPlusSign** in the plugin constructor.<br>
Makes sense only if *allowSign* is set to true. By default, *allowSign* will have indication only for negative numbers, by pre-pending `-` in front of the number.
If you want indication for positive numbers as well, set *displayPlusSign* to true.<br>

## License
The MIT License (MIT)

Copyright (c) 2014 Dmitry "skwee357" Kudryavtsev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

