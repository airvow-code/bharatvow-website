/**
 * BharatVow Wish Studio — Festival Asset Pipeline
 *
 * Drop originals in assets/original/{festival-slug}/
 * Run: npm run festival-assets
 *
 * Outputs WebP + thumbnails to public/images/festival/{festival-slug}/
 */
import { mkdirSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const ORIGINAL_ROOT = path.join(root, "assets", "original");
const OUTPUT_ROOT = path.join(root, "public", "images", "festival");

const SUPPORTED_EXT = new Set([".png", ".jpg", ".jpeg", ".webp"]);

const ORIGINAL_WIDTH = 1080;
const ORIGINAL_HEIGHT = 1350;
const ORIGINAL_QUALITY = 90;

const THUMB_WIDTH = 324;
const THUMB_HEIGHT = 405;
const THUMB_QUALITY = 80;

function formatFestivalName(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function isSupportedImage(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  return SUPPORTED_EXT.has(ext);
}

function listAllEntries(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true });
}

/**
 * Finds leaf folders that contain supported images.
 * Supports both:
 *   assets/original/independence-day/*.png
 *   assets/original/images/festival/independence-day/*.png
 */
function discoverFestivalSources() {
  const sources = new Map();

  function walk(currentDir) {
    const entries = listAllEntries(currentDir);
    const imageFiles = entries.filter(
      (entry) =>
        entry.isFile() &&
        !entry.name.startsWith(".") &&
        isSupportedImage(entry.name),
    );
    const subdirs = entries.filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith(".") &&
        entry.name !== "thumb",
    );

    if (imageFiles.length > 0) {
      const slug = path.basename(currentDir);
      sources.set(slug, currentDir);
      return;
    }

    for (const subdir of subdirs) {
      walk(path.join(currentDir, subdir.name));
    }
  }

  walk(ORIGINAL_ROOT);
  return sources;
}

function findNestedImageHints() {
  const hints = [];

  function walk(currentDir, depth = 0) {
    if (depth > 6) return;

    const entries = listAllEntries(currentDir);
    const imageFiles = entries.filter(
      (entry) => entry.isFile() && isSupportedImage(entry.name),
    );

    if (imageFiles.length > 0) {
      hints.push(path.relative(ORIGINAL_ROOT, currentDir));
      return;
    }

    for (const subdir of entries) {
      if (!subdir.isDirectory() || subdir.name.startsWith(".") || subdir.name === "thumb") {
        continue;
      }
      walk(path.join(currentDir, subdir.name), depth + 1);
    }
  }

  walk(ORIGINAL_ROOT);
  return hints;
}

