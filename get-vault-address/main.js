const { Menu, Plugin } = require('obsidian');
const { clipboard } = require('electron');
const path = require('path');

class MyPlugin extends Plugin {
  async onload() {
    console.log('MyPlugin loaded');

    // 监听文件和文件夹菜单事件
    this.registerEvent(
      this.app.workspace.on('file-menu', (menu, file) => {
        menu.addItem((item) => {
          item.setTitle('获取 Vault 格式地址');
          item.setIcon('link-external');
          item.onClick(async () => {
            const targetPath = this.getTargetPath(file);
            const vaultUrl = `vault://${targetPath}`;
            console.log(`Vault URL: ${vaultUrl}`);
              
            // 操作剪贴板
            clipboard.writeText(vaultUrl);
            new Notice(`已复制路径：${vaultUrl}`);
          });
        });
      })
    );
  }

  onunload() {
    console.log('MyPlugin unloaded');
  }
  
  /**
   * 获取文件或文件夹的Vault格式路径
   */
  getTargetPath(target) {
    const rootPath = this.app.vault.getRoot().path;
    const relativePath = target ? target.path.slice(rootPath.length - 1) : '';
    const formattedPath = path.normalize(relativePath);
    const targetPath = formattedPath.startsWith('/') ? formattedPath.slice(1) : formattedPath;
    return targetPath;
  }
}

module.exports = MyPlugin;
