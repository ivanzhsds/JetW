type BotaoProps = {
  title: string;
};

function Botao({title }: BotaoProps,) {

  return (
   <>
   <button >{title}</button>
   </>
  )
}

export default Botao
