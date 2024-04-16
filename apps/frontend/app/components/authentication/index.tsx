import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs } from "@/components/ui/tabs";
import { Flex, Link } from "@radix-ui/themes";

export default function Authentication() {
  return (
    <Tabs defaultValue="account">
      <Card>
        <CardHeader>
          <CardTitle>Inicie Sessão ou Cadastre-se</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Usuário ou Email</Label>
            <Input id="name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="passowrd">Password</Label>
            <Input id="password" />
          </div>
          <Flex justify="end">
            <Link className="cursor-pointer text-subtext underline-offset-4">
              Esqueceu sua senha?
            </Link>
          </Flex>
          <div className="space-y-1">
            <Flex justify="center">
              <Button size="lg" className="m-4 w-56">
                Continuar
              </Button>
            </Flex>
          </div>
        </CardContent>
      </Card>
    </Tabs>
  );
}
