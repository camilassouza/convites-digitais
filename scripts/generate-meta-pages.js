import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://conviteria.shop';

const invitesPath = path.resolve('src/data/invites');
const distPath = path.resolve('dist');
const template = fs.readFileSync(
  path.join(distPath, 'index.html'),
  'utf8'
);

// lê todos os json da pasta
const files = fs.readdirSync(invitesPath).filter(file => file.endsWith('.json'));

files.forEach(file => {
  const invite = JSON.parse(
    fs.readFileSync(path.join(invitesPath, file), 'utf8')
  );

  const title =
    invite.pageTitle ||
    invite.eventTitle ||
    invite.clientName ||
    'Convite Digital';

  const description =
    invite.pageDescription ||
    invite.description ||
    '';

  const image =
    invite.pageImage ||
    invite.image ||
    '/default-share.jpg';

  const imageUrl = image.startsWith('http')
    ? image
    : `${DOMAIN}${image}`;
  console.log(imageUrl)
  
  const url = `${DOMAIN}/${invite.slug}`;

  const html = template
    .replaceAll('%TITLE%', title)
    .replaceAll('%DESCRIPTION%', description)
    .replaceAll('%IMAGE%', imageUrl)
    .replaceAll('%URL%', url);

  const folder = path.join(distPath, invite.slug);

  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, 'index.html'), html);

  console.log(`✔ ${invite.slug}`);
});