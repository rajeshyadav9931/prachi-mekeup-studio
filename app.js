const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation');
}));
document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('[name="interest"]').value = link.dataset.interest;
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('.look-tile').forEach(tile => { tile.hidden = button.dataset.filter !== 'all' && tile.dataset.category !== button.dataset.filter; });
}));
const dialog = document.querySelector('#look-dialog');
document.querySelectorAll('.look-tile').forEach(tile => tile.addEventListener('click', () => {
  const img = tile.querySelector('img');
  document.querySelector('#dialog-image').src = img.src;
  document.querySelector('#dialog-image').alt = img.alt;
  document.querySelector('#dialog-caption').textContent = tile.dataset.caption;
  document.querySelector('#dialog-source').href = tile.dataset.source;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog && (event.clientX < dialog.getBoundingClientRect().left || event.clientX > dialog.getBoundingClientRect().right || event.clientY < dialog.getBoundingClientRect().top || event.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();
  if (!name || !message) { const input = !name ? form.elements.name : form.elements.message; input.setCustomValidity('Please enter a little more detail.'); input.reportValidity(); input.addEventListener('input', () => input.setCustomValidity(''), { once: true }); return; }
  document.querySelector('#prepared-message').value = `Hello Prachi Makeup Studio & Academy! My name is ${name}. I’m interested in ${form.elements.interest.value.toLowerCase()} in Ranchi.\n\n${message}\n\nPlease share availability and details. Thank you!`;
  document.querySelector('#whatsapp-enquiry').href = 'https://wa.me/916299385690?text=' + encodeURIComponent(document.querySelector('#prepared-message').value);
  document.querySelector('#enquiry-result').hidden = false;
  document.querySelector('#copy-status').textContent = '';
  document.querySelector('#enquiry-result').scrollIntoView({ block: 'nearest' });
});
document.querySelector('#copy-enquiry').addEventListener('click', async () => {
  const field = document.querySelector('#prepared-message');
  try { await navigator.clipboard.writeText(field.value); document.querySelector('#copy-status').textContent = 'Copied!'; }
  catch { field.focus(); field.select(); document.querySelector('#copy-status').textContent = 'Select and copy this message.'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
