const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === 'Dashboard.tsx' || file === 'Login.tsx') continue;

  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes('sonner')) {
    content = content.replace("import { Button } from '@/components/ui/button';", "import { Button } from '@/components/ui/button';\nimport { toast } from 'sonner';");
    
    // Replace <Button> without onClick
    content = content.replace(/<Button>(\s*<[^>]+>\s*[^<]+)<\/Button>/g, "<Button onClick={() => toast.info('Fitur dalam pengembangan', { description: 'Form input untuk modul ini akan segera hadir.' })}>$1</Button>");
    content = content.replace(/<Button>Simpan Perubahan<\/Button>/g, "<Button onClick={() => toast.success('Berhasil!', { description: 'Perubahan Anda telah disimpan.' })}>Simpan Perubahan</Button>");
    content = content.replace(/<Button>Simpan Preferensi<\/Button>/g, "<Button onClick={() => toast.success('Berhasil!', { description: 'Preferensi sistem telah disimpan.' })}>Simpan Preferensi</Button>");
    
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}
