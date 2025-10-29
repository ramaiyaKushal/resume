---
title: "Postgres EXPLAIN Digging"
date: "Aug 2024"
order: 3
---
When a plan looks right but feels slow, add `BUFFERS` and `ANALYZE` to surface cache misses and parallelism behaviour.
