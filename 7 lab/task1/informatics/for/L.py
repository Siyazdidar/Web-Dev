n = input()
s = 0
for i in range(len(n)):
    s += (ord(n[len(n) - 1 - i]) - 48) * (2 ** i)
print(s)