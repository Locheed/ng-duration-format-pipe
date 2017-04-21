# DurationFormat Angular 2 Pipe

Angular 2 pipe to convert milliseconds or seconds to 'HH:mm:ss' format.

## Options and use

```sh
{{value_given_milliseconds | durationFormat: 'ms'}}
{{value_given_seconds | durationFormat: 's'}}
```

You can use arguments 'ms' or 's' to specify type of a value.

There is no day/month/year options. Hours will go past 24 hours.

## Compatibility

This pipe does work with a IE11 / Edge browsers.
These browser has a open bug that prevents use of a Angular 2 Date pipe.

[https://github.com/Microsoft/ChakraCore/issues/1223](https://github.com/Microsoft/ChakraCore/issues/1223)