# rctNtvAppFraseDia
App2

http://www.colourlovers.com/palette/4464355/Dancing_On_Thin_Ice


--------------------------------------------------------------

—compilar e gerar apk / dentro da pasta android
./gradlew assembleRelease

—gerar chave / raiz do projeto
Obs: Rodar pela pasta bin.

keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
keytool -genkey -v -keystore xxx.keystore -alias x -keyalg RSA -keysize 2048 -validity 10000

—assinar apk / raiz do projeto

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore  android/app/build/outputs/apk/app-release-unsigned.apk alias_name
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore lasa-on-key.keystore  android/app/build/outputs/apk/app-release-unsigned.apk x

Saber o alias name: 
keytool -keystore formconnect.keystore -list -v
keytool -keystore x.keystore -list -v


jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:/react-native/workspace/lasaWallet/my-release-key.keystore C:/react-native/workspace/lasaWallet/android/app/build/outputs/apk/app-release-unsigned.apk alias_name

