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
            <Link className="text-subtext cursor-pointer underline-offset-4">
              Esqueceu sua senha?
            </Link>
          </Flex>
          <div className="space-y-1">
            <Flex justify="center">
              <Button size="lg" className="w-56 m-4">
                Continuar
              </Button>
            </Flex>
          </div>
        </CardContent>
      </Card>
    </Tabs>
  );
}
