---
title: Creating Your First Plugin
---

It is very simple to create a plugin for Velocity. This section will teach you how to setup your IDE, your plugin identifiers, and give you an introduction to the basics of the Velocity API.

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
| Version     | `1.1.5`               |

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
// Gradle DSL
repositories {
    maven {
        name 'velocity'
        url 'https://nexus.velocitypowered.com/repository/maven-public/'
    }
}

dependencies {
    compile 'com.velocitypowered:velocity-api:1.1.5'
}

// Kotlin DSL
repositories {
    maven("https://nexus.velocitypowered.com/repository/maven-public/") {
        name = "velocity"
    }
}

dependencies {
    compileOnly("com.velocitypowered:velocity-api:1.1.5")
}
```

As of Gradle 5, you must also specify the API dependency as an annotation processor, otherwise plugin annotations
won't be processed to create the `velocity-plugin.json` file.

```
// Gradle DSL
dependencies {
    compile 'com.velocitypowered:velocity-api:1.1.5'
    annotationProcessor 'com.velocitypowered:velocity-api:1.1.5'
}

// Kotlin DSL
dependencies {
    compileOnly("com.velocitypowered:velocity-api:1.1.5")
    annotationProcessor("com.velocitypowered:velocity-api:1.1.5")
}

```
#### Addition for Kotlin developers
If you use Kotlin language, for annotation processing you need add gradle plugin kapt and replace `annotationProcessor` with `kapt`
```
// Gradle DSL
plugins {
    id 'org.jetbrains.kotlin.jvm' version 'your-kotlin-version'
    id 'org.jetbrains.kotlin.kapt' version 'your-kotlin-version'
}

dependencies {
    compile 'com.velocitypowered:velocity-api:1.1.5'
    kapt 'com.velocitypowered:velocity-api:1.1.5'
}

// Kotlin DSL
plugins {
    kotlin("jvm") version "your-kotlin-version"
    kotlin("kapt") version "your-kotlin-version"
}

dependencies {
    compileOnly("com.velocitypowered:velocity-api:1.1.5")
    kapt("com.velocitypowered:velocity-api:1.1.5")
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
        <version>1.1.5</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

