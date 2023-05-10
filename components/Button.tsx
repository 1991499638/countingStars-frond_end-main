interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  disabled?: boolean;
  absolute?: boolean;
}

function Button({ title, onClick, width, loading, padding, disabled }: Props) {
  return (
    <button
      className={`ease group relative z-30 box-border inline-flex ${
        width ? width : 'w-auto'
      } ${padding} cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-sky-400 to-violet-300 px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none`}
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>

      {loading ? 'Loading...' : title}
    </button>
  );
}

export default Button;
