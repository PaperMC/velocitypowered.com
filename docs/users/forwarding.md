# Configuring player information forwarding

Velocity supports forwarding information about your players to your servers, such as IP addresses, UUIDs and skins.
Velocity supports two different methods for forwarding player information to your servers, which are described in the
 appropriate sections.
 
## Configuring modern forwarding

`modern` forwarding is a Velocity-native format. It forwards all player information in an efficient binary format and
employs a MAC code to make it much more difficult to trick the server into impersonating your Velocity proxy.
However, it is only available for Minecraft 1.13 or higher.

To use modern forwarding with any supported server implementation, set the `player-info-forwarding` setting in
`velocity.toml` to `modern`. You then need to ensure your server is properly configured to use velocity forwarding by
 following the steps in the appropriate section below:

<Caution>
   Modern forwarding, while more secure than the legacy  BungeeCord forwarding scheme,
   is incompatible with Minecraft versions below 1.13, Minecraft Forge (both versions
   for Minecraft 1.12.2 and below and for 1.14 and above), and ProtocolSupport. If you
   support or rely on any of these, you will need to use legacy BungeeCord-compatible
   forwarding instead.
</Caution>

## Configuring Paper

You will need build 377 and above for Paper 1.13+ to use modern forwarding.

To allow Paper to understand the forwarding player data, in your `paper.yml`, set `settings.velocity-support.enabled
` to true and `settings.velocity-support.secret` to match the secret in your `velocity.toml`. You must also set 
`settings.velocity-support.online-mode` to the `online-mode` setting in your `velocity.toml`. Once you're done
editing `paper.yml`, reboot your server.
 
## Configuring Fabric

A mod called [FabricProxy](https://www.curseforge.com/minecraft/mc-mods/fabricproxy) allows you to use Velocity
 modern forwarding with a modded server using Fabric.
 
# Configuring legacy BungeeCord-compatible forwarding

`legacy` forwarding is the player information forwarding protocol that is used by BungeeCord when enabling IP
forwarding from BungeeCord. Due to this, it is ubiquitous and well-supported by most server implementations. It has
excellent compatibility (supporting version sas old as 1.7.2, released in 2013) and will work with Forge if you
also install SpongeForge on your modded server and configure it correctly. However, it is not as secure as the
Velocity forwarding.

If you need to use BungeeCord-compatible forwarding, simply set your `player-infor-forwarding` setting in `velocity
.toml` to `legacy`. You will also need to make sure your server is properly configured to understand the data sent by
Velocity.

<Caution>
   Legacy forwarding is <strong>fundamentally insecure</strong>. If you must use it,
   you should understand <Link to="/wiki/deployment/security/">how to secure your server properly</Link>.
   That page reviews all the possible options to secure your server so that nothing
   aside from the proxy can connect to your server.
</Caution>

## Configuring Spigot / Paper

To make Spigot or Paper understand the data forwarded from Velocity, set `settings.bungeecord` to `true` in your
 `spigot.yml` and then reboot your server.
 
## Configuring Sponge

To configure Sponge to understand the data forwarded from Velocity, set `modules.bungeecord` to `true` and 
`bungeecord.ip-forwarding` to true in your `config/sponge/global.conf` file, and then restart your Sponge server.
                                                                                                              

