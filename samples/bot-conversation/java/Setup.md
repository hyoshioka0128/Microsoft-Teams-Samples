
## Setup/Configure the Maven and Java JDK for Java samples.

## Description
This document helps you to setup/configure the Java JDK and Maven (download, install, configure and run) setup process for your Java samples.

## Setup Java-JDK
 - Install Java JDK **32 bit / 64 bit** as per your PC configuration (Minimum Required version is - Java 1.8+).

[Java-JDK Link](https://www.oracle.com/java/technologies/downloads/#java8-windows).

 - After Successful installation, search **Environment variable** in windows search bar.

![Environment vairable](SetupImages/environment-variables.png).

 - Open Environment variable and add JAVA_HOME System Variable

![System vairable](SetupImages/JAVA_HOME.png).

## Setup MAVEN 
 - Install [Maven](https://maven.apache.org/)

![Download Maven](SetupImages/download-maven.png).
 
 - Extract the Maven archive to a directory of your choice once the is complete.

![Maven](SetupImages/extract-maven.png).

 - Open the Start menu and search for environment variables,Click the Edit the system environment variables result.

![Maven](SetupImages/install-maven-edit-environment-variable-new.png).

 - Under the Advanced tab in the System Properties window, click Environment Variables.

![Maven](SetupImages/install-maven-on-edit-environment-variable-path-maven-home.png).

 - Click the New button under the System variables section to add a new system environment variable

![Maven](SetupImages/install-maven-edit-environment-variable-new.png).

 - Enter MAVEN_HOME as the variable name and the path to the Maven directory as the variable value. Click OK to save the new system     variable.

![Maven](SetupImages/install-maven-on-windows-maven-home-variable.png).

 - Enter MAVEN_HOME as the variable name and the path to the Maven directory as the variable value. Click OK to save the new system variable.

![Maven](SetupImages/install-maven-path-variable.png).

 - Enter %MAVEN_HOME%\bin in the new field. Click OK to save changes to the Path variable.

![Maven](SetupImages/install-maven-on-windows-maven-home-variable.png).

 ## Verify Maven Installation
 - In the command prompt, use the following command to verify the installation by checking the current version of Maven.

![Maven](SetupImages/verifymaveninstallation.png).

## Further reading
- [Maven Apache Download](https://phoenixnap.com/kb/install-maven-windows)
- [java JDK](https://www.oracle.com/java/technologies/downloads/#java8-windows)   