---
title: Configuring player information forwarding
---

Velocity supports forwarding information about your players to your servers, such as IP addresses, UUIDs and skins. Velocity supports both a custom forwarding format (modern forwarding) that is more secure, and BungeeCord forwarding which has better compatibility but is less secure.

<Caution>
   You may choose between modern forwarding or legacy BungeeCord-style forwarding; you are currently not able to "mix and match" forwarding modes, and you cannot use both forwarding moddes together.
</Caution>

## Configuring modern forwarding

`modern` forwarding is a Velocity-native format. It forwards all player information in an efficient binary format and employs a MAC code to make it much more difficult to trick the server into impersonating your Velocity proxy. However, it is only available for Minecraft 1.13 or higher.

<Caution>
   Modern forwarding is incompatible with Minecraft versions below 1.13, Minecraft Forge, and the ProtocolSupport plugin. If you use any of these, you will need to use legacy BungeeCord-compatible forwarding instead.
</Caution>

To use modern forwarding with any supported server implementation, set the `player-info-forwarding` setting in `velocity.toml` to `modern`. Then, you need to ensure your server is properly configured to use Velocity forwarding.

### Configuring modern forwarding for Paper

Paper 1.14+ and above, along with Paper 1.13.1/1.13.2 build 377 and above support Velocity modern forwarding natively.

First, you need to disable BungeeCord forwarding if you had it enabled beforehand. Make sure `settings.bungeecord` is set to `false` in your `spigot.yml`.

In `paper.yml`, set `settings.velocity-support.enabled` to true and `settings.velocity-support.secret` to match the secret in your `velocity.toml`. You must also set `settings.velocity-support.online-mode` to the `online-mode` setting in your `velocity.toml`. Once you're done editing `paper.yml`, reboot your server.
 
## Configuring modern forwarding for Fabric

A mod called [FabricProxy](https://www.curseforge.com/minecraft/mc-mods/fabricproxy) allows you to use Velocity modern forwarding with a modded server using Fabric.
 
## Configuring legacy BungeeCord-compatible forwarding

<Caution>
   Legacy forwarding is <strong>fundamentally insecure</strong>. If you must use it, you should understand <Link to="/wiki/deployment/security/">how to secure your server properly</Link>. That page reviews all the possible options to secure your server so that nothing aside from the proxy can connect to your server.
</Caution>

`legacy` forwarding is the player information forwarding protocol that is used by BungeeCord when enabling IP forwarding from BungeeCord. Due to this, it is ubiquitous and well-supported by most server implementations. It has excellent compatibility (supporting versions as old as 1.7.2, released in 2013) and will work with Forge if you also install SpongeForge on your modded server and configure it correctly. However, it is not secure.

If you must use BungeeCord-compatible forwarding, simply set your `player-info-forwarding` setting in `velocity.toml` to `legacy`. You will also need to make sure your server can accept the forwarded player data sent by Velocity.

### Configuring legacy forwarding for Spigot / Paper

To make Spigot or Paper understand the data forwarded from Velocity, set `settings.bungeecord` to `true` in your `spigot.yml` and then reboot your server.
 
### Configuring legacy forwarding for Sponge

To configure Sponge to understand the data forwarded from Velocity, set `modules.bungeecord` to `true` and `bungeecord.ip-forwarding` to true in your `config/sponge/global.conf` file, and then restart your Sponge server.

### Configuring legacy forwarding for Fabric

[FabricProxy](https://www.curseforge.com/minecraft/mc-mods/fabricproxy) allows you to use legacy BungeeCord-style forwarding (along with modern Velocity forwarding) with a modded server using Fabric.