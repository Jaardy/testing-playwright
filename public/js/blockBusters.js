const blocksContainer = document.getElementById('blocks');

for (let i = 2; i < 101; i++) {
  let block = document.createElement('div');
  block.setAttribute('class', 'red-block');
  block.setAttribute('id', 'block-' + i);
  block.addEventListener('click', block.remove);
  blocksContainer.appendChild(block);
  console.log(block);
}
