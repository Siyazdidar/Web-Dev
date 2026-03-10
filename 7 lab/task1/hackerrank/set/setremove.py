n = int(input())
s = set(map(int, input().split()))
num_commands = int(input())

for _ in range(num_commands):
    command = input().split()
    cmd_type = command[0]
    
    if cmd_type == "pop":
        s.pop()
    elif cmd_type == "remove":
        s.remove(int(command[1]))
    elif cmd_type == "discard":
        s.discard(int(command[1]))

print(sum(s))