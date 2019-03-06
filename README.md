## 全局localStorage处理器

自定义一个`localStorageHandler`的操作类。在`localStorage`( 以下简称本地存储 )上开辟一块ctData的空间，专门用于存放云测系统的数据到本地存储     
    该操作类提供的方法：

    - `setItem` 存储数据到本地存储

    ```
    this.localStorageHandler.setItem('token', result.resultData.access_token)
    ```

    - `delItem` 删除一项数据

    ```
    this.localStorageHandler.delItem('token')
    ```

    - `getItem` 获取一项数据
    
    ```
    this.localStorageHandler.getItem('token')
    ```

    - `die` 清空ctData数据空间
    ```
    this.localStorageHandler.die()
    ```
sessionStorage可以类似处理

新增了一项永久储存配置，在每次操作数据空间的时候，带上`isEternal`参数(值必须为`true`),当操作类接收到这个参数的时候，会把数据加到eternal永久储存里面。
这样设置的原因：
因为系统中可能有两类数据需要储存，第一类：token用户信息等每次登出需要清空的数据、第二类：系统皮肤等每次登陆都不会变化的数据。所以每次在登出系统的时候执行一下`die()`方法即可清空第一类信息，又不影响到第二类。

