# summarizer
This app is under development

## Build in Linux

cd android
./gradlew assembleRelease --no-daemon

## Duplicate resourse problem solution

rm -rf ./android/app/src/main/res/drawable-* && rm -rf ./android/app/src/main/res/raw

## No SDK found solution

setup the codespace first and then export the path

export ANDROID_HOME="/workspaces/android"

# Codespace setup
### Method - 1

Step-1: Wget cmdline-tools

cd /workspaces
mkdir android && cd android
wget https://dl.google.com/android/repository/commandlinetools-linux-9123335_latest.zip

Step-2: Unzip & move to apropriate dir

unzip commandlinetools-linux-9123335_latest.zip
cd cmdline-tools
mkdir latest
mv bin lib NOTICE.txt source.properties -t latest
cd ./latest/bin

Step-3: Install SDK (first command will list all packages available to install)

./sdkmanager --list
./sdkmanager "platform-tools" "build-tools;30.0.3"

Step-4: Export the path

export ANDROID_HOME="/workspaces/android"

### Method -2

Step -1: Wget android sdk installed ziped folder from this repo (android-sdk.zip)

Step -2: Unzip it in /workspace

unzip android-sdk.zip

Step -3: Set the path

export ANDROID_HOME="/workspaces/android"