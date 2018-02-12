var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
 var from = 'Jen';
 var text = 'Some message';
 var message = generateMessage(from, text);

    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');
  });
});
describe('generateLocationMessage', () => {
  it('should generate correct location', () => {
    var from = 'Me';
    var latitude = 49.491725699999996;
    var longitude = -117.2855557;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    var message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({from, url});

  });
});
