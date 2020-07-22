
This section is intended for developers who seek to develop plugins for Velocity.
While this section will cover the basics for developing a plugin, not every concept will be covered. 

# Creating Your First Plugin

So you've decided to take the plunge and create your first Velocity plugin? That's awesome! This page will help you get you going

## Set up your environment

You're going to need the [JDK](https://adoptopenjdk.net) and an IDE. If you don't have an IDE, IntelliJ IDEA is recommended.

## Creating your IDE project

* Open your IDE
* Click `Create New Project` or the equivalent
* Select either `Gradle` or `Maven`
* Make sure your **Project JDK** is Java 8 or later
* **Finish** the dialog and open the project.

Now we have created our project, we need configure our build system. 

## I know how to do this. Give me what I need!

### Maven repository

| Name | velocity                                                   |
|------|------------------------------------------------------------|
| URL  | https://nexus.velocitypowered.com/repository/maven-public/ |

### Dependency

| Group ID    | com.velocitypowered |
|-------------|---------------------|
| Artifact ID | velocity-api        |
| Version     | 1.1.0-SNAPSHOT      |

### Javadocs

Javadocs are available at [jd.velocitypowered.com](https://jd.velocitypowered.com).

## Setting up your first project

If you need help setting up your project, don't worry!

### Set up your build system

You will need to setup a build system before you continue. While it is possible to write Velocity plugins without one,
having a build system will make your life a lot less difficult.

How to set up a build system is outside the scope of this page, but you can look at your build system's documentation
([Gradle](https://docs.gradle.org/current/userguide/userguide.html) or [Maven](https://maven.apache.org/guides/getting-started/index.html))
for assistance.

**Setting up the dependency with Gradle**

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

**Setting up the dependency with Maven**

Add the following to your `pom.xml`:
```
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