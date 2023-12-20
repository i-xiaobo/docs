# 内网环境下将nginx的http改为https

## 1、需求
内网且不连接外网的情况下使系统平台满足---安全传输(http-https协议)  


## 2、生成证书
编写脚本  
``
vim gen-ssl.sh
``

将脚本内容粘贴，wq保存退出  
~~~
#!/bin/sh

# create self-signed server certificate:

read -p "Enter your domain [www.example.com]: " DOMAIN

echo "Create server key..."

openssl genrsa -des3 -out $DOMAIN.key 2048

echo "Create server certificate signing request..."

SUBJECT="/C=US/ST=Mars/L=iTranswarp/O=iTranswarp/OU=iTranswarp/CN=$DOMAIN"

openssl req -new -subj $SUBJECT -key $DOMAIN.key -out $DOMAIN.csr

echo "Remove password..."

mv $DOMAIN.key $DOMAIN.origin.key
openssl rsa -in $DOMAIN.origin.key -out $DOMAIN.key

echo "Sign SSL certificate..."

openssl x509 -req -days 3650 -in $DOMAIN.csr -signkey $DOMAIN.key -out $DOMAIN.crt
~~~

执行脚本gen-ssl.sh  
```
chmod a+x gen-ssl.sh  
./gen-ssl.sh

执行中会提示输入输入1次域名和4次密码
执行完毕后会生成以域名为名称且后缀为 crt、csr、key、origin.key 四个文件
```

## 3、拷贝证书到nginx中
将证书放在指定位置，记住证书的绝对路径（之后要配置在nginx.conf中）

~~~
 server {
        listen       443 ssl;
        server_name  water.jxa.plus;
        ssl_certificate      /etc/nginx/cert/www.example.com.crt; # /etc/nginx/cert/ 为docker映射路径 不允许更改
        ssl_certificate_key  /etc/nginx/cert/www.example.com.key; # /etc/nginx/cert/ 为docker映射路径 不允许更改
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        location / {
                try_files $uri $uri/ /index.html;
                        root         /usr/share/nginx/html;
                }

        location /prod-api {
                        proxy_set_header Host $http_host;
                        proxy_set_header X-Real-IP $remote_addr;
                        proxy_set_header REMOTE-HOST $remote_addr;
                        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                        proxy_buffering off;
                        rewrite ^/prod-api/(.*)$        /$1     break;
                        proxy_pass http://server;
        }

        location = /403 {
            default_type application/json;
            #return 200 '{"msg":"演示模式，不允许操作","code":500}';
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

~~~

docker-compose.yml  
~~~
version: "3.3"
services:
  nginx:
    image: nginx:1.22.1
    container_name: nginx
    restart: always
    privileged: true
    network_mode: "bridge"
    environment:
      # 时区上海
      TZ: Asia/Shanghai
    ports:
      - "80:80"
      - "3000:3000"
      - "443:443"
    volumes:
      # 证书映射
      - ./cert:/etc/nginx/cert
      # 配置文件映射
      - ./conf/nginx.conf:/etc/nginx/nginx.conf
      # 页面目录
      - ./jxa-website:/usr/share/nginx/jxa-website
      - ./html:/usr/share/nginx/html
      - ./app:/usr/share/nginx/app
      - ./rider:/usr/share/nginx/rider
      # 日志目录
      - ./logs:/var/log/nginx
~~~
