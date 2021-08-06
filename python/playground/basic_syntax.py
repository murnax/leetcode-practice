#!/usr/bin/python3

import sys

file_finish = "end"
file_text = ""
contents = []

file_name=input("Enter filename: ")
if len(file_name) == 0:
    print("Please enter filename")
    sys.exit()

try:
    # open file stream
    file = open(file_name, "w")
except IOError:
    print("There was an error writing to", file_name);
    sys.exit()

print("Enter '", file_finish)
print("' When finished")

while file_text != file_finish:
    file_text = input("Enter text: ")
    contents.append(file_text)

    if file_text == file_finish:
        break

print(contents)
data = ' '.join([str(elem) for elem in contents])
print(data)
file.write(data)
file.close()

file_name = input("Enter filename: ")

if len(file_name) == 0:
    print("Next time please enter something")
    sys.exit()

try:
    file = open(file_name, "r")

except IOError:
    print("There was an error reading file")
    sys.exit()

file_text = file.read()
file.close()
print(file_text)
