# 鸡公生成器

一个无需安装依赖的浏览器小工具：上传图片或使用文字牌，调整位置、大小和旋转角度，生成并下载循环播放的 GIF。

## 使用

双击打开 `index.html`，或将整个项目文件夹部署到 GitHub Pages 后访问页面。所有页面素材都使用相对路径；图片在浏览器本地处理。

## 文件说明

- `index.html`：生成器页面及全部交互逻辑。
- `26.gif`：底图的原始动画素材。
- `chicken-frames/frame0.png` 至 `frame3.png`：页面播放和合成 GIF 时使用的四帧底图。
- `hand.png`：最上层鸡爪素材。
- `ywj.png`：图片模式的默认图片。

## 上传到 GitHub

将 `chicken-gif-maker` 文件夹中的全部文件和 `chicken-frames` 文件夹一起上传到仓库。若要使用 GitHub Pages，在仓库设置中启用 Pages，并选择该分支的根目录作为发布来源。

