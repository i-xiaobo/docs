# 创建镜像/容器

## 安装docker
安装比较简单，这种安装的Docker不是最新版本，不过对于学习够用了，依次执行下面命令进行安装。
> sudo apt install docker.io  
> sudo systemctl start docker  
> sudo systemctl enable docker  

## 查看是否安装成功
$ docker -v  
Docker version 17.12.1-ce, build 7390fc6  

## 创建镜像
 
docker build -t zhupeng:v1 .  

