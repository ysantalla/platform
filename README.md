# Platform

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Production with pm2

1. # copy this file to /lib/systemd/system/

```service[Unit]
#Description=Campus UPR NodeJS Application
After=network-online.target

[Service]
Restart=always
Environment=PORT=5000
WorkingDirectory=/home/campus/platform/
ExecStart=~/.nvm/versions/node/v12.13.0/bin/node ./dist/server.js

[Install]
WantedBy=multi-user.target
```

5. sudo apt-get install nginx

6. sudo nano /etc/nginx/sites-available/campus.upr.edu.cu
upstream campus.upr.edu.cu {  
  server 127.0.0.1:4000;
}

server {  
  listen 0.0.0.0:80;
  server_name campus.upr.edu.cu;
  access_log /var/log/nginx/campus.upr.edu.cu.access.log;
  error_log /var/log/nginx/campus.upr.edu.cu.error.log debug;

  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarder-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;

    proxy_pass http://campus.upr.edu.cu;
    proxy_redirect off;
  }
}

7. sudo ln -s /etc/nginx/sites-available/campus.upr.edu.cu /etc/nginx/sites-enabled/campus.upr.edu.cu

8. systemctl restart nginx.service


