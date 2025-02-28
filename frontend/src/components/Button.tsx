interface ButtonProps {
    valor?: string;
    nomeClasse?: string;
    id?: string;
    onClick?: () => void;
}

const Button = ({ id, valor, nomeClasse, onClick }: ButtonProps) => {
    return <input id={id} className={nomeClasse} type="button" value={valor} onClick={onClick} />;
}

export default Button