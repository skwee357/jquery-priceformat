# jQuery Price Format

## jQuery plugin to format price inputs

jQuery price format is a plugin used to format input fields into fields capable to contain price.
It limits the input field to able to receive only numbers, and automatically inserts the decimal point
as you type. Such functionality is needed when developing accounting applications or online shops.

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

## Initializing
The plugin can be initialized manually by calling `$('#field').priceformatl({..options..});` or by specific `data-format="price"` on the field itself, for example:
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

