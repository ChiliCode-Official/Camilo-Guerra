with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

m1 = text.find('data-card="1"')
m1_end = text.find('data-card="2"', m1)

card1_html = text[m1:m1_end]

idx_ipou = card1_html.find('<div class="site-ipou5a-container"')
idx_loc = card1_html.find('<div class="site-1qb8tdi"')

blur_block = card1_html[idx_ipou:idx_loc]
print("Blur block length:", len(blur_block))
print("Starts with:", blur_block[:60])
print("Ends with:", blur_block[-60:])
print("Occurrences of blur_block in text:", text.count(blur_block))
