---
title: Configuring Velocity
---

Velocity is designed to be easy to configure and set up. Every Velocity file is stored in `velocity.toml`, located in
the directory where you started the proxy. Velocity uses the the [TOML](https://github.com/toml-lang/toml) file format,
as it is easy to understand and avoids pitfalls of YAML and other configuration formats common in the community.

## Data types

There are a few "special" data types in the Velocity configuration.

### Chat

Chat messages may be provided in legacy color code format or in JSON format.

For Velocity 1.0.x, JSON messages are deserialized as if they were for Minecraft 1.15.2 or lower and RGB chat messages
are not supported. For Velocity 1.1.0, RGB support (using the `&#rrggbb` format) is available and JSON messages are
deserialized for Minecraft 1.16.

### Address

An address is a pairing of an IP address or hostname, and a port, separated by a colon (`:`). For instance, `127.0.0.1:25577`
and `server01.example.com:25565` are valid addresses.

## Root section

These settings mostly cover the basic, most essential settings of the proxy.

| Setting Name          | Type    | Description                                                                                                                                                                                                      |
|-----------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``config-version``    | String  | This is the current config version used by Velocity. You should not alter this setting.                                                                                                                          |
| ``bind``              | Address | This tells the proxy to accept connections on a specific IP. By default, Velocity will listen for connections on all IP addresses on the computer on port 25577.                                                 |
| ``motd``              | Chat    | This allows you to change the message shown to players when they add your server to their server list. You can use legacy Minecraft color codes or JSON chat.                                                    |
| ``show-max-players``  | Integer | This allows you to customize the number of "maximum" players in the  player's server list. Note that Velocity doesn't have a maximum number of players it supports.                                              |
| ``forwarding-secret`` | String  | This setting is used as a secret to ensure that player info forwarded by Velocity comes from your proxy and not from someone pretending to run Velocity. See the "Player info forwarding" section for more info. |
| ``announce-forge``    | Boolean | This setting determines whether Velocity should present itself as a Forge/FML-compatible server. By default, this is disabled.                                                                                   |


## `server` section

| Setting Name  | Type    | Description                                                                                                                |
|---------------|---------|----------------------------------------------------------------------------------------------------------------------------|
| A server name | Address | This makes the proxy aware of a server that it can connect to.                                                             |
| `try`         | Array   | This specifies what servers Velocity should try to connect to upon player login and when a player is kicked from a server. |


## `forced-hosts` section

| Setting Name | Type     | Description                                                                                                                                        	|
|--------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------	|
| A host name  | Hostname | This configures the proxy to create a forced host for the specified hostname. An array of servers to try for the specified hostname is the value.  	|


## `advanced` section

| Setting name            | Type    | Description                                                                                                                                                                                              |
|-------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `compression-threshold` | Integer | This is the minimum size (in bytes) that a packet must be before the proxy compresses it. Minecraft uses 256 bytes by default.                                                                           |
| `compression-level`     | Integer | This setting indicates what `zlib` compression level the proxy should use to compress packets. The default value uses the default zlib level. 	                                                       |
| `login-ratelimit`       | Integer | This setting determines the minimum amount of time (in milliseconds) that must pass before a connection from the same IP address will be accepted by the proxy. A value of `0` disables the rate limit.  |
| `connection-timeout`    | Integer | This setting determines how long the proxy will wait to connect to a server before timing out.                                                                                                           |
| `read-timeout`          | Integer | This setting determines how long the proxy will wait to receive data from the server before timing out.                                                                                                  |
| `proxy-protocol`        | Boolean | This setting determines whether or not Velocity should receive HAProxy PROXY messages. If you don't use HAProxy, leave this setting off.                                                                 |

## `query` section

| Setting name   	| Type    	| Description                                                                                                   |
|----------------	|---------	|--------------------------------------------------------------------------------------------------------------	|
| `enabled`      	| Boolean 	| Whether or not Velocity should reply to Minecraft query protocol requests. You can usually leave this false. 	|
| `port`         	| Number  	| Specifies which port that Velocity should listen on for GameSpy 4 (Minecraft query protocol) requests.        |
| `map`          	| String  	| Specifies the map name to be shown to clients.                                                                |
| `show-plugins` 	| Boolean 	| Whether or not Velocity plugins are included in the query responses.                                          |

## `metrics` section

| Setting name  | Type    | Description                                                                                             |
|---------------|---------|---------------------------------------------------------------------------------------------------------|
| `enabled`     | Boolean | Whether or not Velocity should send metrics to bStats.                                                  |
| `id`          | UUID    | A randomly generated UUID that uniquely identifies your Velocity server. Do not alter this setting. 	|
| `log-failure` | Boolean | Whether or not Velocity should log whenever it fails to connect to bStats.                              |


## The default configuration

Below is the default configuration file for Velocity, `velocity.toml`.

```toml
# Config version. Do not change this
config-version = "1.0"

# What port should the proxy be bound to? By default, we'll bind to all addresses on port 25577.
bind = "0.0.0.0:25577"

# What should be the MOTD? This gets displayed when the player adds your server to
# their server list. Legacy color codes and JSON are accepted.
motd = "&3A Velocity Server"

# What should we display for the maximum number of players? (Velocity does not support a cap
# on the number of players online.)
show-max-players = 500

# Should we authenticate players with Mojang? By default, this is on.
online-mode = true

# If client's ISP/AS sent from this proxy is different from the one from Mojang's
# authentication server, the player is kicked. This disallows some VPN and proxy
# connections but is a weak form of protection.
prevent-client-proxy-connections = false

# Should we forward IP addresses and other data to backend servers?
# Available options:
# - "none":        No forwarding will be done. All players will appear to be connecting
#                  from the proxy and will have offline-mode UUIDs.
# - "legacy":      Forward player IPs and UUIDs in a BungeeCord-compatible format. Use this
#                  if you run servers using Minecraft 1.12 or lower.
# - "bungeeguard": Forward player IPs and UUIDs in a format supported by the BungeeGuard
#                  plugin. Use this if you run servers using Minecraft 1.12 or lower, and are
#                  unable to implement network level firewalling (on a shared host).
# - "modern":      Forward player IPs and UUIDs as part of the login process using
#                  Velocity's native forwarding. Only applicable for Minecraft 1.13 or higher.
player-info-forwarding-mode = "NONE"

# If you are using modern or BungeeGuard IP forwarding, configure an unique secret here.
forwarding-secret = ""

# Announce whether or not your server supports Forge. If you run a modded server, we
# suggest turning this on.
# 
# If your network runs one modpack consistently, consider using ping-passthrough = "mods"
# instead for a nicer display in the server list.
announce-forge = false

# If enabled (default is false) and the proxy is in online mode, Velocity will kick
# any existing player who is online if a duplicate connection attempt is made.
kick-existing-players = false

# Should Velocity pass server list ping requests to a backend server?
# Available options:
# - "disabled":    No pass-through will be done. The velocity.toml and server-icon.png
#                  will determine the initial server list ping response.
# - "mods":        Passes only the mod list from your backend server into the response.
#                  The first server in your try list (or forced host) with a mod list will be
#                  used. If no backend servers can be contacted, Velocity won't display any
#                  mod information.
# - "description": Uses the description and mod list from the backend server. The first
#                  server in the try (or forced host) list that responds is used for the
#                  description and mod list.
# - "all":         Uses the backend server's response as the proxy response. The Velocity
#                  configuration is used if no servers could be contacted.
ping-passthrough = "DISABLED"

[servers]
# Configure your servers here. Each key represents the server's name, and the value
# represents the IP address of the server to connect to.
lobby = "127.0.0.1:30066"
factions = "127.0.0.1:30067"
minigames = "127.0.0.1:30068"

# In what order we should try servers when a player logs in or is kicked from aserver.
try = [
  "lobby"
]

[forced-hosts]
# Configure your forced hosts here.
"lobby.example.com" = [
  "lobby"
]
"factions.example.com" = [
  "factions"
]
"minigames.example.com" = [
  "minigames"
]

[advanced]
# How large a Minecraft packet has to be before we compress it. Setting this to zero will
# compress all packets, and setting it to -1 will disable compression entirely.
compression-threshold = 256

# How much compression should be done (from 0-9). The default is -1, which uses the
# default level of 6.
compression-level = -1

# How fast (in milliseconds) are clients allowed to connect after the last connection? By
# default, this is three seconds. Disable this by setting this to 0.
login-ratelimit = 3000

# Specify a custom timeout for connection timeouts here. The default is five seconds.
connection-timeout = 5000

# Specify a read timeout for connections here. The default is 30 seconds.
read-timeout = 30000

# Enables compatibility with HAProxy.
proxy-protocol = false

# Enables TCP fast open support on the proxy. Requires the proxy to run on Linux.
tcp-fast-open = false

# Enables BungeeCord plugin messaging channel support on Velocity.
bungee-plugin-message-channel = true

# Shows ping requests to the proxy from clients.
show-ping-requests = false

# By default, Velocity will attempt to gracefully handle situations where the user unexpectedly
# loses connection to the server without an explicit disconnect message by attempting to fall the
# user back, except in the case of read timeouts. BungeeCord will disconnect the user instead. You
# can disable this setting to use the BungeeCord behavior.
failover-on-unexpected-server-disconnect = true

# Declares the proxy commands to 1.13+ clients.
announce-proxy-commands = true

# Enables the logging of commands
log-command-executions = false

[query]
# Whether to enable responding to GameSpy 4 query responses or not.
enabled = false

# If query is enabled, on what port should the query protocol listen on?
port = 25577

# This is the map name that is reported to the query services.
map = "Velocity"

# Whether plugins should be shown in query response by default or not
show-plugins = false

[metrics]
# Whether metrics will be reported to bStats (https://bstats.org).
# bStats collects some basic information, like how many people use Velocity and their
# player count. We recommend keeping bStats enabled, but if you're not comfortable with
# this, you can turn this setting off. There is no performance penalty associated with
# having metrics enabled, and data sent to bStats can't identify your server.
enabled = true

# A unique, anonymous ID to identify this proxy with.
id = "b4548156-57a5-455a-8807-b7108725680c"

log-failure = false

# Legacy color codes and JSON are accepted in all messages.
[messages]
# Prefix when the player gets kicked from a server.
#   First argument '%s': the server name
kick-prefix = "&cKicked from %s: "

# Prefix when the player is disconnected from a server.
#   First argument '%s': the server name
disconnect-prefix = "&cCan't connect to %s: "

online-mode-only = "&cThis server only accepts connections from online-mode clients.\n\n&7Did you change your username? Sign out of Minecraft, sign back in, and try again."
no-available-servers = "&cThere are no available servers."
already-connected = "&cYou are already connected to this proxy!"
moved-to-new-server-prefix = "&cThe server you were on kicked you: "
generic-connection-error = "&cAn internal error occurred in your connection."
```
