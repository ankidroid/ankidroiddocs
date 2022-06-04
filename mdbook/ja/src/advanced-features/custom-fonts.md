# カスタムフォント

AnkiDroidでは、カードを表示するにあたり、Androidシステムに塔載されているものとは別のフォントを利用することができます。適切に設定するためには、Ankiを使うことを強くおすすめします。詳しくは http://wikiwiki.jp/rage2050/?2.0%2FCardsAndTemplates#installing-fonts[Ankiのマニュアルの当該の節] を参照してください。

あるいは、AnkiDroidフォルダ(設定 → AnkiDroid → コレクションの保存先)の中に"fonts"という名前のフォルダを作成し、そこへttfフォントファイルをコピーして、設定 → フォント → 標準フォント でコピーしたフォントをデフォルトに設定することもできます。ただし、この方法は、Ankiを使った方法よりも不安定であり、複数の端末で学習する場合には不整合が起きるかもしれません。ご注意ください。

AnkiとAnkiDroidでは、ttf形式のフォントだけが公式に使えることになっています。 https://www.google.com/get/noto/#/[Google Noto] フォントはすべての言語についておすすめできますし、 https://github.com/ankidroid/Anki-Android/wiki/Freely-distributable-fonts[こちら] でフリーのフォントを探すこともできます。

AnkiDroidでは、外部のフォントを使うときはその全体をメモリに読みこんでいます。アジア圏の言語のフォントはかなりサイズが大きいことに注意してください。古い端末でAnkiDroidを使っていて、フォントをインストールしてからAnkiDroidが頻繁にクラッシュするようになった場合、端末のメモリが不足しているのかもしれません。(訳注：日本で現在普通に使われている端末では、あまり心配しなくてもよいと思います)

*注意その1：* 設定で「メディアの同期」をオフにしている場合、PCからAnkiDroidのcollection.mediaフォルダにフォントファイルを手動でコピーする必要があるかもしれません。

*注意その2：* この説明やAnkiのマニュアルの通りにしてもフォントが正常に機能しない場合、 FAQの https://github.com/ankidroid/Anki-Android/wiki/FAQ#i-followed-the-instructions-in-the-manual-but-i-still-cant-get-my-custom-font-to-work[フォントに関する問題を解決するための詳細なステップ]を参照してください。

*注意その3：* カスタムフォントの機能は、Android 2.1では通常動作しません。これはAndroidシステムの制限であり、AnkiDroidにはどうしようもない問題です。
