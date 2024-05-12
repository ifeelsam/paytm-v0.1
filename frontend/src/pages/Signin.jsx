import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

export function Signin() {

  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  return (
    <div className="flex justify-center pt-28">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your information to Sign In</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input  onChange={ e => setUsername(e.target.value)} id="username" placeholder="usermame" />
            </div>

            {/* <div className="flex flex-col space-y-1.5"> */}
              {/* <Label htmlFor="username">First Name</Label> */}
              {/* <Input id="firstName" placeholder="fisrt name" /> */}
            {/* </div> */}

            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Last Name</Label>
              <Input id="lasName" placeholder="last name" />
            </div>  */}
 
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input onChange={ e => setPassword(e.target.value)} id="password" placeholder="password" />
            </div> 
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Sign Up</Button>
        <Button>Sign In</Button>
      </CardFooter>
    </Card>
  </div>        
            
  )
}
