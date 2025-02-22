import { ArrowRight, Copy, Mail } from 'lucide-react'
import { Button } from "@/components/button";
import { IconButton } from '@/components/Icon-button';
import { InputField, InputIcon, InputRoot } from '@/components/Input';

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
      <InputRoot>
        <InputIcon>
          <Mail className='size-5'/>
        </InputIcon>
        <InputField />
      </InputRoot>
    </main>
  );
}
