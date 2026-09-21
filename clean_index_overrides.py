with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# 1. Remove the bottom overrides around line 475:
# .site-B8hJ6 .site-1yvw305-container {
#   bottom: 8px !important;
# }
# .site-B8hJ6 .site-ipou5a-container {
#   display: none !important;
# }
#   .section-banner {
#     background-position: left !important;
#     background-size: cover !important;
#   }

target_override = """#main ~ #main,
body > #main:nth-of-type(n+2) {
  display: none !important;
}
.site-B8hJ6 .site-1yvw305-container {
  bottom: 8px !important;
}
.site-B8hJ6 .site-ipou5a-container {
  display: none !important;
}
  .section-banner {
    background-position: left !important;
    background-size: cover !important;
  }"""

replacement_override = """#main ~ #main,
body > #main:nth-of-type(n+2) {
  display: none !important;
}"""

if target_override in text:
    text = text.replace(target_override, replacement_override)
    print("Replaced target_override successfully.")
else:
    print("target_override NOT found!")

# 2. Also check the top style around line 70:
# /* Ajuste de la animación 3D de la tarjeta México: evita que quede hundida. */
# .site-B8hJ6 .site-1yvw305-container {
#   bottom: -42px;
# }
top_override = """.site-B8hJ6 .site-1yvw305-container {
  bottom: -42px;
}"""
if top_override in text:
    text = text.replace(top_override, "/* container reset */")
    print("Replaced top_override successfully.")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)
print("index.html overrides cleaned.")
