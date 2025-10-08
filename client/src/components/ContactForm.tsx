import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
        access_key: "9d982489-805b-4f6b-969c-9dbcf9aa6801", // <-- COLOQUE SUA CHAVE AQUI
        name,
        email,
        message,
        subject: `Novo Contato de ${name} - Seu Portfólio`,
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
            toast({
                title: "Mensagem enviada!",
                description: "Obrigado pelo contato. Retornarei em breve.",
            });
            setName("");
            setEmail("");
            setMessage("");
        } else {
            toast({
                title: "Erro ao enviar",
                description: result.message || "Ocorreu um problema.",
                variant: "destructive",
            });
        }
    } catch (error) {
        toast({
            title: "Erro de rede",
            description: "Não foi possível conectar ao servidor.",
            variant: "destructive",
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome completo"
          required
          data-testid="input-name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
          data-testid="input-email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem aqui..."
          rows={6}
          required
          data-testid="input-message"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full" data-testid="button-submit">
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