function listSourceImages(festivalDir) {
  return readdirSync(festivalDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        !entry.name.startsWith(".") &&
        isSupportedImage(entry.name),
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

async function processImage(sharp, inputPath, outputPath, width, height, quality) {
  mkdirSync(path.dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .rotate()
    .resize({
      width,
      height,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality, effort: 4 })
    .toFile(outputPath);
}

async function processFestival(sharp, slug, sourceDir) {
  const outputDir = path.join(OUTPUT_ROOT, slug);
  const thumbDir = path.join(outputDir, "thumb");

  mkdirSync(outputDir, { recursive: true });
  mkdirSync(thumbDir, { recursive: true });

  const files = listSourceImages(sourceDir);
  const festivalLabel = formatFestivalName(slug);
  const results = { processed: 0, errors: [] };

  console.log("");
  console.log("Processing:");
  console.log("");
  console.log(festivalLabel);
  console.log("");

  if (files.length === 0) {
    console.log("  (no supported images found)");
    console.log(`  Folder scanned: ${path.relative(root, sourceDir)}`);
    const nested = findNestedImageHints().filter(
      (hint) => !hint.startsWith(`${slug}${path.sep}`) && hint !== slug,
    );
    if (nested.length > 0) {
      console.log("  Images detected in nested folders:");
      for (const hint of nested) {
        console.log(`    - assets/original/${hint.replace(/\\/g, "/")}`);
      }
      console.log(
        "  Tip: place files directly in assets/original/{festival-slug}/",
      );
    }
    return results;
  }

  console.log(`  Source: assets/original/${path.relative(ORIGINAL_ROOT, sourceDir).replace(/\\/g, "/")}`);
  console.log("");

  for (const fileName of files) {
    const baseName = path.parse(fileName).name;
    const inputPath = path.join(sourceDir, fileName);
    const mainOutput = path.join(outputDir, `${baseName}.webp`);
    const thumbOutput = path.join(thumbDir, `${baseName}.webp`);

    try {
      await processImage(
        sharp,
        inputPath,
        mainOutput,
        ORIGINAL_WIDTH,
        ORIGINAL_HEIGHT,
        ORIGINAL_QUALITY,
      );
      console.log(`✔ ${baseName}`);
      console.log("✔ WebP Created");

      await processImage(
        sharp,
        inputPath,
        thumbOutput,
        THUMB_WIDTH,
        THUMB_HEIGHT,
        THUMB_QUALITY,
      );
      console.log("✔ Thumbnail Created");
      console.log("");

      results.processed += 1;
    } catch (err) {
      const message = err?.message || String(err);
      results.errors.push({ festival: slug, file: fileName, message });
      console.log(`✖ ${baseName} — ${message}`);
      console.log("");
    }
  }

  return results;
}

async function run() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error("sharp is required. Run: npm install -D sharp");
    process.exit(1);
  }

  mkdirSync(ORIGINAL_ROOT, { recursive: true });
  mkdirSync(OUTPUT_ROOT, { recursive: true });

  const festivalSources = discoverFestivalSources();

  if (festivalSources.size === 0) {
    const topLevelDirs = listAllEntries(ORIGINAL_ROOT)
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
      .map((entry) => entry.name);

    console.log("BharatVow Festival Asset Pipeline");
    console.log("=================================");
    console.log("No supported images found under assets/original/");
    if (topLevelDirs.length > 0) {
      console.log("");
      console.log("Folders present (empty or nested):");
      for (const name of topLevelDirs) {
        console.log(`  - assets/original/${name}/`);
      }
    }
    const nested = findNestedImageHints();
    if (nested.length > 0) {
      console.log("");
      console.log("Move or flatten images to:");
      for (const hint of nested) {
        const slug = path.basename(hint);
        console.log(`  assets/original/${slug}/  ← found under assets/original/${hint.replace(/\\/g, "/")}`);
      }
    } else {
      console.log("");
      console.log("Expected layout:");
      console.log("  assets/original/independence-day/INDDAY_TR_001.png");
    }
    process.exit(0);
  }

  const festivals = [...festivalSources.keys()].sort((a, b) => a.localeCompare(b));

  console.log("BharatVow Festival Asset Pipeline");
  console.log("=================================");
  console.log(`Original : ${path.relative(root, ORIGINAL_ROOT)}`);
  console.log(`Output   : ${path.relative(root, OUTPUT_ROOT)}`);
  console.log(`Festivals: ${festivals.length}`);

  const summary = {
    festivals: festivals.length,
    images: 0,
    errors: [],
  };

  for (const slug of festivals) {
    const result = await processFestival(sharp, slug, festivalSources.get(slug));
    summary.images += result.processed;
    summary.errors.push(...result.errors);
  }

  console.log("Completed");
  console.log("");
  console.log(
    `Summary: ${summary.images} image(s) processed across ${summary.festivals} festival folder(s).`,
  );

  if (summary.errors.length > 0) {
    console.log("");
    console.log("Errors:");
    for (const item of summary.errors) {
      console.log(`  - ${item.festival}/${item.file}: ${item.message}`);
    }
    process.exitCode = 1;
  }
}

run().catch((err) => {
  console.error("Festival asset pipeline failed:", err?.message || err);
  process.exit(1);
});
