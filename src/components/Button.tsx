interface ButtonProps {
    valor: string;
    nomeClasse: string;
    onClick?: () => void;
}

const Button = ({ valor, nomeClasse, onClick }: ButtonProps) => {
    return <input className={nomeClasse} type="button" value={valor} onClick={onClick} />;
}

export default Button