with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

idx1 = text.find('.site-B8hJ6 .site-1yvw305-container {')
idx1_end = text.find('</style>', idx1)
print("=== BLOCK 1 ===")
print(text[idx1-60:idx1_end+8])

idx2 = text.find('.site-B8hJ6 .site-1yvw305-container {', idx1_end)
idx2_end = text.find('[data-card] img', idx2)
print("=== BLOCK 2 ===")
print(text[idx2-60:idx2_end])
