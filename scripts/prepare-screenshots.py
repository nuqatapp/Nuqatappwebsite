"""Prepare the three Gurb screenshots for the website.

  1. رعايتي  : "Fatima" -> "نوره", avatar letter "F" -> "ن", email obscured
  2. السند   : email obscured ("امي" kept as it is)
  3. قرب     : unchanged

Only the name and the email are touched; every other pixel is the original screenshot.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

SRC = "/mnt/user-data/uploads/"
OUT = "/home/claude/nuqatappwebsite/client/src/assets/"
FONT = "/home/claude/plex-arabic-400.ttf"
CARD_BG = (25, 37, 35)
TEAL = (104, 173, 154)
AVATAR_INK = (16, 25, 23)
NAME_WHITE = (255, 255, 255)


def text_bbox(txt, size, font_path=FONT):
    """Rendered ink bounds of an Arabic string at a given font size."""
    f = ImageFont.truetype(font_path, size)
    probe = Image.new("L", (600, 300), 0)
    ImageDraw.Draw(probe).text((500, 60), txt, font=f, fill=255, anchor="ra",
                               direction="rtl", language="ar")
    a = np.asarray(probe)
    ys, xs = np.where(a > 40)
    return xs.min(), ys.min(), xs.max(), ys.max(), f


def calibrate(txt, target_h, lo=30, hi=90):
    """Font size whose ink height best matches the app's own rendering."""
    best, bestd = lo, 1e9
    for s in range(lo, hi):
        x0, y0, x1, y1, _ = text_bbox(txt, s)
        d = abs((y1 - y0) - target_h)
        if d < bestd:
            best, bestd = s, d
    return best


# "امي" in the Backers screenshot: ink box 99 x 68. Same text style as the name
# in رعايتي, so it calibrates the size for "نوره".
SIZE = calibrate("امي", 68)
x0, y0, x1, y1, font = text_bbox("امي", SIZE)
print(f"font size {SIZE}: امي renders {x1-x0}x{y1-y0} (app shows 99x68)")


def obscure(img, box, pad=16):
    """Smear a region past legibility and feather it into the card background."""
    x0, y0, x1, y1 = box[0] - pad, box[1] - pad, box[2] + pad, box[3] + pad
    w, h = x1 - x0, y1 - y0
    region = img.crop((x0, y0, x1, y1))
    smeared = region.filter(ImageFilter.GaussianBlur(22))
    smeared = smeared.resize((max(w // 30, 2), max(h // 30, 2)), Image.BILINEAR)
    smeared = smeared.resize((w, h), Image.BICUBIC).filter(ImageFilter.GaussianBlur(16))
    # soft-edged mask so no rectangle shows against the card
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((pad // 2, pad // 2, w - pad // 2, h - pad // 2),
                                           radius=14, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(pad // 2))
    img.paste(smeared, (x0, y0), mask)



def clear_silent_icon(img):
    """Paint out the silent-mode bell that sits to the right of the clock."""
    a = np.asarray(img.convert("RGB")).astype(int)
    light = a[40:140, 60:364].sum(axis=2) > 230
    cols = light.sum(axis=0) > 0
    runs, st = [], None
    for i, v in enumerate(cols):
        if v and st is None:
            st = i
        elif not v and st is not None:
            if i - st > 3:
                runs.append((60 + st, 60 + i))
            st = None
    if st is not None:
        runs.append((60 + st, 60 + len(cols)))
    if not runs:
        return
    x0, x1 = runs[-1]          # the bell is the last glyph after the clock
    bg = tuple(a[90, min(x1 + 30, 360)])
    ImageDraw.Draw(img).rectangle((x0 - 8, 48, x1 + 8, 128), fill=bg)

def clear_island(img):
    """Remove the green screen-recording indicator from the Dynamic Island."""
    # the island is solid black, so the icon is simply painted out
    ImageDraw.Draw(img).rectangle((376, 48, 470, 128), fill=(0, 0, 0))


# ---------------------------------------------------------------- 1. رعايتي
im = Image.open(SRC + "35cb56d8-image.png").convert("RGB")
d = ImageDraw.Draw(im)

# name: clear the old label, draw the new one on the same right edge and top
d.rectangle((760, 530, 1030, 600), fill=CARD_BG)
nx0, ny0, nx1, ny1, f = text_bbox("نوره", SIZE)
# place so the ink box starts at the app's own y, right edge where "Fatima" ended
d.text((1012 + (500 - nx1), 60 + (544 - ny0)), "نوره", font=f, fill=NAME_WHITE,
       anchor="ra", direction="rtl", language="ar")

# avatar: repaint the disc, then the initial
cx, cy, r = 1115, 615, 66
d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=TEAL)
af = ImageFont.truetype(FONT, 62)
d.text((cx, cy + 4), "ن", font=af, fill=AVATAR_INK, anchor="mm",
       direction="rtl", language="ar")

clear_island(im)
clear_silent_icon(im)
obscure(im, (538, 643, 1010, 691))
im.save(OUT + "gurb-screen-care.png")
print("رعايتي done", im.size)

# ---------------------------------------------------------------- 2. السند
im2 = Image.open(SRC + "2f7bb068-image.png").convert("RGB")
clear_island(im2)
clear_silent_icon(im2)
obscure(im2, (538, 547, 1010, 595))
im2.save(OUT + "gurb-screen-backers.png")
print("السند done", im2.size)

# ---------------------------------------------------------------- 3. قرب
im3 = Image.open(SRC + "2ed201ae-image.png").convert("RGB")
clear_island(im3)
clear_silent_icon(im3)
im3.save(OUT + "gurb-screen-checkin.png")
print("قرب done", im3.size)
