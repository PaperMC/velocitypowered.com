---
title: Tuning Velocity
---

Velocity comes with good performance out of the box. We go in deep, starting from smart algorithmic
choices, making strategic usage of native libraries, all the way to the JVM level, optimizing
the proxy so that the JVM will make better decisions when optimizing the code.

## Host your servers on x86-64 Linux

Velocity comes with high-performance, specially tuned native libraries for compression and
encryption, along with including native transports from Netty. However, due to support
constraints, the compiled natives are only verified to work on Linux x86-64 and aarch64.
While Velocity will operate normally without the high-performance natives, it will suffer
from degraded performance. For this reason, we strongly recommend that all production deployments
of Velocity run on x86-64 Linux.

It is possible for the natives to work on any other Unix-like operating system, and in theory
it is also possible to port the natives to Windows, but given that most users deploy Velocity on
Linux and lack of time and interest, it is unlikely the natives will be supported on any other platform.

aarch64 support is a special case. It is forward-looking, but current aarch64 offerings are not yet
high-performance, server-grade solutions suitable for Minecraft.

## Allocate server resources appropriately

You should always make sure to allocate the correct amount of heap, network bandwidth, and get the right
CPU for the amount of players you want to have on your proxy at a given time. For instance, it is
unlikely you'll be able to get 1,000 players on a Raspberry Pi Zero, but you'll have a much better
chance if you have a recent high-end server CPU from Intel or AMD.

There is no "one-size-fits-all" hardware recommendation, only general guidelines for the amount of players
you can expect. Those guidelines are:

* Prefer lots of cores but lower clock speeds. Unlike the Minecraft server, Velocity can actually benefit
  from the extra cores and single-threaded performance is not as important.
* The amount of memory is not as important. You will obviously need memory, but you're not going to need a
  lot of it. 16GB of physical memory should be sufficient even for large setups that intend to handle in
  excess of 1,000 players.
* Disk speed is unimportant. A solid-state drive is nice to have but not strictly required. Likewise, disk
  capacity is unimportant as well.

## Allocate enough heap

Alongside having enough CPU, memory, and network bandwidth, you must also allocate enough
Java heap to the proxy. Not doing this can induce lag and in severe cases may result in the proxy
being terminated by the Java Virtual Machine because it ran out of memory.

### General recommendation

The general rule of thumb is that you allocate 512MB per 500 players, plus some extra to allow
for some room for error (typically 1GB extra). For instance, if you want to handle 1,000 on a single
proxy, plan to allocate 2GB of heap.

### Special notes for containers

**If you use a containerized setup (such as using Kubernetes, Pterodactyl, or Docker directly),
you should not allocate the entirety of your memory allocation to the heap!** Doing so _will_
likely cause the proxy to be killed by the kernel's out-of-memory killer, which will result in
your proxy going down, likely at the worst possible time.

A safe (albeit conservative) setting for the heap would be to allocate half of the memory you
allocate to the proxy container in total. For instance, if you know the proxy will need to hold
1,000 players, then allocate 4GB to the container and give the proxy 2GB of heap.

## Tune your startup flags

We also recommend tuning your startup flags. The current recommendation is:

```
-XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch
```

You will add these flags after the `java` command but before the `-jar` parameter.

### Explanation of the flags

These flags focus on tuning the G1 garbage collector to be more friendly to Velocity's workload.

Before the release of Java 9, the default Java garbage collector was the Parallel GC. This
is a stop-the-world collector that does its work in parallel. The problem is that its pause
times tend to be long, and are not suitable for Minecraft (often showing up as seemingly
unexplainable lag spikes).

The recommended garbage collector for Velocity is the G1 region-based collector. There are
several reasons for us to recommend G1:

* It strikes the right balance between throughput and pause times. Throughput is roughly how much work the
  proxy can achieve.
* It is compatible with most setups (it is available in Java 8, the earliest Java version we support).

Setups using these flags tend have very low (less than 10 millisecond) GC pauses every few minutes, which is
very good for Minecraft.