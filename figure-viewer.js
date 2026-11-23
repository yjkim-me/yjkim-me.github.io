(() => {
  const number = new URLSearchParams(window.location.search).get('figure');
  if (!/^[1-9]$/.test(number || '')) return;
  const figures = {
    1: ['Pipeline overview', 4257, 1402, 'overview'],
    2: ['Same-view conditioning', 3190, 2110, 'conditioning-detail'],
    3: ['Guidance at different noise levels', 3020, 2083, 'noise-detail'],
    4: ['View-aligned score guidance', 6013, 2256, 'key-idea'],
    5: ['Why multiple views matter', 2797, 1541, 'views-detail'],
    6: ['Part arrangement comparisons', 9295, 7088, 'results'],
    7: ['Part-aware generation comparisons', 4206, 3922, 'part-structure'],
    8: ['Translation update directions', 489.6, 216, 'guidance-evidence'],
    9: ['Hierarchical assembly', 2461, 1570, 'extensions']
  };
  const [label, width, height, section] = figures[number];
  const heading = document.querySelector('h1');
  const image = document.querySelector('main > img');
  const back = document.querySelector('header a');
  heading.textContent = `Figure ${number} · ${label}`;
  document.title = `${label} | VA-Assembly`;
  image.src = `images/VA-Assembly/Fig${number}.svg`;
  image.alt = `VA-Assembly Figure ${number}: ${label}`;
  image.width = Math.round(width);
  image.height = Math.round(height);
  back.href = `va-assembly.html#${section}`;
})();
