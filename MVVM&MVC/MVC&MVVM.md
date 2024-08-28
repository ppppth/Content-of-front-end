# MVC & MVVM 模式

1.MVC和MVVM模式的前身
- Model-View-Controller（MVC）模式最早由Smalltalk语言的设计者在1978年提出。
- Model-View-ViewModel（MVVM）模式是一种软件架构模式，由微软公司在2005年提出。
- 在MVC之前，前端开发主要采用的是基于事件驱动的开发模式(例如jQuery)，即View层与Model层之间通过事件进行通信。

2.为什么要使用MVC模式进行前端开发？
- 为了使前端开发更加模块化、可维护、可扩展，MVC模式是一种流行的前端开发模式。

3.为什么要使用MVVM模式进行前端开发？比MVC有哪些进步？
- 为了解决MVC模式中View与Model之间的通信问题，MVVM模式提出了一种双向数据绑定机制。
- 双向数据绑定机制可以使View层和Model层之间的数据同步更新，从而实现View层的自动更新。
- 进一步地，MVVM模式还可以实现View层的自动渲染，从而减少开发者的工作量。

# MVC
1.Model（模型）: 就是负责数据的地方，存放数据和业务逻辑。
2.View（视图）: 是用户看到的界面，展示数据。
3.Controller（控制器）: 是连接Model和View的桥梁，接收用户的操作并更新Model或View。

![MVC模式](./屏幕截图%202024-08-17%20164742.png "MVC模式")

# MVVM
1.Model（模型）: 和MVC的Model一样，负责数据和业务逻辑。
2.View（视图）: 也是用户看到的界面，展示数据。
3.ViewModel（视图模型）: 这是MVVM特有的部分，它把Model和View绑定在一起。它可以直接更新View，而不需要通过Controller，减少了代码中的手动操作。


![MVVM模式](./屏幕截图%202024-08-17%20165257.png "MVVM模式")