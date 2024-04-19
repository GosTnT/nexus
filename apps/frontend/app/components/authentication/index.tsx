import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Authentication() {
  return (
    <Card>
      <CardHeader className="bg-background">
        <CardTitle>Inicie Sessão ou Cadastre-se</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 dark bg-background ">
        <div className="space-y-1">
          <Label htmlFor="name">Usuário ou Email</Label>
          <Input id="name" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" />
        </div>
        <Flex justify="end">
          <Link
            to="fodase"
            className="cursor-pointer text-foreground-500 underline-offset-4"
          >
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
  );
}
