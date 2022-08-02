# make create n="SomeName"
create:
	mkdir "$n"
	echo "import styles from './$n.module.css';\n\nexport const $n = (): JSX.Element => {return (<div></div>);};" > "$n/$n.tsx"
	echo "export interface $nProps {}" > "$n/$n.props.ts"
	touch "$n/$n.module.css"