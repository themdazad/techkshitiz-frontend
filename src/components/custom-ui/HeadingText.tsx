interface PropsType{
    text: String,
    style?: String,
}


export default function HeadingText( {text, style}:PropsType ) {
    return (
        <h1 className={`heading font-syne font-bold  ${style} text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-white mb-4 tracking-tight`}>
            {text}
        </h1>
    )
}
