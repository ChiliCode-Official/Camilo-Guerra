import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's inspect where .section-banner is styled
for m in re.finditer(r'\.section-banner[^{]*\{[^}]*\}', text):
    print("RULE:", m.group(0)[:150])

print("Check finished.")
