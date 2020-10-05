---
title: Deployment on a Linux Server
---

This guide will walk you through the installation of Velocity. By the end of the guide, you will have a running instance of Velocity, ready to be configured for your network.

Basic Linux knowledge is assumed.

# Tools

This is a glossary of all the tools and commands we will be using throughout the guide.

These tools are available on most Linux distributions, and many come pre-installed with them. If you aren't sure if they're installed, run the command. If you see `command not found`, you'll need to install them from your package manager.

## GNU Screen

When connecting to a server through SSH, you are limited to running one process at a time. If the SSH session were to disconnect, or you want to run a process in the background, `screen` allows us to do so. We will use `screen` to run the Velocity proxy even if we disconnect from the server.

If you're more comfortable with `tmux`, then feel free to use that instead.

**Commands**
- `screen` creates a screen session
- `screen -S proxy` creates a screen session with the ID 'proxy'
- <kbd>CTRL+A+D</kbd> disconnects you from your current screen session
- `screen -r` connects you to the running screen session
- `screen -r proxy` connects you to the screen session with the ID 'proxy'

## GNU nano

`nano` is a basic user-friendly text editor. If you prefer to use an alternative such as `vim` or `emacs`, go right ahead :]

**Commands**
- `nano` opens up the nano text editor
- `nano file.txt` edits (or creates if it doesn't exist) a file named 'file.txt'
- <kbd>CTRL+S</kbd> saves the file
- <kbd>CTRL+X</kbd> exits `nano` (will ask if you want to save if you haven't yet)

# Setup

## Setting up your Workspace

To keep things nice and clean, create a folder to store your Velocity server in. The name and location doesn't matter, but make sure you have read, write, and execute permissions in this folder.

Enter the directory using `cd folder_name`.

## Downloading Velocity

You can find the latest version [on the downloads site](https://www.velocitypowered.com/downloads). Download the latest version to your newly created folder (or use FTP to upload it).

As an example, I'll use this command:
```shell script
wget -O proxy.jar https://ci.velocitypowered.com/job/velocity-1.1.0/lastSuccessfulBuild/artifact/proxy/build/libs/velocity-proxy-1.1.0-SNAPSHOT-all.jar
```

## Running Velocity

### The Script

To easily start and stop Velocity, we will use a simple shell script.

To start creating this script, use `nano start.sh`, and paste this in:

```sh
#!/bin/bash
PROXY_JAR=proxy.jar
RAM=512M

while true
do
    java -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -Xmx${RAM} -Xms${RAM} -jar ${PROXY_JAR}
    echo "Velocity exited."
    echo "Starting in 3... (Press [CTRL+C] to stop)"
    sleep 1
    echo "Starting in 2... (Press [CTRL+C] to stop)"
    sleep 1
    echo "Starting in 1... (Press [CTRL+C] to stop)"
    sleep 1
done
```

_[Note: This uses Tux's recommended HotSpot Java flags as of 04/25/2020.]( https://discord.com/channels/472484458856185878/472485684473626625/703753792243499038)_

When you're done, press <kbd>CTRL+S</kbd> and <kbd>CTRL+X</kbd>. Your start script has now been created, and running `ls` should now show `start.sh`.

To actually _run_ this script, you first will need to add executable permissions to the file.

To do this, run:

```shell script
chmod +x start.sh
```

Now that the script is executable, we can run the proxy! Using the command:

```
./start.sh
```

will start up the Velocity jar. In the **rare** event that the proxy crashes, it will be automatically turned back on. If you wish to stop the proxy, pressing CTRL+C once will stop Velocity, and pressing CTRL+C again while it's not running will end the script.

For now, end the script. We have one last thing to do.

### Running Velocity in the Background

As mentioned earlier, this is most likely a case where you'll want to run Velocity in the background.

To do this, run this command:

```shell script
screen -S velocity ./start.sh
```

This will create a new `screen`, which will automatically run your Velocity script. Now that it's up and running, you can press <kbd>CTRL+A+D</kbd> to exit the screen, and now you can go about your day :)

Remember, if you want to reconnect to your screen, use this command:

```shell script
screen -r velocity
```

# Extra Steps

## Configuring Velocity

It's great that Velocity is running, but now you need servers to connect to! Refer to the [Configuring Velocity guide found here](/wiki/users/configuration/).

## Firewall Access

In some cases, your Linux server may be configured to block access on Velocity's running port. Each Linux distribution has its own way of configuring firewall access. Here's a few guides from DigitalOcean on how to configure firewall access on various Linux distributions:

- [CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7), [CentOS 8](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-8)
- [Debian 9](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-debian-9), [Debian 10](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-debian-10)
- [Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-14-04), [Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-16-04), [Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04), [Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04)
 
