# 网络配置

## 桥接模式网络配置
### 1、配置ip地址等信息在/etc/sysconfig/network-scripts/ifcfg-ens33文件里做如下配置：
~~~
命令： vi   /etc/sysconfig/network-scripts/ifcfg-ens33  
修改如下：  
TYPE="Ethernet"   # 网络类型为以太网  
BOOTPROTO="static"  # 手动分配ip  
NAME="ens33"  # 网卡设备名，设备名一定要跟文件名一致  
DEVICE="ens33"  # 网卡设备名，设备名一定要跟文件名一致  
ONBOOT="yes"  # 该网卡是否随网络服务启动  
IPADDR="192.168.202.138"  # 该网卡ip地址就是你要配置的固定IP，如果你要用xshell等工具连接，202这个网段最好和你自己的电脑网段一致，否则有可能用cecureCRT连接失败  
GATEWAY="192.168.202.2"   # 网关  
NETMASK="255.255.255.0"   # 子网掩码  
DNS1="8.8.8.8"    # DNS，8.8.8.8为Google提供的免费DNS服务器的IP地址  
~~~

### 2、配置网络工作
命令： vi /etc/sysconfig/network  
修改： NETWORKING=yes # 网络是否工作，此处一定不能为no  

### 3、配置公共DNS服务(可选)
在/etc/resolv.conf文件里增加如下配置  
nameserver 8.8.8.8  

### 4、关闭防火墙
systemctl stop firewalld # 临时关闭防火墙  
systemctl disable firewalld # 禁止开机启动  

### 5、重启网络服务
Centos6 : service network restart  
Centos7 : systemctl restart network.service  