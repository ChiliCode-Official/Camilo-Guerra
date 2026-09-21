with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'data-card="1"', text)]
print("Matches for data-card='1':", len(matches))
for i, m in enumerate(matches):
    print(f"Match {i+1} at index {m}")
    print(text[m:m+200])
