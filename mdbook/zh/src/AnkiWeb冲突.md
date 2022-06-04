[[AnkiWeb冲突]]
==== 解决AnkiWeb的合并冲突
虽然这不经常发生，偶尔你的AnkiDroid的卡片上的结束的位置可能不会自动合并在AnkiWeb卡片。在这种情况下，无论是上传到AnkiWeb或从AnkiWeb下载都是必要，这将覆盖在另一边的任何变化。

如果你有新的卡片并想让双方保持同步，你可以为来自AnkiDroid每一个含有新的卡片导出一个牌组包 <<exporting,export a deck package>>，然后当你选择同步“下载”，下载来自AnkiWeb。在同步完成后，你可以按<<importing, importing section>>部分从AnkiDroid导入你以前的牌组。

=== 通过USB

如果您不经常上网，它仍然可以利用USB来回复制记忆库到你的设备。

USB方法是通过立即导入或导出你所有的记忆库。这意味着，不能像通过ankiweb同步，你不能改变两个位置然后合并他们。相反，如果你想添加卡片在桌面上，你需要确保从你的移动设备导出你的收集的最新版本，或你会最终失去在移动设备上任何评论的完成。

因此，您通常使用的工作流程是将您的collection从您的移动设备导出，并导入到桌面上，在桌面进行修改，然后导出您的收集，并将其导入到您的移动设备。

AnkiDroid不能直接导入文本文件。如果你想这样做，你需要做的是用桌面程序，然后将你的收集导入到AnkiDroid。

==== 通过USB从Anki桌面版复制所有记忆库到AnkiDroid

在你的电脑上:

 . 打开桌面程序。
 . 从菜单中选择“文件”>“导出”

 . 单击“导出…”按钮。确保离开“所有记忆库”的选择，如导入个人记忆库到AnkiDroid是不可能的。“包含学习进度信息”也必须保持检查。
 . Anki会自动在桌面上创建一个collection.apkg。如果文件被命名为别的东西，请再次看上一步。
 . 通过USB电缆将你的Android设备连接到你的计算机。
 . 打开你的计算机上的文件资源管理器，查看您的安卓设备的内容。
 . 定位AnkiDroid文件夹。
 . 将collection.apkg文件从桌面拖动到这个AnkiDroid文件夹。
 
然后在AnkiDroid:

 . 在主屏幕上，从菜单中点击“导入文件”
 . 点击"Collection" 然后确认
 
一旦完成，你的设备上的记忆库将被桌面上的记忆库替换。见章节<<importing, importing apkg files>>与导入更多帮助。
==== 通过USB从AnkiDroid复制所有记忆库到Anki桌面版

从 AnkiDroid复制你的记忆库到Anki桌面版的过程与上面基本相同，但反过来就不同。
 . 从你的设备断开USB
 . 从主屏幕的主菜单中选择“导出collection”
 . 确保“包含学习进度信息”保持检查和按**
 . 从消息中指定的路径复制"collection.apkg"到你电脑的桌面上
 . 双击文件导入到Anki桌面
 
参阅<<exporting, exporting section>>下面的从AnkiDroid导出的更详细的信息。
