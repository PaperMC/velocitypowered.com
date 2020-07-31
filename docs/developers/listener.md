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

<div>
<div class="caution-header">
    <img src="https://cdn.discordapp.com/attachments/734487433621668011/736277965142491276/warning_icon.png"></img>
     Caution
</div>
  <div class="caution">
      Note well that the import is `com.velocitypowered.api.event.Subscribe` and *NOT* in `com.google.common.eventbus`.
  </div>
</div>

** Orders **

Every listener has a `PostOrder`. When an event is fired, the order in which listeners are invoked is defined by their `PostOrder`. Listeners using
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

Creating events on Velocity is somewhat different than on other platforms. However, it is very similar for the most part.

### Creating the Event Class

First we need to create a class for our event. In this tutorial we'll assume you're making a private messaging plugin, and thus use
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

You'll notice that your events don't need to extend or implement anything. They just work.

### Firing the Event

To fire the event, you'll need to get the server's event manager and use the `fire` method. Note that this returns a `CompletableFuture`, so if you want to continue logic after the event is handled by all listeners, use a callback:

```java
server.getEventManager().fire(new PrivateMessageEvent(sender, recipient, message)).thenAccept((event) -> {
  // event has finished firing
  // do some logic dependent on the result
});
```

### Using ResultedEvent

Velocity uses the generalised `ResultedEvent` for events which have some sort of 'result'. The result type of the event is defined by its generic type; for example, `PrivateMessageEvent implements ResultedEvent<ResultType>`.

Some common result types are `GenericResult`, for simple allowed/denied results, and component results, used for events where the result may be denied with an accompanying reason (such as in a login event).

Using a general result is far more encompassing than `isCancelled/setCancelled` methods you may be used to on other platforms, whose meaning is vague and limited to a simple boolean. In this example, we'll use `GenericResult`, so listeners will be able to mark our `PrivateMessageEvent` as either allowed or denied.

```java
public class PrivateMessageEvent implements ResultedEvent<GenericResult> {

  private final Player sender;
  private final Player recipient;
  private final String message;
  
  private GenericResult result = GenericResult.allowed(); // Allowed by default
  
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
  
  @Override
  public GenericResult getResult() {
    return result;
  }
  
  @Override
  public void setResult(GenericResult result) {
    this.result = Objects.requireNonNull(result);
  }

}

```

Per convention, the result of a `ResultedEvent` should never be null. Here, we assure that using `Objects.requireNonNull`.

Listeners may 'deny' the event by using `event.setResult(GenericResult.denied())`, and you may check the result
with `event.getResult()`.


