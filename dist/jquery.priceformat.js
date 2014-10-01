(function ($, undefined) {

    var pluginName = 'priceformat',
        defaults = {
            defaultValue: 0,
            decimalSeparator: '.',
            thousandsSeparator: null,
            allowSign: false,
            displayPlusSign: false
        },
        dataAttrPrice = 'plugin_' + pluginName + '_price',
        dataAttrSign = 'plugin_' + pluginName + '_sign';

    function PriceFormat(element, options) {
        this.$el = $(element);
        this.options = $.extend({}, defaults, options);

        var v = this.$el.val(),
            ds = this.$el.data('decimal-separator'),
            ts = this.$el.data('thousands-separator'),
            sign = '+';

        if (v.length === 0) v = this.options.defaultValue;

        if (v.toString().length > 0) {
            sign = v.toString().charAt(0);
            if ((sign === '-') || (sign === '+')) {
                v = v.toString().substr(1); //remove sign
                if (!options.allowSign) sign = '+';
            } else {
                sign = '+';
            }

            if (!isNaN(v)) {
                this.options.defaultValue = parseInt(v);
            }
        }

        if (ds !== undefined) {
            this.options.decimalSeparator = ds;
        }

        if (ts !== undefined) {
            this.options.thousandsSeparator = ts;
        }

        this.init(sign);
    }

    PriceFormat.prototype.init = function (sign) {
        var self = this;
        this.$el
            .data(dataAttrPrice, self.options.defaultValue)
            .data(dataAttrSign, sign)
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false)
            .on('keydown', function (e) {
                var $t = $(this),
                    p = $t.data(dataAttrPrice),
                    c = e.keyCode || e.which;

                if ((c === 9) || (c === 13) || e.altKey || e.ctrlKey) { // tab, enter alt, or ctrl
                    //let them live
                } else {
                    e.preventDefault();

                    if ((c === 8) || (c === 46)) { //backspace / delete
                        p = parseInt(p / 10);
                    } else if ((c >= 48) && (c <= 57)) { // 0 - 9
                        p = p * 10 + (c - 48);
                    } else if ((c >= 96) && (c <= 105)) { //num pad 0 - 9
                        p = p * 10 + (c - 96);
                    } else {
                        if (self.options.allowSign) {
                            if ((c === 107) || (e.shiftKey && (c === 187))) { //plus sign
                                $t.data(dataAttrSign, '+');
                            } else if ((c === 189) || (c === 109)) { //minus sign
                                $t.data(dataAttrSign, '-');
                            }
                        }
                        return;
                    }

                    $t.data(dataAttrPrice, p);
                }
            })
            .on('keyup', function (e) {
                var $t = $(this),
                    p = ($t.data(dataAttrPrice) / 100).toFixed(2),
                    s = $t.data(dataAttrSign);

                if (self.options.decimalSeparator !== '.') {
                    p = p.replace('.', self.options.decimalSeparator);
                }

                if (self.options.thousandsSeparator !== null) {
                    var parts = p.toString().split(self.options.decimalSeparator);
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, self.options.thousandsSeparator);
                    p = parts.join(self.options.decimalSeparator);
                }

                if (self.options.allowSign) {
                    if (s === '-') p = '-' + p;
                    else if (self.options.displayPlusSign) p = '+' + p;
                }

                $t.val(p);
            })
            .keyup();
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new PriceFormat(this, options));
            }
        });
    };

    $(document).ready(function () {
        $('input[data-format="price"]').priceformat();
    });

})(jQuery);