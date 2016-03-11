 var moment = require('moment');
 var now = moment();

 // console.log(now.format());
 // console.log(now.format('X'));
 // console.log(now.format('x'));
 // console.log(now.valueOf());

 var timestamp = 1457703760830;
 var timestampMoment = moment.utc(timestamp);

 console.log(timestampMoment.local().format('h:mm a'));

 // now.subtract(1, 'year');

 // console.log(now.format());
 // console.log(now.format('MMM Do YYYY, h:mma')); // Mar 11th 2016, 6:41 pm