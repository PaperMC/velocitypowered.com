---
title: Porting Your Plugin from Velocity 1.x.x
---

Velocity 2.0.0 includes important API changes from the Velocity 1.x.x series. **Please read this document very carefully**.

## Classes and method naming and locations

Velocity 2.0.0 moves many API classes to new packages, and renames many methods (mostly removing `get` prefixes). There are usually direct equivalents for all methods and classes changed in Velocity 2.0.0.

## Removal of legacy dependencies

The `toml4j` and `text` 3.x.x dependencies were removed in Velocity 2.0.0. If you need to use `toml4j`, shade it into your plugin directly. For `text` 3.x.x (and all the APIs that depend on it), direct equivalents are available in [Adventure](https://docs.adventure.kyori.net/) which was introduced in Velocity 1.1.0.

## Methods no longer return `Optional`s

In Velocity 2.0.0, we no longer return instances of `Optional` from the API, for [some very good reasons](https://homes.cs.washington.edu/~mernst/advice/nothing-is-better-than-optional.html). The replacement is either to replace cases where an `Optional` would have been returned by the API with a check for `null`, or wrap the return value using `Optional.ofNullable()` instead.

## Events are no longer processed asynchronously by default

Velocity 2.0.0 has a different event execution model than Velocity 1.x.x. Velocity 1.x.x's event model forced all events to be executed asynchronously on a fixed-size thread pool, which has proven over time to be a flawed model.

Starting in Velocity 2.0.0, the event execution model has become much more flexible. Existing event listeners will need to be adapted to use the new model. In general, listeners that run quickly and do not need to block require no changes, however if your event listener must block, you should consider returning an asynchronous `EventTask` instead. <Link to="/wiki/developers/event-api/">Learn more on the event API page</Link>.