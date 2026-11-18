# lkw919.github.io

Source of my personal site, served by GitHub Pages from `main`.
**Live: <https://lkw919.github.io/>**

| Page | What is on it |
| --- | --- |
| `index.html` | Short introduction, skills, four projects, education, contact |
| `analysis.html` | A measured walk through the delivery of this site itself |

## The analysis page

`analysis.html` is not a description of a network, it is a measurement of this one:
DNS and the CDN's anycast pool, ICMP round trip on both address families, traceroute
including the carrier-grade NAT hop, per-stage HTTPS timings, and a packet capture read
for handshake backoff and cipher choice. The two figures are generated from raw logs by
a small script, so they can be regenerated rather than redrawn.

Headline numbers: IPv6 132 ms and lossless over 18 hops against IPv4 231 ms with 20 %
ICMP loss, and one SYN backoff of 1-2-4 s that cost a single handshake 3.39 s.

## How it is built

Four files and two figures. No framework, no CDN, no external fonts — a browser can serve
them as they are. The colour theme is read from `localStorage` before first paint so there
is no flash of the wrong theme, and every animation is skipped when
`prefers-reduced-motion` is set.

```
index.html        analysis.html
css/style.css     js/main.js
assets/favicon.svg   assets/figs/{rtt,stages}.png
```
