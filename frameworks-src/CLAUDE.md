# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static web-based slide presentation system for business and technical frameworks (日本語). No build tools, package managers, or dependencies — plain HTML/CSS/JavaScript (ES6 modules) served directly from the file system.

To run: open `index.html` in a browser. No build step needed.

## Architecture

The app has three moving parts:

- **`js/config.js`** — The manifest. Defines `CATEGORIES` (tab metadata + colors) and `SLIDES` (ordered list of all slides with id, category, title, tags).
- **`js/engine.js`** — The rendering engine. Handles category filtering, slide fetching (with cache), navigation (prev/next), progress counter, and the sidebar table of contents.
- **`slides/<category>/<id>.html`** — Self-contained slide content fragments (no `<html>/<body>` wrappers). Fetched on demand and injected into the main container.
- **`css/style.css`** — All styling including responsive layout and mobile overrides. Uses CSS `dvh` units for iPhone viewport handling.

## Adding Content

**New slide:**
1. Create `slides/<category>/<id>.html` with the slide content.
2. Add an entry to the `SLIDES` array in `js/config.js`.

**New category:**
1. Add to `CATEGORIES` in `js/config.js` (include `id`, `label`, `color`).
2. Create the folder `slides/<new-category>/`.
3. Add the corresponding tab `<button>` in `index.html`.

## Slide HTML conventions

Slides are HTML fragments (no doctype/html/body). They use internal `<style>` blocks for slide-specific styling and follow the visual pattern of existing slides for consistent look. Check an existing slide in the same category before creating a new one.

## Key files at a glance

| File | Purpose |
|---|---|
| `js/config.js` | Category + slide manifest (edit to add/remove content) |
| `js/engine.js` | All navigation and rendering logic |
| `css/style.css` | Global styles + responsive breakpoints |
| `index.html` | Shell: category tabs, slide container, sidebar |
