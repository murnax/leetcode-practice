#!/usr/bin/python3

counter = 100
miles = 1000.0
name = "John"

a = b = c = 1

# Strings
str = 'Hello world!'
print (str)
print(str[0])
print(str[2:5])
print(str[2:])
print(str * 2)
print(str + 'TEST')

# Lists
list = ['abcd', 786, 2.23, 'john', 70.2]
tinylist = [123, 'john']
print(list)
print(list[0])
print(list[1:3])
print(list[2:])
print(tinylist * 2)
print(list + tinylist)

# Tuples
# read-only list
tuple = ('abcd', 786, 2.23, 'john', 70.2)
tinytuple = (123, 'john')
print(tuple)
print(tuple[0])
print(tuple[1:3])
print(tuple[2:])
print(tinytuple * 2)
print(tuple + tinytuple)

# Dictionary
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"

tinydict = { 'name': 'john', 'code': 6734, 'dept': 'sales' }

print(dict['one'])
print(dict[2])
print(tinydict)
print(tinydict.keys())
print(tinydict.values())
