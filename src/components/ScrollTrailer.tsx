import { useCallback } from "react";
import Button from "./Button";

interface ScrollProps {
    id: string;
}

const ScrollTrailer = ({ id }: ScrollProps) => {
    const scrollToElement = useCallback(() => { 
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [id])
    return <Button valor="Assistir trailer" nomeClasse="btnTrailer" onClick={scrollToElement} />
}

export default ScrollTrailer;