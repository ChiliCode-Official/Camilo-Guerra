with open('card1_debug.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# Find all class names in card 1
classes = set(re.findall(r'class="([^"]+)"', text))
for c in sorted(classes):
    print("Class:", c)
