#!/usr/bin/env python3
from collections import Counter
from math import sqrt


def problem1(x1, y1, x2, y2):
    d = float(sqrt(((x2 - x1) ^ 2) + ((y2 - y1) ^ 2)))
    return print(d)


def problem2(x):
    d = list(set(x))
    return print(d)


def problem3(*strings):
    front = ''
    back = ''
    for string in strings:
        if len(string) % 2 == 0:
            s1 = string[:len(string) // 2]
            s2 = string[len(string) // 2:]
            front += s1
            back += s2
        else:
            s1 = string[:((len(string) // 2) + 1)]
            s2 = string[((len(string) // 2) + 1):]
            front += s1
            back += s2

    return print(front + back)


def problem4(name):
    file = open(name, 'r')
    text = file.read()
    file.close()
    words = Counter(text.split()).most_common(20)
    words = [x[0] for x in words]
    f = open('popular_words.txt', 'w')
    f.write('\n'.join(map(lambda x: str(x), words)))
    f.close()


def problem5(string):
    vowels = ('a', 'e', 'i', 'o', 'u')
    newStr = string
    for x in string.lower():
        if x in vowels:
            newStr = newStr.replace(x, "")
    return print(newStr)


def problem6(string, char):
    st = []
    for index in range(0, len(string)):
        if string[index].lower() == char:
            st.append(index)
    return print(st)


problem1(1, 2, 6, 10)
problem2([1, 1, 2, 3, 4, 2, 3, 4, 5, 5])
problem3('Hassan', 'Ahmed')
problem4('file.txt')
problem5('Mobile')
problem6('Google', 'o')
problem6('Google', 'g')
