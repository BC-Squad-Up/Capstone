# Capstone

Cross-platform React Native app powered by Expo. The same project runs on iOS,
Android, and the web, with a responsive starter screen for phones, tablets, and
larger displays.

## Requirements

- Node.js 24.3+ LTS (Expo SDK 58 does not support Node 25)
- npm
- Expo Go on a physical iOS or Android device, or an iOS/Android simulator

## Get started

```sh
npm install
npm run start
```

Scan the QR code with Expo Go to open the app on a physical device. To use
multiple devices, connect each one to the same development server; they can all
run the app at once. Devices and the computer should be on the same network.
If the network blocks local device discovery, start the server with
`npx expo start --tunnel`.

## Run on a platform

- **Android device or emulator:** `npm run android`
- **iOS device or simulator:** `npm run ios` (the iOS simulator requires macOS)
- **Web browser:** `npm run web`

Android and iOS devices can also join a server started with `npm run start` by
scanning its QR code. Native builds can be added later if the app needs native
modules that are not included in Expo Go.
