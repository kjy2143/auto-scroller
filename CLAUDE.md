# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

iOS Safari 자동 스크롤 북마클릿 - A bookmarklet for automatic smooth scrolling on iOS Safari. Built with Vanilla JavaScript and Vite.

## Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Build and generate bookmarklet (runs postbuild automatically)
npm run preview    # Preview production build
```

## Architecture

**Build Pipeline:**
1. Vite bundles `src/main.js` → `dist/auto-scroller.min.js` (terser-minified, no console/debugger)
2. `bookmarklet.js` (postbuild script) wraps the minified JS in IIFE and URI-encodes it → `dist/bookmarklet.txt`

**Source Files:**
- `src/main.js` - Entry point: event binding and initialization
- `src/ui.js` - UI module: button creation (`createToggleButton`) and state updates (`updateButtonState`)
- `src/scroll.js` - Scroll logic: `requestAnimationFrame`-based scrolling, IntersectionObserver for bottom detection
- `src/config.js` - Configuration: `SCROLL_SPEED`, `BUTTON_POSITION` constants
- `src/style.css` - Styles (imported in main.js for bundling)

**Key Patterns:**
- Custom event `scrollStateChanged` synchronizes scroll state between modules
- `SCROLL_SPEED` constant in `config.js` controls pixels per animation frame (default: 2)
- IntersectionObserver with sentinel element detects page bottom for auto-stop
