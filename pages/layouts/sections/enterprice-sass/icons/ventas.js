const Ventas = () => (
<img src="data:image/png;base64,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"/>
)

export default Ventas;