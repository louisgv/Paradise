'use strict'

const helpers = require('../core/helpers')

const _lib = {

  time: function (context) {
    return clock.time
  },
  beat: function (context) {
    return clock.beat
  },
  pulse: function (context) {
    return clock.pulse
  }

  // create clock & enter clock & trigger time The time is @( time ) & leave & time

}

function lib (_host, _input, _query, _responder) {
  let out = {}
  for (var name in _lib) {
    const func = _lib[name]
    const new_func = function (...given) {
      let args = []
      args.push({ host: _host, input: _input, query: _query, responder: _responder })
      args.push.apply(args, given)
      return func.apply(null, args)
    }
    out[name] = new_func
  }

  return out
}

module.exports = lib
