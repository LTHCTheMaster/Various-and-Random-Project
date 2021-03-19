# -*- coding: utf-8 -*-

#IMPORTS
import PIL.Image

#CONSTANT
ASCII_CHARS = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]

#METHODS
#Resize
def resizeImage(image, new_width=100):
    width, height = image.size
    ratio = height / width
    new_height = int(new_width * ratio)
    resized_image = image.resize((new_width, new_height))
    return(resized_image)

#To gray scale
def grayify(image):
    grayscale_image = image.convert("L")
    return(grayscale_image)

#To ascii chars
def pixelsToASCII(image):
    pixels = image.getdata()
    characters = "".join([ASCII_CHARS[pixel // 25] for pixel in pixels])
    return(characters)

#Image to ASCII text
def convertToASCII(img_path, new_width=100):
    try:
        image = PIL.Image.open(img_path)
    except:
        print("invalid path")
        return
    new_image_data = pixelsToASCII(grayify(resizeImage(image, new_width)))
    pixel_count = len(new_image_data)
    ascii_image = "\n".join(new_image_data[i:(i+new_width)] for i in range(0, pixel_count, new_width))
    print(ascii_image)

#Format
def format_(lines):
    out = []
    for line in lines:
        out += [line.replace("\n","")]
    return out

#Read
def read(file_path):
    f = open(file_path, 'r')
    out = f.readlines()
    f.close()
    out = format_(out)
    return out

#Interpret
def interpret(src):
    for line in src:
        struc = line.split(" ")
        if struc[0] == 'img':
            convertToASCII(struc[1], int(struc[2]))
    while True:
        a = 0

#EXECUTION
#Main
def main():
    readed_file = input('Insert your file path:\n')
    src_code = read(readed_file)
    interpret(src_code)
main()
