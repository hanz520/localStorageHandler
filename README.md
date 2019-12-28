## 全局localStorage处理器

自定义一个`localStorageHandler`的操作类。在`localStorage`( 以下简称本地存储 )上开辟一块名为`dataZone`的空间，专门用于存放站点的数据到本地存储。
可直接将非字符串数据存入，不需要再手动去做转`JSON`字符串的操作，取出数据也是直接可用的，不再是字符串。

空间存储的信息分为两块：  
    1.退出登录后需要清除的信息，如：用户信息等  
    2.退出登录后不需要清除的信息，如皮肤，表格列显示等信息  

该操作类提供的方法：
- `setItem` 存储数据到空间


    ```
    // 非永久
    this.localStorageHandler.setItem('user', { username: 'hanz', password: '111111' })
    // 永久
    this.localStorageHandler.setItem('user', { username: 'hanz', password: '111111' }, true)
    ```

- `delItem` 删除一项数据

    ```
    // 非永久
    this.localStorageHandler.delItem('token')
    // 永久
    this.localStorageHandler.delItem('token', true)
    ```

- `getItem` 获取一项数据
    
    ```
    // 非永久
    this.localStorageHandler.getItem('token')
    // 永久
    this.localStorageHandler.getItem('token', true)
    ```

- `die` 清空非永久数据`dataZoneLogin`

    ```
    this.localStorageHandler.die()
    ```

- `list` 查看数据空间所有数据

    ```
    this.localStorageHandler.list()
    ```
