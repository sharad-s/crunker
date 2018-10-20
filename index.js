const Crunker = require("./dist/crunker.babel.js");

const audio = new Crunker.default();
console.log("CRUNKER:", audio.fetchAudio);

// audio
// 	.fetchAudio("./PLAYBOY.mp3")
// 	.then(res => {
// 		console.log(res);
// 	})
// 	.catch(error => {
// 		throw new Error(error);
// 	});
// // .then(buffers => audio.mergeAudio(buffers))
// // .then(merged => audio.export(merged, "audio/mp3"))
// // .then(output => audio.download(output.blob))
