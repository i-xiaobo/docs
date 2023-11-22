# 容器文件拷贝

最简单的办法是制作容器的时候使用挂载命令做映射  
docker run -it -v /宿主机绝对路径目录:/容器内目录 镜像名  

## 容器想宿主机拷贝文件
但是有些时候制作容器时没有做挂载，又要实现宿主机跟容器之间数据拷贝，可以使用cp 命令：  
docker cp container_id:<docker容器内的路径><本地保存文件的路径>  
docker cp 29e056511ddb:/home/ruoyi/test/ruoyi-modules-file.jar /home/test/ruoyi-modules-file.jar  

## 宿主机向Docker容器传送文件  
docker cp 本地文件的路径 container_id:<docker容器内的路径>  
docker cp /home/test/ruoyi-modules-file.jar 29e056511ddb:/home/ruoyi/ruoyi-modules-file.jar  