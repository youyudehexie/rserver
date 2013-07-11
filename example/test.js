var r = require('../lib/rserver');
r.connect('192.168.1.106', 6311, function(err, client) {
	console.log(err)
  client.eval('pi', function(err, ans) {
      console.log(ans);
      client.end();
  });
});