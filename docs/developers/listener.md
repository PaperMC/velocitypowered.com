
## Creating listeners

Listening to events with Velocity's `@Subscribe` annotation is straightforward. You've already seen one such listener, using the ProxyInitializeEvent in your main class.

### Adding listening methods

To listen to an event, mark the method with `@Subscribe`, like shown. This works similarly to annotation-driven event listening
in other APIs you may be familiar with.

```
@Subscribe(
public void onPlayerChat(PlayerChatEvent event) {
	// do stuff
}
```

Note well that the import is `com.velocitypowered.api.event.Subscribe` and *NOT* `com.google.common.eventbus`.

** Orders **

Every listener has a `PostOrder`. When an event is fired, listeners are invoked as ordered by their orders. Listeners using
`PostOrder.FIRST` are called first, then EARLY, NORMAL, etc.

### Registering listeners

While your main plugin class is automatically registered, you will need to register with the EventManager any other listeners you have:

```
server.getEventManager().register(plugin, listener);
```

Both parameters are `Object`, first the instance of your plugin, second the listener to register.

As an alternative to `@Subscribe`, you can also use the functional `EventHandler` interface and register yours with
`register(Object plugin, Class<E> eventClass, EventHandler<E> handler)`

