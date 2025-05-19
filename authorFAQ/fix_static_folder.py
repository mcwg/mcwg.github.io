import os
import shutil

# Step 2: Update all .html files in authorFAQ
print("Updating .html files...")

for file in os.listdir("."):
    if file.endswith(".html") and os.path.isfile(file):
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        new_content = content.replace("_static/", "static/")
        if new_content != content:
            with open(file, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated: {file}")

print("✅ Done!")
