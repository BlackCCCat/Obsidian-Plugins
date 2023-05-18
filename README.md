> 一个Obsidian插件仓库

# get-vault-address插件
## 为什么会做这个插件？
在使用[Embed Code File](https://github.com/almariah/embed-code-file)这个插件时，需要自己逐层查找需要引用的代码文件，当目录层级非常多的时候很麻烦，所以想到了做这个插件
## 怎么做的这个插件？
这个插件完全是一个不会JavaScript的人，通过ChatGPT做的
## 用法及功能
1. 将文件夹`get-vault-address`放到Obsidian的插件目录下（仅在macOS上测试）
2. 打开Obsidian设置-第三方插件-刷新插件，下方出现名为`Get Vault Address`的插件，勾选打开
3. 完全退出并重新打开Obsidian
4. 在需要获取路径的文件或者文件夹上点击右键：`获取 vault 格式路径`，可以得到格式为`vault://dir1/dir2/.../dirn/filename`或`vault://dir1/dir2/.../dirn`的路径，便于在[Embed Code File](https://github.com/almariah/embed-code-file)插件中直接使用
## 可能的缺陷
仅在macOS及单vault下测试正常，理论上支持Windows和多个vault，请自行测试

# 暂无其他插件