import { ArrowRight, Copy } from 'lucide-react'
import { Button } from "@/components/button";
import { IconButton } from '@/components/Icon-button';
import { Input } from '@/components/Input';

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>
      <IconButton>
        <Copy />
      </IconButton>
      <Input placeholder='Digite seu e-mail' />
    </main>
  );
}
