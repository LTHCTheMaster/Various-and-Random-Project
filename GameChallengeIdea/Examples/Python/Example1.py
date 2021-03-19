# -*- coding: utf-8 -*-

from random import randint

def start():
    name = input("Nom:\n")
    role = ""
    roles = ["chasseur","mineur","magicien"]
    while role not in roles:
        role = input("ROLE: chasseur OU mineur OU magicien:\n")
    if role == "chasseur":
        pv = 100
        bc = 10
        atk = 30
    if role == "mineur":
        pv = 100
        bc = 18
        atk = 22
    if role == "magicien":
        pv = 140
        bc = 10
        atk = 22
    return {"name": name, "pv": pv+randint(20,40), "bc": bc, "atk": atk+randint(1,3)}

def atk(atk, bc):
    if atk > bc:
        return atk - bc
    else:
        return 0

def loop(info):
    finish = 0
    cmds = ['avance','recule','go','atk','quit']
    cmd = ""
    path = 0
    enm = 0
    enmI = {"pv":0,"bc":0,"atk":0}
    maxpv = info["pv"]
    force = 2
    while finish==0:
        while cmd not in cmds:
            cmd = input("[avance OU recule OU go OU atk OU quit]\ngame >/ ")
        if cmd == cmds[0] and path < 1000 and enm < 1:
            path += randint(1, 30)
        if cmd == cmds[1] and path > 0 and enm > 0 and force > 0:
            path -= 1
            if randint(1,5) > 4:
                if randint(1,2) > 1:
                    cmd = "go"
                enm = 0
                print("Ennemi mort")
                force -= 1
        if cmd == cmds[2] and enm > 0:
            info["pv"] -= (enmI["bc"] + enmI["atk"] + 3)
            enm = 0
            print("Ennemi mort")
        if cmd == cmds[3] and enm > 0:
            enmI["pv"] -= atk(info["atk"], enmI["bc"])
        if cmd == cmds[4]:
            finish = -5
        if randint(1,30) > 29 and enm < 1:
            enm = 1
            enmI = {"pv":randint(50,150),"bc":randint(8,20),"atk":randint(20,26)}
            print("Un ennemi a spawn, vous ne pouvez pas avancer, vous pouvez juste reculer si vous en avez encore la force ou alors go")
        if enm > 0 and enmI["pv"] < 1:
            enm = 0
            info["pv"] = maxpv
            print("Ennemi mort")
        if enm > 0:
            info["pv"] -= atk(enmI["atk"], info["bc"])
        if path > 999 and info["pv"] > 0:
            finish = 1
        if info["pv"] < 1:
            finish = -1
        cmd = ""
        print("\n Path:",path,"\nForce:",force,"\nVie:",info["pv"],"\n")
    if finish < -1:
        print("Vous abandonnez lachement")
        return
    if finish < 0:
        print("Vous avez perdu")
    if finish > 0:
        print("Vous avez gagné")

def game():
    info = start()
    loop(info)
    input("")

game()
