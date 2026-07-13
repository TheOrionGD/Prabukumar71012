# Video Background Prompts

Here are three high-quality, professional video generation prompts designed for AI video generators (such as Sora, Runway Gen-3, Luma Dream Machine, or Pika). 

These prompts are tailored to match the portfolio's **warm, editorial, light theme** (Background: `#F1EBE0`, Accents: `#7C9BB0`, Text: `#2B211A`) without any human presence, and are designed to look excellent in both desktop (16:9) and mobile (9:16) aspect ratios.

---

## 1. Cinematic Shadow Play (Recommended)
*Best for a subtle, premium, and calm look that doesn't distract from the portfolio content.*

> **Prompt:**
> A minimalist, slow-looping macro shot of gentle morning sunlight casting soft shadows of window blinds and thin botanical branches onto a warm cream-colored (#F1EBE0) textured paper wall. Minimal movement, organic shadow play as a soft breeze rustles, warm light rays. Very low contrast, elegant, clean editorial layout background. Color palette: soft warm off-white, ivory, and light beige. No humans, photorealistic, 4k resolution, seamless loop.

---

## 2. Organic Linen Ripple (Fluid & Soft)
*Adds a gentle, flowing, tactile motion to the page background.*

> **Prompt:**
> A slow-motion, seamless loop video of an organic, lightweight cotton linen fabric in a warm cream tone (#F1EBE0), rippling slowly under a soft ambient breeze. Gentle folds shifting, warm soft lighting, low contrast. Flat angle, top-down perspective, shallow depth of field. Clean light theme, minimal aesthetic. No humans, premium, 8k, seamless loop.

---

## 3. Abstract Drifting Geometry (Artful & Editorial)
*Matches the folder motif and shape language of the portfolio.*

> **Prompt:**
> A minimal motion design background in a flat-vector style. On a warm cream (#F1EBE0) background, abstract geometric shapes (soft rounded rectangles like folders and clean circle discs) in dusty slate blue (#7C9BB0) and fine lines in deep espresso (#2B211A) drift and rotate at an extremely slow, imperceptible pace. Flat 2D vector art, low contrast, clean layout, seamless animation loop. No text, no humans, modern graphic design.

---

## Implementation Tips

Once you generate the video, save the video file (e.g., as `background.mp4`) in your `public/` directory and use the following CSS in your [index.css](file:///g:/github-export/Portfolio/PortFolio/src/index.css) to set it as a fixed background:

```css
/* Fixed video background styling */
.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -20;
  opacity: 0.45; /* Lower opacity to keep text fully readable */
  pointer-events: none;
}
```

Then, you can insert it at the very top of your `App.jsx` inside the root div:
```jsx
<video className="video-bg" autoplay loop muted playsinline>
  <source src="/background.mp4" type="video/mp4" />
</video>
```
