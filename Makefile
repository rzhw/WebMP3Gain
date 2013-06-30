all: mp3gain-worker.js

mp3gain-1_5_2_r2-src/mp3gain.so:
	cd mp3gain-1_5_2_r2-src; emmake make; mv mp3gain mp3gain.so

mp3gain-worker.js: worker-pre.js worker-post.js mp3gain-1_5_2_r2-src/mp3gain.so
	emcc -O2 mp3gain-1_5_2_r2-src/mp3gain.so -o mp3gain-worker.js -s ERROR_ON_UNDEFINED_SYMBOLS=1 --pre-js worker-pre.js --post-js worker-post.js

clean:
	cd mp3gain-1_5_2_r2-src; rm mp3gain.so; make clean
	-rm mp3gain-worker.js
