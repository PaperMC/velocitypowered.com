---
title: Why Not Fork BungeeCord?
---

This article is a bit complex. This article really answers four questions that are inter-related and very frequently asked:

* _Does Velocity support BungeeCord plugins?_ (The short answer to this is no.)
* _Why doesn't Velocity support BungeeCord plugins?_ (A full explanation for this one will follow.)
* _Why would you even consider making a clean break from BungeeCord?_
* _What is Velocity's purpose? Why should I use it?_

To answer all four questions, we need to consider historical context. This draws upon my (Tux's) personal experience as a former contributor to BungeeCord and as the founder of the Waterfall and Velocity projects.

# Why is Velocity Better

First, let's answer the last two questions, as they're some of the most pertinent to the discussion.

## Improved Performance

High performance has been a goal of the Velocity project since day 1. We have made several design decisions that have allowed us to improve performance.

* No entity ID rewriting is done. This decision, although initially made for simplicity, also improves performance (since the proxy has to do little extra work) and improves mod compatibility
* We carefully optimized packet handling to reduce wasteful work done by the proxy from packets that pass through the proxy unmodified
* We use [a compression library](https://github.com/ebiggers/libdeflate) with more than 2x better compression
  speed than regular zlib, which is used by BungeeCord to compress packets to the client
* We've gone down deep, making modifications to improve the job that Java does in compiling the proxy code for higher performance
* We have far more freedom to make performance improvements "under the hood" compared to BungeeCord due to different versioning and internal stability policies
* In case the speed provided out-of-the-box is not good enough, you can easily tweak several performance-related settings in `velocity.toml`

In any event, all of this boils down to Velocity being able to get more out of the hardware you give it. The takeaway is that Velocity uses **less memory and CPU** whilst increasing proxy throughput.

## Improved Security

Another goal of the Velocity project from day 1 has been a focus on security. Velocity's emphasis on security includes using a safe programming language (Java), limiting the use of unsafe C code, and a proactive approach to closing potential avenues to denial-of-service attacks.

Some security innovations of the Velocity project include:

* Improved player info forwarding for Minecraft 1.13+ that requires the server and proxy to know a pre-arranged key.
* Full, unobtrusive, easily-maintainable patches for "proxy crashing" exploits

## Best-in-Class Modding Support

Velocity is fully compatible with Minecraft Forge (1.7 through 1.12.2) and Fabric and actively works with the wider Minecraft modding community.

# Why Make a New Proxy

Here were the immediate reasons, briefly summarized:

* BungeeCord was very conservative with regard to API changes, especially after August 2014 (the EULA debacle)
* BungeeCord is actively hostile to continued support for Minecraft modding
* Waterfall, while an improvement on BungeeCord, must still retain full BungeeCord compatibility and thus cannot make fundamental changes to improve performance and stability without breaking compatibility with BungeeCord
* My own personal experience with the BungeeCord API left a lot of improvements to be desired, some which would require breaking changes
* Finally, in part, it was an educational project - I wanted to prove that it was really possible to make a highly scalable Minecraft proxy in Java that was demonstrably better than BungeeCord

## What's Wrong with BungeeCord

### API Conservatism

### Hostility to the Minecraft Modding Community

## Why Not Contribute to Waterfall Instead

I could have - in fact, I have. Prior to starting the Velocity project, I was involved in the Waterfall project from January 2016 to May 2017.

# What Does Velocity Improve Upon

## The History

### The Beginning

In the beginning, there was BungeeCord. The first-ever commit to the BungeeCord repository was made [October 4, 2012](https://github.com/SpigotMC/BungeeCord/commit/b876fb2e1bd395c37f47b020c2f0e778812c0c61).

BungeeCord essentially launched the modern-day Minecraft network (essentially all large Minecraft servers after 2012 were a collection of servers linked into one by a proxy).

My first experience with BungeeCord was in August 2013. At this time, BungeeCord was not yet maturing - it was still under heavy development. This was the environment upon which my best-known plugin, RedisBungee, was born into. The game rapidly changed during this time.

### Then Wesley Struck

Then something big happened. The Bukkit DMCA saga has been told elsewhere, but the aftermath of it is that Spigot started maintaining CraftBukkit, and effectively became its own upstream. This was combined with the purchase of Mojang by Microsoft.

This was a turning point for just about everyone, and while it's hard to pin down the real cause, I think this was at least a significant contributing factor to the current conservatism of Spigot and BungeeCord, despite major internal updates to the game (especially Minecraft 1.13).

Since the release of Spigot 1.8, Spigot and BungeeCord have made at best minor breaking API changes.

### A Waterfall Springs Forth

In January 2016, something snapped. I had a bunch of unmerged pull requests for BungeeCord (some of which still remain unmerged to this day). I decided that it was time to make a fork of BungeeCord which would act more quickly, add features, and improve upon BungeeCord. From there, Waterfall emerged as a fork of BungeeCord. I was instrumental during its first year of existence.

While Waterfall has made many patches to improve BungeeCord, it is ultimately hemmed in by the fact that it is based on BungeeCord and users have the expectation of full BungeeCord compatibility. To provide one example, [Waterfall added support for chat components for 1.13](https://github.com/PaperMC/Waterfall/commit/c8eb6aec7bac82fd309fa6d6113b8a0418317b01), but later [removed it due to compatibility issues](https://github.com/PaperMC/Waterfall/commit/e910db4871210f03efd8e43b67400745f7b9961b).

### The Adventure Towards High Velocity

In May 2017, I finally thought I'd call it quits. I was already involved in the community for 4 years, and was starting college that fall.

During that time I got dragged in again, to the point where I came out of retirement not long after.

# What Does Velocity do Differently?

You've made it to the other side (or perhaps you skipped ahead). Now, let's talk about _what_.

Velocity does differently, so we can answer the last two questions.
