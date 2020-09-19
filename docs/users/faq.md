---
title: Frequently Asked Questions
---

Over the years, we've been asked many of the same questions by users.
This FAQ attempts to answer as many of these questions from the user
perspective.

## What version of Java does Velocity require?

Velocity requires Java 8 as a minimum. We recommend using Java 11.

## Does Velocity support plugins developed for BungeeCord or Waterfall?

No. Many of the things Velocity can do could not be done if we decided
to support BungeeCord plugins.

However, certain plugins may have Velocity ports available or alternatives
are available. In addition, plugins that support BungeeCord but only require
that they are installed on the server (nothing on the proxy) typically use
the BungeeCord plugin messaging channel, which can be supported by BungeeQuack
for Velocity 1.0.x or natively by Velocity 1.1.0.

# Common Errors

### Improper Player Information Forwarding Errors

```
Can't connect to server lobby: If you wish to use IP forwarding, 
please enable it in your Bungeecord config as well! 
```

```
Can't connect to server lobby: Your server did not send a forwarding request to the proxy. 
Is it set up correctly?
```

These errors are result of improper configuration. See 
[Player Information Forwarding](/wiki/users/forwarding/) 
for a proper IP forwarding guide.

### Improper Modern Player Information Forwarding
```
Can't connect to server lobby: This server requires you to connect with Velocity
```

This error is a result of only enabling forwarding on the backend server. To fix this error, 
ensure that you have set up the correct player information forwarding method on the proxy.
See [Player Information Forwarding](/wiki/users/forwarding/)
for more information.

### Invalid Payload Register
```
[server connection] player1 -> hub has connected
>.... [15:13:13 ERROR]: [connected player] player1 (/localhost:58943): kicked from server hub: Invalid payload
 REGISTER!
```

This error typically occurs on Spigot-based servers when someone connects with a modded client. 
You can fix this issue if you use Paper (or a fork of Paper) 1.12.2 or above by adding the startup flag
 `-Dpaper.disableChannelLimit=true` to the server's startup flags and restarting the server. 

