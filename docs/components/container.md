# KinesisContainer

KinesisContainer is a wrapper for KinesisElement components. You should use it to wrap all KinesisElement components.

## Props

| Prop        |  Type   | Default Value                    | Description                                                                      |
| ----------- | :-----: | -------------------------------- | -------------------------------------------------------------------------------- |
| disabled    | Boolean | false                            | To enable or disable the interactions                                            |
| duration    | Number  | 1000                             | Speed of the parallax animation in ms                                            |
| easing      | String  | 'cubic-bezier(0.23, 1, 0.32, 1)' | Easing of the parallax animation                                                 |
| tag         | String  | div                              | Takes any valid html tag                                                         |
| event       | String  | 'move'                           | Event to which the container will react. Possible values are 'move' and 'scroll' |
| perspective | Number  | 1000                             | Effective for the 'depth' parallax type                                          |
