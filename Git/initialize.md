## 初始化仓库
```git
//想要设置的文件夹下
git init

//放到暂存区
git add a.txt

//放到版本区
git commit -m 'add an a.txt file'

//看当前仓库状态
git status

//删除暂存区里的指定文件
git rm --cached a.txt

//删除暂存区里所有文件
git rm --cached -r .

//对比工作区和暂存区
git diff

//对比暂存区和版本区
git diff --cached
```