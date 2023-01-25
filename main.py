def on_received_number(receivedNumber):
    global position_y
    if receivedNumber == 0:
        led.unplot(position_X, position_y)
        position_y += -1
    if receivedNumber == 1:
        led.unplot(position_X, position_y)
        position_y += 1
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global position_X
    led.unplot(position_X, position_y)
    position_X += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global position_X
    led.unplot(position_X, position_y)
    position_X += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

sdf = 0
position_X = 0
position_y = 0
pos = False
radio.set_group(90)
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
""")
for index in range(3):
    led.plot(randint(0, 4), 3)
position_y = 2
position_X = 2
led.plot(position_X, position_y)

def on_forever():
    led.plot(position_X, position_y)
basic.forever(on_forever)

def on_forever2():
    global sdf
    while True:
        sdf = 0
        for index2 in range(5):
            for index3 in range(5):
                if led.point(index2, index3) == True:
                    sdf += 1
                    print(sdf)
        if sdf == 1:
            print("win")
basic.forever(on_forever2)
