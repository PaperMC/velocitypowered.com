
---
title: Working With Events
---

Listening to events with Velocity's `@Subscribe` annotation is straightforward. You've already seen one such listener, using the ProxyInitializeEvent in your main class.

### Adding listening methods

To listen to an event, mark the method with `@Subscribe`, like shown. This works similarly to annotation-driven event listening
in other APIs you may be familiar with; it's the equivalent of Bukkit's/Bungee's @EventHandler and Sponge's @Listener.

```java
@Subscribe(
public void onPlayerChat(PlayerChatEvent event) {
	// do stuff
}
```

Note well that the import is `com.velocitypowered.api.event.Subscribe` and *NOT* `com.google.common.eventbus`.

** Orders **

Every listener has a `PostOrder`. When an event is fired, listeners are invoked as ordered by their orders. Listeners using
`PostOrder.FIRST` are called first, then EARLY, NORMAL, etc.

State the desired order in the `@Subscribe` annotation:

```java
@Subscribe(order = PostOrder.NORMAL)
public void onPlayerChat(PlayerChatEvent event) {
	// do stuff
}
```

NORMAL is the default value if you do not specify an order.

### Registering listeners

While your main plugin class is automatically registered, you will need to register with the EventManager any other listeners you have:

```java
server.getEventManager().register(plugin, listener);
```

Both parameters are `Object`, first the instance of your plugin, second the listener to register. For example:

```java
@Plugin(id = "myfirstplugin", name = "My Plugin", version = "0.1.0", dependencies = {@Dependency(id = "wonderplugin")})
public class VelocityTest {
  
  private final ProxyServer server;
  private final Logger logger;
  
  @Inject
  public VelocityTest(ProxyServer server, Logger logger) {
    this.server = server;
    this.logger = logger;
  }
  
  @Subscribe
  public void onInitialize(ProxyInitializeEvent event) {
    server.getEventManager().register(this, new MyListener());
  }
}

public class MyListener {

  @Subscribe(order = PostOrder.EARLY)
  public void onPlayerChat(PlayerChatEvent event) {
    // do something here
  }

}
```

### An Alternative Approach

As an alternative to `@Subscribe`, you can also use the functional `EventHandler` interface and register yours with
`register(Object plugin, Class<E> eventClass, EventHandler<E> handler)`

## Creating Events

Creating events on Velocity is somewhat different than on other platforms. Your events don't need to extend or implement
anything. They just work.

### Creating the Event Class

First we need to create a class for our event. In this tutorial we'll assume your making a private messaging plugin, and thus use
a `PrivateMessageEvent`. Most of this part is boilerplate.

```java
public class PrivateMessageEvent {

  private final Player sender;
  private final Player recipient;
  private final String message;
  
  public PrivateMessageEvent(Player sender, Player recipient, String message) {
    this.sender = sender;
    this.recipient = recipient;
    this.message = message;
  }
  
  public Player getSender() {
    return sender;
  }
  
  public Player getRecipient() {
    return recipient;
  }
  
  public String getMessage() {
    return message;
  }
  
  // toString, equals, and hashCode may be added as needed

}

```

### Firing the Event

To fire the event, you'll need to get the server's event manager and use the `fire` method. Note that this returns a `CompletableFuture`, so if you want to continue logic after the event is handled by all listeners, use a callback:

```java
server.getEventManager().fire(new PrivateMessageEvent(sender, recipient, message)).thenAccept((event) -> {
  // event has finished firing
  // do some logic dependent on the result
});
```

### Making it Cancellable

To make your event cancellable, simply add `isCancelled` and `setCancelled` methods to the event class:

```java
public class PrivateMessageEvent {

  private final Player sender;
  private final Player recipient;
  private final String message;
  
  private boolean cancelled;
  
  public PrivateMessageEvent(Player sender, Player recipient, String message) {
    this.sender = sender;
    this.recipient = recipient;
    this.message = message;
  }
  
  public Player getSender() {
    return sender;
  }
  
  public Player getRecipient() {
    return recipient;
  }
  
  public String getMessage() {
    return message;
  }
  
  public boolean isCancelled() {
    return cancelled;
  }
  
  public void setCancelled(boolean cancelled) {
    this.cancelled = cancelled;
  }
  
  // toString, equals, and hashCode may be added as needed

}

```

Now you can check `isCancelled` after you fire the event.


