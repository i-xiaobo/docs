# 离线打包镜像


找一台可以联网的docker机器，并pull下载需要的镜像文件。

## 导出镜像
然后使用如下命令将镜像文件导出:  
docker save java:8 -o java.tar  
 #将java 8的镜像导出成tar文件


## 安装镜像
将tar文件上传到内网docker服务器，使用如下命令导入镜像文件：  
docker load -i java.tar