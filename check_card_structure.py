with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

m1 = text.find('data-card="1"')
m1_end = text.find('data-card="2"', m1)
card_html = text[m1:m1_end]

idx_ipou = card_html.find('<div class="site-ipou5a-container"')
idx_loc = card_html.find('<div class="site-1qb8tdi"')

print("Before ipou:", card_html[:idx_ipou][-100:])
print("After loc:", card_html[idx_loc:][:100])
print("Middle (ipou to loc):", card_html[idx_ipou:idx_loc][:150])
