import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { useNavigate } from "react-router"
  import React from 'react'
  import { Button } from "./ui/button"
  function MyCard({
      gameName="gameName",
      gameDescription="gameDescription",
      gamePage="gamePage",
      imageSrc = "@/media/img/noImage.webp",
  }
  ) {
    const navigate = useNavigate();
    return (
        <Card className="p-8">
            <div className="flex p-10 mx-5 justify-center h-16 w-48">
            <img src={imageSrc} alt="noimgAvailable" />
            </div>
          <CardTitle >{gameName}</CardTitle>
          <CardDescription>{gameDescription}</CardDescription>
          {/* <Link to={gamePage}> */}
            <Button className="cursor-pointer" onClick={() => navigate(gamePage)} > PLAY NOW </Button>
          {/* </Link> */}
      </Card>
    )
  }
  
  export default MyCard