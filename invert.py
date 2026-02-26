import os
import re

def swap_colors(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return

    # Skip if not dealing with a react component
    if not (filepath.endswith('.tsx') or filepath.endswith('.ts') or filepath.endswith('.css')):
        return
        
    original = content

    replaces = [
        ('bg-darkbg', 'TEMP_BG_DARK'),
        ('bg-cream', 'bg-darkbg'),
        ('TEMP_BG_DARK', 'bg-cream'),

        ('text-darkbg', 'TEMP_TEXT_DARK'),
        ('text-cream', 'text-darkbg'),
        ('TEMP_TEXT_DARK', 'text-cream'),

        ('border-darkbg', 'TEMP_BORDER_DARK'),
        ('border-cream', 'border-darkbg'),
        ('TEMP_BORDER_DARK', 'border-cream'),
        
        ('from-darkbg', 'TEMP_FROM_DARK'),
        ('from-cream', 'from-darkbg'),
        ('TEMP_FROM_DARK', 'from-cream'),

        ('to-darkbg', 'TEMP_TO_DARK'),
        ('to-cream', 'to-darkbg'),
        ('TEMP_TO_DARK', 'to-cream'),

        ('via-darkbg', 'TEMP_VIA_DARK'),
        ('via-cream', 'via-darkbg'),
        ('TEMP_VIA_DARK', 'via-cream'),
        
        # some hardcoded grays/whites in testimonials
        ('bg-[#111111]', 'bg-white'),
        ('text-white', 'text-darkbg'),
    ]

    for old, new in replaces:
        content = content.replace(old, new)
        
    if filepath.endswith('globals.css'):
        # In globals.css we need to flip the hex codes themselves for body, etc.
        # But wait, globals.css uses --color-darkbg and --color-cream.
        pass

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        swap_colors(os.path.join(root, file))
