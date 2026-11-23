(() => {
  'use strict';

  const docEl = document.documentElement;
  const doc = document.getElementById('doc');
  const toc = document.getElementById('toc');
  const searchInput = document.getElementById('searchInput');
  const searchCount = document.getElementById('searchCount');
  const menuButton = document.getElementById('menuButton');
  const backdrop = document.getElementById('sidebarBackdrop');
  const themeButton = document.getElementById('themeButton');
  const expandAll = document.getElementById('expandAll');
  const collapseAll = document.getElementById('collapseAll');
  const backToTop = document.getElementById('backToTop');
  const progressBar = document.getElementById('progressBar');

  const THEME_KEY = 'ai-research-theme';
  const chapterIds = new Set();
  ['r', 'c', 'f', 'o'].forEach((prefix) => {
    const max = { r: 6, c: 7, f: 9, o: 11 }[prefix];
    for (let i = 1; i <= max; i += 1) chapterIds.add(`${prefix}${i}`);
  });

  const sectionLabels = {
    evolution: '0. 问题怎样一步步展开',
    overview: '1. 总体结构',
    tree: '2. 完整问题树',
    guide: '3. 章级导学',
    insights: '4. 关键结论',
    connections: '5. 横向联系',
    history: '6. 思想史',
    modern: '7. 现代模型与方法',
  };

  let tocItems = [];
  let searchTimer = 0;
  let ticking = false;

  /* Theme */

  function readTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(value) {
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch (error) {
      /* ignore */
    }
  }

  function updateThemeButton() {
    const dark = docEl.dataset.theme === 'dark';
    themeButton.textContent = dark ? '☀' : '☾';
    themeButton.setAttribute('aria-label', dark ? '切换到浅色主题' : '切换到深色主题');
  }

  function initTheme() {
    const saved = readTheme();
    if (saved === 'light' || saved === 'dark') {
      docEl.dataset.theme = saved;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      docEl.dataset.theme = 'dark';
    }
    updateThemeButton();
  }

  themeButton.addEventListener('click', () => {
    const dark = docEl.dataset.theme === 'dark';
    docEl.dataset.theme = dark ? 'light' : 'dark';
    saveTheme(docEl.dataset.theme);
    updateThemeButton();
  });

  /* Rendering */

  async function loadMap() {
    try {
      const response = await fetch('map.md', { cache: 'no-cache' });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const markdown = await response.text();
      if (typeof marked === 'undefined') throw new Error('Markdown 渲染器未载入');
      marked.setOptions({ gfm: true, breaks: false });
      doc.innerHTML = marked.parse(markdown);
      enhanceTree();
      buildToc();
      setupLinkHandling();
      handleInitialHash();
      updateActive();
      updateProgress();
    } catch (error) {
      console.error(error);
      doc.innerHTML = `
        <div class="load-error">
          <h2>问题树载入失败</h2>
          <p>无法读取 <code>map.md</code>。请确认站点文件完整，或直接查看 Markdown 版本。</p>
          <p><a href="map.md">打开 map.md</a></p>
        </div>
      `;
    }
  }

  /* Tree toggles */

  function addToggle(li, reference) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tree-toggle';
    button.textContent = '▾';
    button.setAttribute('aria-label', '折叠或展开');
    button.setAttribute('aria-expanded', 'true');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const collapsed = li.classList.toggle('tree-collapsed');
      button.textContent = collapsed ? '▸' : '▾';
      button.setAttribute('aria-expanded', String(!collapsed));
    });

    const paragraph = reference.closest('p');
    if (paragraph && paragraph.parentElement === li) {
      li.insertBefore(button, paragraph);
    } else {
      li.insertBefore(button, reference);
    }
  }

  function enhanceTree() {
    doc.querySelectorAll('a[id]').forEach((anchor) => {
      const li = anchor.closest('li');
      if (!li || !li.querySelector(':scope > ul')) return;
      if (chapterIds.has(anchor.id)) {
        li.classList.add('tree-chapter');
        addToggle(li, anchor);
      }
    });

    doc.querySelectorAll('li').forEach((li) => {
      if (li.classList.contains('tree-chapter')) return;
      if (!li.querySelector(':scope > ul')) return;
      const strong = li.querySelector(':scope > strong, :scope > p > strong');
      if (!strong) return;
      if (/^(Q0|[IV]+|A|B)｜/.test(strong.textContent.trim())) {
        li.classList.add('tree-section');
        addToggle(li, strong);
      }
    });
  }

  expandAll.addEventListener('click', () => {
    doc.querySelectorAll('.tree-collapsed').forEach((li) => {
      li.classList.remove('tree-collapsed');
      const button = li.querySelector(':scope > .tree-toggle');
      if (button) {
        button.textContent = '▾';
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  collapseAll.addEventListener('click', () => {
    doc.querySelectorAll('.tree-chapter').forEach((li) => {
      li.classList.add('tree-collapsed');
      const button = li.querySelector(':scope > .tree-toggle');
      if (button) {
        button.textContent = '▸';
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* Table of contents */

  function labelForAnchor(anchor, id) {
    const li = anchor.closest('li');
    if (li) {
      const strong = li.querySelector(':scope > strong, :scope > p > strong');
      if (strong) return strong.textContent.trim();
    }
    const next = anchor.nextElementSibling;
    if (next && /^H[1-6]$/.test(next.tagName)) {
      return next.textContent.trim();
    }
    return sectionLabels[id] || id.toUpperCase();
  }

  function buildToc() {
    const groups = [
      { title: '导览', ids: ['evolution', 'overview', 'tree'] },
      { title: '表征 R', ids: ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'] },
      { title: '计算 C', ids: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'] },
      { title: '形式框架 F', ids: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9'] },
      {
        title: '开放世界 O',
        ids: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8', 'o9', 'o10', 'o11'],
      },
      { title: '查阅', ids: ['guide', 'insights', 'connections', 'history', 'modern'] },
    ];

    toc.innerHTML = '';
    groups.forEach((group) => {
      const section = document.createElement('section');
      section.className = 'toc-group';
      const heading = document.createElement('h2');
      heading.className = 'toc-group-title';
      heading.textContent = group.title;
      section.appendChild(heading);

      const list = document.createElement('div');
      list.className = 'toc-list';
      group.ids.forEach((id) => {
        const anchor = document.getElementById(id);
        if (!anchor) return;
        const link = document.createElement('a');
        link.className = 'toc-link';
        link.href = `#${id}`;
        link.dataset.target = id;
        link.textContent = labelForAnchor(anchor, id);
        link.title = link.textContent;
        list.appendChild(link);
      });

      section.appendChild(list);
      toc.appendChild(section);
    });

    refreshTocItems();
  }

  function refreshTocItems() {
    tocItems = Array.from(toc.querySelectorAll('a[data-target]'))
      .map((link) => ({ link, target: document.getElementById(link.dataset.target) }))
      .filter((item) => item.target);
  }

  function updateActive() {
    if (!tocItems.length) return;
    const headerHeight =
      parseInt(getComputedStyle(docEl).getPropertyValue('--header-h'), 10) || 64;
    const threshold = headerHeight + 24;
    let current = tocItems[0];

    for (const item of tocItems) {
      if (item.target.getBoundingClientRect().top <= threshold) current = item;
      else break;
    }

    toc.querySelectorAll('.toc-link.active').forEach((link) => link.classList.remove('active'));
    current.link.classList.add('active');
  }

  /* Link handling */

  function scrollToTarget(target) {
    const headerHeight =
      parseInt(getComputedStyle(docEl).getPropertyValue('--header-h'), 10) || 64;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function setupLinkHandling() {
    const handle = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const raw = link.getAttribute('href');
      if (!raw || raw === '#') return;
      const id = decodeURIComponent(raw.slice(1));
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      scrollToTarget(target);
      if (history.pushState) history.pushState(null, '', `#${id}`);
      closeSidebar();
    };

    doc.addEventListener('click', handle);
    toc.addEventListener('click', handle);
  }

  function handleInitialHash() {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;
    window.setTimeout(() => scrollToTarget(target), 80);
  }

  window.addEventListener('hashchange', () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    if (target) scrollToTarget(target);
  });

  /* Search */

  searchInput.addEventListener('input', () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => runSearch(searchInput.value.trim()), 120);
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const first = toc.querySelector('.toc-link:not([hidden])');
    if (first) {
      first.click();
      return;
    }
    const mark = doc.querySelector('mark.search-hit');
    if (mark) mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  function runSearch(query) {
    clearHighlights();
    const links = Array.from(toc.querySelectorAll('.toc-link'));

    if (!query) {
      links.forEach((link) => {
        link.hidden = false;
      });
      updateGroupVisibility();
      searchCount.textContent = '';
      return;
    }

    const lower = query.toLowerCase();
    links.forEach((link) => {
      link.hidden = !link.textContent.toLowerCase().includes(lower);
    });
    updateGroupVisibility();

    const visibleLinks = links.filter((link) => !link.hidden).length;
    if (query.length < 2) {
      searchCount.textContent = visibleLinks ? `${visibleLinks} 个节点` : '无匹配';
      return;
    }

    const matches = highlightText(lower);
    if (matches) {
      searchCount.textContent = `${matches} 处`;
    } else if (visibleLinks) {
      searchCount.textContent = `${visibleLinks} 个节点`;
    } else {
      searchCount.textContent = '无匹配';
    }
  }

  function updateGroupVisibility() {
    toc.querySelectorAll('.toc-group').forEach((group) => {
      const visible = Array.from(group.querySelectorAll('.toc-link')).some(
        (link) => !link.hidden
      );
      group.hidden = !visible;
    });
  }

  function clearHighlights() {
    doc.querySelectorAll('mark.search-hit').forEach((mark) => {
      const parent = mark.parentNode;
      if (!parent) return;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
  }

  function highlightText(query) {
    const walker = document.createTreeWalker(doc, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|MARK|TEXTAREA|BUTTON|SELECT|OPTION)$/.test(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    let count = 0;
    const limit = 300;

    for (const node of nodes) {
      if (count >= limit) break;
      const text = node.nodeValue;
      const lower = text.toLowerCase();
      let index = lower.indexOf(query);
      if (index === -1) continue;

      const fragment = document.createDocumentFragment();
      let last = 0;

      while (index !== -1 && count < limit) {
        fragment.appendChild(document.createTextNode(text.slice(last, index)));
        const mark = document.createElement('mark');
        mark.className = 'search-hit';
        mark.textContent = text.slice(index, index + query.length);
        fragment.appendChild(mark);
        count += 1;
        last = index + query.length;
        index = lower.indexOf(query, last);
      }

      fragment.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(fragment, node);
    }

    return count;
  }

  /* Sidebar, scroll, progress */

  function openSidebar() {
    document.body.classList.add('sidebar-open');
    menuButton.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    document.body.classList.remove('sidebar-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  menuButton.addEventListener('click', () => {
    if (document.body.classList.contains('sidebar-open')) closeSidebar();
    else openSidebar();
  });

  if (backdrop) backdrop.addEventListener('click', closeSidebar);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSidebar();
  });

  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
    progressBar.style.width = `${value}%`;
  }

  function updateBackToTop() {
    backToTop.classList.toggle('visible', window.scrollY > 600);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActive();
      updateProgress();
      updateBackToTop();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  initTheme();
  loadMap();
})();
