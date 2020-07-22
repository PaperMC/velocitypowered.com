---
title: Getting Started
---

This page covers how to install and set up a minimal configuration of Velocity.

## Installing Java

Velocity is written in Java, so if you do not already have Java installed, you
will need to install it before you continue. Velocity requires Java 8 or newer.

We recommend using the HotSpot-based Java 11 builds from [AdoptOpenJDK](https://adoptopenjdk.net/).

## Downloading Velocity

There are two versions of Velocity available for download.

* Velocity 1.0.x is the stable version and only receives protocol updates. It
  supports Minecraft 1.8 to 1.16.1. The latest version is Velocity 1.0.8. You
  can download Velocity 1.0.8 from [our Jenkins](https://ci.velocitypowered.com/job/velocity/222/artifact/proxy/build/libs/velocity-proxy-1.0.8-all.jar).
* Velocity 1.1.0 is the current development version and receives new features
  and enhancements. It supports Minecraft 1.7.2 to 1.16.1 You can download Velocity
  1.1.0 from [our Jenkins](https://ci.velocitypowered.com/job/velocity-1.1.0/lastSuccessfulBuild/artifact/proxy/build/libs/velocity-proxy-1.1.0-SNAPSHOT-all.jar).

## Launching Velocity for the first time

Once you have downloaded Velocity, we will launch it for the first time to generate the
configuration file, `velocity.toml`. You can use the start script created to launch Velocity
once you're done configuring Velocity.

### Launching Velocity under Windows

Create a `start.bat` with the following contents in the same directory where you intend
to place the proxy files.

```batch
@echo off
java -Xms512M -Xmx512M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -jar velocity.jar
pause
```

Once saved, double-check the `start.bat` file. If it worked, you should now receive a
console.

### Launching Velocity under macOS or Linux

Create a `start.sh` with the following contents in the same directory where you intend
to place the proxy files. (You may do this using a file transfer client, or using a text
editor running on the machine.)

```shell
#!/bin/sh

java -Xms512M -Xmx512M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -jar velocity*.jar
```

Once saved, open a terminal (or log into the machine) if you haven't already, navigate to the
directory where you have placed the Velocity JAR file and the `start.sh` file. Then run
`chmod +x start.sh` and then `./start.sh`. If it worked, you should now receive a proxy console.

## After launch

Here's a sample of what you'll see once we've started the proxy:

```plain
[12:04:59 INFO]: Booting up Velocity <unknown>...
[12:04:59 INFO]: Connections will use epoll channels, libdeflate (Linux x86_64) compression, OpenSSL 1.1.x (Linux x86_64) ciphers
[12:04:59 INFO]: Loading plugins...
[12:04:59 INFO]: Loaded 0 plugins
[12:04:59 INFO]: Listening on /0:0:0:0:0:0:0:0%0:25577
[12:04:59 INFO]: Done (0.48s)!
```

In essence, we've now launched Velocity and are ready to set it up our `velocity.toml`.
It is now time to modify the configuration and properly set up your servers.

Go ahead and type `end` at the console and press enter. The proxy shuts down:

```plain
> end
[12:05:02 INFO]: Shutting down the proxy...
[12:05:02 INFO]: Closing endpoint /0:0:0:0:0:0:0:0%0:25577
```

### Configuring your servers

We now need to configure each server to accept connections from the proxy.

Open up `velocity.toml` and navigate to the `[servers]` section. 
This section of the config is very crucial as is what allows connection to your backend servers.

Here's a sample of what the `[servers]` section should look like initially.

```plain
[servers]
lobby = "127.0.0.1:30066
factions = "127.0.0.1:30067"
minigames = "127.0.0.1:30068"
``` 
When adding servers to this list, it is critical that you set `online-mode` to `false` in each of your server(s) 
`server.properties`.

#### Running Sponge servers with Velocity

To run a Sponge server on Velocity there are two extra steps that you must complete before connection will succeed. 

Head over to your sponge server, and navigate to `/config/sponge/` and open the `global.conf`. In the config file you
will need to search for the following sections

```plain
bungeecord {
        # If 'true', allows BungeeCord to forward IP address, UUID, and Game Profile to this server.
        ip-forwarding=false
    }

```

```plain
modules {
        bungeecord=false
}
```

Once you have found both of these options in the `global.conf`, set each one to `true`. If you have trouble finding
these, try using `ctrl+f`.