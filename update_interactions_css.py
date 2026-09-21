# Clean up interactions.css to remove conflicting overrides
with open('assets/interactions.css', 'r', encoding='utf-8') as f:
    css = f.read()

# We need to remove lines 23-33 from interactions.css:
# /* La franja de desenfoque inferior tapa el planeta y crea la barra gris. */
# .site-B8hJ6 .site-ipou5a-container{display:none!important}
# .section-banner{background-position:left center!important}
# .section-banner,.section-banner *{filter:none!important}
# .section-banner{opacity:1!important;box-shadow:none!important;text-shadow:none!important;filter:none!important;mix-blend-mode:normal!important}
# .site-B8hJ6 .site-1yvw305-container,
# .site-B8hJ6 .site-1yvw305-container *{filter:none!important;-webkit-filter:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
# .site-B8hJ6 .site-i52ndo-container,.site-B8hJ6 .site-L8eGR{display:none!important}
# .site-B8hJ6 .site-L8eGR{display:none!important;opacity:0!important;background:none!important}
# .site-B8hJ6 .site-1yvw305-container,.site-B8hJ6 .site-vznb3v-container{background:transparent!important}
# .section-banner{background-color:transparent!important;background-repeat:no-repeat!important}

idx_start = css.find('/* La franja de desenfoque')
idx_end = css.find('.site-o1iydx-container')

print("Found block to replace:")
print(css[idx_start:idx_end])

clean_replacement = """/* Tarjeta México: ocultar desenfoque inferior sobrante y asegurar transparencia */
.site-B8hJ6 .site-ipou5a-container, .site-B8hJ6 .site-i52ndo-container { display: none !important; }
.site-B8hJ6 .site-1yvw305-container, .site-B8hJ6 .site-vznb3v-container { background: transparent !important; }
"""

new_css = css[:idx_start] + clean_replacement + css[idx_end:]
with open('assets/interactions.css', 'w', encoding='utf-8') as f:
    f.write(new_css)

print("Updated assets/interactions.css successfully.")
