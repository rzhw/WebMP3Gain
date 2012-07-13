# WebMP3Gain

## Introduction

WebMP3Gain is MP3Gain ported to the web, with the help of [Emscripten][ems]!
What's MP3Gain? It basically helps you normalise the volume of all your MP3s,
so that you don't end up constantly having to change the volume when another
song comes on. Read more about it on [its website][mp3g].

  [ems]: http://emscripten.org/
  [mp3g]: http://mp3gain.sourceforge.net/

## Compiling

These instructions were last tested with kripken/emscripten@04bbb220c6472fe8894b4eeffef86b7e6107effd.

First get the LLVM bytecode by running `emmake make`, and then rename
`mp3gain` to `mp3gain.bc`. Then simply run `emcc` on that.

To get the worker file, wrap with the provided pre/post files. The reason
they're separate is so that you can feed them into `emcc -O2`; otherwise,
Closure Compiler's optimisation stops a lot of things from working!
