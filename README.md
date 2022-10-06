#### Preconditions:

#### 1. Java JDK & JAVA_HOME variable

* [Open JDK](https://openjdk.org)
* [JAVA_HOME setup for Windows](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
* [JAVA_HOME setup for Mac](https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/)

I Tested the following steps on MAC OS Monterrey:

* Installed Adopted [Open JDK with Homebrew](https://formulae.brew.sh/cask/adoptopenjdk)
* To return where was the SDK installed I used the command:
```bash
    /usr/libexec/java_home
```
* If you want to check the java version:
```bash
    /usr/libexec/java_home -V
```
* Open the zshenv file to insert the JAVA_HOME variable (i):
```bash
    vim ~/.zshenv
```
* Enter the environment variable and save the vim session (:wq!):
```bash
    export JAVA_HOME=$(/usr/libexec/java_home)
```
* Source and apply the changes in the system:
```bash
    source ~/.zshenv
```
* You can check if it was set correctly running the command:
```bash
    echo $JAVA_HOME
```
* It should return something like:
```bash
    /Library/Java/JavaVirtualMachines/adoptopenjdk-16.jdk/Contents/Home
```

#### 2. Android Studio & ANDROID_HOME variable

* [Android Studio](https://developer.android.com/studio?hl=es-419&gclsrc=aw.ds&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRNrDv20QvoOy_-I5E1LoZdOLu3nvhlwX_7EjPeHcE1kGQNNcIVOme0aAqckEALw_wcB)
* [ANDROID_HOME setup for Windows](https://www.testingdocs.com/setting-android_home-environment-variable-on-windows/)
* [ANDROID_HOME setup for Mac](https://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x)

Tested the following steps on MAC OS Monterrey:
* Android studio on Mac can be located at:
```bash
    * cd /Users/[USER]/Library/Android/sdk
```
* We need to add a reference to a couple of folders inside of that SDK
  * Tools & Platform Tools
* Open the zshenv file to insert the ANDROID_HOME variable (i):
```bash
    vim ~/.zshenv
```
* Enter the environment variables and save the vim session (:wq!):
```bash
    export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
```
* Source and apply the changes in the system:
```bash
    source ~/.zshenv
```
* You can check if it was set correctly running the command:
```bash
    echo $ANDROID_HOME
```
* It should return something like:
```bash
    /Users/[USER]/Library/Android/sdk
```
* With this configured you can access the command [Android Debug Bridge](https://developer.android.com/studio/command-line/adb)
```bash
    adb
```

#### 3. Download Appium Inspector

* Use this link to download latest version: `https://github.com/appium/appium-inspector/releases`


#### 4. Install Appium

* Install [Appium](https://appium.io) from the official documentation or use commands `npm install -g appium@next` and `npm install wd`
```
Check the appium version using
```bash
    appium -v
```

#### 5. Install Appium Doctor
To check if your OS meets the appium requirements, install this node package.
* [Appium Doctor Package](https://github.com/appium/appium-doctor)
  Install it using the command
```bash 
npm install appium-doctor -g
```
And then use the library:
```bash 
appium-doctor
```

### 6. Appium drivers
* Run the commands:

```bash
`appium driver install xcuitest`
`appium driver install uiautomator2`
```

* Check the installed drivers using:
```bash
`appium driver list`
```

### 7. Setup WebDriverIO

* Run the command to create the package.json & continue with the installation process:
`npm init wdio .` 

* Install Appium in your project
`npm install --save-dev appium@next`


### 8. Add virtual device
* Add virtual device in Android studio and run it

### 9. Run appium inspector:
#### Add desired configs: 
* Remote host: `0.0.0.0`
* Remote port: `4724`
* Desired configs: 
`platformName: 'Android',
  "appium:device-name": virtualDeviceName,
  "appium:platformVersion": version,
  "appium:automationName": "UIAutomator2",
  "appium:app": androidAppPath,`
* Run command `appium -p 4724` 
* Click `Start session` in Appium Inspector
- - -