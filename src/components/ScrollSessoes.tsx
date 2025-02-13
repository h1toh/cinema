import { useCallback } from "react";
import Button from "./Button";

interface ScrollProps {
    id: string;
}

const ScrollSessoes = ({ id }: ScrollProps) => {
    const scrollToElement = useCallback(() => { 
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [id])
    return <Button valor="Ver sessoes" nomeClasse="btnSessoes" onClick={scrollToElement} />
}

export default ScrollSessoes;