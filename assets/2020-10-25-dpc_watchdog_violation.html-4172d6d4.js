import{ae as r,G as s,H as l,E as e,S as i,N as o,af as t,W as a}from"./framework-0f3f6485.js";const c={},h=e("p",null,"Windows 蓝屏原因众多，你在网上搜到的解决方案，大多与你情况不同，不能解决实际问题。但是，如果你找到并分析电脑上的 dmp 蓝屏日志，就会发现 Windows 已经给出了你的蓝屏原因。比如 DPC_WATCHDOG_VIOLATION 蓝屏，大多是硬件驱动出现问题。你可以通过回退、更新或卸载驱动来修复蓝屏。接下来，我会具体介绍如何导出蓝屏日志、分析并解决蓝屏原因。",-1),p=e("h2",{id:"导出蓝屏日志",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导出蓝屏日志","aria-hidden":"true"},"#"),i(" 导出蓝屏日志")],-1),g={href:"https://www.microsoft.com/zh-cn/p/windbg/9pgjgd53tn86?rtc=1&activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},u=t('<li><p>启动 WinDbg Preview，软件会自动检测到最新 dmp 日志，点击 Yes 即可载入。如果想分析其他文件，打开文件夹 <code>C:\\Windows\\Minidump</code>，导出日志 <code>*.dmp</code>。</p></li><li><p>载入日志过程中，WinDbg Preview 会自动下载所需文件，不需要管。载入完成后，点击 <code>!analyze -v</code>，分析具体日志。</p><figure><img src="http://tc.seoipo.com/20201025223307.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>分析日志：日志前半部分都是套话（可忽略），蓝屏原因多在日志最下方几行，分析尾部日志来找出引发蓝屏的进程。注意不要强删未知文件。</p><figure><img src="http://tc.seoipo.com/20201025224308.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>',3),m=e("h2",{id:"上传社区分析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#上传社区分析","aria-hidden":"true"},"#"),i(" 上传社区分析")],-1),_=e("p",null,"有些蓝屏较复杂，由多方原因造成，新手很难分析。如果你看不懂/不想分析日志，可以将蓝屏日志完整上传到微软社区，一般几个小时会有人回复。",-1),f=e("li",null,[i("打开文件夹 "),e("code",null,"C:\\Windows\\Minidump"),i("，导出日志 "),e("code",null,"*.dmp"),i("。")],-1),w={href:"https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=",target:"_blank",rel:"noopener noreferrer"},b=t('<h2 id="蓝屏解决方案" tabindex="-1"><a class="header-anchor" href="#蓝屏解决方案" aria-hidden="true">#</a> 蓝屏解决方案</h2><p>分析完蓝屏日志后，我们得到了具体蓝屏冲突进程，在引擎搜索对该进程名进行搜索，确认它是系统模块、驱动还是某个程序。</p><h3 id="系统模块报错" tabindex="-1"><a class="header-anchor" href="#系统模块报错" aria-hidden="true">#</a> 系统模块报错</h3><p><code>ntkrnlmp.exe</code>、<code>*.symbols.exe</code> 是系统模块，该报错不是蓝屏的底层原因，实际是由应用进程与系统冲突引起的蓝屏，需重新深入分析日志。<strong>不要尝试删除系统模块。</strong></p><h3 id="驱动冲突" tabindex="-1"><a class="header-anchor" href="#驱动冲突" aria-hidden="true">#</a> 驱动冲突</h3><p><code>nvlddmkm.sys</code>、<code>amdkmdag.sys</code> 等后缀为 <code>*.sys</code> 的进程报错，多为硬件驱动错误，可通过回退驱动来解决。</p><ol><li>开始菜单上搜索并打开「设备管理器」。</li><li>设备管理器上找到对应硬件，点击「回退驱动程序」。</li></ol><figure><img src="http://tc.seoipo.com/2022-12-17-10-38-44.png" alt="" tabindex="0" loading="lazy"><figcaption>还原驱动</figcaption></figure><p>如果无法回退驱动程序，则去硬件官网下载旧驱动或最新驱动。继续出现蓝屏，则通过在设备管理器中卸载设备后重启，让系统启用自带驱动。以上方案均未解决，则尝试更新主板 BIOS，关闭超频。</p><p>如果你不清楚报错进程与哪个硬件相关，尝试多种方法，也无法修复，那只能用强行删除来尝试修复。但删除前，必须<strong>备份好相关文件与其所在路径</strong>。如果删除后进入不了系统，需使用 PE 系统还原备份文件。如果相关文件多于 5 个，或不清楚如何使用 PE，不要强删任何 <code>*.sys</code> 文件。</p><h3 id="未知程序" tabindex="-1"><a class="header-anchor" href="#未知程序" aria-hidden="true">#</a> 未知程序</h3>',11),x={href:"https://www.voidtools.com/zh-cn/downloads/",target:"_blank",rel:"noopener noreferrer"},v=e("strong",null,"备份后尝试删除",-1),y=e("strong",null,"做好备份",-1),W=t('<p><code>MpKslDrv.sys</code> 一般用于恶意软件保护，对系统影响不大。如果出现该报错，则在备份后删除报错文件。（<strong>准备好 PE 系统</strong>以防万一）</p><h2 id="蓝屏解决集锦" tabindex="-1"><a class="header-anchor" href="#蓝屏解决集锦" aria-hidden="true">#</a> 蓝屏解决集锦</h2><p>如果不想分析日志，甚至找不到找不到蓝屏日志，可以尝试下列方法，测试中解决了 80% 的蓝屏。</p><ul><li>驱动类：更新显卡驱动；更新网卡驱动；重置声卡驱动；重置 SATA AHCI 驱动；</li><li>主板类：擦拭内存条；重置 BIOS；增加 CPU 电压；关闭超线程；</li><li>系统修复：管理员权限打开命令行（cmd），运行 <code>sfc/Scannow</code>，系统会自动检查损坏文件并修复；</li><li>终极方法：重装系统，测试期间<strong>尽量使用默认系统驱动</strong>。重装又蓝屏的话，说明你新装的驱动有问题，卸掉有问题的驱动。</li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="装不了-windbg" tabindex="-1"><a class="header-anchor" href="#装不了-windbg" aria-hidden="true">#</a> 装不了 WinDbg</h3>',6),D={href:"https://answers.microsoft.com/zh-hans/newthread?threadtype=Questions&cancelurl=/zh-hans/windows/forum&forum=windows&filter=",target:"_blank",rel:"noopener noreferrer"},k=t('<h3 id="分析日志时报错" tabindex="-1"><a class="header-anchor" href="#分析日志时报错" aria-hidden="true">#</a> 分析日志时报错</h3><p>分析蓝屏时报错，或 WinDbg 对 minidump 蓝屏日志的访问被拒绝，这都是由于系统盘读取权限未开放所导致的。</p><p>解决办法有 3 种：</p><ul><li>将 minidump 文件复制到 D 盘，然后手动导入到 WinDbg 进行分析。</li><li>@天气控制仪：以管理员权限运行 WinDbg。</li><li>@紫石英与灯心草：右键单击 minidump 蓝屏日志，点击「属性」&gt;「权限」&gt;「点击用户」&gt;「点击继承」&gt;「同意」。</li></ul><h3 id="找不到-minidump-文件" tabindex="-1"><a class="header-anchor" href="#找不到-minidump-文件" aria-hidden="true">#</a> 找不到 minidump 文件</h3><p>蓝屏日志默认保存在 <code>C:\\Windows\\Minidump</code>。</p><p>如果该文件夹为空，说明蓝屏日志未生成，等下次蓝屏再查看。如果多次蓝屏，该文件夹下还是没有日志，则尝试在资源管理器中打开 <code>%SystemRoot%\\Minidump</code>，失败后按下列步骤设置：</p><ol><li>打开控制面板&gt;&gt;系统&gt;&gt;高级系统设置&gt;&gt;高级&gt;&gt;启动和故障恢复&gt;&gt;设置；</li><li>写入调试信息&gt;&gt;选择「小内存转储（256KB）」，路径选择 <code>%SystemRoot%\\Minidump</code>，确定并重启您的计算机；</li><li>再次异常关机后，前往 <code>%SystemRoot%\\Minidump</code> 提取即可。</li></ol><p>视频说明：</p>',9);function B(z,C){const n=a("ExternalLinkIcon"),d=a("BiliBili");return s(),l("div",null,[h,p,e("ol",null,[e("li",null,[e("p",null,[i("安装 "),e("a",g,[i("WinDbg Preview"),o(n)]),i("，这是微软官方推出的系统 Debug 工具。")])]),u]),m,_,e("ol",null,[f,e("li",null,[i("将 dmp 日志上传至 "),e("a",w,[i("微软社区"),o(n)]),i("，会有技术人员帮你分析蓝屏原因。微软社区无法上传附件，需先将 dmp 日志上传至百度云或微云，再将分享链接放在问题里。")])]),b,e("p",null,[i("如果是与系统模块、驱动无关的未知程序，可使用 "),e("a",x,[i("Everything"),o(n)]),i(" 搜索该进程的位置，"),v,i("该程序。如果提示文件被占用，可使用火绒或 Unlocker 来解除文件占用，但一定要先"),y,i("。")]),W,e("p",null,[i("少数情况安装应用报错，本地无法分析日志。此时，我们可以导出蓝屏日志，上传到 "),e("a",D,[i("微软社区"),o(n)]),i("，会有人帮助分析原因。")]),k,o(d,{bvid:"BV1jt4y1i7C8"})])}const E=r(c,[["render",B],["__file","2020-10-25-dpc_watchdog_violation.html.vue"]]);export{E as default};