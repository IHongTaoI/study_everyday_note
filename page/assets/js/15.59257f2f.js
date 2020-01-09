(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{231:function(a,t,e){"use strict";e.r(t);var c=e(0),s=Object(c.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"一些开发中遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些开发中遇到的问题"}},[a._v("#")]),a._v(" 💥 一些开发中遇到的问题")]),a._v(" "),e("h2",{attrs:{id:"回滚问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回滚问题"}},[a._v("#")]),a._v(" 💨 回滚问题")]),a._v(" "),e("p",[a._v("在开发过程中，经常会遇到回滚问题。")]),a._v(" "),e("h3",{attrs:{id:"回滚（回退）到某个版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回滚（回退）到某个版本"}},[a._v("#")]),a._v(" 回滚（回退）到某个版本")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("显示提交的log "),e("code",[a._v("git log")])]),a._v(" "),e("div",{staticClass:"language-key extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("commit 9ba39212b8d8ccfcd3310d954e5edc030d466963\nAuthor: hongtao <836717428@qq.com>\nDate:   Thu Jan 9 10:53:30 2020 +0800\n\n    这是一个提交\n\ncommit 0b2b6a4438ccb20a0f63baa13dbff1e4d1b369ce\nAuthor: hongtao <836717428@qq.com>\nDate:   Thu Jan 9 10:53:30 2020 +0800\n\n    这是一个提交\n\ncommit 5b4a78d93e7d2fd89aa4eea6629d505a05c93120\nAuthor: hongtao <836717428@qq.com>\nDate:   Fri Jan 3 09:38:15 2020 +0800\n\n    update\n\ncommit 0119008b7bd307e71b1d8536cf2c0ee5ad7ab558\nAuthor: unknown <836717428@qq.com>\nDate:   Wed Jun 26 10:05:14 2019 +0800\n")])])])]),a._v(" "),e("li",[e("p",[a._v("回滚到指定的版本")]),a._v(" "),e("p",[e("code",[a._v("git reset --hard 5b4a78d93e7d2fd89aa4eea6629d505a05c93120")])])]),a._v(" "),e("li",[e("p",[a._v("强制提交")]),a._v(" "),e("p",[e("code",[a._v("git push -f origin master")])])])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[a._v("此操作会丢失之前的commit")])]),a._v(" "),e("h3",{attrs:{id:"恢复到之前某个-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#恢复到之前某个-commit"}},[a._v("#")]),a._v(" 恢复到之前某个 commit")]),a._v(" "),e("p",[a._v("如果我们享撤销之前的某一个版本，但是邮箱保留这个版本之后的commit。就可以用 "),e("code",[a._v("git revert")])]),a._v(" "),e("p",[a._v("例如,现在仓库里有3个文件 "),e("code",[a._v("版本1 --\x3e test1文件")]),a._v("、"),e("code",[a._v("版本2 --\x3e test2文件")]),a._v("、"),e("code",[a._v("版本3 --\x3e test3文件")]),a._v("。我需要将版本2进行重做")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("3fdcce2b2f7a76a1307b17ae45fc0682870a68f9 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("HEAD -"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" master, origin/master, origin/HEAD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 版本3\na451f370bc8aef766cdcdee688dc248f3b20bb12 版本2\na954afb1cba9b50420dc8346e6c971870fab1812 版本1\n")])])]),e("p",[e("code",[a._v("git revert -n a451f370bc8aef766cdcdee688dc248f3b20bb12")])]),a._v(" "),e("div",{staticClass:"language-key extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('2d27c026cb6ec32e0466b70171c5605527ad3aec (HEAD -> master) Revert "版本2"\n3fdcce2b2f7a76a1307b17ae45fc0682870a68f9 (origin/master, origin/HEAD) 版本3\na451f370bc8aef766cdcdee688dc248f3b20bb12 版本2\na954afb1cba9b50420dc8346e6c971870fab1812 版本1\n')])])]),e("p",[a._v("此时仓库中之前添加"),e("code",[a._v("test2")]),a._v("文件就不见了，只剩下"),e("code",[a._v("test1")]),a._v("和"),e("code",[a._v("test3")]),a._v("文件")]),a._v(" "),e("h2",{attrs:{id:"文件名大小写问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件名大小写问题"}},[a._v("#")]),a._v(" 💨 文件名大小写问题")])])}),[],!1,null,null,null);t.default=s.exports}}]);