var Module = {
	noInitialRun: true,
	print: function(text) {
		postMessage({ type: 'log', content: text });
	}
};

var getFileData = function(filename) {
	var data = FS.root.contents[filename].contents;
	return new Uint8Array(data).buffer;
};

self.onmessage = function(e) {
	var msg = e.data;

	switch (msg.type) {
		case 'file':
			FS.createDataFile('/', 'file.mp3', msg.content, true, true);
			break;

		case 'start':
			self.postMessage({
				type: 'started'
			});
			
			// Use -t flag since otherwise Object #<Uint8Array> has no method 'push'
			Module['callMain'](['-t', '-r', '/file.mp3']);

			self.postMessage({
				type: 'result',
				content: getFileData('file.mp3')
			});
			break;
	}
};
