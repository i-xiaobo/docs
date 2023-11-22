# docker-compose安装redis

## 1、创建目录并给权限
你想安装的路径，我这里就是放在了/home/redis/里了。  
mkdir -p /home/redis/data /home/redis/logs /home/redis/conf   
chmod -R 777 /home/redis/data*   
chmod -R 777 /home/redis/logs*   

## 2、redis.conf配置文件
cd /home/redis/conf vim redis.conf   

## 3、复制以下内容进去保存退出
这里密码（requirepass）自己改一下：  
requirepass 你的密码  

## 4、编辑docker-compose.yml文件
cd /home/redis/ vim docker-compose.yml   

## 5、复制以下内容保存退出
~~~
version: '3.3'
	services:
      redis:
        image: redis
        restart: always
        hostname: redis
        container_name: redis
        privileged: true
        ports:
          - 6379:6379
        environment:
          TZ: Asia/Shanghai
        volumes:
          - ./data:/data
          - ./conf/redis.conf:/etc/redis/redis.conf
          - ./logs:/logs
        command: ["redis-server","/etc/redis/redis.conf"]
~~~

## 6、启动
docker-compose up -d