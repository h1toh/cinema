import { useCallback } from "react";

interface ScrollButtonProps {
    id: string;
    valor: string;
    nomeClasse: string;
    onClick?: () => void;
}

const ScrollButton = ({ id, nomeClasse, valor }: ScrollButtonProps) => {
    const scrollToElement = useCallback(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [id])
    return <input className={nomeClasse} type="button" value={valor} onClick={scrollToElement} />
}

export default ScrollButton;