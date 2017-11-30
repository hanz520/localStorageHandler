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

