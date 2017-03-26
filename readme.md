# (Shuffled) 1Digit_PinInputTest

Like many POS (Point Of Sale) input terminals, the UI app has the ability to simulate the evaluation of numerical inputs. 
If the numerical sequence is short, there is the risk to overlook the secret pin, by movement of your hand.
The purpose or idea of the app is to make it more difficult by shuffling the input order. (Fisher-Yates)

+ define a 4x3 Matrix and assign click listeners for numeral output, every button returns 1 - digit as char
+ concat up to 4 char numbers as pin. 
+ compare random generated with entered pin => return correct or wrong pin
+ option to shuffle numpad (checkbox)
+ included 0 to shuffle