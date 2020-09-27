---
title: Creating Your First Plugin
---

It is very simple to create a plugin for Velocity. This section will teach you how to setup your IDE, your plugin
identifiers, and give you an introduction to the basics of the Velocity API.

## Before you continue...

You will need proficiency in the Java programming language. If you don't know Java yet, we strongly recommend
you learn some basic Java before you continue.

## Set up your environment

You're going to need the [JDK](https://adoptopenjdk.net) and an IDE. If you don't have an IDE, IntelliJ IDEA is recommended.

## Creating the project in your IDE

* Open your IDE
* Click `Create New Project` or the equivalent
* Select either `Gradle` or `Maven`
* Make sure your **Project JDK** is Java 8 or later
* **Finish** the dialog and open the project.

Now we have created our project, we need configure our build system. 

## I know how to do this. Give me what I need!

### Maven repository

||
|------|--------------------------------------------------------------|
| Name | `velocity`                                                   |
| URL  | `https://nexus.velocitypowered.com/repository/maven-public/` |

### Dependency

||
|-------------|-----------------------|
| Group ID    | `com.velocitypowered` |
| Artifact ID | `velocity-api`        |
| Version     | `1.1.0-SNAPSHOT`      |

### Javadocs

Javadocs are available at [jd.velocitypowered.com/1.1.0](https://jd.velocitypowered.com/1.1.0).

## Set up your build system

You will need to setup a build system before you continue. While it is possible to write Velocity plugins without one,
having a build system will make your life a lot less difficult.

How to set up a build system is outside the scope of this page, but you can look at your build system's documentation
([Gradle](https://docs.gradle.org/current/userguide/userguide.html) or [Maven](https://maven.apache.org/guides/getting-started/index.html))
for assistance.

### Setting up the dependency with Gradle

Add the following to your `build.gradle`:

```
repositories {
    maven {
        name 'velocity'
        url 'https://nexus.velocitypowered.com/repository/maven-public/'
    }
}

dependencies {
    compile 'com.velocitypowered:velocity-api:1.1.0-SNAPSHOT'
}
```

As of Gradle 5, you must also specify the API dependency as an annotation processor, otherwise plugin annotations
won't be processed to create the `velocity-plugin.json` file.

```
dependencies {
    compile 'com.velocitypowered:velocity-api:1.1.0-SNAPSHOT'
    annotationProcessor 'com.velocitypowered:velocity-api:1.1.0-SNAPSHOT'
}
```

### Setting up the dependency with Maven

Add the following to your `pom.xml`:

```xml
<repositories>
    <repository>
        <id>velocity</id>
        <url>https://nexus.velocitypowered.com/repository/maven-public/</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.velocitypowered</groupId>
        <artifactId>velocity-api</artifactId>
        <version>1.1.0-SNAPSHOT</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

