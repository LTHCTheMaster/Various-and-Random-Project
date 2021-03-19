# -*- coding: utf-8 -*-

from random import randint

def encode(chaine):
    temp = ""
    change = "aeiouy"
    for i in chaine:
        if i == "a":
            temp += "e"
        if i == "e":
            temp += "i"
        if i == "i":
            temp += "o"
        if i == "o":
            temp += "u"
        if i == "u":
            temp += "y"
        if i == "y":
            temp += "a"
        if i not in change:
            temp += i
    return temp

def decodeIn(chaine, encoded):
    if encode(chaine) == encoded:
        return True
    else:
        return False

def randStr(size):
    temp = ""
    for i in range(size):
        val = randint(1,26)
        if val == 1:
            temp += "a"
        if val == 2:
            temp += "b"
        if val == 3:
            temp += "c"
        if val == 4:
            temp += "d"
        if val == 5:
            temp += "e"
        if val == 6:
            temp += "f"
        if val == 7:
            temp += "g"
        if val == 8:
            temp += "h"
        if val == 9:
            temp += "i"
        if val == 10:
            temp += "j"
        if val == 11:
            temp += "k"
        if val == 12:
            temp += "l"
        if val == 13:
            temp += "m"
        if val == 14:
            temp += "n"
        if val == 15:
            temp += "o"
        if val == 16:
            temp += "p"
        if val == 17:
            temp += "q"
        if val == 18:
            temp += "r"
        if val == 19:
            temp += "s"
        if val == 20:
            temp += "t"
        if val == 21:
            temp += "u"
        if val == 22:
            temp += "v"
        if val == 23:
            temp += "w"
        if val == 24:
            temp += "x"
        if val == 25:
            temp += "y"
        if val == 26:
            temp += "z"
    return temp

def play():
    playing = False
    played = ""
    created = encode(randStr(randint(7,25)))
    print(created)
    while not playing:
        while played == "":
            played = input("Votre reponse:\n")
        playing = decodeIn(played, created)
        played = ""
    print("Victoire")
    input("")

play()
