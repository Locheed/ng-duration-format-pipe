# DurationFormat Angular Pipe

Angular 2 and 4 pipe to convert milliseconds or seconds to 'HH:mm:ss' format.

***New:*** Also possible to convert milliseconds or seconds to

***00d, 00h, 00m, 00s***

or

***00 days, 00 hours, 00 minutes, 00 seconds.***

## Options and use

```sh
{{value_given_milliseconds | durationFormat: 'ms':'hhmmss'}}
{{value_given_seconds | durationFormat: 's':'hhmmss'}}

Output: '00:00:00'
```

```sh
{{value_given_milliseconds | durationFormat: 'ms':'ddhhmmss'}}
{{value_given_seconds | durationFormat: 's':'ddhhmms'}}

Output: '00d, 00h, 00m, 00s'
```

```sh
{{value_given_milliseconds | durationFormat: 'ms':'ddhhmmssLong'}}
{{value_given_seconds | durationFormat: 's':'ddhhmmssLong'}}

Output: '00 days, 00 hours, 00 minutes, 00 seconds'
```


You can use arguments 'ms' or 's' to specify type of a input value.
You can use second argument 'hhmmss', 'ddhhmmss' or 'ddhhmmssLong' to specify output format.

***Both arguments are REQUIRED***

There is no week/month/year options. Hours will go past 24 hours when format is set to 'hhmmss' and days go past 7 days.

## Compatibility

This pipe does work with a IE11 / Edge browsers.
These browser has a open bug that prevents use of a Angular 2 Date pipe.

[https://github.com/Microsoft/ChakraCore/issues/1223](https://github.com/Microsoft/ChakraCore/issues/1223)