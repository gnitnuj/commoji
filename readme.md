[![Build Status](https://travis-ci.org/gnitnuj/commoji.svg?branch=master)](https://travis-ci.org/gnitnuj/commoji)
[![Coverage Status](https://coveralls.io/repos/github/gnitnuj/commoji/badge.svg?branch=feature%2Fcoveralls)](https://coveralls.io/github/gnitnuj/commoji?branch=feature%2Fcoveralls)

# :sparkles: commoji :sparkles:

You know how sometimes you write commits and it has all these letters and words and no emoji? Yeah, commoji fixes that.

## mais pourquoi?
- why **commoji**, and not **gitmoji**? it's obvi cooler... b/c [this](https://gitmoji.carloscuesta.me/) :angry:
- why only `commoji -m 'emojify me'`... why no `commoji` without `-m`? b/c an emoji is worth 100 words (at least), so if you need more than the 50 character subject line limit, you're obviously doing something wrong.

### Install
- `git clone https://github.com/gnitnuj/commoji.git`
- `cd commoji`
- `npm install -g`

### Usage
`commoji -m 'omg!! this commit message is soooo fire. bomb dot com.'`

The `commoji` cli currently has 1 flag `-m` b/c ain't nobody got time to reach feature parity with `git commit`

### Contributing
- minimum 3 emojis per commit message... :angel: :ship: :unicorn:

##  ❤
This was made as part of an ⚡️emoji hackday⚡️ and  is powered by [emojilib](https://github.com/muan/emojilib), a magical `json` file of emoji names and keywords y'all should use in all your projects, and builds upon the work of [notwaldorf](https://github.com/notwaldorf).
