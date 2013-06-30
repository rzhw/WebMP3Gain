# WebMP3Gain

## What it is

WebMP3Gain is MP3Gain ported to the web, with the help of [Emscripten][ems].
[MP3Gain][mp3g] helps you normalise the volume of your MP3s, so that you don't
need to constantly change your volume when another song comes on.

  [ems]: http://emscripten.org/
  [mp3g]: http://mp3gain.sourceforge.net/

## Compiling

Last tested with kripken/emscripten@18a6854c28. Simply set up Emscripten
in your PATH, and run `make`.

## Known issues

- Standard output isn't shown when using as a web worker (see gh-pages branch)
