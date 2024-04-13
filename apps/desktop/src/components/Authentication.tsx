import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs } from "@/components/ui/tabs";
import { Flex, Link } from "@radix-ui/themes";
import { useState } from "react";

export default function Authentication() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const checkCredentials = async () => {
    fetch("https://www.google.com")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Tabs defaultValue="account">
      <Card>
        <CardHeader>
          <CardTitle>Inicie Sessão ou Cadastre-se</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Usuário ou Email</Label>
            <Input
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Flex justify="end">
            <Link className=" cursor-pointer underline-offset-4">
              Esqueceu sua senha?
            </Link>
          </Flex>
          <div className="space-y-1">
            <Flex justify="center">
              <Button onClick={checkCredentials} size="lg" className="w-56 m-4">
                Continuar
              </Button>
            </Flex>
          </div>
        </CardContent>
      </Card>
    </Tabs>
  );
}
