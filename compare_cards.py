with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

m1 = text.find('data-card="1"')
m1_end = text.find('data-card="2"', m1)

m2 = text.find('data-card="1"', m1_end)
m2_end = text.find('data-card="2"', m2)

card1_html = text[m1:m1_end]
card2_html = text[m2:m2_end]

print("Card 1 len:", len(card1_html))
print("Card 2 len:", len(card2_html))
print("Are they identical?", card1_html == card2_html)
