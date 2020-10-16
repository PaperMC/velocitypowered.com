---
title: What Does Velocity Do For Me?
language: en
---

There are many reasons why you should consider Velocity for your next proxy setup.

## Improved performance

High performance has been a goal of the Velocity project since day 1. We have made several design decisions that have
allowed us to improve performance.

* No entity ID rewriting is done. This decision, although initially made for simplicity, also improves performance (since
  the proxy has to do little extra work) and improves mod compatibility.
* We carefully optimized packet handling to reduce wasteful work done by the proxy from packets that pass through the
  proxy unmodified.
* We use [a compression library](https://github.com/ebiggers/libdeflate) with more than 2x better compression
  speed than regular zlib.
* We've gone down deep, making modifications to improve the job that Java does in compiling the proxy code for higher
  performance.
* We have far more freedom to make performance improvements "under the hood" compared to BungeeCord due to different
  versioning and internal stability policies.
* In case the speed provided out-of-the-box is not good enough, you can easily tweak several performance-related settings
  in `velocity.toml`.

In any event, all of this boils down to Velocity being able to get more out of the hardware you give it. The takeaway is
that Velocity uses less memory and CPU whilst increasing proxy throughput.

### Comparison to BungeeCord / Waterfall

BungeeCord must retain backwards compatibility with almost every plugin developed for it, going as far back as 2012.
In addition, it does not implement any of the optimizations Velocity has made.

## Improved security

Another goal of the Velocity project from day 1 has been a focus on security. Velocity's emphasis on security includes
using a safe programming language (Java), limiting the use of unsafe C code, and a proactive approach to closing potential
avenues to denial-of-service attacks.

Some security innovations of the Velocity project include:

* Improved player info forwarding for Minecraft 1.13+ that requires the server and proxy to know a pre-arranged
  key.
* Full, unobtrusive, easily-maintainable patches for "proxy crashing" exploits

### Comparison to BungeeCord / Waterfall

While "proxy crashing" exploits are fixed in BungeeCord and Waterfall, Velocity modern forwarding is unique
to Velocity and provides a safe, mod-friendly solution to player info forwarding.

## Best-in-class modding support

Velocity is fully compatible with Minecraft Forge (1.7 through 1.12.2) and Fabric and actively works with the wider Minecraft
modding community.

### Comparison to BungeeCord / Waterfall

BungeeCord does not support Forge past 1.12.2 and Forge support has been neglected in BungeeCord. Waterfall does maintain
Forge support and is a viable option in case you need to use legacy BungeeCord plugins.

## So why did you make a new proxy?

Here were the immediate reasons, briefly summarized:

* BungeeCord was very conservative with regard to API changes, especially after August 2014
  (the EULA debacle)
* BungeeCord is actively hostile to continued support for Minecraft modding
* Waterfall, while an improvement on BungeeCord, must still retain full BungeeCord compatibility
  and thus cannot make fundamental changes to improve performance and stability without breaking
  compatibility with BungeeCord
* My own personal experience with the BungeeCord API left a lot of improvements to be desired,
  some which would require breaking changes
* Finally, in part, it was an educational project - I wanted to prove that it was really possible
  to make a highly scalable Minecraft proxy in Java that was demonstrably better than BungeeCord
