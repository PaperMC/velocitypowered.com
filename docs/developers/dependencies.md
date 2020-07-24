
## Dependency Management

Reinventing the wheel takes too long, so dependencies are common. Also, you may want your plugin to hook into another.

### Plugin dependencies

Adding a dependency on another plugin is done in the `@Plugin` annotation on your main class. Let's revisit that:

```java
@Plugin(id = "myfirstplugin", name = "My Plugin", version = "0.1.0")
public class VelocityTest {
  // ...
}
```

Say we have a dependency on another plugin, call it `wonderplugin`. To add it as a dependency, do the following:

```java
@Plugin(id = "myfirstplugin", name = "My Plugin", version = "0.1.0", dependencies = {@Dependency(id = "wonderplugin")})
public class VelocityTest {
  // ...
}
```

The id of the dependency is the same as the other plugin's `id` from its `@Plugin` annotation.

That's it! Now, your plugin will require *wonderplugin* to load, and when it does, it will load *after* wonderplugin.

To specify multiple dependencies, separate them by commas: `dependencies = {@Dependency(id = "wonderplugin"), @Dependency(id = "otherplugin")}`

### Optional plugin dependencies

To make a dependency optional, add `optional = true`, like shown:

```java
@Plugin(id = "myfirstplugin", name = "My Plugin", version = "0.1.0", dependencies = {@Dependency(id = "wonderplugin", optional = true)})
public class VelocityTest {
  // ...
}
```

Your plugin will now load after wonderplugin, but it will not require it.

### External dependencies

Dependencies on other libraries aren't handled by Velocity. You will need to add them using your build system. Please remember
to relocate any dependencies you shade. Failure to relocate will lead to dependency conflicts with other plugins.

If your plugin does not shade its dependencies, but rather attaches them from a directory, you may use the PluginManager's
`addToClasspath` method instead of using reflection to access the ClassLoader.

