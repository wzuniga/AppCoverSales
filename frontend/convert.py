import re

def style_replacer(match):
    style_str = match.group(1)
    # simplistic parser: key: value;
    styles = [s.strip().split(':', 1) for s in style_str.split(';') if ':' in s]
    js_style = []
    for k, v in styles:
        k = k.strip()
        v = v.strip().replace('"', '\\"') # escape double quotes
        # kebab to camel
        k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        js_style.append(f'{k_camel}: "{v}"')
    return "style={{" + ", ".join(js_style) + "}}"

with open('index1.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract Head
head_match = re.search(r'<head>(.*?)</head>', content, re.DOTALL)
head_content = head_match.group(1) if head_match else ""

# Extract Body Attributes
body_tag_match = re.search(r'<body(.*?)>', content)
body_attrs = body_tag_match.group(1) if body_tag_match else ""

# Extract Content between <body> and </body>
body_content_match = re.search(r'<body.*?>(.*?)</body>', content, re.DOTALL)
body_whole = body_content_match.group(1) if body_content_match else ""

# Split scripts from body end
split_marker = "<!-- Jquery JS-->"
if split_marker in body_whole:
    main_html, scripts_html = body_whole.split(split_marker, 1)
    scripts_html = split_marker + scripts_html
else:
    main_html = body_whole
    scripts_html = ""

# Processing main_html for JSX
jsx = main_html
# class -> className
jsx = re.sub(r'\bclass=', 'className=', jsx)

# style="..." -> style={{...}}
# The regex needs to be careful not to match too much. [^"]* is safe for simple styles.
jsx = re.sub(r'\bstyle="([^"]*)"', style_replacer, jsx)

# Close void tags
# img, input, br, hr, param, source, track, area, base, col, embed, keygen, wbr
def close_tag(match):
    tag = match.group(0)
    if tag.endswith('/>'): return tag
    if tag.endswith('/>'): return tag # duplicate check
    # Check if it already has a closing slash but maybe inside quotes? No, simplified.
    return tag[:-1] + ' />'

jsx = re.sub(r'<(img|input|br|hr|param|source|track|area|base|col|embed|keygen|wbr)\b[^>]*>', close_tag, jsx)

# Comments: <!-- ... --> -> {/* ... */}
# This regex is tricky for multiline.
jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx, flags=re.DOTALL)

# Writing index.html
index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
{head_content}
</head>
<body{body_attrs}>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    {scripts_html}
</body>
</html>"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)
    
# Writing App.jsx
app_jsx = f"""import React from 'react';

function App() {{
  return (
    <>
      {jsx}
    </>
  );
}}

export default App;
"""
with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_jsx)

print("Conversion complete.")
