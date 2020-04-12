const spacing = document.getElementById('spacing');
const color = document.getElementById('color');
const blur = document.getElementById('blur');
const root = document.documentElement;

const setRootStyle = (styleVariable, value) => {
  root.style.setProperty(styleVariable, value);
}

spacing.addEventListener('input', () => setRootStyle('--spacing', spacing.value + 'px'));
blur.addEventListener('input', () => setRootStyle('--blur', blur.value + 'px'));
color.addEventListener('change', () => setRootStyle('--base', color.value));

