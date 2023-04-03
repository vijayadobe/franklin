import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  console.log(block);
  /* change to ul, li */
  const h1 = document.createElement('h1');
  h1.innerHTML = block.innerHTML;
  [...block.children].forEach((row) => {
    h1.innerHTML = block.innerText;
  });
  //ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(h1);
  console.log(block);
}
