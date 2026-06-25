import fs from 'fs';
import path from 'path';

const invites = [
  {
    slug: 'angel-e-camila',
    title: 'Casamento Camila & Angel',
    description: 'Temos a alegria de convidar você para celebrar conosco esse momento especial.',
    image: 'https://conviteria.shop/images/angel-e-camila/share.jpg'
  }
];

const distPath = path.resolve('dist');
const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

invites.forEach(invite => {
  const html = template
    .replaceAll('%TITLE%', invite.title)
    .replaceAll('%DESCRIPTION%', invite.description)
    .replaceAll('%IMAGE%', invite.image)
    .replaceAll('%URL%', `https://conviteria.shop/${invite.slug}`);

  const folder = path.join(distPath, invite.slug);

  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, 'index.html'), html);
});