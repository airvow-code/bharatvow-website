# Festival original assets

Place source images here for the Wish Studio asset pipeline.

## Structure

```
assets/original/
  independence-day/
    INDDAY_TR_001.png
  diwali/
    DIWALI_CARD_01.jpg
```

Nested folders are also discovered (e.g. if files were placed under
`assets/original/images/festival/independence-day/`), but the recommended
layout is one festival slug folder directly under `assets/original/`.

## Generate WebP outputs

From the website project root:

```bash
npm run festival-assets
```

Outputs are written to `public/images/festival/{festival-slug}/` and `thumb/`.

Supported inputs: PNG, JPG, JPEG, WEBP.
