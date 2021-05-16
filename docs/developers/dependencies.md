---
title: Dependency Management
---

Dependencies are common. You need to hook into another plugin. You don't want to write the same code someone else has already solved. Whatever you do, you need a way to manage your dependencies effectively.

## Plugin dependencies

Adding a dependency on another plugin is done with the `@Plugin` annotation in your main class. Let's revisit that briefly:

```java
@Plugin(
  id = "myfirstplugin",
  name = "My Plugin",
  version = "0.1.0"
)
public class VelocityTest {
  // ...
}
```

Say we have a dependency on another plugin, call it `wonderplugin`. To add it as a dependency, do the following:

```java
@Plugin(
  id = "myfirstplugin",
  name = "My Plugin",
  version = "0.1.0",
  dependencies = {
    @Dependency(id = "wonderplugin")
  }
)
public class VelocityTest {
  // ...
}
```

The id of the dependency is the same as the other plugin's `id` from its `@Plugin` annotation. This is why having a stable plugin ID is important.

That's it! Now, your plugin will require *wonderplugin* to load, and when it does, it will load *after* wonderplugin.

To specify multiple dependencies, separate them by commas: `dependencies = {@Dependency(id = "wonderplugin"), @Dependency(id = "otherplugin")}`

## Optional plugin dependencies

To make a dependency optional, add `optional = true`, like shown:

```java
@Plugin(
  id = "myfirstplugin",
  name = "My Plugin",
  version = "0.1.0",
  dependencies = {
    @Dependency(id = "wonderplugin", optional = true)
  }
)
public class VelocityTest {
  // ...
}
```

## Requiring a specific version of a plugin dependency

To request that a plugin fall within a certain range of versions, you can provide an NPM-style version constraint, assuming the plugin you are depending on uses [Semantic Versioning](https://semver.org/). To do so, add `version = "<range>"`, like so:

```java
@Plugin(
  id = "myfirstplugin",
  name = "My Plugin",
  version = "0.1.0",
  dependencies = {
    @Dependency(id = "wonderplugin", version = "2.0.x")
  }
)
public class VelocityTest {
  // ...
}
```

You can check if your constraint or version number is valid [using this checker](https://jubianchi.github.io/semver-check/#/).

If the version of `wonderplugin` installed on the proxy satisfies the version constraint, Velocity will load your plugin. If the dependency is not at the required version and the dependency is not optional, Velocity will not load your plugin (and display an error on the message). Otherwise, Velocity will display a warning but allow your plugin to load.

Velocity also supports version checking on itself, by way of the pseudo-plugin ID `velocity`. This example will allow Velocity 2.1.0 and above, but not Velocity 2.3.0 or below, to load your plugin:

```java
@Plugin(
  id = "myfirstplugin",
  name = "My Plugin",
  version = "0.1.0",
  dependencies = {
    @Dependency(id = "velocity", version = ">=2.1.0 <2.3.0")
  }
)
public class VelocityTest {
  // ...
}
```

## External dependencies

Dependencies on other libraries aren't handled by Velocity. You will need to add them using your build system. Please remember to relocate any dependencies you shade. Failure to relocate will lead to dependency conflicts with other plugins.

If your plugin does not shade its dependencies, but rather attaches them from a directory, you may use the PluginManager's `addToClasspath` method instead of using reflection to access the ClassLoader.

