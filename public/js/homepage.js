const Handlebars = require('Handlebars');

Handlebars.registerHelper('cycle_event_style', function (index) {
    switch (index % 3) {
      case 0:
        return 'card-style-1';
      case 1:
        return 'card_style-2';
      case 2:
        return 'card-style-3';
      default:
        return 'card-style-1';
    }
});

