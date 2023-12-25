# Windows 端口号占用

## 1、检查8080端口号
netstat -ano |findstr 8080  

## 2、终止8080端口号
taskkill /f /t /im 21164  
