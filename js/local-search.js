// 本地搜索脚本 for Hexo，优化中文输入法体验和结果面板样式
(function() {
  var input = document.getElementById('local-search-input');
  if (!input) return;
  var resultPanel = document.createElement('div');
  resultPanel.id = 'local-search-result';
  // 让结果面板显示在输入框下方并美化
  resultPanel.style.position = 'absolute';
  resultPanel.style.left = input.offsetLeft + 'px';
  resultPanel.style.top = (input.offsetTop + input.offsetHeight + 6) + 'px'; // 下移6px
  resultPanel.style.background = '#fff';
  resultPanel.style.border = '1px solid #eee';
  resultPanel.style.borderRadius = '8px';
  resultPanel.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
  resultPanel.style.zIndex = 9999;
  resultPanel.style.width = input.offsetWidth + 'px';
  resultPanel.style.maxHeight = '300px';
  resultPanel.style.overflowY = 'auto';
  resultPanel.style.display = 'none';
  input.parentNode.appendChild(resultPanel);

  var searchData = null;
  var isComposing = false; // 标记是否正在中文输入法拼音上屏

  function loadData(cb) {
    if (searchData) return cb();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/search.xml');
    xhr.onload = function() {
      var parser = new DOMParser();
      var xml = parser.parseFromString(xhr.responseText, 'text/xml');
      var entries = xml.getElementsByTagName('entry');
      searchData = [];
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        searchData.push({
          title: entry.getElementsByTagName('title')[0].textContent,
          content: entry.getElementsByTagName('content')[0].textContent,
          url: entry.getElementsByTagName('url')[0].textContent
        });
      }
      cb();
    };
    xhr.send();
  }

  function search(keyword) {
    if (!searchData) return [];
    keyword = keyword.trim().toLowerCase();
    if (!keyword) return [];
    return searchData.filter(function(item) {
      return item.title.toLowerCase().indexOf(keyword) !== -1 ||
             item.content.toLowerCase().indexOf(keyword) !== -1;
    });
  }

  // 监听中文输入法拼音上屏
  input.addEventListener('compositionstart', function() {
    isComposing = true;
  });
  input.addEventListener('compositionend', function() {
    isComposing = false;
    triggerSearch();
  });

  input.addEventListener('input', function() {
    if (isComposing) return; // 拼音未上屏时不触发搜索
    triggerSearch();
  });

  function triggerSearch() {
    var keyword = input.value;
    if (!keyword) {
      resultPanel.style.display = 'none';
      return;
    }
    loadData(function() {
      var results = search(keyword);
      if (results.length === 0) {
        resultPanel.innerHTML = '<div style="padding:32px 0;text-align:center;color:#bbb;font-size:15px;">没有找到结果</div>';
      } else {
        resultPanel.innerHTML = results.map(function(item) {
          return '<div style="padding:8px 12px;border-bottom:1px solid #f0f0f0;"><a href="' + item.url + '" style="color:#222;">' + item.title + '</a></div>';
        }).join('');
      }
      resultPanel.style.display = 'block';
    });
  }

  // 回车跳转第一个结果
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !isComposing) {
      var first = resultPanel.querySelector('a');
      if (first) {
        window.location = first.href;
      }
    }
  });

  // 点击外部隐藏结果面板
  document.addEventListener('click', function(e) {
    if (!resultPanel.contains(e.target) && e.target !== input) {
      resultPanel.style.display = 'none';
    }
  });
})(); 