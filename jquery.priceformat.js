(function ($, undefined) {

    var pluginName = 'priceformat',
        defaults = {
            defaultValue: 0,
            decimalSeparator: '.',
            thousandsSeparator: null
        },
        dataAttr = 'plugin_' + pluginName + '_price';

    function PriceFormat(element, options) {
        this.$el = $(element);
        this.options = $.extend({}, defaults, options);

        var v = this.$el.val(),
            ds = this.$el.data('decimal-separator'),
            ts = this.$el.data('thousands-separator');

        if ((v.length > 0) && !isNaN(v)) {
            this.options.defaultValue = parseInt(v);
        }

        if (ds !== undefined) {
            this.options.decimalSeparator = ds;
        }

        if (ts !== undefined) {
            this.options.thousandsSeparator = ts;
        }

        this.init();
    }

    PriceFormat.prototype.init = function () {
        var self = this;
        this.$el
            .data(dataAttr, self.options.defaultValue)
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false)
            .on('keydown', function (e) {
                var $t = $(this),
                    p = $t.data(dataAttr),
                    c = e.keyCode || e.which;

                if ((c === 9) || (c === 13) || e.altKey || e.ctrlKey) { // tab, enter alt, or ctrl
                    //let them live
                } else {
                    e.preventDefault();

                    if ((c === 8) || (c === 46)) { //backspace / delete
                        p = parseInt(p / 10);
                    } else if ((c >= 48) && (c <= 57)) { // 0 - 9
                        p = p * 10 + (c - 48);
                    } else if ((c >= 96) && (c <= 108)) { //num pad 0 - 9
                        p = p * 10 + (c - 96);
                    } else {
                        return;
                    }

                    $t.data(dataAttr, p);
                }
            })
            .on('keyup', function (e) {
                var $t = $(this),
                    p = ($t.data(dataAttr) / 100).toFixed(2);

                if (self.options.decimalSeparator !== '.') {
                    p = p.replace('.', self.options.decimalSeparator);
                }

                if (self.options.thousandsSeparator !== null) {
                    var parts = p.toString().split(self.options.decimalSeparator);
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, self.options.thousandsSeparator);
                    p = parts.join(self.options.decimalSeparator);
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