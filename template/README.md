## 说明
+ 前端技术栈为: vue2 + webpack2
+ 本地开发命令: npm run dev 
+ 打包上线命令: npm run build

## 打包的逻辑流程
+ 在项目根目录下建立`/build`目录
+ 在`/package.json`中读取到项目的名称
+ 用项目名称和当前打包日期, 拼成一个类似于`/node-dispatch-pc/201704141745`的cdn串
+ 把上面生成的字符串加到`package.json`文件中, 并写入`/build`目录下
+ 根据cdn串在`/build`目录下创建下列子目录, 类似于`/build/client/node-dispatch-pc/201704141745`
+ 用webpack打包client端代码到上面建立的目录下, 生成`style`|`script`|`image`三个目录
+ 用webpack打包server端代码到`/build`目录下, 生成的名称为`index.js`
+ 打包完成之后, 切换到`/build`目录下, 执行`nodemon index.js`, 这样就可以访问服务了

## 生成shrinkwrap 固定包版本
+ 如果更新了开发环境的任何包,在测试完成之后,应该重新生成shrinkwarp.json
+ npm shrinkwarp --dev 注意一定要带上--dev参数,默认情况下,只会生成dep 里面的依赖
+ 因为在npm run dev/build 时会拷贝该文件到build目录下
