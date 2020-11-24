---
title: What Does Velocity Do For Me?
---

There are many reasons why you should consider Velocity for your next proxy setup. At the same time, however, it is also important to tackle these related questions:

* _Does Velocity support BungeeCord plugins?_ (The short answer to this is no.)
* _Why would you even consider making a clean break from BungeeCord?_
* _What is Velocity's purpose? Why should I use it?_

## Why _would_ you use Velocity anyway?

There is a very solid case for using Velocity today.

### Improved performance

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

### Improved security

Another goal of the Velocity project from day 1 has been a focus on security. Velocity's emphasis on security includes
using a safe programming language (Java), limiting the use of unsafe C code, and a proactive approach to closing potential
avenues to denial-of-service attacks.

Some security innovations of the Velocity project include:

* Improved player info forwarding for Minecraft 1.13+ that requires the server and proxy to know a pre-arranged
  key.
* Full, unobtrusive, easily-maintainable patches for "proxy crashing" exploits

### Best-in-class modding support

Velocity is fully compatible with Minecraft Forge (1.7 through 1.12.2) and Fabric and actively works with the wider Minecraft
modding community.

### Comparison of Velocity's improvements against BungeeCord / Waterfall

BungeeCord must retain backwards compatibility with almost every plugin developed for it, going as far back as 2012.
This alone denies the opportunity for BungeeCord to use many of the performance optimizations in Velocity. In addition,
it does not implement any of the optimizations Velocity has made.

While "proxy crashing" exploits are fixed in BungeeCord and Waterfall, Velocity modern forwarding is unique
to Velocity and provides a safe, mod-friendly solution to player info forwarding. It is also "secured by default" and can
be configured without a firewall and is reasonably safe in shared hosting configrations.

BungeeCord does not support Forge past 1.12.2 and Forge support has been neglected in BungeeCord.

## Why not just improve BungeeCord? Why not contribute to Waterfall?

The developer of Velocity has been active in developing proxy software for _Minecraft: Java Edition_ since 2013.
They are responsible for several contributions to BungeeCord and they also founded the Waterfall project in 2016. Simply
put, you are not going to find many people who are as experienced as they are.

There are several reasons why we can't just "improve BungeeCord":

* BungeeCord is very conservative with regard to API changes. If it breaks some plugin developed 5 years ago
  from an inactive developer, you can forget about it.
* The changes that _do_ change the API are often quite particular and niche use cases and changing the API in substantial
  ways is frowned upon (witness the support for RGB colors in `ChatColor`).
* BungeeCord is actively hostile to continued support for Minecraft modding.
* The BungeeCord API, in our opinion, is in need of a severe overhaul. We have seen new modding APIs for _Minecraft_ since the first
  version of BungeeCord released in 2012. It's well past time to incorporate some of their lessons.

Okay, so why not just improve Waterfall, Paper's fork of BungeeCord? Waterfall, while an improvement upon BungeeCord,
must still retain full BungeeCord compatibility and thus cannot make the fundamental changes to improve performance,
stability, and security without breaking compatibility with BungeeCord.

Alright, so we nixed contributing to BungeeCord and to Waterfall. Why not implement the BungeeCord API? Unfortunately,
that gives us more issues:

* As said earlier, the BungeeCord API is, in our opinion, in need of a severe overhaul. Having Velocity
  implement it is not desirable for this reason alone.
* Paradoxically enough, we would run into more compatibility problems. Many BungeeCord plugins assume that
  they are running on the BungeeCord implementation (or if we're lucky, Waterfall) and code against specific
  implementation details, which we can't deal with. This is an example of [Hyrum's Law](https://www.hyrumslaw.com/).

Just to be clear, however, we do collaborate with the developers of Waterfall. We have shared goals. The primary
maintainer of the Waterfall project in part pushed me to start work on Velocity.