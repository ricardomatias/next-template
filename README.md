## NGINX

* [How to deploy a NextJS to Digital Ocean](https://www.coderrocketfuel.com/article/how-to-deploy-a-next-js-website-to-a-digital-ocean-server)

```nginx
server {
    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    server_name <URL>.net www.<URL>.net;

    location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
    }
}
```
