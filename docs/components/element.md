# KinesisElement

KinesisElement is a component that will react to the user's interactions.

## Props

| Prop            |  Type  | Default Value | Description                                                                                                                              |
| --------------- | :----: | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| strength        | Number | 10            | Strength of the motion effect                                                                                                            |
| type            | String | 'translate'   | translate - translate-inv - rotate - scale - scaleX - scaleY - depth - depth-inv                                                         |
| tag             | String | 'div'         | Takes any valid html tag                                                                                                                 |
| transformOrigin | String | 'center'      | Similar to the CSS transform-origin property                                                                                             |
| originX         | Number | 50            | The motion's origin relative to the container, on the X axis. 50 being the center of the container, 0 the left side, 100 the right side. |
| originY         | Number | 50            | The motion's origin relative to the container, on the Y axis. 50 being the center of the container, 0 the top side, 100 the bottom side. |
| axis            | String | null          | Constrain the movement to one axis. Possible values: 'x' - 'y'                                                                           |
| maxX            | Number | null          | Limit the maximum range of the movement on the X axis                                                                                    |
| maxY            | Number | null          | Limit the maximum range of the movement on the Y axis                                                                                    |
| minX            | Number | null          | Limit the minimum range of the movement on the X axis                                                                                    |
| minY            | Number | null          | Limit the minimum range of the movement on the Y axis                                                                                    |
| cycles          | Number | 0             | How many times the movement will repeat                                                                                                  |
