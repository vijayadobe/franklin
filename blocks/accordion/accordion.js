import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  console.log(block);
  const accordion = document.createElement('div');
  accordion.className = 'cmp-accordion';
  [...block.children].forEach((row) => {
    const acitem = document.createElement('div');
    acitem.innerHTML = row.innerHTML;
    acitem.className = 'cmp-accordion__item';
    [...acitem.children].forEach((div) => {
      if (div.children.length === 1) {
        const heading = document.createElement('h3');
        heading.innerHTML = div.innerHTML;
        div.textContent = '';
        div.append(heading);
        div.className = 'cmp-accordion__header';
        div.addEventListener('click',(d)=>{
          let target = d.target;
          const targetItem = target.closest(".cmp-accordion__item");
          targetItem.querySelector('.cmp-accordion__panel').classList.toggle("cmp-accordion__panel--expand");
        })
      } else {
        div.className = 'cmp-accordion__panel';
      }
    });
    accordion.append(acitem);
  });
  block.textContent = '';
  block.append(accordion);
  console.log(block);
  /* change to ul, li */
  // const ul = document.createElement('ul');
  // [...block.children].forEach((row) => {
  //   const li = document.createElement('li');
  //   li.innerHTML = row.innerHTML;
  //   [...li.children].forEach((div) => {
  //     if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
  //     else div.className = 'cards-card-body';
  //   });
  //   ul.append(li);
  // });
  // ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  // block.textContent = '';
  // block.append(ul);
  // console.log(block);
}
