var posts=["2020/01/01/2019年度总结/","2021/01/17/2020年度总结/","2022/01/17/2021年度总结/","2021/01/24/2021日记/","2023/01/22/2022年度总结/","2022/01/01/2022日记/","2024/02/15/2023年度总结/","2023/01/01/2023日记/","2025/01/19/2024年度总结/","2024/01/04/2024日记/","2025/01/01/2025日记/","2023/03/17/Excel/","2019/01/01/HTTP状态码/","2019/01/04/HTTP的缓存机制/","2023/03/12/MySQL学习笔记/","2023/03/27/MySQL题库/","2020/02/04/PS技巧/","2021/02/17/Performing Keyword Research/","2023/05/16/Python学习笔记/","2023/02/16/Tableau常用函数/","2022/04/03/乌合之众/","2025/02/19/人像修图流程/","2019/02/06/人生的第一次10公里跑/","2020/07/26/南京之行/","2018/12/31/图片放大镜/","2018/12/31/图片跟随鼠标移动/","2020/02/20/摄影知识/","2022/02/20/数据分析/","2018/12/31/旋转木马/","2022/03/16/时间管理方法/","2023/03/27/海盗指标/","2023/03/10/用数据讲故事/","2018/12/29/轮播图/","2022/03/20/运营知识总结/","2020/01/10/重庆之行/","2022/03/17/金字塔原理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };