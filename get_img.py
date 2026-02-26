import urllib.request, re
try:
    req = urllib.request.Request("https://www.pinterest.com/pin/938859853584385458/", headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode("utf-8")
    m = re.search(r'property="og:image"\s+content="([^"]+)"', html)
    if not m:
        m = re.search(r'name="og:image"\s+content="([^"]+)"', html)
    print(m.group(1) if m else "NOT FOUND")
except Exception as e:
    print(e)
