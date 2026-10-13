(() => {
  'use strict';
  const ns = 'http://www.w3.org/2000/svg';
  document.querySelectorAll('[data-travel]').forEach(async section => {
    const $ = selector => section.querySelector(selector);
    const visited = new Set(JSON.parse($('[data-travel-config]').textContent).visited);
    const hint = $('[data-map-hint]');
    const defaultHint = hint.textContent;
    let active = null;
    try {
      const response = await fetch(section.dataset.root + 'data/travel-map.json');
      if (!response.ok) throw new Error('地图数据加载失败');
      const {countries} = await response.json();
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('viewBox', '0 0 1000 500');
      svg.setAttribute('role', 'group');
      svg.setAttribute('aria-label', '旅行足迹地图，可用方向键切换国家和地区');
      $('[data-map]').append(svg);
      const layers = [];
      function showCountry(country, group) {
        if (active) active.classList.remove('is-active');
        active = group;
        active.classList.add('is-active');
        hint.textContent = country.name + ' · ' + (visited.has(country.id) ? '已到访' : '尚未到访');
      }
      countries.forEach((country, index) => {
        const group = document.createElementNS(ns, 'g');
        const path = document.createElementNS(ns, 'path');
        path.setAttribute('d', country.path);
        path.setAttribute('fill-rule', 'evenodd');
        group.append(path);
        svg.append(group);
        const box = path.getBBox();
        if (box.width * box.height < 12) {
          const dot = document.createElementNS(ns, 'circle');
          dot.setAttribute('cx', country.point[0]);
          dot.setAttribute('cy', country.point[1]);
          dot.setAttribute('r', '2.3');
          dot.classList.add('travel-tiny');
          group.append(dot);
        }
        const label = country.name + ' · ' + (visited.has(country.id) ? '已到访' : '尚未到访');
        const title = document.createElementNS(ns, 'title');
        title.textContent = label;
        group.append(title);
        group.dataset.country = country.id;
        group.classList.add('travel-land');
        group.classList.toggle('is-visited', visited.has(country.id));
        group.setAttribute('role', 'button');
        group.setAttribute('aria-label', label);
        // One tab stop for the map; arrow keys expose every destination.
        group.setAttribute('tabindex', index === 0 ? '0' : '-1');
        const activate = () => showCountry(country, group);
        group.addEventListener('mouseenter', activate);
        group.addEventListener('focus', activate);
        group.addEventListener('click', activate);
        group.addEventListener('keydown', event => {
          let target = index;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = (index + 1) % countries.length;
          else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = (index + countries.length - 1) % countries.length;
          else if (event.key === 'Home') target = 0;
          else if (event.key === 'End') target = countries.length - 1;
          else if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); return; }
          else return;
          event.preventDefault();
          layers.forEach((layer, i) => layer.setAttribute('tabindex', i === target ? '0' : '-1'));
          layers[target].focus();
        });
        layers.push(group);
      });
      svg.addEventListener('mouseleave', () => {
        if (svg.contains(document.activeElement)) return;
        if (active) active.classList.remove('is-active');
        active = null;
        hint.textContent = defaultHint;
      });
      const selected = countries.filter(country => visited.has(country.id));
      const percentage = selected.length / countries.length * 100;
      $('[data-count]').textContent = selected.length;
      $('[data-continents]').textContent = new Set(selected.map(country => country.continent).filter(c => c !== 'Seven seas (open ocean)')).size;
      $('[data-percent]').textContent = `${Math.round(percentage)}%`;
      $('[data-progress]').value = percentage;
      $('[data-stat-note]').textContent = `按本地图收录的 ${countries.length} 个国家和地区计算，不按面积计算。`;
    } catch (error) {
      $('[data-map]').textContent = '地图暂时加载失败，请刷新页面重试。';
      hint.textContent = '当前无法加载到访情况。';
    }
  });
})();
