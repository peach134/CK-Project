from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]


def edge_connected_background(rgb: np.ndarray) -> np.ndarray:
    height, width, _ = rgb.shape
    channel_min = rgb.min(axis=2)
    channel_max = rgb.max(axis=2)
    candidate = (channel_min >= 246) & ((channel_max - channel_min) <= 18)

    visited = np.zeros((height, width), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
      for y in (0, height - 1):
        if candidate[y, x] and not visited[y, x]:
          visited[y, x] = True
          queue.append((y, x))

    for y in range(height):
      for x in (0, width - 1):
        if candidate[y, x] and not visited[y, x]:
          visited[y, x] = True
          queue.append((y, x))

    while queue:
      y, x = queue.popleft()
      for next_y, next_x in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
        if (
          0 <= next_y < height
          and 0 <= next_x < width
          and candidate[next_y, next_x]
          and not visited[next_y, next_x]
        ):
          visited[next_y, next_x] = True
          queue.append((next_y, next_x))

    return visited


def make_cutout(source: str, target: str) -> None:
    image = Image.open(ROOT / source).convert("RGBA")
    rgb = np.asarray(image.convert("RGB"))
    background = edge_connected_background(rgb)

    alpha = np.where(background, 0, 255).astype(np.uint8)
    alpha_image = Image.fromarray(alpha, "L").filter(ImageFilter.GaussianBlur(radius=1.1))

    result = image.copy()
    result.putalpha(alpha_image)

    bbox = alpha_image.point(lambda value: 255 if value > 16 else 0).getbbox()
    if bbox:
      left, top, right, bottom = bbox
      margin = 24
      left = max(0, left - margin)
      top = max(0, top - margin)
      right = min(result.width, right + margin)
      bottom = min(result.height, bottom + margin)
      result = result.crop((left, top, right, bottom))

    result.save(ROOT / target)


make_cutout("images/mahrik/mahrik-happy.jpg", "images/mahrik/mahrik-happy-cutout.png")
make_cutout(
    "images/mahrik/mahrik-books-boat.jpg",
    "images/mahrik/mahrik-books-boat-cutout.png",
)
