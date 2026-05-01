# Bitburner Scripts

Personal automation scripts for [Bitburner](https://bitburner-official.github.io/), a programming-based incremental game about hacking, infrastructure, and automation.

This repository contains the scripts I use to automate progression across hacking, server management, factions, gangs, Hacknet, stocks, sleeves, Stanek, and coding contracts. The project is intentionally script-focused: files are written to run inside Bitburner's Netscript environment rather than Node.js.

## Highlights

- Network discovery, rooting, deployment, and remote hack/grow/weaken workers
- Long-running automation through `autopilot.js` and `daemon.js`
- Faction, gang, sleeve, Hacknet, and stock helpers
- Coding contract discovery and solver workflow under `bitburnerFiles/Tasks`
- Utility helpers for formatting, configuration, logging, and Bitburner RAM workarounds

## Main Entrypoints

- `autopilot.js` - high-level progression automation
- `daemon.js` - long-running hacking, deployment, and task orchestration
- `startup.js` - simple starter script for early server deployment
- `ascend.js` - augmentation/reset preparation flow

## Structure

- `bitburnerFiles/` - main Bitburner scripts
- `bitburnerFiles/Remote/` - scripts copied to remote servers for hacking batches
- `bitburnerFiles/shared/` - small shared worker scripts
- `bitburnerFiles/Tasks/` - focused task runners used by larger automation scripts
- `IMPORT_GRAPH.md` - static import graph and standalone/not-imported labels

## Notes

Generated runtime state such as logs and reserve files is ignored so the repository stays focused on source code.

Some scripts are standalone tools that are launched manually or by filename at runtime. See `IMPORT_GRAPH.md` for the static import map and the current standalone/not-imported labels.
