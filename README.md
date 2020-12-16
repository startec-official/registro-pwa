# Progressive Web Application Code

Progressive Web App (PWA) built with Angular as part of the Startec REGISTRO contact tracing system.

This PWA is used to generate QR Codes for customers wishing to enter establishments who implement this system. The app makes use of local storage to store sign-up information. Data is retained on the device the next time the user wishes to generate a QR code.

A PWA is a fast lightweight cross-platform web application. On mobile devices with browser support for PWA, it is even possible to download the app for offline use. Learn more  [here](https://developers.google.com/web/ilt/pwa "Google PWA Training")

## STARTEC REGISTRO

Startec REGISTRO is an open-source COVID case contact tracing system for small and medium sized establishments and organizations, created by Startec Innovations, a technology adoption and innovation consultancy firm based in the Philippines. 

Learn more about Startec and REGISTRO [here](https://www.facebook.com/startec.ideators).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

Device Fabrication Instructions
-------

This system requires the fabrication of a device Kiosk.

A full guide in how to build this Kiosk device can be found [here](https://hackaday.io/project/176352/instructions)

Follow us on [Hackaday](https://hackaday.io/StartecInnovations) and [Facebook](https://www.facebook.com/startec.ideators) for Updates and Important Info

Compatibility
-------
This application implements PWA modules that may or may not run on your mobile device.
To make use of all features, please ensure you update your browser to the latest version.

The following browsers are known to have almost full support for PWA technology:
* Google Chrome
* Samsung Internet

This app makes use of the following additional features:
* IndexedDB
* PWA A2HS

To check if your browser meets all the requirements, you can use this [tool](https://caniuse.com/).

Development
-------
This build was developed for a *Raspberry Pi 3 B+* on *Raspbian Buster*. It will also work for the Raspberry Pi Zero W and Raspberry Pi 4 boards.

This code requires a functional device server. To learn more how to setup the server and the Raspberry Pi environment, please check out the README for the server code repository [here](https://github.com/startec-official/registro-raspi-server).

### Device Deployment
Once server and environment is set up. You can deploy to device by running ng `build --prod` inside the folder from the terminal, and copying the content of the generated project folder (usually `dist/<project-name>`) to `/var/www/html` in the Raspberry Pi.

Contributions
-------
Please feel free to drop as an email for potential contributions.
Contact Us through [startec.innovations@gmail.com](mailto:startec.innovations@gmail.com)

LICENSE and Use
-------
Please refer to the `LICENSE.md` file for more information.

This project is covered by the MIT License. © 2020 | Startec Innovations
