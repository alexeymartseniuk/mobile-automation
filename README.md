# Preconditions:

#### 1. Java JDK & JAVA_HOME variable

* [Open JDK](https://openjdk.org)
* [JAVA_HOME setup for Windows](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
* [JAVA_HOME setup for Mac](https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/)

* Install Adopted [Open JDK with Homebrew](https://formulae.brew.sh/cask/adoptopenjdk)
* Open the zshenv file to insert the JAVA_HOME variable: ` vim ~/.zshenv`
* Enter the environment variable and save the vim session: `export JAVA_HOME=$(/usr/libexec/java_home)`
* Source and apply the changes in the system: `source ~/.zshenv`

#### 2. Android Studio & ANDROID_HOME variable

* [Android Studio](https://developer.android.com/studio?hl=es-419&gclsrc=aw.ds&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRNrDv20QvoOy_-I5E1LoZdOLu3nvhlwX_7EjPeHcE1kGQNNcIVOme0aAqckEALw_wcB)

* Android studio on Mac can be located at: `cd /Users/[USER]/Library/Android/sdk`
* Open the zshenv file to insert the ANDROID_HOME variable: ` vim ~/.zshenv`
* Enter the environment variables and save the vim session:
```bash
    export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
```
* Source and apply the changes in the system: ` source ~/.zshenv`

#### 3. IOS Setup
* Download xcode from the MacOs App Store
* Install XCode Command line tools: `xcode-select --install`
* Make sure it is installed correctly using the following command: `xcode-select -p`
* Install dependency manager for macOS and iOS: `brew install carthage`
* Switch Xcode to the proper path: `sudo xcode-select --switch /Applications/Xcode.app`

#### 4. Download Appium Inspector

* Download the latest version: `https://github.com/appium/appium-inspector/releases`


#### 5. Install Appium

* Install [Appium](https://appium.io) from the official documentation or use commands `npm install -g appium@next` and `npm install wd`
* Check the appium version using: `appium -v`

#### 6. Install Appium Doctor
To check if your OS meets the appium requirements, install this node package.
* [Appium Doctor Package](https://github.com/appium/appium-doctor)
* Install it using the command: `npm install appium-doctor -g`
* And then use the library: `appium-doctor`

### 7. Appium drivers
* Download Android/iOS drivers:
`appium driver install xcuitest` and `appium driver install uiautomator2`

* Check the installed drivers using: `appium driver list`

### 8. Add virtual devices in Android studio and Xcode

# Run appium inspector:
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

# How to Setup WebDriverIO

* Run the command to create the package.json & continue with the installation process:
  `npm init wdio .`

* Install Appium in your project
  `npm install --save-dev appium@next`

# Run tests
* Instal; all dependencies: `npm install`
* Run virtual devices
* Run appium server: `appium -p 4724`
* Run tests using scripts in `package.json`